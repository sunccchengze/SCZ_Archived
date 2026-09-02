// =============================================================================
// PostPipeline.ts — hand-rolled post-processing chain (no EffectComposer)
// -----------------------------------------------------------------------------
// Passes, in order:
//   1. scene -> HDR float render target (sceneRT)
//   2. bright-pass threshold -> brightRT
//   3. multi-mip separable gaussian blur (H+V over several down-sampled RTs)
//      accumulated into a single bloom target -> wide, soft, cinematic glow
//   4. composite: scene + bloom + chromatic aberration + lens distort +
//      ACES tonemap + grade + vignette + grain + scanlines -> screen
// All RTs are half/quarter-res where possible for performance.
// =============================================================================
import * as THREE from "three";
import fsVert from "../shaders/post/fullscreen.vert";
import brightFrag from "../shaders/post/bright.frag";
import blurFrag from "../shaders/post/blur.frag";
import compositeFrag from "../shaders/post/composite.frag";

const MIP_COUNT = 5;

export class PostPipeline {
  renderer: THREE.WebGLRenderer;
  sceneRT: THREE.WebGLRenderTarget;
  private brightRT!: THREE.WebGLRenderTarget;
  private mipsA: THREE.WebGLRenderTarget[] = [];
  private mipsB: THREE.WebGLRenderTarget[] = [];

  private fsScene = new THREE.Scene();
  private fsCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  private quad: THREE.Mesh;

  private brightMat: THREE.ShaderMaterial;
  private blurMat: THREE.ShaderMaterial;
  private compositeMat: THREE.ShaderMaterial;
  private copyMat: THREE.ShaderMaterial; // reused additive-upsample material

  private width = 1;
  private height = 1;

