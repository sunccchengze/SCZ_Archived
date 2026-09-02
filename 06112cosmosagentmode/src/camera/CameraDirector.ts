// =============================================================================
// CameraDirector.ts — Cinematic camera language (not OrbitControls)
// -----------------------------------------------------------------------------
// Implements a director that smoothly drives the camera with:
//   • critically-damped spring interpolation for position & look-at,
//   • lazy mouse "look" parallax (subtle hand-held feel),
//   • automatic dolly/orbit moves when focusing a celestial body,
//   • an idle "drift" mode that floats the camera along a slow bezier path,
//   • procedural handheld micro-shake + breathing for organic motion,
//   • a hyperspace lunge used by the surprise event.
// =============================================================================
import * as THREE from "three";

export interface FocusTarget {
  name: string;
  position: THREE.Vector3;
  radius: number;
}

// Critically-damped spring (Game Programming Gems 4, Ryan Juckett).
function springScalar(
  cur: number,
  curVel: { v: number },
  target: number,
  omega: number,
  dt: number
): number {
  const x = cur - target;
  const exp = Math.exp(-omega * dt);
  const temp = (curVel.v + omega * x) * dt;
  curVel.v = (curVel.v - omega * temp) * exp;
  return target + (x + temp) * exp;
}

export class CameraDirector {
  camera: THREE.PerspectiveCamera;

  // smoothed state
  private posVel = new THREE.Vector3();
  private lookVel = new THREE.Vector3();
  private desiredPos = new THREE.Vector3();
  private desiredLook = new THREE.Vector3();
  private curLook = new THREE.Vector3();

  // input
  private mouse = new THREE.Vector2();
  private mouseTarget = new THREE.Vector2();
  private scrollDist = 0; // user dolly offset

  // modes
  mode: "drift" | "orbit" | "approach" = "drift";
  private focus: FocusTarget | null = null;
  private orbitAngle = 0;
  private orbitSpeed = 0.08;
  private orbitRadiusMul = 4.0;

  // drift path
  private driftT = 0;
  private driftPoints: THREE.Vector3[] = [];

  // shake / hyperspace
  private shake = 0;
  private hyper = 0;          // 0..1 hyperspace intensity
  private hyperDir = new THREE.Vector3();

  // telemetry
  speed = 0;
  private prevPos = new THREE.Vector3();

  constructor(camera: THREE.PerspectiveCamera) {
    this.camera = camera;
    this.desiredPos.set(0, 8, 60);
    this.camera.position.copy(this.desiredPos);
    this.prevPos.copy(this.desiredPos);
    this.curLook.set(0, 0, 0);

    // a gentle looping bezier-ish path for idle drift through the system
    this.driftPoints = [
      new THREE.Vector3(0, 10, 90),
      new THREE.Vector3(70, 18, 40),
      new THREE.Vector3(40, -12, -70),
      new THREE.Vector3(-60, 22, -50),
      new THREE.Vector3(-80, -8, 40),
      new THREE.Vector3(-20, 30, 95),
    ];

    this.bindInput();
  }

