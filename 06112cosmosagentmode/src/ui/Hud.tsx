// =============================================================================
// Hud.tsx — sci-fi cockpit overlay. Telemetry + controls, all SVG/inline-CSS so
// it survives the sandboxed preview. Subscribes to `store`, dispatches commands.
// Designed to add immersion, not noise: corners, thin lines, soft glow.
// =============================================================================
import { useEffect, useState } from "react";
import { store, dispatch, type Telemetry } from "../core/store";

const ACCENT = "#7fe9ff";
const DIM = "rgba(127,233,255,0.55)";

function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const base: React.CSSProperties = { position: "absolute", width: 26, height: 26, pointerEvents: "none" };
  const stroke = { stroke: DIM, strokeWidth: 1.5, fill: "none" };
  const map: Record<string, React.CSSProperties> = {
    tl: { top: 18, left: 18 },
    tr: { top: 18, right: 18, transform: "scaleX(-1)" },
    bl: { bottom: 18, left: 18, transform: "scaleY(-1)" },
    br: { bottom: 18, right: 18, transform: "scale(-1,-1)" },
  };
  return (
    <svg style={{ ...base, ...map[pos] }} viewBox="0 0 26 26">
      <path d="M1 10 L1 1 L10 1" {...stroke} />
      <circle cx="1" cy="1" r="1.6" fill={ACCENT} />
    </svg>
  );
}

function Bar({ value, label }: { value: number; label: string }) {
  return (
    <div style={{ marginTop: 8 }}>
      <div style={{ fontSize: 9, letterSpacing: "0.25em", color: DIM, marginBottom: 4 }}>{label}</div>
      <div style={{ width: 150, height: 4, background: "rgba(127,233,255,0.12)", borderRadius: 2 }}>
        <div
          style={{
            width: `${Math.min(100, value * 100)}%`,
            height: "100%",
            background: `linear-gradient(90deg, ${ACCENT}, #ffffff)`,
            borderRadius: 2,
            boxShadow: `0 0 8px ${ACCENT}`,
            transition: "width 0.15s linear",
          }}
        />
      </div>
    </div>
  );
}

export function Hud() {
  const [t, setT] = useState<Telemetry>(store.get());

  useEffect(() => {
    let raf = 0;
    let latest = store.get();
    const unsub = store.subscribe((s) => (latest = s));
    // throttle React re-renders to ~20fps to avoid fighting the GL loop
    const tick = () => {
      setT({ ...latest });
      raf = window.setTimeout(() => requestAnimationFrame(tick), 50) as unknown as number;
    };
    tick();
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "KeyF") dispatch({ type: "cycle" });
      if (e.code === "KeyM") dispatch({ type: "toggleMode" });
      if (e.code === "Space") {
        e.preventDefault();
        dispatch({ type: "hyperspace" });
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      unsub();
      clearTimeout(raf);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const panel: React.CSSProperties = {
    position: "absolute",
    color: "#d7f6ff",
    fontFamily: "inherit",
    fontSize: 11,
    letterSpacing: "0.12em",
    textShadow: "0 0 10px rgba(60,180,220,0.4)",
    pointerEvents: "none",
    userSelect: "none",
  };

  const btn: React.CSSProperties = {
    pointerEvents: "auto",
    fontFamily: "inherit",
    fontSize: 10,
    letterSpacing: "0.2em",
    color: "#cdeeff",
    background: "rgba(10,24,38,0.55)",
    border: `1px solid ${DIM}`,
    borderRadius: 2,
    padding: "8px 12px",
    cursor: "pointer",
    backdropFilter: "blur(4px)",
    boxShadow: "0 0 14px rgba(40,120,160,0.25) inset",
  };

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />

      {/* top-left: identity */}
      <div style={{ ...panel, top: 34, left: 42 }}>
        <div style={{ color: ACCENT, letterSpacing: "0.4em", fontSize: 12 }}>COSMOS DRIFT</div>
        <div style={{ opacity: 0.55, marginTop: 4 }}>NAV-COMPUTER // v1.0</div>
        <div style={{ opacity: 0.4, marginTop: 2 }}>
          MODE: {t.mode === "orbit" ? "TARGET LOCK" : "FREE DRIFT"}
        </div>
      </div>

      {/* top-right: target */}
      <div style={{ ...panel, top: 34, right: 42, textAlign: "right" }}>
        <div style={{ opacity: 0.55 }}>TRACKING</div>
        <div style={{ color: ACCENT, fontSize: 15, letterSpacing: "0.25em", marginTop: 4 }}>
          {t.target}
        </div>
        <div style={{ opacity: 0.6, marginTop: 6 }}>
          RANGE {t.distance.toFixed(1)} <span style={{ opacity: 0.5 }}>AU</span>
        </div>
      </div>

      {/* bottom-left: telemetry bars */}
      <div style={{ ...panel, bottom: 44, left: 42 }}>
        <Bar value={Math.min(1, t.speed / 120)} label="VELOCITY" />
        <Bar value={t.warpCharge} label="WARP CHARGE" />
        <div style={{ marginTop: 10, opacity: 0.5, fontSize: 10 }}>
          {t.fps.toFixed(0)} FPS · {t.hyperspace ? "⚠ HYPERSPACE ENGAGED" : "STABLE"}
        </div>
      </div>

      {/* bottom-right: controls */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 42,
          display: "flex",
          gap: 10,
          alignItems: "flex-end",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", gap: 10 }}>
          <button style={btn} onClick={() => dispatch({ type: "cycle" })}>
            CYCLE TARGET [F]
          </button>
          <button style={btn} onClick={() => dispatch({ type: "toggleMode" })}>
            DRIFT / LOCK [M]
          </button>
        </div>
        <button
          style={{
            ...btn,
            color: "#04121a",
            background: `linear-gradient(90deg, ${ACCENT}, #4fb6e0)`,
            border: "none",
            fontSize: 11,
            padding: "11px 20px",
            boxShadow: `0 0 22px rgba(80,200,255,0.55)`,
            opacity: t.hyperspace ? 0.5 : 1,
          }}
          onClick={() => dispatch({ type: "hyperspace" })}
          disabled={t.hyperspace}
        >
          ⚡ ENGAGE HYPERSPACE [SPACE]
        </button>
      </div>

      {/* center reticle */}
      <svg
        style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.32 }}
        width="64"
        height="64"
        viewBox="0 0 64 64"
      >
        <circle cx="32" cy="32" r="22" stroke={ACCENT} strokeWidth="0.8" fill="none" />
        <line x1="32" y1="4" x2="32" y2="16" stroke={ACCENT} strokeWidth="0.8" />
        <line x1="32" y1="48" x2="32" y2="60" stroke={ACCENT} strokeWidth="0.8" />
        <line x1="4" y1="32" x2="16" y2="32" stroke={ACCENT} strokeWidth="0.8" />
        <line x1="48" y1="32" x2="60" y2="32" stroke={ACCENT} strokeWidth="0.8" />
        <circle cx="32" cy="32" r="1.6" fill={ACCENT} />
      </svg>

      {/* hyperspace flash vignette */}
      {t.hyperspace && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 50% 50%, rgba(180,235,255,0.0) 30%, rgba(120,200,255,0.18) 100%)",
            mixBlendMode: "screen",
            animation: "none",
          }}
        />
      )}
    </div>
  );
}
