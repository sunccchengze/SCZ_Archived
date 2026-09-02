// =============================================================================
// World.ts — orchestrates the entire simulation.
// Owns the renderer, scene graph, camera director, post pipeline, the cosmic
// objects, the render loop, performance auto-tuning, and command handling.
// =============================================================================
import * as THREE from "three";
import { CameraDirector, type FocusTarget } from "../camera/CameraDirector";
import { PostPipeline } from "../postfx/PostPipeline";
import { Starfield } from "../scene/Starfield";
import { Galaxy } from "../scene/Galaxy";
import { Nebula } from "../scene/Nebula";
import { CelestialBodies } from "../scene/CelestialBodies";
import { BlackHole } from "../scene/BlackHole";
import { store, onCommand, type Command } from "./store";

export class World {
  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera: THREE.PerspectiveCamera;
  private director: CameraDirector;
  private post: PostPipeline;

  private starfield: Starfield;
  private galaxy: Galaxy;
  private nebula: Nebula;
  private bodies: CelestialBodies;
  private blackhole: BlackHole;

  private clock = new THREE.Clock();
  private raf = 0;
  private disposed = false;

  // focus cycling
  private targets: FocusTarget[] = [];
  private focusIndex = -1;

  // performance auto-tuning
  private fpsSamples: number[] = [];
  private quality = 1.0; // 0.5 .. 1.0
  private nebulaSteps = 64;

  private unsubCmd: () => void;

