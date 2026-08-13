// Infografica — Posizionamento "Lead product + add-on": posizioni il prodotto di punta
// Companion dell'articolo "Valore del Positioning". Brand system chiaro, portrait ~800px.
// Uniforme alla serie architetture (Prodotto-Singolo, Multi-Prodotto-Separati).
// Reference (non clonata): Dunford "Company Positioning with a Lead Product". Esempio Shopify (no loghi).

export default function PosizionamentoLeadProductAddOn() {
  const c = {
    bg: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#888888",
    salmon: "#FDE0D8",
    peach: "#FDE8C8",
    cream: "#FDF5D0",
    accent: "#F47B20",
    white: "#FFFFFF",
    line: "#E5E5E5",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const addons = [
    { name: "Shopify Payments", fn: "Incassa i pagamenti", bg: c.salmon },
    { name: "Shopify Capital", fn: "Prestiti per crescere", bg: c.peach },
    { name: "Shopify Shipping", fn: "Spedizioni semplificate", bg: c.cream },
  ];

  return (
    <div
      style={{
        fontFamily: font,
        background: c.bg,
        width: 800,
        margin: "0 auto",
        padding: 36,
        color: c.ink,
        boxSizing: "border-box",
      }}
    >
      {/* TITOLO */}
      <h1 style={{ fontSize: 29, fontWeight: 800, margin: 0, lineHeight: 1.15 }}>
        Posizionamento «Lead product + add-on»: posizioni il prodotto di punta
      </h1>
      <p style={{ fontSize: 15, color: c.body, marginTop: 10, marginBottom: 0, lineHeight: 1.45 }}>
        Posizioni un <b>solo prodotto di punta</b> — la porta d'ingresso. Gli add-on si vendono dopo,
        solo a chi ha già il lead, e nel loro positioning assumono di parlare a chi è <b>già dentro</b>.
      </p>

      {/* VISUAL */}
      <div
        style={{
          background: c.white,
          border: `1px solid ${c.line}`,
          borderRadius: 16,
          padding: 22,
          marginTop: 20,
        }}
      >
        {/* LEAD PRODUCT */}
        <div
          style={{
            background: c.white,
            border: `2px solid ${c.accent}`,
            borderRadius: 14,
            padding: "16px 20px",
            position: "relative",
            textAlign: "center",
          }}
        >
          <span
            style={{
              position: "absolute",
              top: -11,
              left: 20,
              background: c.accent,
              color: c.white,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 1,
              padding: "3px 10px",
              borderRadius: 999,
            }}
          >
            PRODOTTO DI PUNTA · LA PORTA D'INGRESSO
          </span>
          <div style={{ fontSize: 21, fontWeight: 800, marginTop: 6 }}>Shopify</div>
          <div style={{ fontSize: 14, color: c.body, marginTop: 4 }}>
            «Apri il tuo negozio online» — qui concentri <b>tutto</b> marketing e vendite verso i nuovi clienti.
          </div>
        </div>

        {/* connettore con condizione */}
        <div style={{ textAlign: "center", margin: "12px 0 10px" }}>
          <span
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: c.ink,
              background: c.cream,
              borderRadius: 999,
              padding: "5px 14px",
            }}
          >
            poi, solo a chi ha già il negozio ↓
          </span>
        </div>

        {/* ADD-ON */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {addons.map((a) => (
            <div
              key={a.name}
              style={{
                background: a.bg,
                borderRadius: 12,
                padding: 14,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                minHeight: 132,
              }}
            >
              <div style={{ fontSize: 15, fontWeight: 800, lineHeight: 1.15 }}>{a.name}</div>
              <div style={{ fontSize: 12.5, color: c.body }}>{a.fn}</div>
              <span
                style={{
                  marginTop: "auto",
                  alignSelf: "flex-start",
                  background: c.white,
                  border: `1px solid ${c.accent}`,
                  color: c.accent,
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: 0.4,
                  textTransform: "uppercase",
                  padding: "3px 8px",
                  borderRadius: 999,
                }}
              >
                Per chi vende su Shopify
              </span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", fontSize: 13, color: c.body, marginTop: 14, lineHeight: 1.4 }}>
          Gli add-on non si posizionano come «il miglior X del mondo», ma come{" "}
          <b>«il migliore per chi vende su Shopify»</b>. Molto più facile da vendere.
        </div>
      </div>

      {/* PERCHÉ FUNZIONA */}
      <div style={{ background: c.cream, borderRadius: 12, padding: 16, marginTop: 18 }}>
        <div style={{ fontSize: 14, fontWeight: 800 }}>💡 Perché funziona</div>
        <div style={{ fontSize: 13, color: c.body, marginTop: 6, lineHeight: 1.45 }}>
          <b>1.</b> Concentri tutta l'energia di marketing e vendite su <b>una cosa sola</b> verso i nuovi
          account, invece di vendere tutto a tutti.<br />
          <b>2.</b> Il lead è il prodotto più forte: più facile da vendere. Gli add-on entrano dopo, in
          automatico, sfruttando la relazione già aperta.
        </div>
        <div style={{ fontSize: 12.5, color: c.muted, marginTop: 8, fontStyle: "italic" }}>
          Stessa mossa di Salesforce: il Marketing Cloud veniva venduto solo a chi aveva già il CRM —
          «il migliore per chi usa Salesforce», non «il migliore al mondo».
        </div>
      </div>
    </div>
  );
}
