// Infografica — "Architettura di Posizionamento" (mappa-indice della serie architetture Dunford)
// Macro-split: Single product (prodotto = azienda) vs Multi product (4 architetture).
// Finisce alle 4 architetture multi-product. Palette calda (coerente con le deep-dive del repo).
// Verticale 1080×~1560, sfondo chiaro. Densità essenziale: Nome + tag-logica + Quando + Test secco + Es.

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
    rose: "#FBE2D9", // 4° tint per la card ④
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
      es: "Salesforce: Marketing Cloud, «il migliore per chi ha il CRM»",
    },
    {
      n: "③",
      tag: "Combinazione",
      tagBg: c.cream,
      icon: "🧩",
      title: "Famiglia / Piattaforma",
      quando: "Stesso cliente, più prodotti: il valore è che stanno insieme (integrazione).",
      test: "«Meglio insieme» è vero e dimostrabile? ⚠️ «piattaforma» è abusata.",
      es: "Google: Maps · Drive · Docs",
    },
    {
      n: "④",
      tag: "Buyer diversi",
      tagBg: c.rose,
      icon: "🎯",
      title: "Per Segmento",
      quando: "Vendi a clienti diversi (es. banche vs sviluppatori): posizionamenti separati obbligatori.",
      fork: true,
      es: "Alphabet: Google · Waymo · Verily (house of brands)",
    },
  ];

  return (
    <div
      style={{
        fontFamily: font,
        background: c.bg,
        width: 1080,
        height: 1560,
        margin: "0 auto",
        padding: "40px 44px 36px",
        color: c.ink,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* HEADER */}
      <div style={{ borderBottom: `3px solid ${c.ink}`, paddingBottom: 16, marginBottom: 20 }}>
        <h1 style={{ fontSize: 42, fontWeight: 900, margin: 0, lineHeight: 1.05, whiteSpace: "nowrap" }}>
          Architetture di <span style={{ color: c.accent }}>Posizionamento</span>
        </h1>
        <p style={{ fontSize: 17.5, color: c.body, margin: "10px 0 0", lineHeight: 1.4 }}>
          Serve a rispondere alla domanda: <b style={{ color: c.ink }}>«Cosa stai posizionando? un
          prodotto, più prodotti, un brand, una piattaforma…?»</b>
        </p>
      </div>

      {/* SPLIT MACRO — Single vs Multi */}
      <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 16, marginBottom: 22 }}>
        {/* SINGLE — business-led, esempio Calendly */}
        <div style={{ background: c.white, border: `2px solid ${c.line}`, borderRadius: 14, padding: "16px 18px", display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: 1, color: c.muted, textTransform: "uppercase" }}>Single product</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 10 }}>
            <div style={{ background: c.salmon, border: `2px solid ${c.accent}`, borderRadius: 11, padding: "10px 16px", textAlign: "center" }}>
              <div style={{ fontSize: 18, fontWeight: 900, color: c.ink }}>📅 Calendly</div>
              <div style={{ fontSize: 11, fontWeight: 800, color: c.accent, letterSpacing: 0.3, marginTop: 2 }}>azienda = prodotto</div>
            </div>
          </div>
          <div style={{ fontSize: 13.5, color: c.body, marginTop: 11, lineHeight: 1.35 }}>
            Un solo prodotto: l'azienda <b>È</b> il prodotto → <b>un solo posizionamento</b>.
          </div>
        </div>

        {/* MULTI — arancio pieno */}
        <div style={{ background: c.accent, color: c.white, borderRadius: 14, padding: "16px 18px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 900, letterSpacing: 1, color: c.white, textTransform: "uppercase", opacity: 0.85 }}>Multi product</div>
          <div style={{ fontSize: 21, fontWeight: 900, marginTop: 8, lineHeight: 1.2 }}>
            Più prodotti, possibilità diverse
          </div>
          <div style={{ fontSize: 14.5, color: c.white, marginTop: 6, lineHeight: 1.35 }}>
            La struttura dipende da come e a chi li vendi → <b>4 architetture ↓</b>
          </div>
        </div>
      </div>

      {/* LE 4 ARCHITETTURE */}
      <div style={{ fontSize: 13, fontWeight: 900, letterSpacing: 1, color: c.muted, textTransform: "uppercase", marginBottom: 12 }}>
        Le 4 architetture multi-product
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, flex: 1 }}>
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
      <div style={{ background: a.tagBg, padding: "11px 16px", display: "flex", alignItems: "center", gap: 11 }}>
        <span style={{ fontSize: 22, fontWeight: 900, color: c.ink }}>{a.n}</span>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 19, fontWeight: 900, lineHeight: 1.1 }}>
            <span style={{ marginRight: 6 }}>{a.icon}</span>{a.title}
          </div>
        </div>
        <span style={{ background: c.white, color: c.accent, fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: 0.5, padding: "4px 10px", borderRadius: 999, border: `1px solid ${c.accent}` }}>
          {a.tag}
        </span>
      </div>

      {/* corpo */}
      <div style={{ padding: "14px 16px 16px", display: "flex", flexDirection: "column", gap: 11, flex: 1 }}>
        <Field c={c} label="Quando">{a.quando}</Field>

        {a.fork ? (
          <ForkMini c={c} />
        ) : (
          <div style={{ background: c.ink, borderRadius: 10, padding: "11px 13px" }}>
            <div style={{ fontSize: 11, fontWeight: 900, color: c.accent, letterSpacing: 0.6, textTransform: "uppercase", marginBottom: 3 }}>Test secco</div>
            <div style={{ fontSize: 13.5, color: c.white, lineHeight: 1.32 }}>{a.test}</div>
          </div>
        )}

        <div style={{ fontSize: 12.5, color: c.body, marginTop: "auto", lineHeight: 1.3 }}>
          <b style={{ color: c.ink }}>Es.</b> {a.es}
        </div>
      </div>
    </div>
  );
}

function Field({ c, label, children }) {
  return (
    <div>
      <span style={{ fontSize: 11, fontWeight: 900, color: c.accent, letterSpacing: 0.6, textTransform: "uppercase" }}>{label} </span>
      <span style={{ fontSize: 13.5, color: c.body, lineHeight: 1.35 }}>{children}</span>
    </div>
  );
}

// mini-fork per la card ④ (credibilità trasferisce?)
function ForkMini({ c }) {
  return (
    <div style={{ background: c.ink, borderRadius: 10, padding: "11px 13px" }}>
      <div style={{ fontSize: 11, fontWeight: 900, color: c.accent, letterSpacing: 0.6, textTransform: "uppercase", marginBottom: 6 }}>
        Test secco — la reputazione trasferisce da un mercato all'altro?
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <div style={{ flex: 1, background: "#2F3A24", borderRadius: 8, padding: "7px 9px" }}>
          <div style={{ fontSize: 12, fontWeight: 900, color: "#A3E635" }}>Sì →</div>
          <div style={{ fontSize: 12, color: c.white, lineHeight: 1.25 }}>ombrello aziendale</div>
        </div>
        <div style={{ flex: 1, background: "#3A2A2A", borderRadius: 8, padding: "7px 9px" }}>
          <div style={{ fontSize: 12, fontWeight: 900, color: "#F9A8A0" }}>No →</div>
          <div style={{ fontSize: 12, color: c.white, lineHeight: 1.25 }}>brand separati</div>
        </div>
      </div>
    </div>
  );
}
