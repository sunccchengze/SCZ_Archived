// =============================================================================
// blackhole.frag — Gravitationally-lensed black hole + accretion disk
// -----------------------------------------------------------------------------
// Rendered as a screen-space effect on a full-screen quad. For each pixel we
// build a view ray and integrate it through a simplified gravitational field.
// Light is bent toward the singularity each step (a weak-field geodesic
// approximation), producing the photon ring & the warped "Einstein ring" of
// the disk behind the hole — the Interstellar/Gargantua look.
//
// The accretion disk is a procedural, turbulent, differentially-rotating ring
// of blackbody-colored plasma with relativistic Doppler beaming (one side
// brighter & bluer as it rotates toward the viewer).
// =============================================================================
precision highp float;

#include ./lib/noise.glsl
#include ./lib/color.glsl

varying vec2 vUv;

uniform float uTime;
uniform vec2 uResolution;
uniform vec3 uCamPos;        // camera world position
uniform mat4 uCamToWorld;    // camera-to-world (rotation) for ray dirs
uniform vec3 uHolePos;       // black hole world position
uniform float uHoleRadius;   // event-horizon (Schwarzschild) radius
uniform float uDiskInner;    // inner disk radius
uniform float uDiskOuter;    // outer disk radius
uniform float uIntensity;    // master brightness (used by intro reveal)
uniform float uTanHalfFov;
uniform float uAspect;

const float PI = 3.14159265359;

// Procedural disk emission sampled in the hole's equatorial plane.
vec3 diskColor(vec3 p, vec3 rd) {
  // local polar coordinates in the equatorial (xz) plane of the hole
  vec3 local = p - uHolePos;
  float r = length(local.xz);
  float ang = atan(local.z, local.x);

  // radial profile: bright inner edge, fading outer
  float radial = smoothstep(uDiskInner, uDiskInner * 1.15, r) *
                 (1.0 - smoothstep(uDiskOuter * 0.7, uDiskOuter, r));

  // Keplerian differential rotation: inner material moves faster.
  float omega = 2.4 / pow(max(r, uDiskInner), 1.5);
  float swirl = ang + omega * uTime;

  // turbulent plasma texture along stretched spiral coordinates
  vec3 np = vec3(cos(swirl) * r, local.y * 6.0, sin(swirl) * r) * 0.5;
  float turb = fbm(np + vec3(0.0, uTime * 0.2, 0.0), 5, 2.0, 0.55);
  turb = turb * 0.5 + 0.5;
  float fil = ridged(np * 1.7, 4, 2.0, 0.5);

  float density = radial * (0.5 + 0.9 * turb) * (0.6 + 0.8 * fil);

  // temperature: hotter (bluer) toward the inner edge -> blackbody color
  float temp = mix(12000.0, 3200.0, smoothstep(uDiskInner, uDiskOuter, r));
  vec3 col = blackbody(temp);

  // Relativistic Doppler beaming: side rotating toward camera is brighter/bluer.
  vec3 vel = normalize(cross(vec3(0.0, 1.0, 0.0), normalize(local))); // orbital dir
  float beam = dot(vel, -rd);                 // approaching => positive
  float doppler = pow(clamp(0.6 + 0.7 * beam, 0.0, 2.0), 3.0);
  col = mix(col, col * vec3(0.7, 0.85, 1.4), clamp(beam, 0.0, 1.0)); // blue-shift
  col *= doppler;

  return col * density * 5.0;
}

void main() {
  // Build a primary ray through this pixel from camera basis.
  vec2 ndc = (vUv * 2.0 - 1.0);
  vec3 rdView = normalize(vec3(ndc.x * uTanHalfFov * uAspect,
                               ndc.y * uTanHalfFov,
                               -1.0));
  vec3 rd = normalize((uCamToWorld * vec4(rdView, 0.0)).xyz);
  vec3 ro = uCamPos;

  // March the ray, bending it toward the hole (weak-field geodesic integration).
  vec3 pos = ro;
  vec3 dir = rd;
  vec3 color = vec3(0.0);
  float alpha = 0.0;

  const int STEPS = 160;
  float stepLen = (uDiskOuter * 3.2) / float(STEPS);

  bool captured = false;

  for (int i = 0; i < STEPS; i++) {
    vec3 toHole = uHolePos - pos;
    float dist = length(toHole);
    vec3 grav = toHole / dist;

    // Inverse-square light bending. Constant tuned for a dramatic-but-readable
    // photon ring. (Not a literal GR solve — a stable, art-directed analogue.)
    float bend = (uHoleRadius * uHoleRadius) / (dist * dist) * 1.65;
    dir = normalize(dir + grav * bend * stepLen);

    // Event horizon capture: ray ends in blackness (plus faint photon ring).
    if (dist < uHoleRadius) { captured = true; break; }

    // Disk plane crossing test (thin disk at hole's y level).
    float prevY = pos.y - uHolePos.y;
    vec3 nextPos = pos + dir * stepLen;
    float nextY = nextPos.y - uHolePos.y;
    if (prevY * nextY < 0.0) {
      // interpolate exact crossing point
      float tcross = prevY / (prevY - nextY);
      vec3 hit = mix(pos, nextPos, tcross);
      float rHit = length((hit - uHolePos).xz);
      if (rHit > uDiskInner && rHit < uDiskOuter) {
        vec3 dc = diskColor(hit, dir);
        // gravitational redshift toward inner edge dims emission slightly
        float gz = clamp((rHit - uDiskInner) / (uDiskOuter - uDiskInner), 0.0, 1.0);
        dc *= mix(0.65, 1.0, gz);
        color += dc * (1.0 - alpha);
        alpha = min(1.0, alpha + 0.85);
      }
    }

    pos = nextPos;
    if (alpha >= 0.99) break;
  }

  // Photon ring: thin bright halo right at the lensing edge.
  float impact = length(cross(rd, normalize(uHolePos - ro))) * length(uHolePos - ro);
  float ring = smoothstep(uHoleRadius * 1.55, uHoleRadius * 1.5, impact) *
               smoothstep(uHoleRadius * 1.38, uHoleRadius * 1.5, impact);
  color += ring * vec3(1.0, 0.85, 0.55) * 2.2 * (captured ? 1.0 : 0.6);

  color *= uIntensity;
  float outA = max(alpha, ring) * clamp(uIntensity, 0.0, 1.0);
  if (outA < 0.003) discard;

  gl_FragColor = vec4(color, outA);
}