  constructor(canvas: HTMLCanvasElement) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: false, // we MSAA via post + supersample-ish; AA off for perf
      powerPreference: "high-performance",
      stencil: false,
    });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.outputColorSpace = THREE.LinearSRGBColorSpace; // we tonemap manually
    this.renderer.autoClear = true;
    this.renderer.setClearColor(0x02030a, 1);

    this.camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      6000
    );
    this.director = new CameraDirector(this.camera);
    this.post = new PostPipeline(this.renderer);

    const core = new THREE.Vector3(0, 0, 0);

    // build the cosmos
    this.starfield = new Starfield(30000, 1900);
    this.galaxy = new Galaxy({ count: 60000, radius: 130 });
    this.nebula = new Nebula(new THREE.Vector3(-40, 20, -120), 360);
    this.bodies = new CelestialBodies(new THREE.Vector3(220, -10, 140));
    this.blackhole = new BlackHole(core);

    this.scene.add(this.starfield.points);
    this.scene.add(this.galaxy.points);
    this.scene.add(this.nebula.mesh);
    this.scene.add(this.bodies.group);

    // a touch of ambient so unlit limbs aren't pure black
    this.scene.add(new THREE.AmbientLight(0x223044, 0.6));

    this.onResize();
    window.addEventListener("resize", this.onResize);

    this.unsubCmd = onCommand(this.handleCommand);

    store.set({ ready: true, target: "GALACTIC CORE" });
  }

  private handleCommand = (cmd: Command) => {
    this.refreshTargets();
    if (cmd.type === "cycle") {
      this.focusIndex = (this.focusIndex + 1) % this.targets.length;
      this.director.focusOn(this.targets[this.focusIndex]);
    } else if (cmd.type === "focus") {
      this.focusIndex = Math.max(0, Math.min(cmd.index, this.targets.length - 1));
      this.director.focusOn(this.targets[this.focusIndex]);
    } else if (cmd.type === "toggleMode") {
      if (this.director.mode === "drift") {
        this.refreshTargets();
        this.focusIndex = 0;
        this.director.focusOn(this.targets[0]);
      } else {
        this.director.clearFocus();
        this.focusIndex = -1;
      }
    } else if (cmd.type === "hyperspace") {
      this.startHyperspace();
    }
  };

  private startHyperspace() {
    if (store.get().hyperspace) return;
    // lunge toward the galactic core / black hole — the surprise moment.
    const dir = this.blackhole.position.clone().sub(this.camera.position).normalize();
    this.director.triggerHyperspace(dir);
    store.set({ hyperspace: true, warpCharge: 1 });
    // after the surge, drop back to drift and recharge
    window.setTimeout(() => {
      store.set({ hyperspace: false });
    }, 2600);
    let charge = 1;
    const recharge = () => {
      charge = Math.max(0, charge - 0.02);
      store.set({ warpCharge: 1 - charge });
      if (charge > 0 && !this.disposed) window.setTimeout(recharge, 60);
    };
    window.setTimeout(recharge, 2600);
  }

  private refreshTargets() {
    const bodyTargets = this.bodies.focusTargets;
    this.targets = [
      { name: "GALACTIC CORE", position: this.blackhole.position.clone(), radius: 36 },
      { name: "NEBULA NYX-7", position: this.nebula.mesh.position.clone(), radius: 120 },
      ...bodyTargets,
    ];
  }

  private onResize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const pr = Math.min(window.devicePixelRatio, 2);
    this.renderer.setPixelRatio(pr);
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.post.setSize(w, h, pr);
    this.blackhole.resize(w * pr, h * pr);
  };

  private tunePerformance(fps: number) {
    this.fpsSamples.push(fps);
    if (this.fpsSamples.length < 90) return;
    const avg =
      this.fpsSamples.reduce((a, b) => a + b, 0) / this.fpsSamples.length;
    this.fpsSamples = [];

    if (avg < 45 && this.quality > 0.55) {
      this.quality = Math.max(0.5, this.quality - 0.1);
      this.nebulaSteps = Math.max(28, this.nebulaSteps - 10);
      const pr = Math.max(1, Math.min(window.devicePixelRatio, 2) * this.quality);
      this.renderer.setPixelRatio(pr);
      this.post.setSize(window.innerWidth, window.innerHeight, pr);
      this.blackhole.resize(window.innerWidth * pr, window.innerHeight * pr);
      this.nebula.setQuality(this.nebulaSteps);
    } else if (avg > 58 && this.quality < 1.0) {
      this.quality = Math.min(1.0, this.quality + 0.05);
      this.nebulaSteps = Math.min(72, this.nebulaSteps + 6);
      this.nebula.setQuality(this.nebulaSteps);
    }
  }

  start() {
    const loop = () => {
      if (this.disposed) return;
      this.raf = requestAnimationFrame(loop);

      const dt = Math.min(this.clock.getDelta(), 0.05);
      const t = this.clock.elapsedTime;

      this.director.update(dt, t);
      const hyper = this.director.hyperspaceLevel;

      // update cosmos
      this.starfield.update(t);
      this.galaxy.update(t, hyper);
      this.nebula.update(t, this.camera.position);
      this.bodies.update(t);
      // black hole brightens fully after intro; pulses subtly with hyperspace
      const bhIntensity = 1.0 + hyper * 0.8;
      this.blackhole.update(t, this.camera, bhIntensity);

      // telemetry
      this.refreshTargets();
      const focusName =
        this.focusIndex >= 0 && this.director.mode === "orbit"
          ? this.targets[this.focusIndex]?.name ?? "—"
          : "FREE DRIFT";
      const focusPos =
        this.focusIndex >= 0 ? this.targets[this.focusIndex]?.position : this.blackhole.position;
      const dist = focusPos ? this.camera.position.distanceTo(focusPos) : 0;
      const fps = 1 / Math.max(dt, 1e-4);

      store.set({
        speed: this.director.speed,
        target: focusName,
        distance: dist,
        fps,
        mode: this.director.mode,
      });
      this.tunePerformance(fps);

      // ---- render: world into HDR RT, then black hole overlay, then post ----
      this.post.render(t, hyper, (target) => {
        this.renderer.setRenderTarget(target);
        this.renderer.autoClear = true;
        this.renderer.clear();
        this.renderer.render(this.scene, this.camera);
        // composite the lensed black hole ON TOP into the same HDR target —
        // autoClear off so we don't wipe the scene we just drew.
        this.renderer.autoClear = false;
        this.blackhole.render(this.renderer);
        this.renderer.autoClear = true;
        this.renderer.setRenderTarget(null);
      });
    };
    this.raf = requestAnimationFrame(loop);
  }

  dispose() {
    this.disposed = true;
    cancelAnimationFrame(this.raf);
    window.removeEventListener("resize", this.onResize);
    this.unsubCmd();
    this.renderer.dispose();
  }
}
