// Carosello "Tesi di Posizionamento" — Slide 5/6 ("Inizia da qui")
// Ricostruzione fedele all'impostazione originale: catena sx dall'alto in basso, poi una freccia
// "di ritorno" che risale a dx verso il box TESI, che si scompone nei 5 elementi (allineati in basso
// a dx, alla stessa altezza dei 3 nodi finali della catena — POV/Differenziante/ECP — a cui si legano
// con una graffa). Palette/font sono quelli di Tesi-Posizionamento-Cattiva-vs-Buona.jsx.
// Canvas 1080x1350.

export default function CaroselloTesiPosizionamento05IniziaDaQui() {
  const c = {
    bg: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#8A8A8A",
    white: "#FFFFFF",
    line: "#E5E5E5",
    accent: "#F47B20",
    accentLane: "#FFF3E6",
    explore: "#2563EB",
    exploreSoft: "#BFD4FB",
    exploreLane: "#EFF4FF",
    good: "#65A30D",
    goodLane: "#F2FBE3",
    goodBright: "#A3E635",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const right5 = [
    { n: 1, t: "penso che questi siano le nostre ALTERNATIVES", tone: "explore" },
    { n: 2, t: "penso che questo sia il MOTIVO per cui siamo diversi", tone: "explore" },
    { n: 3, t: "lo dimostreremo con questa Feature che abilita questa Capability che genera questo Benefit", tone: "ink" },
    { n: 4, t: "quindi questo è il tipo di ECP che amerà le nostre cose", tone: "accent" },
    { n: 5, t: "questo è il MERCATO che conquisteremo", tone: "good" },
  ];

  const tones = {
    ink: { border: c.ink, bg: c.white, text: c.ink },
    accent: { border: c.accent, bg: c.accentLane, text: c.accent },
    explore: { border: c.explore, bg: c.exploreLane, text: c.explore },
    good: { border: c.good, bg: c.goodLane, text: c.good },
  };

  return (
    <div style={{ fontFamily: font, background: c.bg, width: 1080, height: 1350, margin: "0 auto", padding: "40px 44px 30px", color: c.ink, boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      {/* header */}
      <div style={{ borderBottom: `3px solid ${c.ink}`, paddingBottom: 14, marginBottom: 22 }}>
        <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1.5, color: c.muted, textTransform: "uppercase", marginBottom: 8 }}>
          Tesi di posizionamento — pre-PMF
        </div>
        <h1 style={{ fontSize: 46, fontWeight: 900, margin: 0, lineHeight: 1.05 }}>
          INIZIA <span style={{ color: c.accent }}>DA QUI</span>
        </h1>
      </div>

      {/* body: 2 colonne, altezza uguale, con freccia di ritorno sx(basso)->dx(alto) */}
      <div style={{ position: "relative", display: "flex", gap: 30, flex: 1 }}>
        {/* freccia di ritorno: dal fondo della catena sx risale al box TESI in alto a dx */}
        <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", zIndex: 1 }} viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
              <path d="M0,0 L8,4 L0,8 Z" fill={c.accent} />
            </marker>
          </defs>
          <path d="M 46 96 C 88 90, 92 40, 60 10" fill="none" stroke={c.accent} strokeWidth="1" strokeDasharray="3,2.2" markerEnd="url(#arrowhead)" vectorEffect="non-scaling-stroke" />
        </svg>

        {/* LEFT: catena */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", zIndex: 2 }}>
          <ChainNode c={c} tones={tones} tone="ink">Analisi STATUS QUO &amp; Why it's broken</ChainNode>
          <Arrow c={c} />
          <ChainNode c={c} tones={tones} tone="accent">JTBD [Assumption]</ChainNode>
          <Arrow c={c} />
          <ChainNode c={c} tones={tones} tone="explore">Interviste [Conferme su JTBD]</ChainNode>
          <Arrow c={c} />
          <ChainNode c={c} tones={tones} tone="explore">Analisi Alternatives</ChainNode>

          {/* brace label */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "10px 0 10px 6px" }}>
            <span style={{ width: 14, height: 26, borderLeft: `3px solid ${c.explore}`, borderTop: `3px solid ${c.explore}`, borderBottom: `3px solid ${c.explore}`, borderRadius: "8px 0 0 8px" }} />
            <span style={{ fontSize: 12.5, fontWeight: 800, color: c.explore, fontStyle: "italic" }}>ti porteranno ad avere</span>
          </div>
          <Arrow c={c} />

          <ChainNode c={c} tones={tones} tone="good">Tuo POV sul Mercato</ChainNode>
          <Arrow c={c} />
          <ChainNode c={c} tones={tones} tone="good">Elemento Differenziante — Use Case o Product Category</ChainNode>
          <Arrow c={c} />
          <ChainNode c={c} tones={tones} tone="accent">Per CHI = ECP</ChainNode>
        </div>

        {/* RIGHT: box TESI in alto, poi spacer, poi i 5 elementi ancorati in basso (alla stessa altezza dei 3 nodi finali sx) */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", zIndex: 2 }}>
          <div style={{ background: c.ink, borderRadius: 14, padding: "16px 18px", textAlign: "center" }}>
            <div style={{ fontSize: 15, fontWeight: 900, color: c.white, lineHeight: 1.3 }}>
              Startup Early Stage <span style={{ color: c.goodBright }}>=</span>
              <br />
              TESI di POSIZIONAMENTO
            </div>
          </div>

          {/* spacer: spinge i 5 elementi in basso, allineati alla parte finale della catena sx */}
          <div style={{ flex: 1 }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 9, position: "relative", paddingLeft: 8 }}>
            {/* graffa: lega i 5 elementi ai 3 nodi finali della catena sx (POV / Differenziante / ECP) */}
            <span style={{ position: "absolute", left: -14, top: 4, bottom: 4, width: 12, borderTop: `3px solid ${c.muted}`, borderBottom: `3px solid ${c.muted}`, borderLeft: `3px solid ${c.muted}`, borderRadius: "8px 0 0 8px", opacity: 0.5 }} />
            {right5.map((r) => {
              const tn = tones[r.tone];
              return (
                <div key={r.n} style={{ display: "flex", gap: 10, alignItems: "flex-start", background: tn.bg, border: `2px solid ${tn.border}`, borderRadius: 10, padding: "11px 13px" }}>
                  <span style={{ flexShrink: 0, width: 24, height: 24, borderRadius: 7, background: tn.border, color: c.white, fontSize: 13, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center" }}>{r.n}</span>
                  <span style={{ fontSize: 12.5, color: c.ink, lineHeight: 1.32, fontWeight: 600 }}>{r.t}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* footer: firma */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 20, paddingTop: 16, borderTop: `1px solid ${c.line}` }}>
        <div style={{ width: 44, height: 44, borderRadius: "50%", background: c.accent, color: c.white, fontSize: 16, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center" }}>SM</div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 900, color: c.ink }}>Stefano Martiradonna</div>
          <div style={{ fontSize: 12.5, color: c.muted, fontWeight: 600 }}>Product Marketer</div>
        </div>
      </div>

      {/* pagination */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={i} style={{ width: i === 4 ? 22 : 8, height: 8, borderRadius: 4, background: i === 4 ? c.accent : c.line }} />
        ))}
      </div>
    </div>
  );
}

/* ---------- sotto-componenti ---------- */

function ChainNode({ c, tones, tone, children }) {
  const tn = tones[tone];
  return (
    <div style={{ background: tn.bg, border: `2px solid ${tn.border}`, borderRadius: 10, padding: "11px 14px", fontSize: 13.5, fontWeight: 800, color: tn.text, lineHeight: 1.3, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
      {children}
    </div>
  );
}

function Arrow({ c }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "3px 0" }}>
      <div style={{ width: 0, height: 0, borderLeft: "7px solid transparent", borderRight: "7px solid transparent", borderTop: `9px solid ${c.muted}` }} />
    </div>
  );
}
