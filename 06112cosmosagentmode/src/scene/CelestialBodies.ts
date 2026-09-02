// =============================================================================
// CelestialBodies.ts — the system star + orbiting procedural gas giants.
// Each body is a real mesh with a hand-written shader; planets orbit the star,
// rotate on axis, and act as focusable targets for the camera director.
// =============================================================================
import * as THREE from "three";
import sunVert from "../shaders/sun.vert";
import sunFrag from "../shaders/sun.frag";
import planetVert from "../shaders/planet.vert";
import planetFrag from "../shaders/planet.frag";
import type { FocusTarget } from "../camera/CameraDirector";

interface PlanetDef {
  name: string;
  orbit: number;     // orbital radius
  radius: number;
  speed: number;     // orbital angular speed
  phase: number;
  spin: number;
  colorLow: number;
  colorHigh: number;
  atmo: number;
  tilt: number;
}

export class CelestialBodies {
  group = new THREE.Group();
  sun: THREE.Mesh;
  sunLight: THREE.PointLight;
  private sunMat: THREE.ShaderMaterial;
  private planets: { mesh: THREE.Mesh; def: PlanetDef; mat: THREE.ShaderMaterial; pivot: THREE.Group }[] = [];
  private starWorldPos = new THREE.Vector3();

  constructor(center: THREE.Vector3) {
    this.group.position.copy(center);

    // ---- Star ---------------------------------------------------------------
    const sunRadius = 14;
    this.sunMat = new THREE.ShaderMaterial({
      vertexShader: sunVert,
      fragmentShader: sunFrag,
      uniforms: {
        uTime: { value: 0 },
        uTempK: { value: 6400 },
        uIntensity: { value: 1.4 },
      },
    });
    this.sun = new THREE.Mesh(new THREE.SphereGeometry(sunRadius, 96, 96), this.sunMat);
    this.group.add(this.sun);

    this.sunLight = new THREE.PointLight(0xfff0dd, 3.0, 0, 1.4);
    this.group.add(this.sunLight);

    // ---- Planets ------------------------------------------------------------
    const defs: PlanetDef[] = [
      { name: "AURELIA",  orbit: 48,  radius: 4.5, speed: 0.10, phase: 0.0, spin: 0.30, colorLow: 0x8a4b2b, colorHigh: 0xe8b878, atmo: 0xffd9a0, tilt: 0.2 },
      { name: "CYANE",    orbit: 78,  radius: 7.0, speed: 0.06, phase: 1.9, spin: 0.22, colorLow: 0x123b66, colorHigh: 0x5fb6e8, atmo: 0x9fe0ff, tilt: -0.35 },
      { name: "VERDANT",  orbit: 112, radius: 5.5, speed: 0.04, phase: 3.6, spin: 0.18, colorLow: 0x1d4d33, colorHigh: 0x76d49a, atmo: 0xb8ffd6, tilt: 0.5 },
      { name: "OBSIDIA",  orbit: 150, radius: 9.0, speed: 0.025, phase: 5.1, spin: 0.12, colorLow: 0x3a1d52, colorHigh: 0xb06be0, atmo: 0xe0b0ff, tilt: -0.18 },
    ];

    for (const def of defs) {
      const mat = new THREE.ShaderMaterial({
        vertexShader: planetVert,
        fragmentShader: planetFrag,
        uniforms: {
          uTime: { value: 0 },
          uLightPos: { value: new THREE.Vector3() },
          uColorLow: { value: new THREE.Color(def.colorLow) },
          uColorHigh: { value: new THREE.Color(def.colorHigh) },
          uAtmo: { value: new THREE.Color(def.atmo) },
          uSeed: { value: Math.random() * 100 },
        },
      });
      const mesh = new THREE.Mesh(new THREE.SphereGeometry(def.radius, 64, 64), mat);
      mesh.rotation.z = def.tilt;

      const pivot = new THREE.Group();
      pivot.add(mesh);
      mesh.position.set(def.orbit, 0, 0);
      this.group.add(pivot);

      // a thin ring for the largest planet (Saturn-like) — extra wow
      if (def.name === "OBSIDIA") {
        const ringGeo = new THREE.RingGeometry(def.radius * 1.4, def.radius * 2.3, 96);
        const ringMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color(def.atmo),
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.22,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2 + 0.3;
        mesh.add(ring);
      }

      this.planets.push({ mesh, def, mat, pivot });
    }
  }

  get focusTargets(): FocusTarget[] {
    const targets: FocusTarget[] = [];
    this.sun.getWorldPosition(this.starWorldPos);
    targets.push({ name: "STAR HELIOS-9", position: this.starWorldPos.clone(), radius: 14 });
    for (const p of this.planets) {
      const wp = new THREE.Vector3();
      p.mesh.getWorldPosition(wp);
      targets.push({ name: p.def.name, position: wp, radius: p.def.radius });
    }
    return targets;
  }

  update(t: number) {
    this.sunMat.uniforms.uTime.value = t;
    this.sun.getWorldPosition(this.starWorldPos);

    for (const p of this.planets) {
      p.pivot.rotation.y = t * p.def.speed + p.def.phase;
      p.mesh.rotation.y = t * p.def.spin;
      p.mat.uniforms.uTime.value = t;
      p.mat.uniforms.uLightPos.value.copy(this.starWorldPos);
    }
  }
}
