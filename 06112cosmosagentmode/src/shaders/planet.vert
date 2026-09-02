// planet.vert — gas-giant surface; passes normal + world pos for lighting.
varying vec3 vNormal;
varying vec3 vWorldPos;
varying vec3 vLocalPos;

void main() {
  vLocalPos = position;
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
