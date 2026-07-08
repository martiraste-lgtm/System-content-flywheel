// Infografica — Deep-dive #3 sub-serie "Architetture di Posizionamento": LEAD PRODUCT + ADD-ON.
// Masthead/rubrica ripetibile (strip-indice "③ Lead+Add-on" evidenziato) + hero "company = lead + extras"
// + 3 esempi (Stripe nota · Ramp trend · Vanta hot). Palette calda. Verticale 1080×1350.
// NB loghi: tile a colore brand + wordmark (nel render Gemini si chiedono i loghi veri).
// Dati/liste-prodotto da riverificare prima del push.

export default function ArchitetturaLeadAddon() {
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
    accentSoft: "#FFE8D2",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const tabs = ["Single", "Ombrello", "Lead+Add-on", "Famiglia"];
  const activeTab = 2;
  const puntata = "③";

  const examples = [
    {
      note: "gigante pagamenti",
      name: "Stripe",
      domain: "stripe.com",
      lead: "Payments",
      addon: "Billing · Radar · Connect · Issuing · Capital · Tax",
      framing: "«I migliori per chi già incassa con Stripe.»",
    },
    {
      note: "fintech spend",
      name: "Ramp",
      domain: "ramp.com",
      lead: "Carta aziendale + spend",
      addon: "Bill Pay · Travel · Treasury · Procurement",
      framing: "Cross-sell a chi usa già la carta.",
    },
    {
      note: "compliance B2B",
      name: "Vanta",
      domain: "vanta.com",
      lead: "Automazione SOC 2",
      addon: "ISO/HIPAA · Trust Center · Vendor Risk · AI",
      framing: "Per chi è già su Vanta per la compliance.",
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
      {/* ===== MASTHEAD (rubrica) ===== */}
      <div style={{ borderBottom: `3px solid ${c.ink}`, paddingBottom: 14, marginBottom: 14 }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, margin: 0, lineHeight: 1.05, whiteSpace: "nowrap" }}>
          Architetture di <span style={{ color: c.accent }}>Posizionamento</span>
        </h1>
        <p style={{ fontSize: 16, color: c.body, margin: "8px 0 0", lineHeight: 1.4 }}>
          Serve a rispondere alla domanda: <b style={{ color: c.ink }}>«Cosa stai posizionando? un
          prodotto, più prodotti, un brand, una piattaforma…?»</b>
        </p>
      </div>

      {/* strip-indice rubrica */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
        {tabs.map((t, i) => {
          const on = i === activeTab;
          return (
            <span
              key={t}
              style={{
                background: on ? c.accent : c.white,
                color: on ? c.white : c.muted,
                border: `1.5px solid ${on ? c.accent : c.line}`,
                fontSize: 13,
                fontWeight: on ? 900 : 700,
                padding: "6px 14px",
                borderRadius: 999,
              }}
            >
              {on ? `${puntata} ` : ""}{t}
            </span>
          );
        })}
      </div>

      {/* ===== HERO BOX — company = lead + extras ===== */}
      <div style={{ background: c.white, border: `2px solid ${c.accent}`, borderRadius: 18, padding: "18px 20px", marginBottom: 18 }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 22, fontWeight: 900, color: c.ink }}>🚪 Lead Product + Add-on</div>
          <div style={{ fontSize: 14, fontWeight: 800, color: c.accent, letterSpacing: 0.2, marginTop: 3, lineHeight: 1.3 }}>Devi avere un prodotto chiaramente dominante come porta d'ingresso</div>
        </div>

        {/* box azienda */}
        <div style={{ border: `2px solid ${c.ink}`, borderRadius: 10, padding: "10px 16px", textAlign: "center", margin: "14px auto 0", maxWidth: 620 }}>
          <span style={{ fontSize: 15, fontWeight: 900 }}>Azienda: </span>
          <span style={{ fontSize: 14, fontWeight: 700, color: c.ink }}>posizioni il lead product come se fosse l'azienda</span>
        </div>

        <div style={{ textAlign: "center", fontSize: 18, color: c.accent, lineHeight: 1, margin: "4px 0 2px" }}>↓</div>

        {/* box LEAD prominente */}
        <div style={{ background: c.salmon, border: `3px solid ${c.accent}`, borderRadius: 12, padding: "14px 16px", textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <div style={{ fontSize: 18, fontWeight: 900, color: c.ink, letterSpacing: 0.5 }}>LEAD PRODUCT</div>
          <div style={{ fontSize: 13, color: c.body, marginTop: 5, lineHeight: 1.4 }}>Vendi sempre un prodotto per primo (il prodotto di punta) allo stesso tipo di cliente, e gli altri arrivano dopo, in cross/upsell, a chi ha già comprato il primo.</div>
        </div>

        {/* frecce verso add-on */}
        <svg width="100%" height="24" viewBox="0 0 300 24" preserveAspectRatio="none" style={{ display: "block", margin: "2px 0 0" }}>
          {[90, 210].map((x, i) => (
            <line key={i} x1="150" y1="1" x2={x} y2="23" stroke={c.accent} strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>

        {/* 2 add-on */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 2 }}>
          <div style={{ background: c.peach, border: `2px solid ${c.accent}`, borderRadius: 10, padding: "11px 12px", textAlign: "center" }}>
            <div style={{ fontSize: 14, fontWeight: 900, color: c.ink }}>Add-on</div>
            <div style={{ fontSize: 12, color: c.body, marginTop: 2 }}>«il migliore per chi ha già il lead»</div>
          </div>
          <div style={{ background: c.cream, border: `2px solid ${c.accent}`, borderRadius: 10, padding: "11px 12px", textAlign: "center" }}>
            <div style={{ fontSize: 14, fontWeight: 900, color: c.ink }}>Add-on</div>
            <div style={{ fontSize: 12, color: c.body, marginTop: 2 }}>cross-sell alla base installata</div>
          </div>
        </div>

        <div style={{ textAlign: "center", fontSize: 13, color: c.body, marginTop: 13, lineHeight: 1.4 }}>
          Concentri marketing e sales sul <b>lead</b> per i nuovi clienti; gli add-on <b>assumono</b> che
          il cliente abbia già il lead.
        </div>
      </div>

      {/* ===== ESEMPI ===== */}
      <div style={{ fontSize: 20, color: c.ink, fontWeight: 900, marginBottom: 12 }}>
        Esempi:
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, flex: 1 }}>
        {examples.map((e) => (
          <ExampleCard key={e.name} c={c} e={e} />
        ))}
      </div>
    </div>
  );
}

/* ---------- componenti ---------- */

function ExampleCard({ c, e }) {
  return (
    <div style={{ background: c.white, border: `1px solid ${c.line}`, borderRadius: 16, padding: "15px 15px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: 10 }}>
      {/* logo reale + nome */}
      <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
        <img
          src={`https://logo.clearbit.com/${e.domain}`}
          alt={e.name}
          width={42}
          height={42}
          style={{ width: 42, height: 42, borderRadius: 10, objectFit: "contain", background: c.white, border: `1px solid ${c.line}`, flexShrink: 0 }}
        />
        <div>
          <div style={{ fontSize: 19, fontWeight: 900, color: c.ink, lineHeight: 1.05 }}>{e.name}</div>
          <div style={{ fontSize: 11.5, color: c.muted, fontWeight: 700 }}>{e.note}</div>
        </div>
      </div>

      {/* lead */}
      <div style={{ background: c.salmon, borderRadius: 10, padding: "9px 11px" }}>
        <div style={{ fontSize: 10, fontWeight: 900, color: c.accent, letterSpacing: 0.5, textTransform: "uppercase" }}>Lead · il cuneo</div>
        <div style={{ fontSize: 14, fontWeight: 800, color: c.ink, marginTop: 2, lineHeight: 1.2 }}>{e.lead}</div>
      </div>

      {/* add-on */}
      <div>
        <div style={{ fontSize: 10, fontWeight: 900, color: c.accent, letterSpacing: 0.5, textTransform: "uppercase" }}>Add-on · cross-sell alla base</div>
        <div style={{ fontSize: 12.5, color: c.body, marginTop: 2, lineHeight: 1.35, fontWeight: 600 }}>{e.addon}</div>
      </div>

      {/* framing */}
      <div style={{ fontSize: 12, color: c.body, fontStyle: "italic", marginTop: "auto", borderTop: `1px solid ${c.line}`, paddingTop: 8, lineHeight: 1.35 }}>
        {e.framing}
      </div>
    </div>
  );
}
