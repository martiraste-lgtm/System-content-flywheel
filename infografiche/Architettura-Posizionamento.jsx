// Infografica — "Architettura di Posizionamento" (mappa-indice della serie architetture Dunford) v2
// Macro-split VERTICALE: Single product a tutta riga → freccia → banda Multi product (arancio) →
// 3 architetture multi-product affiancate. "Per Segmento" eliminata dalla serie (semplificazione:
// le 3 casistiche coprono la maggior parte dei casi; il resto va trattato a parte).
// Es. aggiornati: ② Stripe (coerente deep-dive #3) · ③ HubSpot (coerente deep-dive #4).
// Palette calda (coerente con le deep-dive del repo). Verticale 1080×1350, sfondo chiaro.

export default function ArchitetturaPosizionamento() {
  const c = {
    bg: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#888888",
    white: "#FFFFFF",
    line: "#E5E5E5",
    salmon: "#FDE0D8",
    peach: "#FDE8C8",
    cream: "#FDF5D0",
    accent: "#F47B20",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const archs = [
    {
      n: "①",
      tag: "Aggregazione",
      tagBg: c.salmon,
      icon: "☂️",
      title: "Ombrello",
      quando: "Più prodotti, stesso cliente, venduti separati: ognuno sta in piedi da solo.",
      test: "Lo comprerebbe anche senza gli altri? L'azienda rassicura, non vende la combo.",
      es: "Atlassian: Jira · Confluence · Trello",
    },
    {
      n: "②",
      tag: "Sequenza",
      tagBg: c.peach,
      icon: "🚪",
      title: "Lead Product + Add-on",
      quando: "Vendi sempre un prodotto per primo; gli altri arrivano in cross sell e upsell perché sono la migliore soluzione se hai quel lead product.",
      test: "C'è un prodotto-cavallo-di-Troia che entra quasi sempre per primo?",
      es: "Stripe: Billing · Radar, «i migliori per chi già incassa con Stripe»",
    },
    {
      n: "③",
      tag: "Combinazione",
      tagBg: c.cream,
      icon: "🧩",
      title: "Famiglia / Piattaforma",
      quando: "Stesso cliente, più prodotti: il valore è che stanno insieme (integrazione).",
      test: "«Meglio insieme» è vero e dimostrabile? ⚠️ «piattaforma» è abusata.",
      es: "HubSpot: Marketing · Sales · Service Hub",
    },
  ];

  return (
    <div
      style={{
        fontFamily: font,
        background: c.bg,
        width: 1080,
        height: 1350,
        margin: "0 auto",
        padding: "40px 44px 36px",
        color: c.ink,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <div style={{ borderBottom: `3px solid ${c.ink}`, paddingBottom: 16, marginBottom: 22 }}>
        <h1 style={{ fontSize: 42, fontWeight: 900, margin: 0, lineHeight: 1.05, whiteSpace: "nowrap" }}>
          Architetture di <span style={{ color: c.accent }}>Posizionamento</span>
        </h1>
        <p style={{ fontSize: 17.5, color: c.body, margin: "10px 0 0", lineHeight: 1.4 }}>
          Serve a rispondere alla domanda: <b style={{ color: c.ink }}>«Cosa stai posizionando? un
          prodotto, più prodotti, un brand, una piattaforma…?»</b>
        </p>
      </div>

      {/* SINGLE PRODUCT — tutta la riga */}
      <div style={{ background: c.white, border: `2px solid ${c.line}`, borderRadius: 14, padding: "16px 22px", display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ background: c.salmon, border: `2px solid ${c.accent}`, borderRadius: 11, padding: "12px 20px", textAlign: "center", flexShrink: 0 }}>
          <div style={{ fontSize: 19, fontWeight: 900, color: c.ink }}>📅 Calendly</div>
          <div style={{ fontSize: 11, fontWeight: 800, color: c.accent, letterSpacing: 0.3, marginTop: 2 }}>azienda = prodotto</div>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: 1, color: c.muted, textTransform: "uppercase" }}>Single product</div>
          <div style={{ fontSize: 16, color: c.body, marginTop: 6, lineHeight: 1.4 }}>
            Un solo prodotto: l'azienda <b style={{ color: c.ink }}>È</b> il prodotto → <b style={{ color: c.ink }}>un solo posizionamento</b>.
            Anche se lo vendi a settori diversi, resta uno.
          </div>
        </div>
      </div>

      {/* freccia */}
      <div style={{ textAlign: "center", fontSize: 15, fontWeight: 800, color: c.body, margin: "12px 0" }}>
        Hai più di un prodotto? <span style={{ color: c.accent, fontSize: 22, verticalAlign: "middle" }}> ↓</span>
      </div>

      {/* MULTI PRODUCT — banda arancio a tutta riga */}
      <div style={{ background: c.accent, color: c.white, borderRadius: 14, padding: "18px 24px", display: "flex", alignItems: "center", gap: 20 }}>
        <div style={{ flexShrink: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: 1, textTransform: "uppercase", opacity: 0.85 }}>Multi product</div>
          <div style={{ fontSize: 24, fontWeight: 900, marginTop: 4, lineHeight: 1.15 }}>Più prodotti,<br />possibilità diverse</div>
        </div>
        <div style={{ fontSize: 16, lineHeight: 1.4, borderLeft: "2px solid rgba(255,255,255,0.4)", paddingLeft: 20 }}>
          La struttura dipende da <b>come</b> e <b>a chi</b> li vendi → <b>3 architetture ↓</b>
        </div>
      </div>

      {/* connettori verso le 3 card */}
      <svg width="100%" height="26" viewBox="0 0 300 26" preserveAspectRatio="none" style={{ display: "block", margin: "4px 0 2px" }}>
        {[50, 150, 250].map((x, i) => (
          <line key={i} x1="150" y1="1" x2={x} y2="25" stroke="#F47B20" strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>

      {/* LE 3 ARCHITETTURE */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, flex: 1 }}>
        {archs.map((a) => (
          <ArchCard key={a.n} c={c} a={a} />
        ))}
      </div>
    </div>
  );
}

/* ---------- card architettura ---------- */
function ArchCard({ c, a }) {
  return (
    <div
      style={{
        background: c.white,
        border: `1px solid ${c.line}`,
        borderRadius: 16,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      {/* header tag */}
      <div style={{ background: a.tagBg, padding: "12px 15px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
          <span style={{ fontSize: 21, fontWeight: 900, color: c.ink }}>{a.n}</span>
          <div style={{ fontSize: 17, fontWeight: 900, lineHeight: 1.12 }}>
            <span style={{ marginRight: 5 }}>{a.icon}</span>{a.title}
          </div>
        </div>
        <span style={{ display: "inline-block", background: c.white, color: c.accent, fontSize: 10.5, fontWeight: 900, textTransform: "uppercase", letterSpacing: 0.5, padding: "3px 10px", borderRadius: 999, border: `1px solid ${c.accent}`, marginTop: 7 }}>
          {a.tag}
        </span>
      </div>

      {/* corpo */}
      <div style={{ padding: "13px 15px 15px", display: "flex", flexDirection: "column", gap: 11, flex: 1 }}>
        <div>
          <span style={{ fontSize: 11, fontWeight: 900, color: c.accent, letterSpacing: 0.6, textTransform: "uppercase" }}>Quando </span>
          <span style={{ fontSize: 13.5, color: c.body, lineHeight: 1.35 }}>{a.quando}</span>
        </div>

        <div style={{ background: c.ink, borderRadius: 10, padding: "11px 13px" }}>
          <div style={{ fontSize: 11, fontWeight: 900, color: c.accent, letterSpacing: 0.6, textTransform: "uppercase", marginBottom: 3 }}>Test secco</div>
          <div style={{ fontSize: 13, color: c.white, lineHeight: 1.32 }}>{a.test}</div>
        </div>

        <div style={{ fontSize: 12.5, color: c.body, marginTop: "auto", lineHeight: 1.35 }}>
          <b style={{ color: c.ink }}>Es.</b> {a.es}
        </div>
      </div>
    </div>
  );
}
