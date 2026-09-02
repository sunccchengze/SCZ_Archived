// =============================================================================
// sun.frag — Procedural star: granulation, sunspots, limb darkening, corona
// -----------------------------------------------------------------------------
// Animated fbm convection cells modulate a blackbody-tinted surface; ridged
// noise carves cooler sunspots. Limb darkening + a view-dependent Fresnel
// corona give it real stellar volume. The geometry is slightly larger than the
// "light" so bloom turns the limb into a blinding glow.
// =============================================================================
precision highp float;

#include ./lib/noise.glsl
#include ./lib/color.glsl

varying vec3 vLocalPos;
varying vec3 vNormal;
varying vec3 vWorldPos;

uniform float uTime;
uniform float uTempK;
uniform float uIntensity;

void main() {
  vec3 sp = normalize(vLocalPos);

  // boiling convection granulation
  float gran = fbm(sp * 6.0 + vec3(0.0, uTime * 0.25, 0.0), 5, 2.2, 0.55);
  float fine = fbm(sp * 16.0 - vec3(uTime * 0.15), 4, 2.0, 0.5);
  float surface = gran * 0.7 + fine * 0.3;

  // sunspots: ridged minima
  float spots = ridged(sp * 3.0 + vec3(uTime * 0.02), 4, 2.0, 0.5);
  float spotMask = smoothstep(0.75, 0.95, spots);

  vec3 base = blackbody(uTempK);
  vec3 hot = blackbody(uTempK + 4000.0);
  vec3 col = mix(base, hot, smoothstep(0.2, 0.9, surface));
  col = mix(col, base * 0.25, spotMask);            // darken spots

  // limb darkening + corona Fresnel
  vec3 V = normalize(cameraPosition - vWorldPos);
  float ndv = max(dot(normalize(vNormal), V), 0.0);
  float limb = pow(ndv, 0.45);
  vec3 corona = base * pow(1.0 - ndv, 2.0) * 2.5;

  col = col * (0.7 + 0.6 * surface) * limb + corona;
  col *= uIntensity;

  gl_FragColor = vec4(col, 1.0);
}
