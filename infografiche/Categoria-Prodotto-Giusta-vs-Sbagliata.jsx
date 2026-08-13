// Infografica — Categoria di Prodotto: giusta vs sbagliata (companion del pillar "Guida al Posizionamento — I 3 elementi")
// Tema: la CATEGORIA come frame mentale che il buyer del segmento core ti assegna prima di parlarti.
// Stesso linguaggio visivo delle comparative (STYLE-GUIDE, Variante B): palette rosso=sbagliata / verde=giusta,
// nodi/box arrotondati, sfondi sfumati, callout scuro finale. Verticale 1080, altezza auto, sfondo chiaro.
// Fonte concettuale: Alexander Shartsis ("category losses / perdite invisibili") — riletto con la catena di Stefano
// (la categoria è il layer anchor, a valle di tesi e strategia). NON clonata.

export default function CategoriaProdottoGiustaVsSbagliata() {
  const c = {
    bg: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#8A8A8A",
    white: "#FFFFFF",
    line: "#E5E5E5",
    accent: "#F47B20", // arancio — accento neutro del titolo (layer categoria/anchor)
    accentLane: "#FFF3E6",
    // sbagliata (rosso) / giusta (verde lime) — coerenti con le altre comparative
    bad: "#EF3B2C",
    badSoft: "#F9C8C1",
    badLane: "#FFF1EF",
    good: "#65A30D",
    goodSoft: "#C3E88D",
    goodLane: "#F2FBE3",
    goodBright: "#A3E635",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  // 6 righe speculari: stessa dimensione, esito opposto
  const sbagliata = [
    { lead: "Confronto:", t: "ti mette contro competitor che non puoi battere sui loro termini" },
    { lead: "Criteri:", t: "ti giudica su parametri che non ti favoriscono" },
    { lead: "Prezzo:", t: "sembri caro — per una categoria che non è la tua" },
    { lead: "Esito:", t: "perdite invisibili — il deal sparisce, loggato come «no decision»" },
    { lead: "Percezione:", t: "ti legge come nice-to-have, non must-have" },
    { lead: "Ciclo:", t: "più lungo del tuo ACV: non sa dove metterti e si copre coinvolgendo più gente" },
  ];
  const giusta = [
    { lead: "Confronto:", t: "ti mette contro le vere alternative — quelle che puoi vincere" },
    { lead: "Criteri:", t: "ti giudica sui parametri dove sei forte" },
    { lead: "Prezzo:", t: "cade nella fascia che si aspetta di pagare" },
    { lead: "Esito:", t: "vinci valutazioni che non iniziano nemmeno: sei l'ovvio" },
    { lead: "Percezione:", t: "ti legge come must-have" },
    { lead: "Ciclo:", t: "più corto, meno stakeholder: sa già in che scatola sei" },
  ];

  return (
    <div
      style={{
        fontFamily: font,
        background: c.bg,
        width: 1080,
        margin: "0 auto",
        padding: "48px 52px 36px",
        color: c.ink,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ===== SEZIONE 1 — HEADER ===== */}
      <div style={{ borderBottom: `3px solid ${c.ink}`, paddingBottom: 20, marginBottom: 22 }}>
        <h1 style={{ fontSize: 46, fontWeight: 900, margin: 0, lineHeight: 1.08 }}>
          <span style={{ color: c.accent }}>Categoria</span> di Prodotto
        </h1>
        <p style={{ fontSize: 21, color: c.body, margin: "10px 0 0", fontWeight: 600, lineHeight: 1.35 }}>
          perché è importante — e come capire qual è quella giusta per il tuo prodotto
        </p>
      </div>

      {/* ===== SEZIONE 2 — COS'È LA CATEGORIA (H2) ===== */}
      <div
        style={{
          background: c.accentLane,
          borderLeft: `5px solid ${c.accent}`,
          borderRadius: 12,
          padding: "18px 22px",
          marginBottom: 30,
        }}
      >
        <div style={{ fontSize: 16, fontWeight: 900, color: c.accent, letterSpacing: 0.4, marginBottom: 6 }}>
          COS'È LA CATEGORIA, NELLA TESTA DEL TUO BUYER
        </div>
        <p style={{ fontSize: 17.5, color: c.ink, margin: 0, lineHeight: 1.5 }}>
          È la <b>scatola mentale</b> in cui il buyer ti infila nei primi secondi — prima di parlarti, spesso
          prima di arrivare sul sito. Quella scatola decide tre cose al posto tuo:{" "}
          <b style={{ color: c.accent }}>con chi ti confronta, con quali criteri ti giudica, quanto si aspetta di pagare.</b>{" "}
          Non la scegli con le parole della homepage: o gliela suggerisci tu, o se la costruisce lui con quello che trova più vicino.
        </p>
      </div>

      {/* ===== SEZIONE 3 — SBAGLIATA vs GIUSTA ===== */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }}>
        <CompareTitle c={c} color={c.bad} a="Categoria SBAGLIATA" b="cosa ti succede" />
        <CompareTitle c={c} color={c.good} a="Categoria GIUSTA" b="cosa ti succede" />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26, marginTop: 14 }}>
        <CompareList c={c} tone="bad" mark="✕" items={sbagliata} />
        <CompareList c={c} tone="good" mark="✓" items={giusta} />
      </div>

      {/* ===== SEZIONE 4 — COME TROVARE LA CATEGORIA GIUSTA ===== */}
      <div
        style={{
          marginTop: 30,
          background: c.white,
          border: `2px solid ${c.line}`,
          borderRadius: 16,
          padding: "24px 26px",
        }}
      >
        <div style={{ fontSize: 21, fontWeight: 900, color: c.ink, marginBottom: 6 }}>
          Come trovi la tua categoria giusta
        </div>
        <p style={{ fontSize: 16, color: c.body, margin: "0 0 16px", lineHeight: 1.45 }}>
          Non la inventi a tavolino. La <b>estrai da chi ha già comprato</b>. Una domanda, in ogni call con un cliente:
        </p>
        <div
          style={{
            background: c.goodLane,
            border: `2px solid ${c.goodSoft}`,
            borderRadius: 12,
            padding: "20px 24px",
            textAlign: "center",
          }}
        >
          <span style={{ fontSize: 24, fontWeight: 900, color: c.good, lineHeight: 1.35 }}>
            «Come ci hai descritto quando ci spiegavi al tuo team?»
          </span>
        </div>
        <p style={{ fontSize: 15.5, color: c.body, margin: "16px 0 0", lineHeight: 1.45 }}>
          La frase che usa <b style={{ color: c.ink }}>è la tua categoria in pratica</b> — più precisa di qualsiasi
          definizione da analista. Ripetuta su più clienti, ti dà la scatola in cui il mercato ti mette già.
        </p>
      </div>

      {/* ===== SEZIONE 5 — CALLOUT: RESETTA IL FRAME ===== */}
      <div style={{ marginTop: 26 }}>
        <div style={{ background: c.ink, borderRadius: 18, padding: "26px 28px", color: c.white }}>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#CFCFCF", marginBottom: 12 }}>
            E resetta il frame nella prima conversazione — <span style={{ color: c.goodBright }}>non in difensiva:</span>
          </div>
          <div style={{ fontSize: 21, fontWeight: 800, lineHeight: 1.4 }}>
            «La maggior parte dei nostri clienti è arrivata perché cercava di risolvere{" "}
            <span style={{ color: c.goodBright }}>[X]</span> e ha scoperto che gli strumenti{" "}
            <span style={{ color: c.goodBright }}>[Y] tradizionali</span> non erano fatti per questo.»
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap" }}>
            {["nomina il problema giusto", "implica la categoria giusta", "senza attaccare il confronto"].map((x) => (
              <span
                key={x}
                style={{ background: "#3A3A3A", color: c.white, fontSize: 13.5, fontWeight: 700, padding: "6px 14px", borderRadius: 999 }}
              >
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ===== FOOTER ===== */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 22,
          paddingTop: 16,
          borderTop: `1px solid ${c.line}`,
        }}
      >
        <span style={{ fontSize: 13.5, fontWeight: 700, color: c.body }}>
          Stefano Martiradonna · Product Marketing Fractional
        </span>
        <span
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: c.ink,
            background: c.accentLane,
            border: `1.5px solid ${c.accent}`,
            padding: "6px 14px",
            borderRadius: 999,
          }}
        >
          Il metodo completo → newsletter "da 0 al PMF"
        </span>
      </div>
    </div>
  );
}

