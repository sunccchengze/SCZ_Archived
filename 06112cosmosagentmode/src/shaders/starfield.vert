// starfield.vert — distant background stars on a large shell, with parallax.
attribute float aSize;
attribute float aSeed;
attribute vec3 aColor;

uniform float uTime;
uniform float uPixelRatio;

varying vec3 vColor;
varying float vTwinkle;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vColor = aColor;
  // slow, irregular twinkle
  vTwinkle = 0.6 + 0.4 * sin(uTime * (0.8 + aSeed * 2.0) + aSeed * 50.0);
  gl_PointSize = aSize * uPixelRatio * (300.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
