// Infografica — Deep-dive #4 sub-serie "Architetture di Posizionamento": FAMIGLIA / PIATTAFORMA.
// Masthead/rubrica ripetibile (strip-indice "④ Famiglia" evidenziato) + hero "prodotti combinati
// sopra una fondamenta comune" + 3 esempi (HubSpot · Airtable · Rippling). Palette calda. 1080×1350.
// NB loghi: tile a colore brand + wordmark (nel render Gemini si chiedono i loghi veri).
// Dati verificati: HubSpot live giu 2026; Airtable (AI-native app platform: ProductCentral,
// Hyperagent, HyperDB) e Rippling (HR/IT/Finance Cloud su employee graph) via WebSearch lug 2026.
// Reference (non clonata): Dunford "A multi-product family or platform" + Aaker branded house.

export default function ArchitetturaFamigliaPiattaforma() {
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
  const activeTab = 3;
  const puntata = "④";

  const examples = [
    {
      note: "customer platform",
      name: "HubSpot",
      domain: "hubspot.com",
      foundation: "Smart CRM — il dato connesso (gratis, sotto tutti gli Hub)",
      products: "Marketing · Sales · Service · Content · Data · Commerce Hub",
      framing: "«Tutto il go-to-market su un dato unico — non sei tool scollegati.»",
    },
    {
      note: "AI-native app platform",
      name: "Airtable",
      domain: "airtable.com",
      foundation: "La piattaforma dati comune — app, agenti e workflow sullo stesso record",
      products: "App Platform · ProductCentral · Hyperagent · HyperDB",
      framing: "«Ogni prodotto costruito sullo stesso dato — non tool separati.»",
    },
    {
      note: "workforce management",
      name: "Rippling",
      domain: "rippling.com",
      foundation: "Employee graph — un unico record del dipendente sotto tutto",
      products: "HR Cloud · IT Cloud · Finance Cloud",
      framing: "«Assumi una persona: payroll, device, accessi e carta partono da soli.»",
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
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
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

      {/* ===== HERO BOX — prodotti combinati su fondamenta comune ===== */}
      <div style={{ background: c.white, border: `2px solid ${c.accent}`, borderRadius: 18, padding: "16px 20px 14px", marginBottom: 14 }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 22, fontWeight: 900, color: c.ink }}>🧩 Famiglia / Piattaforma</div>
          <div style={{ fontSize: 14, fontWeight: 800, color: c.accent, letterSpacing: 0.2, marginTop: 3, lineHeight: 1.3 }}>
            Posizioni i prodotti combinati, con una narrazione unica, e spieghi al cliente perché comprarli insieme
          </div>
        </div>

        {/* box azienda */}
        <div style={{ border: `2px solid ${c.ink}`, borderRadius: 10, padding: "9px 16px", textAlign: "center", margin: "12px auto 0", maxWidth: 660 }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: c.ink }}>Scopo è dimostrare che il cliente ha un <b>vantaggio comprandoli insieme</b> che separati. La logica è di combinazione: <b>l'integrazione è la differenziazione</b></span>
        </div>

        <div style={{ textAlign: "center", fontSize: 18, color: c.accent, lineHeight: 1, margin: "3px 0 2px" }}>↓</div>

        {/* tile-prodotto uguali = famiglia */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {["Prodotto A", "Prodotto B", "Prodotto C"].map((p) => (
            <div key={p} style={{ background: c.peach, border: `2px solid ${c.accent}`, borderRadius: 10, padding: "9px 10px", textAlign: "center" }}>
              <div style={{ fontSize: 14, fontWeight: 900, color: c.ink }}>{p}</div>
              <div style={{ fontSize: 11.5, color: c.body, marginTop: 2 }}>porta d'ingresso, positioning suo dentro la cornice</div>
            </div>
          ))}
        </div>

        {/* connettori verso la fondamenta */}
        <div style={{ textAlign: "center", color: c.accent, fontSize: 16, lineHeight: 1, margin: "4px 0" }}>
          ↕ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↕ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ↕
        </div>

        {/* FONDAMENTA comune */}
        <div style={{ background: c.salmon, border: `3px solid ${c.accent}`, borderRadius: 12, padding: "10px 16px", textAlign: "center" }}>
          <div style={{ fontSize: 15, fontWeight: 900, letterSpacing: 0.4 }}>FONDAMENTA COMUNE</div>
          <div style={{ fontSize: 12.5, color: c.body, marginTop: 3, lineHeight: 1.35 }}>
            È ciò che rende vero il «meglio insieme»: stesso dato, workflow cross-prodotto che i tool
            separati non fanno, un solo vendor. E si misura: <b>l'attach rate multi-prodotto</b> lo conferma — o è solo una slide.
          </div>
        </div>

        <div style={{ textAlign: "center", fontSize: 12.5, color: c.body, marginTop: 11, lineHeight: 1.4 }}>
          Positioning a <b>due livelli</b>: sopra la storia del sistema (parla a un buyer più senior, che
          possiede l'intero problema); sotto i prodotti, comprati <b>insieme o in ordine sparso</b>.
          Singoli o bundle è <b>pricing &amp; packaging, non positioning</b>.
        </div>
      </div>

      {/* ===== ESEMPI ===== */}
      <div style={{ fontSize: 20, color: c.ink, fontWeight: 900, marginBottom: 10 }}>
        Esempi:
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, flex: 1 }}>
        {examples.map((e) => (
          <ExampleCard key={e.name} c={c} e={e} />
        ))}
      </div>

      {/* ===== NOTA parola "piattaforma" ===== */}
      <div style={{ background: c.cream, borderRadius: 12, padding: "10px 16px", marginTop: 14 }}>
        <div style={{ fontSize: 12.5, color: c.body, lineHeight: 1.4 }}>
          ⚠️ <b>La parola «piattaforma»</b>: per i buyer è quasi sempre vuota e intercambiabile con
          «famiglia» <i>(Dunford)</i>. Usala solo se puoi <b>indicare la fondamenta comune</b> che tiene
          insieme i prodotti — sennò stai forzando un bundle e confondi il buyer.
        </div>
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

      {/* prodotti della famiglia */}
      <div>
        <div style={{ fontSize: 10, fontWeight: 900, color: c.accent, letterSpacing: 0.5, textTransform: "uppercase" }}>La famiglia · comprali in qualsiasi ordine</div>
        <div style={{ fontSize: 12.5, color: c.body, marginTop: 2, lineHeight: 1.35, fontWeight: 600 }}>{e.products}</div>
      </div>

      {/* fondamenta comune */}
      <div style={{ background: c.salmon, borderRadius: 10, padding: "9px 11px" }}>
        <div style={{ fontSize: 10, fontWeight: 900, color: c.accent, letterSpacing: 0.5, textTransform: "uppercase" }}>Fondamenta comune</div>
        <div style={{ fontSize: 13, fontWeight: 800, color: c.ink, marginTop: 2, lineHeight: 1.25 }}>{e.foundation}</div>
      </div>

      {/* framing */}
      <div style={{ fontSize: 12, color: c.body, fontStyle: "italic", marginTop: "auto", borderTop: `1px solid ${c.line}`, paddingTop: 8, lineHeight: 1.35 }}>
        {e.framing}
      </div>
    </div>
  );
}
