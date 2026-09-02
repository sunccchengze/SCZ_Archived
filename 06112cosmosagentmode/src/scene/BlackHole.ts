// =============================================================================
// BlackHole.ts — screen-space lensed black hole rendered as a transparent
// full-screen quad composited over the scene. Sits at the galactic core.
// =============================================================================
import * as THREE from "three";
import vert from "../shaders/blackhole.vert";
import frag from "../shaders/blackhole.frag";

export class BlackHole {
  scene = new THREE.Scene();        // dedicated overlay scene
  private quad: THREE.Mesh;
  private orthoCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  material: THREE.ShaderMaterial;
  position: THREE.Vector3;

  constructor(position: THREE.Vector3) {
    this.position = position.clone();
    this.material = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2() },
        uCamPos: { value: new THREE.Vector3() },
        uCamToWorld: { value: new THREE.Matrix4() },
        uHolePos: { value: this.position },
        uHoleRadius: { value: 9.0 },
        uDiskInner: { value: 14.0 },
        uDiskOuter: { value: 46.0 },
        uIntensity: { value: 1.0 },
        uTanHalfFov: { value: Math.tan(THREE.MathUtils.degToRad(55) * 0.5) },
        uAspect: { value: 1.0 },
      },
      transparent: true,
      depthWrite: false,
      depthTest: false,
      blending: THREE.NormalBlending,
    });

    this.quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this.material);
    this.quad.frustumCulled = false;
    this.scene.add(this.quad);
  }

  resize(w: number, h: number) {
    this.material.uniforms.uResolution.value.set(w, h);
    this.material.uniforms.uAspect.value = w / h;
  }

  update(t: number, camera: THREE.PerspectiveCamera, intensity: number) {
    const u = this.material.uniforms;
    u.uTime.value = t;
    u.uCamPos.value.copy(camera.position);
    camera.updateMatrixWorld();
    // camera-to-world rotation only (translation handled separately)
    u.uCamToWorld.value.copy(camera.matrixWorld);
    u.uTanHalfFov.value = Math.tan(THREE.MathUtils.degToRad(camera.fov) * 0.5);
    u.uIntensity.value = intensity;
  }

  render(renderer: THREE.WebGLRenderer) {
    // The quad vertices are already in clip space (gl_Position = pos.xy).
    // Render with an identity ortho camera so nothing re-projects them.
    renderer.render(this.scene, this.orthoCam);
  }
}
