// Infografica — Posizionamento orizzontale: il test (esempio Calendly)
// Companion dell'articolo "Valore del Positioning" + spiegazione single-product / multi-segment.
// Layout: matrice del test orizzontale (landscape) nel brand system chiaro. ~1180px.
// Reference (non clonata): "Horizontal Positioning Test" di Calendly/Fletch.

export default function PosizionamentoOrizzontaleCalendly() {
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
    gray: "#F0F0F0",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const caps = [
    { k: "Capability", v: "Prenoti un meeting mandando un solo messaggio/link", bg: c.salmon },
    { k: "Feature", v: "Link di prenotazione + integrazione col calendario", bg: c.peach },
    { k: "Benefit", v: "Niente più email avanti-indietro per trovare l'orario", bg: c.cream },
  ];

  const cols = ["Persona", "Tipo di azienda", "Come fa oggi", "Use case", "Problema"];

  const rows = [
    ["Sales Teams", "Aziende con meeting di vendita (demo, call)", "Email avanti-indietro per trovare l'orario", "Fissare un meeting", "Il ping-pong rallenta la vendita"],
    ["HR / Recruiting", "Aziende che fanno colloqui video", "Proporre tanti slot da far scegliere", "Fissare un meeting", "Gli slot non combaciano → coordinamento extra"],
    ["Insegnanti", "Scuole con ricevimenti online", "Messaggi dopo l'orario per coordinarsi", "Fissare un meeting", "Processo caotico per docenti, genitori, studenti"],
  ];

  const USECASE_COL = 3;

  return (
    <div
      style={{
        fontFamily: font,
        background: c.bg,
        width: 1180,
        margin: "0 auto",
        padding: 36,
        color: c.ink,
        boxSizing: "border-box",
      }}
    >
      {/* HEADER */}
      <div style={{ borderBottom: `2px dashed ${c.ink}`, paddingBottom: 16, marginBottom: 20 }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, margin: 0, lineHeight: 1.1 }}>
          Calendly: un prodotto, un positioning, più segmenti
        </h1>
        <p style={{ fontSize: 17, color: c.body, marginTop: 8, marginBottom: 0 }}>
          Quando puoi posizionarti <b>orizzontale</b> — e il test per scoprirlo.
        </p>
      </div>

      {/* PRODOTTO SINGOLO = AZIENDA */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          background: c.white,
          border: `1px solid ${c.line}`,
          borderRadius: 14,
          padding: 18,
          marginBottom: 22,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ border: `2px solid ${c.ink}`, borderRadius: 10, padding: "12px 18px", fontWeight: 800, fontSize: 16 }}>
            Calendly<br />
            <span style={{ fontSize: 12, fontWeight: 500, color: c.body }}>(l'azienda)</span>
          </div>
          <div style={{ fontSize: 28, fontWeight: 800, color: c.accent }}>=</div>
          <div style={{ border: `2px solid ${c.ink}`, borderRadius: 10, padding: "12px 18px", fontWeight: 800, fontSize: 16 }}>
            Calendly<br />
            <span style={{ fontSize: 12, fontWeight: 500, color: c.body }}>(il prodotto)</span>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, letterSpacing: 1.2, color: c.muted, fontWeight: 700 }}>
            PRODOTTO SINGOLO · UN SOLO POSITIONING
          </div>
          <div style={{ fontSize: 14, color: c.body, marginTop: 4, lineHeight: 1.4 }}>
            L'azienda <b>è</b> il prodotto: posizioni una cosa sola, e quella è tutto. È il caso tipico
            (quasi obbligato) di una startup early-stage. La domanda diventa solo: a quanti segmenti
            parlo con lo <b>stesso</b> positioning?
          </div>
        </div>
      </div>

      {/* STEP 1 — CAPACITÀ DEL PRODOTTO */}
      <StepHeader c={c} n="1" t="Parti dalle capacità del prodotto" s="Uguali per tutti i segmenti — è un prodotto solo" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginBottom: 8 }}>
        {caps.map((x) => (
          <div key={x.k} style={{ background: x.bg, borderRadius: 12, padding: 14 }}>
            <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: 0.5 }}>{x.k}</div>
            <div style={{ fontSize: 13, color: c.ink, marginTop: 5, lineHeight: 1.35 }}>{x.v}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", fontSize: 22, color: c.accent, margin: "6px 0" }}>↓</div>

      {/* STEP 2+3 — CHI SE NE CURA + SITUAZIONE */}
      <StepHeader c={c} n="2·3" t="Chi se ne cura? E qual è la sua situazione?" s="Persone diverse, contesti diversi — stessa colonna chiave" />

      {/* MATRICE */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1.4fr 1.5fr 1.05fr 1.5fr",
          gap: 8,
        }}
      >
        {/* header */}
        {cols.map((h, i) => (
          <div
            key={h}
            style={{
              background: i === USECASE_COL ? c.accent : c.gray,
              color: i === USECASE_COL ? c.white : c.ink,
              fontSize: 12,
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: 0.5,
              padding: "10px 12px",
              borderRadius: 8,
              textAlign: i === USECASE_COL ? "center" : "left",
            }}
          >
            {h}
          </div>
        ))}

        {/* righe */}
        {rows.map((row, r) =>
          row.map((cell, i) => {
            const isUC = i === USECASE_COL;
            return (
              <div
                key={`${r}-${i}`}
                style={{
                  background: isUC ? "#FFF3E8" : c.white,
                  border: isUC ? `2px solid ${c.accent}` : `1px solid ${c.line}`,
                  borderRadius: 10,
                  padding: "12px 12px",
                  fontSize: 13,
                  color: i === 0 ? c.ink : c.body,
                  fontWeight: i === 0 || isUC ? 700 : 400,
                  lineHeight: 1.35,
                  textAlign: isUC ? "center" : "left",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isUC ? "center" : "flex-start",
                }}
              >
                {cell}
              </div>
            );
          })
        )}
      </div>

      {/* ANCORA */}
      <div style={{ textAlign: "center", fontSize: 22, color: c.accent, margin: "8px 0 6px" }}>↑</div>
      <div style={{ background: c.ink, color: c.white, borderRadius: 14, padding: "16px 22px", marginBottom: 18 }}>
        <div style={{ fontSize: 12, letterSpacing: 1.2, color: c.accent, fontWeight: 800 }}>
          🎯 L'ANCORA DEL POSIZIONAMENTO ORIZZONTALE
        </div>
        <div style={{ fontSize: 17, fontWeight: 700, marginTop: 6, lineHeight: 1.35 }}>
          Segmenti diversi, <span style={{ color: c.accent }}>stesso use case</span>: «fissare un meeting».
          È l'ancora che fa risuonare <b>un solo messaggio</b> con pubblici diversi.
        </div>
      </div>

      {/* REGOLA ✅ / ❌ */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div style={{ background: c.cream, borderRadius: 12, padding: 16 }}>
          <div style={{ fontSize: 15, fontWeight: 800 }}>✅ Posizionati orizzontale</div>
          <div style={{ fontSize: 13, color: c.body, marginTop: 5, lineHeight: 1.4 }}>
            Solo se i segmenti condividono lo <b>stesso use case funzionale</b> (= l'ancora). È ciò che
            dà contesto al messaggio e lo fa risuonare con tutti.
          </div>
        </div>
        <div style={{ background: c.salmon, borderRadius: 12, padding: 16 }}>
          <div style={{ fontSize: 15, fontWeight: 800 }}>❌ Non farlo se gli use case divergono</div>
          <div style={{ fontSize: 13, color: c.body, marginTop: 5, lineHeight: 1.4 }}>
            Se ogni segmento usa il prodotto per uno scopo diverso, l'orizzontale non regge: serve un
            positioning più stretto, o una collezione di <b>soluzioni verticali</b>.
          </div>
        </div>
      </div>

      <div style={{ fontSize: 12, color: c.muted, marginTop: 14, fontStyle: "italic", textAlign: "center" }}>
        Che il prodotto si possa usare in mille modi non significa che tu debba posizionarlo orizzontale.
      </div>
    </div>
  );
}

function StepHeader({ c, n, t, s }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: 999,
          background: c.accent,
          color: c.white,
          fontWeight: 800,
          fontSize: 13,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {n}
      </div>
      <div>
        <div style={{ fontSize: 17, fontWeight: 800, lineHeight: 1.1 }}>{t}</div>
        <div style={{ fontSize: 13, color: c.body }}>{s}</div>
      </div>
    </div>
  );
}
