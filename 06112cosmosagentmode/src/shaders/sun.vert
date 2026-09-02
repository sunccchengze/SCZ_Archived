// sun.vert — pass position for surface convection + view-dependent corona.
varying vec3 vLocalPos;
varying vec3 vNormal;
varying vec3 vWorldPos;
void main() {
  vLocalPos = position;
  vNormal = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorldPos = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
