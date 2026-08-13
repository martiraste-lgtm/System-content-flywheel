// Infografica — Architettura di brand di Anthropic
// Companion visivo Parte 2 dell'articolo "Valore del Positioning" (da 0 al PMF)
// Layout: box-piattaforma + cascata. Brand system chiaro. 800px portrait.
// Reference (non clonate): Dunford "Company Positioning with a Platform" + Mistral product ladder (productify).

export default function ArchitetturaBrandAnthropic() {
  // Palette brand system
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

  const products = [
    { name: "Claude Cowork", desc: "Lavoro agentico per i team" },
    { name: "Claude Security", desc: "Sicurezza e governance" },
    { name: "Claude Platform", desc: "API per builder e dev" },
  ];

  // Le 5 architetture di Dunford — evidenziate le due attive per Anthropic
  const dunford = [
    { n: "1", label: "Prodotto singolo", on: false },
    { n: "2", label: "Multi separati", on: false },
    { n: "3", label: "Lead + add-on", on: true },
    { n: "4", label: "Piattaforma", on: true },
    { n: "5", label: "Per segmento", on: false },
  ];

  return (
    <div
      style={{
        fontFamily: font,
        background: c.bg,
        width: 800,
        margin: "0 auto",
        padding: 32,
        color: c.ink,
        boxSizing: "border-box",
      }}
    >
      {/* TITOLO */}
      <div style={{ marginBottom: 20 }}>
        <h1 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, margin: 0 }}>
          L'architettura di brand di Anthropic
        </h1>
        <p style={{ fontSize: 16, color: c.body, marginTop: 8, marginBottom: 0 }}>
          Un brand, un POV, un lead product: come si tiene insieme una piattaforma.
        </p>
      </div>

      {/* TOP BAND — POV OMBRELLO */}
      <div
        style={{
          background: c.ink,
          borderRadius: 16,
          padding: "20px 24px",
          color: c.white,
          marginBottom: 18,
        }}
      >
        <div style={{ fontSize: 12, letterSpacing: 1.5, color: "#BBBBBB", fontWeight: 600 }}>
          POV AZIENDALE · L'OMBRELLO CHE GUIDA TUTTO
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, marginTop: 6 }}>
          Anthropic · Claude
        </div>
        <div style={{ fontSize: 16, fontStyle: "italic", color: "#EDEDED", marginTop: 4 }}>
          «AI research and products that put safety at the frontier»
        </div>
        <div style={{ fontSize: 13, color: "#BBBBBB", marginTop: 8 }}>
          + POV di Amodei: «l'AI scriverà il 100% del codice» → radicato nel coding, dove sta il fatturato.
        </div>
      </div>

      {/* freccia */}
      <div style={{ textAlign: "center", fontSize: 22, color: c.accent, margin: "2px 0 10px" }}>↓</div>

      {/* BOX PIATTAFORMA */}
      <div
        style={{
          background: c.salmon,
          borderRadius: 18,
          padding: 22,
          marginBottom: 18,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: 0.5 }}>THE CLAUDE PLATFORM</div>
          <div style={{ fontSize: 13, color: c.body, marginTop: 2 }}>
            Tutto vive sotto un solo brand: <b>«Claude X»</b>
          </div>
        </div>

        {/* LEAD PRODUCT */}
        <div
          style={{
            background: c.white,
            border: `2px solid ${c.accent}`,
            borderRadius: 14,
            padding: 18,
            position: "relative",
            marginBottom: 14,
          }}
        >
          <span
            style={{
              position: "absolute",
              top: -11,
              right: 16,
              background: c.accent,
              color: c.white,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 1,
              padding: "3px 10px",
              borderRadius: 999,
            }}
          >
            LEAD PRODUCT
          </span>
          <div style={{ fontSize: 19, fontWeight: 800 }}>⭐ Claude Code</div>
          <div style={{ fontSize: 14, color: c.body, marginTop: 4 }}>
            La porta d'ingresso e la fonte principale di fatturato. Apre la relazione, il resto la espande.
          </div>
        </div>

        {/* ADD-ON / ALTRI PRODOTTI */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {products.map((p) => (
            <div
              key={p.name}
              style={{
                background: c.white,
                border: `1px solid ${c.line}`,
                borderRadius: 12,
                padding: 14,
              }}
            >
              <div style={{ fontSize: 15, fontWeight: 700 }}>{p.name}</div>
              <div style={{ fontSize: 12, color: c.body, marginTop: 4, lineHeight: 1.3 }}>{p.desc}</div>
            </div>
          ))}
        </div>

        {/* TIER MODELLI */}
        <div
          style={{
            background: c.cream,
            borderRadius: 10,
            padding: "10px 14px",
            marginTop: 14,
            textAlign: "center",
            fontSize: 13,
            color: c.body,
          }}
        >
          Fondamenta · stessi modelli per tutti: <b>Opus · Sonnet · Haiku · Fable</b>
        </div>
      </div>

      {/* freccia */}
      <div style={{ textAlign: "center", fontSize: 22, color: c.accent, margin: "2px 0 10px" }}>↓</div>

      {/* CASCATA POV */}
      <div
        style={{
          display: "flex",
          alignItems: "stretch",
          justifyContent: "space-between",
          gap: 8,
          marginBottom: 18,
        }}
      >
        {[
          { k: "Safety", v: "il POV" },
          { k: "Trust", v: "la conseguenza" },
          { k: "Enterprise", v: "il mercato" },
        ].map((s, i, arr) => (
          <div key={s.k} style={{ display: "flex", alignItems: "center", flex: 1 }}>
            <div
              style={{
                background: c.peach,
                borderRadius: 12,
                padding: "14px 8px",
                textAlign: "center",
                flex: 1,
              }}
            >
              <div style={{ fontSize: 17, fontWeight: 800 }}>{s.k}</div>
              <div style={{ fontSize: 12, color: c.body, marginTop: 2 }}>{s.v}</div>
            </div>
            {i < arr.length - 1 && (
              <div style={{ fontSize: 20, color: c.accent, fontWeight: 800, padding: "0 4px" }}>→</div>
            )}
          </div>
        ))}
      </div>

      {/* ETICHETTA ARCHITETTURA + DUNFORD */}
      <div
        style={{
          background: c.white,
          border: `1px solid ${c.line}`,
          borderRadius: 14,
          padding: 18,
        }}
      >
        <div style={{ fontSize: 12, letterSpacing: 1.2, color: c.muted, fontWeight: 700 }}>
          ARCHITETTURA (DUNFORD)
        </div>
        <div style={{ fontSize: 18, fontWeight: 800, marginTop: 4, marginBottom: 12 }}>
          Piattaforma + Lead Product (coding)
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {dunford.map((d) => (
            <span
              key={d.n}
              style={{
                fontSize: 12,
                fontWeight: d.on ? 700 : 500,
                color: d.on ? c.white : c.muted,
                background: d.on ? c.accent : "#EFEFEF",
                borderRadius: 999,
                padding: "5px 11px",
              }}
            >
              {d.on ? "✓ " : ""}
              {d.label}
            </span>
          ))}
        </div>

        <div style={{ fontSize: 13, color: c.body, marginTop: 12, lineHeight: 1.4 }}>
          Il naming disciplinato (tutto è <b>«Claude X»</b>, come IBM con DB2) <b>amplifica</b> il
          positioning unico invece di frammentarlo. Un solo brand, una sola storia.
        </div>
      </div>
    </div>
  );
}
