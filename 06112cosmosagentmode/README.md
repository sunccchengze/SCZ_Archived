# COSMOS DRIFT — Deep Space Traversal

An immersive, cinematic 3D space visualization. You sit in the cockpit of a
ship and drift through a living galaxy: spiral arms turning, a volumetric nebula
breathing, a gravitationally-lensed black hole devouring light at the core, a
star burning with convection cells, and gas giants orbiting on their own clocks.

Built with **Vite + TypeScript + Three.js + React**.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
```

## Controls

| Input            | Action                                              |
|------------------|-----------------------------------------------------|
| Move mouse       | Lazy parallax look (hand-held cockpit feel)         |
| Scroll           | Dolly in / out while target-locked                  |
| `F`              | Cycle navigation target (core, nebula, star, planets) |
| `M`              | Toggle Free Drift / Target Lock camera mode         |
| `Space` / button | **Engage Hyperspace** — the surprise lunge event    |

## What's under the hood

### Hand-written GLSL (the math)
- **`nebula.frag`** — a true raymarched volumetric. The camera flies *inside* a
  shell; each pixel integrates a domain-warped fbm + ridged-multifractal density
  field with a two-channel ionization model (H-alpha red / O-III teal), single-
  scatter shadowing toward an embedded star cluster, and dithered steps.
- **`blackhole.frag`** — screen-space gravitational lensing. Per-pixel rays are
  bent toward the singularity each integration step (weak-field geodesic
  analogue), producing the Einstein ring and photon ring. The accretion disk is
  procedural turbulent plasma with Keplerian differential rotation, blackbody
  temperature gradient, gravitational redshift, and **relativistic Doppler
  beaming** (one side brighter & bluer).
- **`galaxy.vert`** — >50k stars on logarithmic spiral arms with differential
  rotation and **curl-noise** turbulence so the arms shimmer like a fluid.
- **`sun.frag` / `planet.frag`** — procedural convection/granulation/sunspots
  and latitude-banded storm vortices. No textures anywhere.
- **`lib/noise.glsl` / `lib/color.glsl`** — simplex noise, fbm, ridged, curl,
  domain warp, blackbody radiation, ACES filmic tonemapping.

### Particles
- 60,000 galaxy stars + 30,000 background stars = **90,000 particles**.

### Camera (no OrbitControls)
- `CameraDirector` uses **critically-damped springs** for position & look-at,
  Catmull-Rom drift paths, cinematic orbit arcs, procedural handheld
  breathing/shake, dynamic FOV, and a hyperspace lunge.

### Post pipeline (hand-rolled, no EffectComposer)
HDR scene → soft-knee bright pass → **5-mip separable gaussian bloom** with
additive upsample → composite (chromatic aberration, lens distortion, ACES
tonemap, S-curve + blue-lift grade, vignette, film grain, HUD scanlines).

### Performance
- Half/quarter-res bloom mips, dithered low-step volume, **automatic quality
  auto-tuning** (drops pixel ratio + raymarch steps if FPS sags, restores when
  headroom returns).

## Structure

```
src/
  main.tsx                 React entry
  core/
    World.ts               simulation orchestrator + render loop + perf tuning
    store.ts               reactive bridge between WebGL world and React HUD
  camera/
    CameraDirector.ts      cinematic spring-driven camera language
  scene/
    Starfield.ts           30k background stars
    Galaxy.ts              60k spiral-arm star system
    Nebula.ts              volumetric raymarch shell
    CelestialBodies.ts     star + orbiting procedural gas giants
    BlackHole.ts           screen-space lensed black hole
  postfx/
    PostPipeline.ts        bright/blur/composite chain
  ui/
    App.tsx Intro.tsx Hud.tsx   sci-fi overlay
  shaders/
    *.vert *.frag          hand-written GLSL
    lib/ post/             shared chunks & post passes
```
