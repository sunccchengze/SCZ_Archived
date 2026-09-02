// =============================================================================
// Galaxy.ts — animated spiral galaxy particle system (>50k stars)
// -----------------------------------------------------------------------------
// Stars are scattered along logarithmic spiral arms with a central bulge.
// Per-star attributes (radius, arm phase, blackbody color, size) drive the
// GLSL animation (differential rotation + curl-noise turbulence). This is the
// 30-second-stare focal point, alongside the black hole at the core.
// =============================================================================
import * as THREE from "three";
import vert from "../shaders/galaxy.vert";
import frag from "../shaders/galaxy.frag";

function blackbodyJS(tempK: number): THREE.Color {
  const t = THREE.MathUtils.clamp(tempK, 1000, 40000) / 100;
  let r, g, b;
  if (t <= 66) r = 1;
  else r = THREE.MathUtils.clamp(1.292936 * Math.pow(t - 60, -0.1332047), 0, 1);
  if (t <= 66) g = THREE.MathUtils.clamp(0.3900816 * Math.log(t) - 0.6318414, 0, 1);
  else g = THREE.MathUtils.clamp(1.1298909 * Math.pow(t - 60, -0.0755148), 0, 1);
  if (t >= 66) b = 1;
  else if (t <= 19) b = 0;
  else b = THREE.MathUtils.clamp(0.5432068 * Math.log(t - 10) - 1.1962541, 0, 1);
  return new THREE.Color(r, g, b);
}

export interface GalaxyOptions {
  count: number;
  arms: number;
  radius: number;
  spin: number;       // how tightly arms wind
  thickness: number;
}

export class Galaxy {
  points: THREE.Points;
  material: THREE.ShaderMaterial;
  readonly starCount: number;

  constructor(opts: Partial<GalaxyOptions> = {}) {
    const o: GalaxyOptions = {
      count: 60000,
      arms: 4,
      radius: 130,
      spin: 1.15,
      thickness: 5,
      ...opts,
    };
    this.starCount = o.count;

    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(o.count * 3);
    const col = new Float32Array(o.count * 3);
    const size = new Float32Array(o.count);
    const seed = new Float32Array(o.count);
    const radiusA = new Float32Array(o.count);
    const armA = new Float32Array(o.count);

    const coreColor = blackbodyJS(7000);    // warm yellow-white bulge
    const armColorHot = blackbodyJS(15000);  // blue young stars in arms
    const armColorCool = blackbodyJS(4200);  // reddish older population

    for (let i = 0; i < o.count; i++) {
      // bias toward center => dense bulge, sparse rim
      const rNorm = Math.pow(Math.random(), 1.7);
      const r = rNorm * o.radius + 2;

      // assign to an arm with angular scatter that grows outward
      const arm = i % o.arms;
      const branchBase = (arm / o.arms) * Math.PI * 2;
      const spinAngle = r * o.spin * 0.03;

      // radial scatter (tighter near arm centerline closer in)
      const scatter = (1 - rNorm) * 0.3 + 0.08;
      const ox = (Math.random() - 0.5) * r * scatter;
      const oz = (Math.random() - 0.5) * r * scatter;
      const oy = (Math.random() - 0.5) * o.thickness * (0.4 + (1 - rNorm));

      const angle = branchBase + spinAngle;
      const x = Math.cos(angle) * r + ox;
      const z = Math.sin(angle) * r + oz;

      pos[i * 3] = x;
      pos[i * 3 + 1] = oy;
      pos[i * 3 + 2] = z;

      radiusA[i] = r;
      armA[i] = branchBase;
      seed[i] = Math.random();

      // color blend: bulge warm, arms a mix of hot blue & cool red
      let c: THREE.Color;
      if (rNorm < 0.18) {
        c = coreColor.clone();
      } else {
        const young = Math.random() < 0.5;
        c = (young ? armColorHot : armColorCool).clone();
      }
      // dust reddening toward the plane mid (subtle)
      c.multiplyScalar(0.75 + Math.random() * 0.5);
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;

      // a handful of giant bright stars
      size[i] = 0.7 + Math.pow(Math.random(), 7) * 6.0 + (rNorm < 0.1 ? 1.5 : 0);
    }

    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aColor", new THREE.BufferAttribute(col, 3));
    geo.setAttribute("aSize", new THREE.BufferAttribute(size, 1));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));
    geo.setAttribute("aRadius", new THREE.BufferAttribute(radiusA, 1));
    geo.setAttribute("aArm", new THREE.BufferAttribute(armA, 1));

    this.material = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
        uSizeScale: { value: 1.0 },
        uTwinkle: { value: 1.0 },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.points = new THREE.Points(geo, this.material);
    this.points.frustumCulled = false;
    // tilt the disk for a more dramatic cinematic angle
    this.points.rotation.x = -0.42;
    this.points.rotation.z = 0.12;
  }

  update(t: number, hyper: number) {
    this.material.uniforms.uTime.value = t;
    // streak/elongate during hyperspace
    this.material.uniforms.uSizeScale.value = 1.0 + hyper * 2.5;
    this.material.uniforms.uTwinkle.value = 1.0 - hyper * 0.8;
  }
}
