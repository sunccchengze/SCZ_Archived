// =============================================================================
// Intro.tsx — cinematic title card / boot sequence overlay.
// Fades away on "ENGAGE", revealing the live HUD. Pure inline styles + SVG so
// it renders correctly inside the sandboxed preview iframe (no external assets).
// =============================================================================
import { useEffect, useState } from "react";
import { store } from "../core/store";

const ACCENT = "#7fe9ff";

export function Intro({ onEnter }: { onEnter: () => void }) {
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [boot, setBoot] = useState<string[]>([]);

  useEffect(() => {
    const unsub = store.subscribe((t) => setReady(t.ready));
    const lines = [
      "› INITIALIZING DRIVE CORE ........... OK",
      "› SPOOLING PARTICLE FIELD (90,000) .. OK",
      "› RAYMARCH VOLUME ENGINE ............ OK",
      "› GRAVITATIONAL LENS SOLVER ......... OK",
      "› POST PIPELINE / BLOOM x5 .......... OK",
      "› NAVIGATION COMPUTER ............... ONLINE",
    ];
    let i = 0;
    const id = setInterval(() => {
      i++;
      setBoot(lines.slice(0, i));
      if (i >= lines.length) clearInterval(id);
    }, 260);
    return () => {
      unsub();
      clearInterval(id);
    };
  }, []);

  const handleEnter = () => {
    setLeaving(true);
    setTimeout(onEnter, 900);
  };

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(ellipse at 50% 60%, rgba(4,8,20,0.35) 0%, rgba(2,3,10,0.85) 70%, rgba(2,3,10,0.96) 100%)",
        color: "#cfeefff0",
        fontFamily: "inherit",
        opacity: leaving ? 0 : 1,
        transition: "opacity 0.9s ease",
        pointerEvents: leaving ? "none" : "auto",
        userSelect: "none",
      }}
    >
      <div
        style={{
          letterSpacing: "0.55em",
          fontSize: 13,
          color: ACCENT,
          marginBottom: 18,
          textShadow: `0 0 16px ${ACCENT}`,
        }}
      >
        ARENA STELLAR DYNAMICS
      </div>
      <h1
        style={{
          fontSize: "min(13vw, 110px)",
          margin: 0,
          fontWeight: 700,
          letterSpacing: "0.16em",
          background: "linear-gradient(180deg,#ffffff,#7fe9ff 60%,#3a7bd5)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          filter: "drop-shadow(0 0 28px rgba(80,200,255,0.45))",
        }}
      >
        COSMOS&nbsp;DRIFT
      </h1>
      <div style={{ opacity: 0.7, letterSpacing: "0.3em", fontSize: 12, marginTop: 6 }}>
        DEEP&nbsp;SPACE&nbsp;TRAVERSAL&nbsp;//&nbsp;SECTOR&nbsp;NYX-7
      </div>

      <pre
        style={{
          marginTop: 36,
          fontSize: 11.5,
          lineHeight: 1.9,
          color: "#86c7d8",
          minHeight: 150,
          textAlign: "left",
          textShadow: "0 0 8px rgba(60,160,200,0.4)",
        }}
      >
        {boot.join("\n")}
        {boot.length < 6 ? "\n› ........" : ""}
      </pre>

      <button
        onClick={handleEnter}
        disabled={!ready || boot.length < 6}
        style={{
          marginTop: 18,
          padding: "14px 46px",
          fontFamily: "inherit",
          fontSize: 15,
          letterSpacing: "0.4em",
          color: ready && boot.length >= 6 ? "#04121a" : "#33606e",
          background:
            ready && boot.length >= 6
              ? `linear-gradient(90deg, ${ACCENT}, #4fb6e0)`
              : "transparent",
          border: `1px solid ${ACCENT}`,
          borderRadius: 2,
          cursor: ready && boot.length >= 6 ? "pointer" : "default",
          boxShadow:
            ready && boot.length >= 6 ? `0 0 26px rgba(80,200,255,0.5)` : "none",
          transition: "all 0.4s ease",
        }}
      >
        ENGAGE
      </button>
      <div style={{ marginTop: 22, opacity: 0.45, fontSize: 11, letterSpacing: "0.2em" }}>
        MOVE MOUSE TO LOOK · SCROLL TO DOLLY · [F] CYCLE TARGET · [SPACE] HYPERSPACE
      </div>
    </div>
  );
}
