// =============================================================================
// composite.frag — Final cinematic grade pass
// -----------------------------------------------------------------------------
// Combines the lit scene with the bloom texture, then applies: chromatic
// aberration (radial), barrel-ish lens distortion, anamorphic-tinted bloom,
// film grain, vignette, ACES tonemap, contrast/saturation grade, and a subtle
// scanline shimmer for the "cockpit display" feel.
// =============================================================================
precision highp float;

#include ../lib/color.glsl
#include ../lib/noise.glsl

uniform sampler2D tDiffuse;   // scene
uniform sampler2D tBloom;     // blurred bright pass
uniform vec2 uResolution;
uniform float uTime;
uniform float uBloomStrength;
uniform float uChroma;
uniform float uVignette;
uniform float uGrain;
uniform float uExposure;
uniform float uWarp;          // ramps during hyperspace surprise

varying vec2 vUv;

void main() {
  vec2 uv = vUv;
  vec2 center = uv - 0.5;
  float r2 = dot(center, center);

  // Subtle lens distortion intensifies with the hyperspace warp event.
  float distort = 1.0 + (0.12 + uWarp * 0.6) * r2;
  vec2 duv = 0.5 + center * distort;

  // Radial chromatic aberration — stronger toward edges.
  float ca = (uChroma + uWarp * 2.5) * (0.002 + r2 * 0.02);
  vec2 dir = normalize(center + 1e-5);
  vec3 scene;
  scene.r = texture2D(tDiffuse, duv - dir * ca).r;
  scene.g = texture2D(tDiffuse, duv).g;
  scene.b = texture2D(tDiffuse, duv + dir * ca).b;

  // Bloom (anamorphic cool tint) added on top.
  vec3 bloom = texture2D(tBloom, duv).rgb;
  bloom *= vec3(0.85, 0.95, 1.15);
  vec3 color = scene + bloom * uBloomStrength;

  // Exposure + ACES filmic tonemap.
  color *= uExposure;
  color = acesFilmic(color);

  // Grade: lift shadows toward deep blue, gentle contrast & saturation.
  color = mix(color, color * color * (3.0 - 2.0 * color), 0.18); // s-curve
  color += vec3(0.0, 0.005, 0.02) * (1.0 - color);               // blue lift
  color = saturation(color, 1.12);

  // Vignette.
  float vig = smoothstep(0.95, 0.25, r2 * uVignette);
  color *= mix(1.0, vig, 0.85);

  // Film grain (animated).
  float g = hash13(vec3(gl_FragCoord.xy, fract(uTime))) - 0.5;
  color += g * uGrain;

  // Faint scanline shimmer (HUD-glass vibe).
  float scan = 0.985 + 0.015 * sin(uv.y * uResolution.y * 1.4 + uTime * 12.0);
  color *= scan;

  color = toSRGB(max(color, 0.0));
  gl_FragColor = vec4(color, 1.0);
}
