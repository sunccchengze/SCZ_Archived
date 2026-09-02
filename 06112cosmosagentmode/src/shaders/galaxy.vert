// =============================================================================
// galaxy.vert — Spiral galaxy particle system (>50k stars)
// -----------------------------------------------------------------------------
// Each particle is placed on a logarithmic spiral arm at init (from JS). Here
// we animate differential rotation (inner stars orbit faster) and add a small
// curl-noise turbulence so the arms breathe. Color/size are derived from a
// per-particle "stellar class" attribute mapped through blackbody temps in JS.
// =============================================================================
#include ./lib/noise.glsl

attribute float aSize;
attribute float aSeed;        // per-star random
attribute float aRadius;      // distance from galactic center
attribute vec3 aColor;        // precomputed blackbody color
attribute float aArm;         // spiral phase offset

uniform float uTime;
uniform float uPixelRatio;
uniform float uSizeScale;
uniform float uTwinkle;

varying vec3 vColor;
varying float vBright;

void main() {
  vec3 p = position;

  // Differential (Keplerian-ish) rotation about Y. Inner radii spin faster,
  // which is what winds the spiral arms over time.
  float r = max(aRadius, 0.001);
  float omega = 0.18 / pow(r * 0.06 + 0.6, 0.9);
  float ang = omega * uTime;
  float ca = cos(ang), sa = sin(ang);
  vec3 rp = vec3(ca * p.x - sa * p.z, p.y, sa * p.x + ca * p.z);

  // Curl-noise turbulence — gives the arms a living, fluid shimmer.
  vec3 turb = curlNoise(rp * 0.04 + vec3(0.0, uTime * 0.03, aSeed));
  rp += turb * (0.6 + r * 0.02);

  vec4 mvPosition = modelViewMatrix * vec4(rp, 1.0);

  // Twinkle: per-star brightness oscillation, phased by seed.
  float tw = 0.7 + 0.3 * sin(uTime * (1.5 + aSeed * 4.0) + aSeed * 100.0);
  vBright = mix(1.0, tw, uTwinkle);

  vColor = aColor;
  gl_PointSize = aSize * uSizeScale * uPixelRatio * (180.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
