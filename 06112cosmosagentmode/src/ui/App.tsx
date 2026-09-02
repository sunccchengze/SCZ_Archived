// =============================================================================
// App.tsx — mounts the WebGL canvas + the sci-fi HUD overlay.
// React owns the DOM/HUD; the World owns WebGL. They communicate via `store`.
// =============================================================================
import { useEffect, useRef, useState } from "react";
import { World } from "../core/World";
import { Hud } from "./Hud";
import { Intro } from "./Intro";

export function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const worldRef = useRef<World | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;
    const world = new World(canvasRef.current);
    worldRef.current = world;
    world.start();
    return () => world.dispose();
  }, []);

  return (
    <div style={{ position: "fixed", inset: 0 }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
      {!started && <Intro onEnter={() => setStarted(true)} />}
      {started && <Hud />}
    </div>
  );
}
