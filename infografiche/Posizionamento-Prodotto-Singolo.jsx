// Infografica — Posizionamento "Prodotto singolo": Prodotto = Azienda + 3 strategie per maturità di categoria
// Companion dell'articolo "Valore del Positioning" (da 0 al PMF). Brand system chiaro, portrait ~800px.
// Reference (non clonate): "Single Product Company Positioning" (reinterpretata come cerchi sovrapposti)
// + "3 Strategies to Position Your Startup" di Fletch/Kaminski (senza loghi; esempi nuovi).

export default function PosizionamentoProdottoSingolo() {
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

  const strategies = [
    {
      n: "1",
      tag: "Categoria esistente",
      tagBg: c.salmon,
      title: "Competere in una categoria esistente",
      client: "Il cliente sa già di aver bisogno di una soluzione e confronta i vendor.",
      job: "Vincere il confronto.",
      ex: "Pipedrive vs Salesforce — il CRM semplice per piccoli team di vendita.",
    },
    {
      n: "2",
      tag: "Categoria emergente",
      tagBg: c.peach,
      title: "Far crescere una categoria emergente",
      client: "Ha il problema, ma molti non hanno ancora adottato una soluzione.",
      job: "Portare nuovi attori nella categoria.",
      ex: "Qonto — porta freelance e PMI nel business banking.",
    },
    {
      n: "3",
      tag: "Categoria nuova",
      tagBg: c.cream,
      title: "Creare una nuova categoria",
      client: "Non sta cercando, non ha budget, forse non sa di avere il problema.",
      job: "Creare la domanda.",
      ex: "Gong — ha creato la «revenue intelligence».",
    },
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
        Posizionamento «Prodotto singolo»: Prodotto = Azienda
      </h1>
      <p style={{ fontSize: 15, color: c.body, marginTop: 10, marginBottom: 0, lineHeight: 1.45 }}>
        Nella maggior parte dei casi un'azienda con un solo prodotto <b>non ha bisogno</b> di un
        posizionamento separato per azienda e prodotto: confonderesti l'utente e non hai le risorse
        per portarne avanti due.
      </p>

      {/* VISUAL — cerchi sovrapposti */}
      <div
        style={{
          background: c.white,
          border: `1px solid ${c.line}`,
          borderRadius: 16,
          padding: 20,
          marginTop: 18,
        }}
      >
        <div style={{ position: "relative", display: "flex", justifyContent: "center", height: 210 }}>
          {/* cerchio Azienda */}
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "rgba(253,224,216,0.9)",
              border: `2px solid ${c.accent}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              paddingLeft: 22,
              boxSizing: "border-box",
            }}
          >
            <span style={{ fontSize: 18, fontWeight: 800, color: c.ink }}>Azienda</span>
          </div>
          {/* cerchio Prodotto (sovrapposto) */}
          <div
            style={{
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "rgba(253,232,200,0.85)",
              border: `2px solid ${c.accent}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              paddingRight: 18,
              boxSizing: "border-box",
              marginLeft: -90,
            }}
          >
            <span style={{ fontSize: 18, fontWeight: 800, color: c.ink }}>Prodotto</span>
          </div>
          {/* badge = al centro */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 46,
              height: 46,
              borderRadius: "50%",
              background: c.accent,
              color: c.white,
              fontSize: 26,
              fontWeight: 800,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `3px solid ${c.white}`,
            }}
          >
            =
          </div>
        </div>
        <div style={{ textAlign: "center", fontSize: 14, color: c.body, marginTop: 6 }}>
          In una one-product company <b>sono la stessa cosa</b>: un solo posizionamento.
        </div>
      </div>

      {/* PONTE */}
      <div
        style={{
          background: c.ink,
          color: c.white,
          borderRadius: 12,
          padding: "14px 18px",
          marginTop: 18,
          fontSize: 15,
          lineHeight: 1.4,
        }}
      >
        Deciso <b>COSA</b> posizioni (una cosa sola), resta da scegliere <b style={{ color: c.accent }}>COME</b> —
        e dipende dalla <b>maturità della categoria</b>. ↓
      </div>

      {/* ASSE MATURITÀ */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "16px 2px 10px" }}>
        <span style={{ fontSize: 12, color: c.muted, fontWeight: 600 }}>Categoria matura e affollata</span>
        <div style={{ flex: 1, height: 2, background: c.line, position: "relative" }}>
          <div style={{ position: "absolute", right: -2, top: -4, color: c.muted }}>▶</div>
        </div>
        <span style={{ fontSize: 12, color: c.muted, fontWeight: 600 }}>Categoria che non esiste ancora</span>
      </div>

      {/* 3 STRATEGIE */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
        {strategies.map((s) => (
          <div
            key={s.n}
            style={{
              background: c.white,
              border: `1px solid ${c.line}`,
              borderRadius: 14,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* tag header */}
            <div
              style={{
                background: s.tagBg,
                padding: "8px 12px",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  background: c.accent,
                  color: c.white,
                  fontSize: 12,
                  fontWeight: 800,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {s.n}
              </span>
              <span style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.4 }}>
                {s.tag}
              </span>
            </div>
            {/* corpo */}
            <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
              <div style={{ fontSize: 15, fontWeight: 800, lineHeight: 1.2 }}>{s.title}</div>
              <div style={{ fontSize: 12.5, color: c.body, lineHeight: 1.35 }}>{s.client}</div>
              <div style={{ fontSize: 13, color: c.ink }}>
                <span style={{ fontWeight: 800, color: c.accent }}>Il tuo lavoro:</span> {s.job}
              </div>
              <div style={{ fontSize: 12, color: c.body, marginTop: "auto", lineHeight: 1.35 }}>
                <b>Es.</b> {s.ex}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* WARNING */}
      <div style={{ background: c.salmon, borderRadius: 12, padding: 16, marginTop: 16 }}>
        <div style={{ fontSize: 14, fontWeight: 800 }}>⚠️ L'errore più comune</div>
        <div style={{ fontSize: 13, color: c.body, marginTop: 5, lineHeight: 1.4 }}>
          Prendere in prestito la strategia di chi gioca un altro gioco: chi vuole conquistare quote si
          comporta da creatore di categoria (e viceversa). Risultato: un messaggio scollegato da come il
          cliente compra davvero.
        </div>
      </div>
    </div>
  );
}
