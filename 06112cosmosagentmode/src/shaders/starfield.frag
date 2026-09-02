// starfield.frag — crisp distant stars.
precision highp float;
varying vec3 vColor;
varying float vTwinkle;

void main() {
  vec2 uv = gl_PointCoord * 2.0 - 1.0;
  float d = dot(uv, uv);
  if (d > 1.0) discard;
  float core = exp(-d * 7.0);
  float halo = exp(-d * 2.0) * 0.3;
  float i = (core + halo) * vTwinkle;
  gl_FragColor = vec4(vColor * i, i);
}
