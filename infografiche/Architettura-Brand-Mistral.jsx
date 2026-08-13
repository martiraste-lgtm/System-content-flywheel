// Infografica — Architettura di brand di Mistral
// Companion visivo Parte 2 dell'articolo "Valore del Positioning" (da 0 al PMF)
// Layout: piramide/ladder per segmento (fedele alla product ladder Mistral) + striscia di flusso.
// Brand system chiaro. 800px portrait.

export default function ArchitetturaBrandMistral() {
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

  // Scala per segmento — contenuto fedele alla product ladder Mistral (top → base)
  const tiers = [
    { prod: "Le Chat + tools", sub: "Knowledge workers", seg: "Knowledge workers", metric: "Discovery + product surface", bg: "#F9C9A3" },
    { prod: "Private & on-prem", sub: "Regulated enterprises", seg: "Regulated industries", metric: "High ARPU · Long contracts", bg: c.salmon },
    { prod: "Hosted APIs", sub: "Dev teams, SaaS builders", seg: "Startups & dev teams", metric: "Usage-based revenue", bg: c.peach },
    { prod: "Open models", sub: "Engineers, builders, startups", seg: "Builders & experimenters", metric: "Volume » ARPU", bg: c.cream },
  ];

  const pillars = [
    { k: "Sovranità", v: "niente lock-in USA" },
    { k: "Open weights", v: "scarichi e self-hosti" },
    { k: "Efficienza", v: "TCO più basso (MoE)" },
  ];

  const flow = [
    { k: "Open-source gravity", v: "attira i builder" },
    { k: "API conversion", v: "esperimenti → revenue" },
    { k: "Enterprise contracts", v: "high ARPU, lungo termine" },
  ];

  const dunford = [
    { label: "Prodotto singolo", on: false },
    { label: "Multi separati", on: false },
    { label: "Lead + add-on", on: false },
    { label: "Piattaforma", on: true },
    { label: "Per segmento", on: true },
  ];

  const LADDER_H = 360;

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
          L'architettura di brand di Mistral
        </h1>
        <p style={{ fontSize: 16, color: c.body, marginTop: 8, marginBottom: 0 }}>
          Una piattaforma, quattro segmenti: la gravità apre dal basso e converte verso l'alto.
        </p>
      </div>

      {/* TOP BAND — POV OMBRELLO */}
      <div style={{ background: c.ink, borderRadius: 16, padding: "20px 24px", color: c.white, marginBottom: 18 }}>
        <div style={{ fontSize: 12, letterSpacing: 1.5, color: "#BBBBBB", fontWeight: 600 }}>
          POV AZIENDALE · L'OMBRELLO CHE GUIDA TUTTO
        </div>
        <div style={{ fontSize: 22, fontWeight: 800, marginTop: 6 }}>Mistral</div>
        <div style={{ fontSize: 18, fontStyle: "italic", color: "#FFFFFF", marginTop: 6 }}>
          «L'AI di frontiera la vuoi nelle tue mani.»
        </div>

        {/* FONDAMENTA — tre pilastri */}
        <div style={{ fontSize: 12, letterSpacing: 1, color: "#BBBBBB", fontWeight: 600, marginTop: 14 }}>
          FONDAMENTA · TRE PILASTRI SOSTENGONO LA SCOMMESSA
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
          {pillars.map((p) => (
            <span
              key={p.k}
              style={{
                fontSize: 12,
                color: c.white,
                border: `1px solid ${c.accent}`,
                borderRadius: 999,
                padding: "5px 12px",
              }}
            >
              <b>{p.k}</b> · <span style={{ color: "#CFCFCF" }}>{p.v}</span>
            </span>
          ))}
        </div>
      </div>

      {/* freccia */}
      <div style={{ textAlign: "center", fontSize: 22, color: c.accent, margin: "2px 0 10px" }}>↓</div>

      {/* PIRAMIDE / SCALA con didascalie a destra */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ textAlign: "center", marginBottom: 12 }}>
          <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: 0.5 }}>LA SCALA PER SEGMENTO</div>
          <div style={{ fontSize: 13, color: c.body, marginTop: 2 }}>Stesso brand, quattro tipi di cliente</div>
        </div>

        <div style={{ display: "flex", alignItems: "stretch" }}>
          {/* Piramide (clip-path trapezio) */}
          <div
            style={{
              width: "56%",
              height: LADDER_H,
              clipPath: "polygon(32% 0, 68% 0, 100% 100%, 0 100%)",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {tiers.map((t) => (
              <div
                key={t.prod}
                style={{
                  flex: 1,
                  background: t.bg,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  padding: "0 8px",
                }}
              >
                <div style={{ fontSize: 16, fontWeight: 800, color: c.ink }}>{t.prod}</div>
                <div style={{ fontSize: 12, color: c.body, marginTop: 2 }}>{t.sub}</div>
              </div>
            ))}
          </div>

          {/* Didascalie a destra, allineate alle bande */}
          <div style={{ width: "44%", height: LADDER_H, display: "flex", flexDirection: "column", gap: 2 }}>
            {tiers.map((t) => (
              <div key={t.seg} style={{ flex: 1, display: "flex", alignItems: "center" }}>
                <div style={{ width: 28, borderTop: `1px dashed ${c.muted}`, marginRight: 10 }} />
                <div>
                  <div style={{ fontSize: 15, fontWeight: 800, color: c.ink, lineHeight: 1.15 }}>{t.seg}</div>
                  <div style={{ fontSize: 12, color: c.body, marginTop: 2 }}>{t.metric}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* freccia */}
      <div style={{ textAlign: "center", fontSize: 22, color: c.accent, margin: "2px 0 10px" }}>↓</div>

      {/* STRISCIA DI FLUSSO (land & expand) */}
      <div style={{ display: "flex", alignItems: "stretch", justifyContent: "space-between", gap: 8, marginBottom: 18 }}>
        {flow.map((s, i, arr) => (
          <div key={s.k} style={{ display: "flex", alignItems: "center", flex: 1 }}>
            <div style={{ background: c.peach, borderRadius: 12, padding: "14px 8px", textAlign: "center", flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 800, lineHeight: 1.1 }}>{s.k}</div>
              <div style={{ fontSize: 12, color: c.body, marginTop: 3 }}>{s.v}</div>
            </div>
            {i < arr.length - 1 && (
              <div style={{ fontSize: 20, color: c.accent, fontWeight: 800, padding: "0 4px" }}>→</div>
            )}
          </div>
        ))}
      </div>

      {/* ETICHETTA ARCHITETTURA + DUNFORD */}
      <div style={{ background: c.white, border: `1px solid ${c.line}`, borderRadius: 14, padding: 18 }}>
        <div style={{ fontSize: 12, letterSpacing: 1.2, color: c.muted, fontWeight: 700 }}>
          ARCHITETTURA (DUNFORD)
        </div>
        <div style={{ fontSize: 18, fontWeight: 800, marginTop: 4, marginBottom: 12 }}>
          Piattaforma + Posizionamento per segmento
        </div>

        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {dunford.map((d) => (
            <span
              key={d.label}
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
          La credibilità <b>open-source</b> (un segmento) costruisce la fiducia che converte verso
          l'<b>enterprise</b> (un altro): è ciò che giustifica l'ombrello unico. E il POV fa da filtro
          anti-accumulo — Mistral <b>consolida</b> (3 modelli fusi in Small 4, Le Chat → Vibe).
        </div>
      </div>
    </div>
  );
}