  constructor(renderer: THREE.WebGLRenderer) {
    this.renderer = renderer;

    const rtOpts: THREE.RenderTargetOptions = {
      type: THREE.HalfFloatType,
      magFilter: THREE.LinearFilter,
      minFilter: THREE.LinearFilter,
      depthBuffer: true,
      stencilBuffer: false,
    };
    this.sceneRT = new THREE.WebGLRenderTarget(1, 1, rtOpts);

    this.brightMat = new THREE.ShaderMaterial({
      vertexShader: fsVert,
      fragmentShader: brightFrag,
      uniforms: {
        tDiffuse: { value: null },
        uThreshold: { value: 0.75 },
        uKnee: { value: 0.35 },
      },
      depthTest: false,
      depthWrite: false,
    });

    this.blurMat = new THREE.ShaderMaterial({
      vertexShader: fsVert,
      fragmentShader: blurFrag,
      uniforms: {
        tDiffuse: { value: null },
        uDirection: { value: new THREE.Vector2() },
      },
      depthTest: false,
      depthWrite: false,
    });

    this.compositeMat = new THREE.ShaderMaterial({
      vertexShader: fsVert,
      fragmentShader: compositeFrag,
      uniforms: {
        tDiffuse: { value: null },
        tBloom: { value: null },
        uResolution: { value: new THREE.Vector2() },
        uTime: { value: 0 },
        uBloomStrength: { value: 0.9 },
        uChroma: { value: 1.0 },
        uVignette: { value: 1.1 },
        uGrain: { value: 0.04 },
        uExposure: { value: 1.15 },
        uWarp: { value: 0.0 },
      },
      depthTest: false,
      depthWrite: false,
    });

    // Additive copy material used to upsample-accumulate bloom mips. Created
    // ONCE (never per-frame) to avoid GPU resource churn.
    this.copyMat = new THREE.ShaderMaterial({
      vertexShader: fsVert,
      fragmentShader: blurFrag,
      uniforms: {
        tDiffuse: { value: null },
        uDirection: { value: new THREE.Vector2(0, 0) },
      },
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      depthWrite: false,
    });

    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.brightMat);
    this.fsScene.add(this.quad);
  }

  setSize(w: number, h: number, pixelRatio: number) {
    this.width = Math.floor(w * pixelRatio);
    this.height = Math.floor(h * pixelRatio);
    this.sceneRT.setSize(this.width, this.height);

    const halfOpts: THREE.RenderTargetOptions = {
      type: THREE.HalfFloatType,
      magFilter: THREE.LinearFilter,
      minFilter: THREE.LinearFilter,
      depthBuffer: false,
    };
    this.brightRT?.dispose();
    this.brightRT = new THREE.WebGLRenderTarget(
      Math.max(1, this.width >> 1),
      Math.max(1, this.height >> 1),
      halfOpts
    );

    // mip chain
    for (const m of this.mipsA) m.dispose();
    for (const m of this.mipsB) m.dispose();
    this.mipsA = [];
    this.mipsB = [];
    for (let i = 0; i < MIP_COUNT; i++) {
      const div = 1 << (i + 1); // /2, /4, /8, ...
      const mw = Math.max(1, Math.floor(this.width / div));
      const mh = Math.max(1, Math.floor(this.height / div));
      this.mipsA.push(new THREE.WebGLRenderTarget(mw, mh, halfOpts));
      this.mipsB.push(new THREE.WebGLRenderTarget(mw, mh, halfOpts));
    }

    this.compositeMat.uniforms.uResolution.value.set(this.width, this.height);
  }

  private blit(mat: THREE.ShaderMaterial, target: THREE.WebGLRenderTarget | null) {
    this.quad.material = mat;
    this.renderer.setRenderTarget(target);
    this.renderer.render(this.fsScene, this.fsCamera);
  }

  // Run bloom + composite. `renderScene` draws the world into sceneRT.
  render(
    time: number,
    warp: number,
    renderScene: (target: THREE.WebGLRenderTarget) => void
  ) {
    // 1. scene -> sceneRT (caller renders world + overlays into it)
    renderScene(this.sceneRT);

    // 2. bright pass (scene -> brightRT, half res)
    this.brightMat.uniforms.tDiffuse.value = this.sceneRT.texture;
    this.blit(this.brightMat, this.brightRT);

    // 3. progressive downsample + blur through the mip chain
    let src: THREE.Texture = this.brightRT.texture;
    for (let i = 0; i < MIP_COUNT; i++) {
      const a = this.mipsA[i];
      const b = this.mipsB[i];
      const tw = 1 / a.width;
      const th = 1 / a.height;

      // horizontal
      this.blurMat.uniforms.tDiffuse.value = src;
      this.blurMat.uniforms.uDirection.value.set(tw, 0);
      this.blit(this.blurMat, b);
      // vertical
      this.blurMat.uniforms.tDiffuse.value = b.texture;
      this.blurMat.uniforms.uDirection.value.set(0, th);
      this.blit(this.blurMat, a);

      src = a.texture; // next mip blurs the already-blurred smaller image
    }

    // upsample-accumulate: additively blend every blurred mip into mipsB[0],
    // producing a wide, layered, cinematic bloom (sharp + soft halos combined).
    const prevAuto = this.renderer.autoClear;
    const prevClear = new THREE.Color();
    this.renderer.getClearColor(prevClear);
    this.renderer.setRenderTarget(this.mipsB[0]);
    this.renderer.setClearColor(0x000000, 1);
    this.renderer.clear();
    this.renderer.autoClear = false;
    for (let i = 0; i < MIP_COUNT; i++) {
      this.copyMat.uniforms.tDiffuse.value = this.mipsA[i].texture;
      this.quad.material = this.copyMat;
      this.renderer.render(this.fsScene, this.fsCamera);
    }
    this.renderer.autoClear = prevAuto;
    this.renderer.setClearColor(prevClear, 1);

    // 4. composite to screen
    this.compositeMat.uniforms.tDiffuse.value = this.sceneRT.texture;
    this.compositeMat.uniforms.tBloom.value = this.mipsB[0].texture;
    this.compositeMat.uniforms.uTime.value = time;
    this.compositeMat.uniforms.uWarp.value = warp;
    this.blit(this.compositeMat, null);

    this.renderer.setRenderTarget(null);
  }
}
