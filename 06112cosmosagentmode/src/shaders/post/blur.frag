// blur.frag — separable 9-tap gaussian blur (run H then V, multiple mips).
precision highp float;
uniform sampler2D tDiffuse;
uniform vec2 uDirection;   // (texelW,0) or (0,texelH)
varying vec2 vUv;

void main() {
  // Gaussian weights for a 9-tap kernel (sigma ~ 2.2).
  float w0 = 0.227027;
  float w1 = 0.1945946;
  float w2 = 0.1216216;
  float w3 = 0.054054;
  float w4 = 0.016216;

  vec3 col = texture2D(tDiffuse, vUv).rgb * w0;
  col += texture2D(tDiffuse, vUv + uDirection * 1.0).rgb * w1;
  col += texture2D(tDiffuse, vUv - uDirection * 1.0).rgb * w1;
  col += texture2D(tDiffuse, vUv + uDirection * 2.0).rgb * w2;
  col += texture2D(tDiffuse, vUv - uDirection * 2.0).rgb * w2;
  col += texture2D(tDiffuse, vUv + uDirection * 3.0).rgb * w3;
  col += texture2D(tDiffuse, vUv - uDirection * 3.0).rgb * w3;
  col += texture2D(tDiffuse, vUv + uDirection * 4.0).rgb * w4;
  col += texture2D(tDiffuse, vUv - uDirection * 4.0).rgb * w4;

  gl_FragColor = vec4(col, 1.0);
}