/* ---------- sotto-componenti ---------- */

function CompareTitle({ c, color, a, b }) {
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ color, fontSize: 22, fontWeight: 900 }}>{a}</span>
      <span style={{ color: c.ink, fontSize: 16, fontWeight: 800 }}> · {b}</span>
    </div>
  );
}

function CompareList({ c, tone, mark, items }) {
  const main = tone === "bad" ? c.bad : c.good;
  const lane = tone === "bad" ? c.badLane : c.goodLane;
  const soft = tone === "bad" ? c.badSoft : c.goodSoft;
  return (
    <div style={{ background: lane, border: `2px solid ${soft}`, borderRadius: 14, padding: "16px 16px" }}>
      {items.map((it, i) => (
        <div
          key={i}
          style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: i === items.length - 1 ? 0 : 13 }}
        >
          <span
            style={{
              flexShrink: 0,
              width: 22,
              height: 22,
              borderRadius: 6,
              background: main,
              color: c.white,
              fontSize: 13,
              fontWeight: 900,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 1,
            }}
          >
            {mark}
          </span>
          <span style={{ fontSize: 14.5, color: c.ink, lineHeight: 1.34 }}>
            {it.lead && <b style={{ color: main }}>{it.lead} </b>}
            {it.t}
          </span>
        </div>
      ))}
    </div>
  );
}
