// =============================================================================
// nebula.frag — Volumetric raymarched emission nebula
// -----------------------------------------------------------------------------
// Renders the interior of a large sphere as a participating medium. We march a
// ray from the camera through the sphere, sampling a domain-warped fbm density
// field. Color is driven by a two-channel ionization model (H-alpha red &
// O-III teal) plus dust extinction, then accumulated front-to-back with
// emission/absorption. This is a genuine volumetric — no flat sprites.
// =============================================================================
precision highp float;

#include ./lib/noise.glsl
#include ./lib/color.glsl

varying vec3 vWorldPos;
varying vec3 vViewDir;

uniform float uTime;
uniform vec3 uCameraPos;
uniform float uRadius;       // outer radius of the nebula shell
uniform vec3 uColorA;        // ionized hydrogen (H-alpha) tint
uniform vec3 uColorB;        // doubly-ionized oxygen (O-III) tint
uniform vec3 uColorDust;     // cold dust tint
uniform float uDensity;      // global density multiplier
uniform vec3 uCoreLight;     // position of internal illuminating star cluster
uniform float uQuality;      // step count scaler (perf control)

// Ray-sphere intersection (returns near/far t). x<y => hit.
vec2 raySphere(vec3 ro, vec3 rd, float r) {
  float b = dot(ro, rd);
  float c = dot(ro, ro) - r * r;
  float h = b * b - c;
  if (h < 0.0) return vec2(1.0, -1.0);
  h = sqrt(h);
  return vec2(-b - h, -b + h);
}

// Density field: warped fbm carved by ridged filaments, falling off at edges.
float sampleDensity(vec3 p) {
  vec3 sp = p / uRadius;
  float edge = smoothstep(1.0, 0.35, length(sp));   // hollow toward the rim
  float t = uTime * 0.06;

  float base = warpedFbm(sp * 1.6 + vec3(0.0, 0.0, t * 0.5), uTime);
  float fil = ridged(sp * 3.1 + vec3(t, -t * 0.4, t * 0.7), 5, 2.1, 0.55);

  float d = base * 0.6 + fil * 0.7 - 0.35;
  d = max(d, 0.0);
  d *= edge;
  return d * uDensity;
}

void main() {
  vec3 ro = uCameraPos;
  vec3 rd = normalize(vViewDir);

  vec2 t = raySphere(ro, rd, uRadius);
  if (t.x > t.y) discard;

  float tStart = max(t.x, 0.0);
  float tEnd = t.y;

  int steps = int(clamp(uQuality, 24.0, 96.0));
  float fSteps = float(steps);
  float segLen = (tEnd - tStart) / fSteps;

  // Dithered start offset removes banding artifacts on cheap step counts.
  float dither = hash13(vec3(gl_FragCoord.xy, uTime));
  float tCur = tStart + segLen * dither;

  vec3 accumColor = vec3(0.0);
  float transmittance = 1.0;

  for (int i = 0; i < 96; i++) {
    if (i >= steps) break;
    vec3 pos = ro + rd * tCur;

    float dens = sampleDensity(pos);
    if (dens > 0.001) {
      // Ionization gradient: hotter (O-III teal) near the core light source,
      // cooler (H-alpha red) and dustier at the periphery.
      float distToCore = length(pos - uCoreLight) / uRadius;
      float ionize = exp(-distToCore * 2.2);

      vec3 emit = mix(uColorA, uColorB, ionize);
      emit = mix(uColorDust, emit, smoothstep(0.0, 0.25, dens)); // dust in thin gas
      emit *= (0.4 + 1.6 * ionize);

      // Cheap single-scatter lighting: density gradient toward the core star.
      float lightDens = sampleDensity(pos + normalize(uCoreLight - pos) * uRadius * 0.06);
      float shadow = exp(-lightDens * 3.0);
      emit *= (0.25 + 0.75 * shadow);

      float a = 1.0 - exp(-dens * segLen * 0.9);
      accumColor += transmittance * emit * a;
      transmittance *= (1.0 - a);
      if (transmittance < 0.01) break;
    }
    tCur += segLen;
  }

  // Subtle additive star-glow halo from the embedded cluster.
  float core = max(0.0, dot(rd, normalize(uCoreLight - ro)));
  accumColor += pow(core, 220.0) * uColorB * 2.0;

  float alpha = 1.0 - transmittance;
  if (alpha < 0.004) discard;

  gl_FragColor = vec4(accumColor, alpha);
}
