// Grafico — La crescita ARR di Mistral (brand system, dati verificati giugno 2026)
// Rifacimento del chart productify "Mistral's ARR journey" coi colori di Stefano.
// Data-viz custom (SVG, scala log). Companion dell'articolo "Valore del Positioning". Landscape ~1180px.
// Correzione vs originale: badge "~20× in 12 mesi" (NON 75×). Dati: mlq.ai, trendingtopics, Sacra, Idlen.

export default function MistralARRCrescita() {
  const c = {
    bg: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#888888",
    salmon: "#FDE0D8",
    cream: "#FDF5D0",
    accent: "#F47B20",
    accentSoft: "rgba(244,123,32,0.12)",
    white: "#FFFFFF",
    line: "#E5E5E5",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  // --- dati (ARR in $) ---
  const points = [
    { label: "Fine 2024", v: 16e6, disp: "$16M" },
    { label: "Inizio 2025", v: 20e6, disp: "$20M" },
    { label: "Fine 2025", v: 312e6, disp: "$300M+" },
    { label: "Inizio 2026", v: 400e6, disp: "$400M+" },
    { label: "Obiettivo 2026", v: 1.1e9, disp: "~$1,1B", outlook: true },
  ];
  const gridY = [
    { v: 10e6, t: "$10M" },
    { v: 100e6, t: "$100M" },
    { v: 300e6, t: "$300M" },
    { v: 1e9, t: "$1B" },
  ];

  // --- geometria + scale ---
  const W = 1100, H = 420;
  const ml = 74, mr = 64, mt = 22, mb = 46;
  const plotW = W - ml - mr;
  const plotH = H - mt - mb;
  const baseY = mt + plotH;
  const logMin = Math.log10(10e6);
  const logMax = Math.log10(1.2e9);
  const yScale = (v) => mt + plotH - ((Math.log10(v) - logMin) / (logMax - logMin)) * plotH;
  const xScale = (i) => ml + (plotW * i) / (points.length - 1);

  const coords = points.map((p, i) => ({ ...p, x: xScale(i), y: yScale(p.v) }));
  const confirmed = coords.slice(0, 4);

  const linePath = confirmed.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath =
    `${linePath} L ${confirmed[3].x} ${baseY} L ${confirmed[0].x} ${baseY} Z`;
  const dashPath = `M ${coords[3].x} ${coords[3].y} L ${coords[4].x} ${coords[4].y}`;

  const statCards = points.slice(0, 4);

  return (
    <div
      style={{
        fontFamily: font,
        background: c.bg,
        width: 1180,
        margin: "0 auto",
        padding: 36,
        color: c.ink,
        boxSizing: "border-box",
      }}
    >
      {/* HEADER */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
        <h1 style={{ fontSize: 30, fontWeight: 800, margin: 0 }}>La crescita ARR di Mistral</h1>
        <span
          style={{
            background: c.cream,
            color: c.accent,
            fontWeight: 800,
            fontSize: 14,
            padding: "5px 14px",
            borderRadius: 999,
            border: `1px solid ${c.accent}`,
          }}
        >
          ~20× in 12 mesi
        </span>
      </div>
      <p style={{ fontSize: 15, color: c.body, marginTop: 8, marginBottom: 0 }}>
        Annual recurring revenue · fine 2024 → obiettivo 2026
      </p>

      {/* STAT CARDS */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginTop: 20 }}>
        {statCards.map((s, i) => {
          const hi = i === 3;
          return (
            <div
              key={s.label}
              style={{
                background: hi ? c.salmon : c.white,
                border: `1px solid ${hi ? c.accent : c.line}`,
                borderRadius: 12,
                padding: "14px 16px",
              }}
            >
              <div style={{ fontSize: 12.5, color: c.muted, fontWeight: 600 }}>{s.label}</div>
              <div style={{ fontSize: 26, fontWeight: 800, color: hi ? c.accent : c.ink, marginTop: 2 }}>
                {s.disp}
              </div>
            </div>
          );
        })}
      </div>

      {/* CHART */}
      <div
        style={{
          background: c.white,
          border: `1px solid ${c.line}`,
          borderRadius: 16,
          padding: 18,
          marginTop: 18,
        }}
      >
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block" }}>
          {/* gridlines + Y labels */}
          {gridY.map((g) => {
            const y = yScale(g.v);
            return (
              <g key={g.t}>
                <line x1={ml} y1={y} x2={ml + plotW} y2={y} stroke={c.line} strokeWidth="1" />
                <text x={ml - 10} y={y + 4} fontSize="13" fill={c.muted} textAnchor="end">
                  {g.t}
                </text>
              </g>
            );
          })}

          {/* area confermata */}
          <path d={areaPath} fill={c.accentSoft} stroke="none" />
          {/* linea confermata */}
          <path d={linePath} fill="none" stroke={c.accent} strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" />
          {/* proiezione tratteggiata */}
          <path d={dashPath} fill="none" stroke={c.accent} strokeWidth="3" strokeDasharray="7 6" strokeLinecap="round" />

          {/* markers */}
          {coords.map((p) =>
            p.outlook ? (
              <circle key={p.label} cx={p.x} cy={p.y} r="8" fill={c.white} stroke={c.accent} strokeWidth="3" />
            ) : (
              <circle key={p.label} cx={p.x} cy={p.y} r="7" fill={c.accent} stroke={c.white} strokeWidth="2.5" />
            )
          )}

          {/* X labels */}
          {coords.map((p, i) => (
            <text
              key={p.label}
              x={p.x}
              y={baseY + 26}
              fontSize="13"
              fontWeight={p.outlook ? 700 : 500}
              fill={p.outlook ? c.accent : c.body}
              textAnchor={i === 0 ? "start" : i === coords.length - 1 ? "end" : "middle"}
            >
              {p.label}
            </text>
          ))}
        </svg>

        {/* LEGENDA */}
        <div style={{ display: "flex", gap: 24, marginTop: 6, paddingLeft: 6, flexWrap: "wrap" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: c.body }}>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: c.accent, display: "inline-block" }} />
            ARR confermato
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: c.body }}>
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                background: c.white,
                border: `2px solid ${c.accent}`,
                display: "inline-block",
              }}
            />
            Obiettivo 2026 (~$1,1B · range $1–1,2B)
          </span>
        </div>
      </div>

      <div style={{ fontSize: 11.5, color: c.muted, marginTop: 10, fontStyle: "italic" }}>
        Scala logaritmica. ~20× = da ~$20M (gen 2025) a $400M+ (gen 2026). Obiettivo 2026: &gt;$1B / €1–1,2B (A. Mensch).
      </div>
    </div>
  );
}
