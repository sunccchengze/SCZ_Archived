// galaxy.frag — soft additive star sprite with airy diffraction-ish falloff.
precision highp float;

varying vec3 vColor;
varying float vBright;

void main() {
  vec2 uv = gl_PointCoord * 2.0 - 1.0;
  float d = dot(uv, uv);
  if (d > 1.0) discard;

  // Tight core + wide soft halo (sum of two gaussians) reads as a real star.
  float core = exp(-d * 9.0);
  float halo = exp(-d * 2.2) * 0.45;
  // faint cross-flare along axes for that telescope-diffraction sparkle
  float flare = (exp(-abs(uv.x) * 16.0) + exp(-abs(uv.y) * 16.0)) * 0.12 * (1.0 - d);

  float intensity = (core + halo + flare) * vBright;
  vec3 col = vColor * intensity;
  gl_FragColor = vec4(col, intensity);
}
