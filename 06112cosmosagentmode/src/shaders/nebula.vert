// Nebula vertex shader — passes view ray for raymarched volume rendering.
varying vec3 vWorldPos;
varying vec3 vViewDir;

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  vViewDir = worldPos.xyz - cameraPosition;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
