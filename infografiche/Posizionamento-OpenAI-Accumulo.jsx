// Infografica — Il posizionamento di OpenAI: il POV che autorizza l'accumulo
// Companion Parte 2 dell'articolo "Valore del Positioning". Brand system chiaro, portrait ~800px.
// Anti-esempio (everything-platform). Dati verificati live (giugno 2026). No loghi.

export default function PosizionamentoOpenAIAccumulo() {
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
    grayTile: "#ECECEC",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const products = [
    { name: "ChatGPT", fn: "assistente consumer", bg: c.salmon },
    { name: "GPT-5.5 API", fn: "modelli via API", bg: c.peach },
    { name: "Codex", fn: "agenti di coding", bg: c.cream },
    { name: "Operator", fn: "agente browser", bg: c.peach },
    { name: "gpt-image", fn: "generazione immagini", bg: c.salmon },
    { name: "Whisper", fn: "speech-to-text", bg: c.cream },
    { name: "Embeddings", fn: "ricerca semantica", bg: c.peach },
    { name: "Sora", fn: "video — app chiusa apr 2026", bg: c.grayTile, dead: true },
  ];

  const stats = [
    { v: "~900M", k: "utenti settimanali di ChatGPT" },
    { v: "~$25B", k: "run rate ($2B/mese)" },
    { v: "~$850B", k: "valutazione, verso l'IPO" },
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
      <h1 style={{ fontSize: 30, fontWeight: 800, margin: 0, lineHeight: 1.15 }}>
        Il posizionamento di OpenAI: il POV che autorizza l'accumulo
      </h1>
      <p style={{ fontSize: 15, color: c.body, marginTop: 10, marginBottom: 0, lineHeight: 1.45 }}>
        Il problema non è che OpenAI <i>non</i> abbia un POV. Ce l'ha — solo che è un POV{" "}
        <b>orizzontale</b> che rende logico vendere tutto a tutti.
      </p>

      {/* POV BOX */}
      <div style={{ background: c.ink, color: c.white, borderRadius: 14, padding: "18px 22px", marginTop: 18 }}>
        <div style={{ fontSize: 12, letterSpacing: 1.4, color: c.accent, fontWeight: 800 }}>
          IL POV (SAM ALTMAN)
        </div>
        <div style={{ fontSize: 18, fontStyle: "italic", marginTop: 6, lineHeight: 1.35 }}>
          «L'AI è una utility come l'elettricità o l'acqua, e la gente la compra da noi a consumo.»
        </div>
        <div style={{ fontSize: 13.5, color: "#CFCFCF", marginTop: 8 }}>
          → AI = tecnologia di <b style={{ color: c.white }}>consumo generalizzata</b>. Se è una commodity
          da contatore, è logico venderla a tutti, per tutto.
        </div>
      </div>

      {/* PRODOTTI — sprawl */}
      <div style={{ marginTop: 18 }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: c.ink, marginBottom: 10 }}>
          E infatti: 7+ tracce di prodotto, nessuna frase-ancora che le tiene insieme
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {products.map((p) => (
            <div
              key={p.name}
              style={{
                background: p.bg,
                borderRadius: 10,
                padding: "10px 14px",
                opacity: p.dead ? 0.65 : 1,
                border: p.dead ? `1px dashed ${c.muted}` : "none",
              }}
            >
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 800,
                  textDecoration: p.dead ? "line-through" : "none",
                  color: p.dead ? c.muted : c.ink,
                }}
              >
                {p.name}
              </div>
              <div style={{ fontSize: 11.5, color: c.body, marginTop: 2 }}>{p.fn}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROBLEMA */}
      <div style={{ background: c.salmon, borderRadius: 12, padding: 16, marginTop: 18 }}>
        <div style={{ fontSize: 14, fontWeight: 800 }}>⚠️ Il problema (e il conto)</div>
        <div style={{ fontSize: 13, color: c.body, marginTop: 6, lineHeight: 1.45 }}>
          La homepage non ha una frase-ancora: è un <b>hub di prodotti</b>. Capisci cosa «è» OpenAI solo
          perché conosci già ChatGPT. E l'accumulo presenta il conto: <b>app Sora chiusa</b> (apr 2026),
          "ci concentriamo sui prodotti che gli utenti amano di più". Accumuli → prima o poi poti.
        </div>
      </div>

      {/* PERCHÉ PUÒ FARLO */}
      <div style={{ background: c.white, border: `1px solid ${c.line}`, borderRadius: 12, padding: 16, marginTop: 16 }}>
        <div style={{ fontSize: 14, fontWeight: 800 }}>Perché può permettersi l'opacità</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 10 }}>
          {stats.map((s) => (
            <div key={s.v} style={{ background: c.cream, borderRadius: 10, padding: "12px 10px", textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 800, color: c.accent }}>{s.v}</div>
              <div style={{ fontSize: 11.5, color: c.body, marginTop: 3, lineHeight: 1.25 }}>{s.k}</div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 13, color: c.body, marginTop: 10, lineHeight: 1.4 }}>
          ChatGPT è ormai <b>sinonimo di «AI»</b> per il grande pubblico. La distribuzione compra il
          diritto all'opacità.
        </div>
      </div>

      {/* PUNCHLINE */}
      <div style={{ background: c.ink, color: c.white, borderRadius: 12, padding: "16px 20px", marginTop: 16 }}>
        <div style={{ fontSize: 16, fontWeight: 800, lineHeight: 1.35 }}>
          La lezione: <span style={{ color: c.accent }}>tu quella distribuzione non ce l'hai.</span>
        </div>
        <div style={{ fontSize: 13, color: "#CFCFCF", marginTop: 5, lineHeight: 1.4 }}>
          L'accumulo è un lusso che si paga con un brand da centinaia di milioni di utenti. Senza, è un
          posizionamento opaco e basta.
        </div>
      </div>
    </div>
  );
}
