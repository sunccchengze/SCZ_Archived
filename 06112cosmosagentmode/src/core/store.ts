// =============================================================================
// store.ts — tiny reactive store bridging the Three.js world and React HUD.
// No external state lib needed; a minimal pub/sub keeps the bundle lean.
// =============================================================================

export type FlightMode = "drift" | "orbit" | "approach";

export interface Telemetry {
  speed: number;          // current camera speed (units/s)
  target: string;         // name of focused body
  distance: number;       // distance to focused body
  fps: number;
  mode: FlightMode;
  warpCharge: number;     // 0..1 hyperspace charge
  hyperspace: boolean;    // currently in the warp event
  ready: boolean;         // assets/world initialized
}

type Listener = (t: Telemetry) => void;

class Store {
  private state: Telemetry = {
    speed: 0,
    target: "—",
    distance: 0,
    fps: 0,
    mode: "drift",
    warpCharge: 0,
    hyperspace: false,
    ready: false,
  };
  private listeners = new Set<Listener>();

  get(): Telemetry {
    return this.state;
  }

  set(patch: Partial<Telemetry>) {
    this.state = { ...this.state, ...patch };
    for (const l of this.listeners) l(this.state);
  }

  subscribe(l: Listener): () => void {
    this.listeners.add(l);
    l(this.state);
    return () => this.listeners.delete(l);
  }
}

export const store = new Store();

// Commands the HUD can send back into the world.
export type Command =
  | { type: "focus"; index: number }
  | { type: "cycle" }
  | { type: "hyperspace" }
  | { type: "toggleMode" };

type CmdListener = (c: Command) => void;
const cmdListeners = new Set<CmdListener>();

export function dispatch(cmd: Command) {
  for (const l of cmdListeners) l(cmd);
}
export function onCommand(l: CmdListener): () => void {
  cmdListeners.add(l);
  return () => cmdListeners.delete(l);
}
