// =============================================================================
// planet.frag — Procedural banded gas giant with storms, terminator & rim glow
// -----------------------------------------------------------------------------
// Latitude-banded fbm produces Jupiter-like cloud belts; domain-warp adds
// turbulent storm vortices. Lit by the system star with a soft terminator and
// an atmospheric Fresnel rim. No textures.
// =============================================================================
precision highp float;

#include ./lib/noise.glsl

varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec3 vLocalPos;

uniform float uTime;
uniform vec3 uLightPos;
uniform vec3 uColorLow;
uniform vec3 uColorHigh;
uniform vec3 uAtmo;
uniform float uSeed;

void main() {
  vec3 n = normalize(vNormal);
  vec3 sp = normalize(vLocalPos);

  // latitude bands + drifting turbulence
  float lat = sp.y;
  vec3 q = sp * 3.0 + vec3(uSeed);
  float warp = fbm(q + vec3(uTime * 0.02, 0.0, 0.0), 4, 2.0, 0.5);
  float bands = sin((lat * 9.0) + warp * 2.4 + uTime * 0.05);
  float storms = warpedFbm(sp * 4.0 + vec3(uSeed, uTime * 0.03, 0.0), uTime);

  float t = bands * 0.5 + 0.5;
  t = mix(t, storms, 0.35);
  vec3 surface = mix(uColorLow, uColorHigh, smoothstep(0.2, 0.8, t));

  // lighting
  vec3 L = normalize(uLightPos - vWorldPos);
  float ndl = dot(n, L);
  float lambert = smoothstep(-0.12, 0.35, ndl);   // soft terminator
  vec3 V = normalize(cameraPosition - vWorldPos);

  // atmospheric Fresnel rim, brightest on the lit limb
  float fres = pow(1.0 - max(dot(n, V), 0.0), 3.0);
  vec3 rim = uAtmo * fres * (0.3 + 1.4 * max(ndl, 0.0));

  vec3 color = surface * (0.06 + 0.94 * lambert) + rim;
  // gentle specular sheen on cloud tops
  vec3 H = normalize(L + V);
  color += vec3(0.4) * pow(max(dot(n, H), 0.0), 30.0) * lambert * 0.15;

  gl_FragColor = vec4(color, 1.0);
}
