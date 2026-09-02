// =============================================================================
// Starfield.ts — distant background stars on a huge inverted shell.
// ~30k points with blackbody-distributed colors. Provides depth parallax.
// =============================================================================
import * as THREE from "three";
import vert from "../shaders/starfield.vert";
import frag from "../shaders/starfield.frag";

// Approximate blackbody color in JS for per-star tint (matches GLSL helper).
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

export class Starfield {
  points: THREE.Points;
  material: THREE.ShaderMaterial;

  constructor(count = 30000, radius = 1800) {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const size = new Float32Array(count);
    const seed = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // uniform distribution on a sphere shell
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = radius * (0.85 + Math.random() * 0.15);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.cos(phi);
      pos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);

      // realistic stellar temperature distribution (most are cool, few hot)
      const roll = Math.random();
      const temp = roll < 0.76 ? 3000 + Math.random() * 2500
        : roll < 0.95 ? 5500 + Math.random() * 2500
        : 9000 + Math.random() * 18000;
      const c = blackbodyJS(temp);
      col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;

      size[i] = 0.6 + Math.pow(Math.random(), 6) * 5.0; // few big bright stars
      seed[i] = Math.random();
    }

    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    geo.setAttribute("aColor", new THREE.BufferAttribute(col, 3));
    geo.setAttribute("aSize", new THREE.BufferAttribute(size, 1));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(seed, 1));

    this.material = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uTime: { value: 0 },
        uPixelRatio: { value: Math.min(window.devicePixelRatio, 2) },
      },
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.points = new THREE.Points(geo, this.material);
    this.points.frustumCulled = false;
  }

  get count() {
    return (this.points.geometry.getAttribute("position") as THREE.BufferAttribute).count;
  }

  update(t: number) {
    this.material.uniforms.uTime.value = t;
  }
}
