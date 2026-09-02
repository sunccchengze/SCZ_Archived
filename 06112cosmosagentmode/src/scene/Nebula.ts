// =============================================================================
// Nebula.ts — volumetric emission nebula (raymarched inside a back-face sphere).
// We render the BackSide of a big sphere so the camera can fly into it; the
// fragment shader does the actual volume integration.
// =============================================================================
import * as THREE from "three";
import vert from "../shaders/nebula.vert";
import frag from "../shaders/nebula.frag";

export class Nebula {
  mesh: THREE.Mesh;
  material: THREE.ShaderMaterial;
  private radius: number;

  constructor(center: THREE.Vector3, radius = 320) {
    this.radius = radius;
    const geo = new THREE.SphereGeometry(radius, 48, 48);

    this.material = new THREE.ShaderMaterial({
      vertexShader: vert,
      fragmentShader: frag,
      uniforms: {
        uTime: { value: 0 },
        uCameraPos: { value: new THREE.Vector3() },
        uRadius: { value: radius },
        uColorA: { value: new THREE.Color(0xff3a5e).multiplyScalar(1.0) }, // H-alpha red
        uColorB: { value: new THREE.Color(0x36e0c8).multiplyScalar(1.0) }, // O-III teal
        uColorDust: { value: new THREE.Color(0x2a1840) },                  // cold dust violet
        uDensity: { value: 1.0 },
        uCoreLight: { value: new THREE.Vector3(0, 0, 0) },
        uQuality: { value: 64 },
      },
      side: THREE.BackSide,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.mesh = new THREE.Mesh(geo, this.material);
    this.mesh.position.copy(center);
    this.mesh.frustumCulled = false;
  }

  setQuality(steps: number) {
    this.material.uniforms.uQuality.value = steps;
  }

  update(t: number, cameraPos: THREE.Vector3) {
    this.material.uniforms.uTime.value = t;
    // shader works in nebula-local space; pass camera relative to mesh center
    this.material.uniforms.uCameraPos.value.copy(cameraPos).sub(this.mesh.position);
  }
}