  private bindInput() {
    window.addEventListener("pointermove", (e) => {
      this.mouseTarget.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        (e.clientY / window.innerHeight) * 2 - 1
      );
    });
    window.addEventListener(
      "wheel",
      (e) => {
        this.scrollDist = THREE.MathUtils.clamp(
          this.scrollDist + e.deltaY * 0.05,
          -30,
          120
        );
      },
      { passive: true }
    );
  }

  setMode(mode: "drift" | "orbit" | "approach") {
    this.mode = mode;
  }

  focusOn(target: FocusTarget) {
    this.focus = target;
    this.mode = "orbit";
    // start orbit angle from current relative position for a smooth swing-in
    const rel = this.camera.position.clone().sub(target.position);
    this.orbitAngle = Math.atan2(rel.z, rel.x);
    this.orbitRadiusMul = THREE.MathUtils.clamp(60 / Math.max(target.radius, 1), 3.5, 8);
  }

  clearFocus() {
    this.focus = null;
    this.mode = "drift";
  }

  triggerHyperspace(direction: THREE.Vector3) {
    this.hyper = 1;
    this.hyperDir.copy(direction).normalize();
    this.shake = 1.0;
  }

  // Catmull-Rom-ish sampling of the drift loop.
  private samplePath(t: number, out: THREE.Vector3) {
    const pts = this.driftPoints;
    const n = pts.length;
    const ft = (t % 1) * n;
    const i = Math.floor(ft);
    const f = ft - i;
    const p0 = pts[(i - 1 + n) % n];
    const p1 = pts[i % n];
    const p2 = pts[(i + 1) % n];
    const p3 = pts[(i + 2) % n];
    const f2 = f * f;
    const f3 = f2 * f;
    out.set(0, 0, 0);
    out.addScaledVector(p0, -0.5 * f3 + f2 - 0.5 * f);
    out.addScaledVector(p1, 1.5 * f3 - 2.5 * f2 + 1.0);
    out.addScaledVector(p2, -1.5 * f3 + 2.0 * f2 + 0.5 * f);
    out.addScaledVector(p3, 0.5 * f3 - 0.5 * f2);
    return out;
  }

  update(dt: number, elapsed: number) {
    // smooth mouse
    this.mouse.lerp(this.mouseTarget, 1 - Math.exp(-6 * dt));

    if (this.hyper > 0.001) {
      // ---- Hyperspace lunge: surge forward along hyperDir, then ease back. ----
      this.hyper = Math.max(0, this.hyper - dt * 0.55);
      const surge = this.hyper * this.hyper * 320;
      this.desiredPos.copy(this.camera.position).addScaledVector(this.hyperDir, surge * dt * 4);
      this.desiredLook
        .copy(this.camera.position)
        .addScaledVector(this.hyperDir, 50);
      this.shake = Math.max(this.shake, this.hyper * 0.8);
    } else if (this.mode === "orbit" && this.focus) {
      // ---- Cinematic orbit: slow arc with parallax & a slight vertical drift.
      this.orbitAngle += this.orbitSpeed * dt;
      const radius = this.focus.radius * this.orbitRadiusMul + this.scrollDist;
      const h = this.focus.radius * 1.4 + Math.sin(elapsed * 0.15) * this.focus.radius * 0.6;
      this.desiredPos.set(
        this.focus.position.x + Math.cos(this.orbitAngle) * radius,
        this.focus.position.y + h,
        this.focus.position.z + Math.sin(this.orbitAngle) * radius
      );
      this.desiredLook.copy(this.focus.position);
    } else {
      // ---- Idle drift along the path, always gazing toward the galactic core.
      this.driftT += dt * 0.012;
      this.samplePath(this.driftT, this.desiredPos);
      const ahead = new THREE.Vector3();
      this.samplePath(this.driftT + 0.06, ahead);
      this.desiredLook.copy(ahead).multiplyScalar(0.25); // look slightly ahead & toward center
    }

    // lazy mouse parallax — adds a hand-built look offset.
    const parallax = 1 - Math.min(this.hyper * 2, 1);
    const right = new THREE.Vector3().setFromMatrixColumn(this.camera.matrixWorld, 0);
    const up = new THREE.Vector3().setFromMatrixColumn(this.camera.matrixWorld, 1);
    const lookOffset = new THREE.Vector3()
      .addScaledVector(right, this.mouse.x * 8 * parallax)
      .addScaledVector(up, -this.mouse.y * 6 * parallax);
    this.desiredLook.add(lookOffset);

    // critically-damped springs toward desired position & look-at
    const omegaP = 2.0;
    const omegaL = 3.2;
    const p = this.camera.position;
    const vx = { v: this.posVel.x }, vy = { v: this.posVel.y }, vz = { v: this.posVel.z };
    p.x = springScalar(p.x, vx, this.desiredPos.x, omegaP, dt);
    p.y = springScalar(p.y, vy, this.desiredPos.y, omegaP, dt);
    p.z = springScalar(p.z, vz, this.desiredPos.z, omegaP, dt);
    this.posVel.set(vx.v, vy.v, vz.v);

    const lx = { v: this.lookVel.x }, ly = { v: this.lookVel.y }, lz = { v: this.lookVel.z };
    this.curLook.x = springScalar(this.curLook.x, lx, this.desiredLook.x, omegaL, dt);
    this.curLook.y = springScalar(this.curLook.y, ly, this.desiredLook.y, omegaL, dt);
    this.curLook.z = springScalar(this.curLook.z, lz, this.desiredLook.z, omegaL, dt);
    this.lookVel.set(lx.v, ly.v, lz.v);

    this.camera.lookAt(this.curLook);

    // procedural handheld breathing + decaying shake
    this.shake = Math.max(0, this.shake - dt * 1.2);
    const breath = Math.sin(elapsed * 0.7) * 0.04 + Math.sin(elapsed * 1.7) * 0.02;
    const shakeAmt = this.shake * 0.06;
    this.camera.rotateZ(breath * 0.15 + (Math.random() - 0.5) * shakeAmt);
    this.camera.rotateX((Math.random() - 0.5) * shakeAmt);
    this.camera.rotateY((Math.random() - 0.5) * shakeAmt);

    // dynamic FOV: widen during hyperspace for a speed rush
    const targetFov = 55 + this.hyper * 35;
    this.camera.fov += (targetFov - this.camera.fov) * (1 - Math.exp(-8 * dt));
    this.camera.updateProjectionMatrix();

    // telemetry
    this.speed = this.prevPos.distanceTo(this.camera.position) / Math.max(dt, 1e-4);
    this.prevPos.copy(this.camera.position);
  }

  get hyperspaceLevel() {
    return this.hyper;
  }
}
