// Infografica — "Come l'AI valuta il tuo brand e cosa c'entra il POSIZIONAMENTO"
// Ricostruzione brandizzata di uno screenshot ChatGPT (risposta "best WordPress hosting"):
// stessa struttura (bolla-domanda → intro → tabella Provider/Best for/Pros/Cons), palette del brand system di Stefano.
// Companion del post AI-search (post-idee/Post-AI-Search-Positioning-Serie-2026-07.md).
// Formato landscape ~1200px, sfondo chiaro. Contenuto tabella verbatim dall'immagine di riferimento (in inglese).

export default function AIValutaBrandPosizionamento() {
  const c = {
    bg: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#8A8A8A",
    white: "#FFFFFF",
    line: "#E5E5E5",
    accent: "#F47B20", // arancio brand
    accentLane: "#FFF3E6",
    bubble: "#EFEFEF", // bolla domanda (grigio neutro, come nell'immagine)
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const rows = [
    {
      provider: "Hostinger",
      bestFor: "Best overall value",
      pros: "Fast, affordable, excellent WordPress tools, managed updates, AI tools, free SSL, good support",
      cons: "Renewal prices are higher than introductory pricing",
    },
    {
      provider: "SiteGround",
      bestFor: "Reliability & customer support",
      pros: "Excellent support, strong security, automatic backups, managed WordPress",
      cons: "More expensive than Hostinger",
    },
    {
      provider: "Rocket.net",
      bestFor: "Speed & premium managed hosting",
      pros: "Outstanding performance, built-in CDN/WAF, minimal maintenance",
      cons: "Significantly more expensive",
    },
    {
      provider: "Kinsta",
      bestFor: "Growing businesses",
      pros: "Premium infrastructure (Google Cloud), excellent dashboard, great performance",
      cons: "Higher starting price",
    },
    {
      provider: "WP Engine",
      bestFor: "Established businesses",
      pros: "Enterprise-grade performance and developer features",
      cons: "Expensive for very small businesses",
    },
  ];

  const cols = "150px 210px 1.5fr 1fr";

  return (
    <div
      style={{
        fontFamily: font,
        background: c.bg,
        width: 1200,
        margin: "0 auto",
        padding: "44px 48px 34px",
        color: c.ink,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ===== HEADER: TITOLO + H2 ===== */}
      <div style={{ borderBottom: `3px solid ${c.ink}`, paddingBottom: 20, marginBottom: 28 }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, margin: 0, lineHeight: 1.12 }}>
          Come l'AI valuta il tuo brand — e cosa c'entra il{" "}
          <span style={{ color: c.accent }}>POSIZIONAMENTO</span>
        </h1>
        <p style={{ fontSize: 20, color: c.body, margin: "12px 0 0", fontWeight: 600, lineHeight: 1.4 }}>
          Cosa restituisce l'AI — e come cambiare quello che scrive sul tuo prodotto
        </p>
      </div>

      {/* ===== BOLLA DOMANDA (destra) ===== */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 26 }}>
        <div
          style={{
            background: c.bubble,
            color: c.ink,
            fontSize: 19,
            fontWeight: 500,
            padding: "14px 22px",
            borderRadius: 22,
            maxWidth: 720,
            lineHeight: 1.4,
          }}
        >
          What is the best WordPress hosting provider for a small business?
        </div>
      </div>

      {/* ===== INTRO RISPOSTA ===== */}
      <p style={{ fontSize: 18.5, color: c.ink, margin: "0 0 24px", lineHeight: 1.5, maxWidth: 1000 }}>
        If you're looking for the{" "}
        <b>best overall WordPress hosting provider for a small business</b>, I'd narrow it down to these based
        on performance, ease of use, support, and value:
      </p>

      {/* ===== TABELLA ===== */}
      <div style={{ background: c.white, border: `1px solid ${c.line}`, borderRadius: 12, overflow: "hidden" }}>
        {/* header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: cols,
            gap: 24,
            padding: "16px 22px",
            borderBottom: `2px solid ${c.ink}`,
          }}
        >
          {["Provider", "Best for", "Pros", "Cons"].map((h) => (
            <div key={h} style={{ fontSize: 16, fontWeight: 900, color: c.ink, letterSpacing: 0.2 }}>
              {h}
            </div>
          ))}
        </div>

        {/* body rows */}
        {rows.map((r, i) => (
          <div
            key={r.provider}
            style={{
              display: "grid",
              gridTemplateColumns: cols,
              gap: 24,
              padding: "18px 22px",
              borderBottom: i === rows.length - 1 ? "none" : `1px solid ${c.line}`,
              background: i % 2 === 1 ? "#FCFCFC" : c.white,
            }}
          >
            <div style={{ fontSize: 16.5, fontWeight: 900, color: c.accent }}>{r.provider}</div>
            <div style={{ fontSize: 15.5, color: c.ink, lineHeight: 1.4 }}>{r.bestFor}</div>
            <div style={{ fontSize: 15.5, color: c.body, lineHeight: 1.45 }}>{r.pros}</div>
            <div style={{ fontSize: 15.5, color: c.body, lineHeight: 1.45 }}>{r.cons}</div>
          </div>
        ))}
      </div>

      {/* ===== FOOTER minimale ===== */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 24,
          paddingTop: 14,
          borderTop: `1px solid ${c.line}`,
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 700, color: c.body }}>
          Stefano Martiradonna · Product Marketing Fractional
        </span>
        <span
          style={{
            fontSize: 12.5,
            fontWeight: 700,
            color: c.ink,
            background: c.accentLane,
            border: `1.5px solid ${c.accent}`,
            padding: "5px 13px",
            borderRadius: 999,
          }}
        >
          newsletter "da 0 al PMF"
        </span>
      </div>
    </div>
  );
}
