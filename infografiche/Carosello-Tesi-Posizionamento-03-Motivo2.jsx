// Carosello "Tesi di Posizionamento" — Slide 3/6 (Motivo 2 di 3)
// Stessa palette di Tesi-Posizionamento-Cattiva-vs-Buona.jsx. Canvas 1080x1350.

export default function CaroselloTesiPosizionamento03Motivo2() {
  const c = {
    bg: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#8A8A8A",
    white: "#FFFFFF",
    line: "#E5E5E5",
    accent: "#F47B20",
    accentLane: "#FFF3E6",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const items = [
    "in più categorie di mercato",
    "con diversi concorrenti",
    "fornendo un valore diverso per diversi tipi di clienti",
  ];

  return (
    <div style={{ fontFamily: font, background: c.bg, width: 1080, height: 1350, margin: "0 auto", padding: "44px 44px 36px", color: c.ink, boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      {/* kicker */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1.5, color: c.muted, textTransform: "uppercase" }}>
          Perché non partire dal template classico
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, color: c.accent }}>Motivo 2 di 3</div>
      </div>

      {/* gruppo centrato: badge + statement + lista */}
      <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", gap: 34 }}>
        <div style={{ width: 100, height: 100, borderRadius: 20, background: c.accent, color: c.white, fontSize: 52, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(244,123,32,0.35)" }}>
          2
        </div>

        <div style={{ fontSize: 40, fontWeight: 800, lineHeight: 1.3, color: c.ink }}>
          Non dà spazio ad opzioni, mentre la maggior parte dei prodotti potrebbe essere <b style={{ color: c.accent }}>meglio posizionata</b>:
        </div>

        <div style={{ background: c.accentLane, border: `2px solid ${c.accent}`, borderRadius: 16, padding: "6px 28px" }}>
          {items.map((it, i) => (
            <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "18px 0", borderBottom: i === items.length - 1 ? "none" : `1px solid ${c.line}` }}>
              <span style={{ flexShrink: 0, width: 26, height: 26, borderRadius: 7, background: c.accent, color: c.white, fontSize: 15, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>✓</span>
              <span style={{ fontSize: 23, color: c.ink, lineHeight: 1.35, fontWeight: 600 }}>{it}</span>
            </div>
          ))}
        </div>
      </div>

      {/* pagination */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={i} style={{ width: i === 2 ? 22 : 8, height: 8, borderRadius: 4, background: i === 2 ? c.accent : c.line }} />
        ))}
      </div>
    </div>
  );
}
