// Infografica — Posizionamento "Più prodotti separati": ombrello aziendale + uno per prodotto
// Companion dell'articolo "Valore del Positioning". Brand system chiaro, portrait ~800px.
// Uniforme a Posizionamento-Prodotto-Singolo.jsx (senza sezione maturità).
// Reference (non clonata): Dunford "Standard Multi-Product Company Positioning". Esempio Atlassian (no loghi).

export default function PosizionamentoMultiProdottoSeparati() {
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
    { name: "Jira", pos: "Gestione del lavoro per chi sviluppa software", bg: c.salmon },
    { name: "Confluence", pos: "Documentazione condivisa", bg: c.peach },
    { name: "Trello", pos: "Board per organizzare le attività", bg: c.cream },
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
        Posizionamento «Più prodotti separati»: ombrello aziendale + uno per prodotto
      </h1>
      <p style={{ fontSize: 15, color: c.body, marginTop: 10, marginBottom: 0, lineHeight: 1.45 }}>
        Più prodotti distinti, ognuno col suo positioning e acquistabile da solo. L'azienda è l'ombrello
        che li <b>somma</b>: ogni prodotto è una porta d'ingresso, il brand madre li tiene insieme con
        heritage e affidabilità.
      </p>

      {/* VISUAL — ombrello + prodotti */}
      <div
        style={{
          background: c.white,
          border: `1px solid ${c.line}`,
          borderRadius: 16,
          padding: 22,
          marginTop: 20,
        }}
      >
        {/* OMBRELLO AZIENDALE */}
        <div
          style={{
            background: c.ink,
            color: c.white,
            border: `2px solid ${c.accent}`,
            borderRadius: 14,
            padding: "16px 20px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 12, letterSpacing: 1.4, color: c.accent, fontWeight: 800 }}>
            POSITIONING OMBRELLO AZIENDALE
          </div>
          <div style={{ fontSize: 21, fontWeight: 800, marginTop: 4 }}>Atlassian</div>
          <div style={{ fontSize: 14, color: "#EDEDED", marginTop: 4 }}>
            «Strumenti per far lavorare meglio i team» — <b>= somma delle capability dei prodotti</b>
          </div>
        </div>

        {/* connettori */}
        <div style={{ display: "flex", justifyContent: "space-around", color: c.accent, fontSize: 20, margin: "6px 0 2px" }}>
          <span>↓</span>
          <span>↓</span>
          <span>↓</span>
        </div>

        {/* PRODOTTI */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          {products.map((p) => (
            <div
              key={p.name}
              style={{
                background: p.bg,
                borderRadius: 12,
                padding: 14,
                display: "flex",
                flexDirection: "column",
                gap: 8,
                minHeight: 138,
              }}
            >
              <div style={{ fontSize: 17, fontWeight: 800 }}>{p.name}</div>
              <div style={{ fontSize: 12.5, color: c.body, lineHeight: 1.35 }}>{p.pos}</div>
              <span
                style={{
                  marginTop: "auto",
                  alignSelf: "flex-start",
                  background: c.white,
                  border: `1px solid ${c.accent}`,
                  color: c.accent,
                  fontSize: 10.5,
                  fontWeight: 800,
                  letterSpacing: 0.5,
                  textTransform: "uppercase",
                  padding: "3px 8px",
                  borderRadius: 999,
                }}
              >
                Porta d'ingresso
              </span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", fontSize: 13, color: c.body, marginTop: 14, lineHeight: 1.4 }}>
          Ognuno ha il <b>suo positioning</b> e si compra <b>da solo</b>, uno alla volta secondo il
          bisogno. Spesso li usa la stessa azienda — ma non come pacchetto unico.
        </div>
      </div>

      {/* CHIUSURA */}
      <div style={{ background: c.cream, borderRadius: 12, padding: 16, marginTop: 18 }}>
        <div style={{ fontSize: 14, fontWeight: 800 }}>💡 Il ruolo del brand madre</div>
        <div style={{ fontSize: 13, color: c.body, marginTop: 5, lineHeight: 1.4 }}>
          Il positioning aziendale non sostituisce quelli di prodotto: li <b>somma</b>. Valori,
          affidabilità e heritage del brand madre tengono insieme l'ecosistema e fanno da ponte da un
          prodotto all'altro.
        </div>
      </div>
    </div>
  );
}
