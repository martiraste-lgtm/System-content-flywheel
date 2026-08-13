// Infografica unica — Hero "Mistral AI: da $16M a $400M+ ARR in 20 mesi" + grafico ARR
// Header con la "M" di Mistral ricreata (gradiente caldo a bande) + grafico (da Mistral-ARR-Crescita).
// Brand system chiaro. Dati verificati giugno 2026. Landscape ~1180px. Companion articolo "Valore del Positioning".

export default function MistralARRCrescitaTitolo() {
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
  const sans = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
  const serif = "Georgia, 'Times New Roman', serif";

  // --- dati ARR ---
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

  // geometria/scale
  const W = 1100, H = 380, ml = 74, mr = 64, mt = 18, mb = 40;
  const plotW = W - ml - mr, plotH = H - mt - mb, baseY = mt + plotH;
  const logMin = Math.log10(10e6), logMax = Math.log10(1.2e9);
  const yScale = (v) => mt + plotH - ((Math.log10(v) - logMin) / (logMax - logMin)) * plotH;
  const xScale = (i) => ml + (plotW * i) / (points.length - 1);
  const coords = points.map((p, i) => ({ ...p, x: xScale(i), y: yScale(p.v) }));
  const confirmed = coords.slice(0, 4);
  const linePath = confirmed.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath = `${linePath} L ${confirmed[3].x} ${baseY} L ${confirmed[0].x} ${baseY} Z`;
  const dashPath = `M ${coords[3].x} ${coords[3].y} L ${coords[4].x} ${coords[4].y}`;

  return (
    <div
      style={{
        fontFamily: sans,
        background: c.bg,
        width: 1180,
        margin: "0 auto",
        padding: 36,
        color: c.ink,
        boxSizing: "border-box",
      }}
    >
      {/* ===== HERO HEADER ===== */}
      <div style={{ borderBottom: `1px solid ${c.line}`, paddingBottom: 18, marginBottom: 22 }}>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 4, flexWrap: "wrap" }}>
          {/* M di Mistral — gradiente caldo a bande */}
          <svg width="64" height="70" viewBox="0 0 100 100" style={{ display: "block" }} aria-label="M">
            <defs>
              <linearGradient id="mistralM" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFC83D" />
                <stop offset="30%" stopColor="#FFC83D" />
                <stop offset="30%" stopColor="#F59E0B" />
                <stop offset="52%" stopColor="#F59E0B" />
                <stop offset="52%" stopColor="#EF5A28" />
                <stop offset="74%" stopColor="#EF5A28" />
                <stop offset="74%" stopColor="#C1121F" />
                <stop offset="88%" stopColor="#C1121F" />
                <stop offset="88%" stopColor="#2D2D2D" />
                <stop offset="100%" stopColor="#2D2D2D" />
              </linearGradient>
            </defs>
            <text
              x="50"
              y="84"
              textAnchor="middle"
              fontFamily={serif}
              fontSize="104"
              fontWeight="700"
              fill="url(#mistralM)"
            >
              M
            </text>
          </svg>

          <h1 style={{ fontFamily: serif, fontSize: 40, fontWeight: 700, margin: 0, lineHeight: 1.05 }}>
            istral AI: da $16M a $400M+ ARR in 20 mesi
          </h1>
        </div>
        <p style={{ fontFamily: serif, fontStyle: "italic", fontSize: 18, color: c.body, marginTop: 10, marginBottom: 0 }}>
          Come il campione europeo dell'AI di frontiera è cresciuto vendendo sovranità.
        </p>
      </div>

      {/* badge + sottotitolo dati */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
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
        <span style={{ fontSize: 14, color: c.body }}>
          Annual recurring revenue · fine 2024 → obiettivo 2026
        </span>
      </div>

      {/* STAT CARDS */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12, marginTop: 16 }}>
        {points.slice(0, 4).map((s, i) => {
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
      <div style={{ background: c.white, border: `1px solid ${c.line}`, borderRadius: 16, padding: 18, marginTop: 16 }}>
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block" }}>
          {gridY.map((g) => {
            const y = yScale(g.v);
            return (
              <g key={g.t}>
                <line x1={ml} y1={y} x2={ml + plotW} y2={y} stroke={c.line} strokeWidth="1" />
                <text x={ml - 10} y={y + 4} fontSize="13" fill={c.muted} textAnchor="end">{g.t}</text>
              </g>
            );
          })}
          <path d={areaPath} fill={c.accentSoft} stroke="none" />
          <path d={linePath} fill="none" stroke={c.accent} strokeWidth="3.5" strokeLinejoin="round" strokeLinecap="round" />
          <path d={dashPath} fill="none" stroke={c.accent} strokeWidth="3" strokeDasharray="7 6" strokeLinecap="round" />
          {coords.map((p) =>
            p.outlook ? (
              <circle key={p.label} cx={p.x} cy={p.y} r="8" fill={c.white} stroke={c.accent} strokeWidth="3" />
            ) : (
              <circle key={p.label} cx={p.x} cy={p.y} r="7" fill={c.accent} stroke={c.white} strokeWidth="2.5" />
            )
          )}
          {coords.map((p, i) => (
            <text
              key={p.label}
              x={p.x}
              y={baseY + 24}
              fontSize="13"
              fontWeight={p.outlook ? 700 : 500}
              fill={p.outlook ? c.accent : c.body}
              textAnchor={i === 0 ? "start" : i === coords.length - 1 ? "end" : "middle"}
            >
              {p.label}
            </text>
          ))}
        </svg>

        <div style={{ display: "flex", gap: 24, marginTop: 6, paddingLeft: 6, flexWrap: "wrap" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: c.body }}>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: c.accent, display: "inline-block" }} />
            ARR confermato
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: c.body }}>
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: c.white, border: `2px solid ${c.accent}`, display: "inline-block" }} />
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
