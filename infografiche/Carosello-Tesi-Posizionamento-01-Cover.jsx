// Carosello "Tesi di Posizionamento" — Slide 1/6 (cover)
// Stessa palette/linguaggio visivo di Tesi-Posizionamento-Cattiva-vs-Buona.jsx.
// Il classico template di positioning (Dunford-style) barrato: NON è il punto di partenza in early stage.
// Canvas 1080x1350 (formato carosello 4:5).

export default function CaroselloTesiPosizionamento01Cover() {
  const c = {
    bg: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#8A8A8A",
    white: "#FFFFFF",
    line: "#E5E5E5",
    accent: "#F47B20",
    bad: "#EF3B2C",
    badSoft: "#F9C8C1",
    badLane: "#FFF1EF",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const blanks = [
    { pre: "Our product is a ", label: "(Market Category)" },
    { pre: "that does ", label: "(Unique Attributes)" },
    { pre: ", which enables ", label: "(Value)" },
    { pre: "for ", label: "(Target Customers)" },
    { pre: ", unlike ", label: "(Competitors)" },
  ];

  return (
    <div style={{ fontFamily: font, background: c.bg, width: 1080, height: 1350, margin: "0 auto", padding: "44px 44px 36px", color: c.ink, boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      {/* kicker */}
      <div style={{ fontSize: 13, fontWeight: 800, letterSpacing: 1.5, color: c.muted, textTransform: "uppercase", marginBottom: 16 }}>
        Tesi di posizionamento — serie
      </div>

      {/* H1 */}
      <h1 style={{ fontSize: 50, fontWeight: 900, margin: 0, lineHeight: 1.1 }}>
        POSIZIONAMENTO
        <br />
        per un prodotto <span style={{ color: c.accent }}>early stage</span>
      </h1>

      {/* warning kicker */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 34, marginBottom: 26 }}>
        <span style={{ fontSize: 28 }}>🛑</span>
        <span style={{ fontSize: 24, fontWeight: 900, color: c.bad, letterSpacing: 0.3 }}>
          NON COMINCIARE DA QUESTO TEMPLATE
        </span>
      </div>

      {/* crossed-out template box — grande, leggibile, occupa il corpo della slide */}
      <div style={{ position: "relative", flex: 1, display: "flex", alignItems: "center", background: c.white, border: `2px solid ${c.line}`, borderRadius: 20, padding: "56px 48px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)" }}>
        <div style={{ fontSize: 30, lineHeight: 2, color: c.ink, fontWeight: 500 }}>
          {blanks.map((b, i) => (
            <span key={i}>
              {b.pre}
              <span style={{ borderBottom: `2px solid ${c.muted}`, color: c.muted, fontWeight: 700, fontSize: 20, padding: "0 5px" }}>{b.label}</span>
              {i === blanks.length - 1 ? "." : " "}
            </span>
          ))}
        </div>
        {/* diagonal red strike */}
        <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none" }} viewBox="0 0 1000 620" preserveAspectRatio="none">
          <line x1="20" y1="30" x2="980" y2="590" stroke={c.bad} strokeWidth="12" strokeLinecap="round" />
        </svg>
      </div>

      {/* closing line — subito sotto il template */}
      <div style={{ textAlign: "center", marginTop: 28 }}>
        <div style={{ fontSize: 30, fontWeight: 900, color: c.ink, lineHeight: 1.25 }}>
          3 MOTIVI sul perché <span style={{ color: c.bad }}>NON</span> devi partire
          <br />
          da questo framework
        </div>
        <div style={{ fontSize: 24, color: c.muted, marginTop: 12 }}>→</div>
      </div>

      {/* pagination */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <span key={i} style={{ width: i === 0 ? 22 : 8, height: 8, borderRadius: 4, background: i === 0 ? c.accent : c.line }} />
        ))}
      </div>
    </div>
  );
}
