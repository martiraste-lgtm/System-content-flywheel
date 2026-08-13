// Carosello "Tesi di Posizionamento" — Slide 4/6 (Motivo 3 di 3)
// Stessa palette di Tesi-Posizionamento-Cattiva-vs-Buona.jsx. Canvas 1080x1350.

export default function CaroselloTesiPosizionamento04Motivo3() {
  const c = {
    bg: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#8A8A8A",
    white: "#FFFFFF",
    line: "#E5E5E5",
    accent: "#F47B20",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  return (
    <div style={{ fontFamily: font, background: c.bg, width: 1080, height: 1350, margin: "0 auto", padding: "44px 44px 36px", color: c.ink, boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      {/* kicker */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1.5, color: c.muted, textTransform: "uppercase" }}>
          Perché non partire dal template classico
        </div>
        <div style={{ fontSize: 13, fontWeight: 800, color: c.accent }}>Motivo 3 di 3</div>
      </div>

      {/* gruppo centrato: badge + statement */}
      <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", gap: 40 }}>
        <div style={{ width: 100, height: 100, borderRadius: 20, background: c.accent, color: c.white, fontSize: 52, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 4px 14px rgba(244,123,32,0.35)" }}>
          3
        </div>
        <div style={{ fontSize: 46, fontWeight: 800, lineHeight: 1.32, color: c.ink }}>
          Rinforza quello che già credi sia vero, quindi si basa sul tuo <b style={{ color: c.accent }}>bias di conferma</b>.
        </div>
      </div>

      {/* pagination */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={i} style={{ width: i === 3 ? 22 : 8, height: 8, borderRadius: 4, background: i === 3 ? c.accent : c.line }} />
        ))}
      </div>
    </div>
  );
}
