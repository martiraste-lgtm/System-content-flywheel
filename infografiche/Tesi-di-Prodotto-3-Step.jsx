import React from "react";

// ============================================================
// TESI DI PRODOTTO — 3 STEP (stile guida alla Estner)
// Pillar colore: VIOLA (Tesi=viola · Architetture=arancio · Strategia=blu)
// Canvas: 1080 × ~1650 — fonte autorevole del layout (il render Gemini è anteprima)
// ============================================================

const c = {
  bg: "#F4F2FA",          // sfondo pagina lavanda-grigio chiaro
  ink: "#211D46",         // titoli navy-viola scuro
  body: "#4B4767",        // testo corpo
  muted: "#8B87A3",
  white: "#FFFFFF",
  line: "#E6E2F2",

  viola: "#7C3AED",       // primario pillar Tesi
  violaDark: "#6D28D9",
  violaSoft: "#EDE4FC",   // header tabelle / tinte step 1
  violaChip: "#E9D5FF",   // highlight titolo + pill

  magenta: "#C026D3",     // accento step 2
  magentaSoft: "#FAE8FC",

  indigo: "#4F46E5",      // accento step 3
  indigoSoft: "#E6E7FB",

  dark: "#211D46",        // box test del rifiuto
};

const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

// ---------- componenti ----------

const StepBadge = ({ n, label, tint, accent }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
    <span style={{
      background: tint, color: accent, fontWeight: 900, fontSize: 15,
      padding: "6px 16px", borderRadius: 999,
    }}>Step {n}</span>
    <span style={{
      background: c.white, color: c.ink, fontWeight: 800, fontSize: 16,
      padding: "6px 18px", borderRadius: 999, border: `1.5px solid ${c.line}`,
    }}>{label}</span>
  </div>
);

const Card = ({ accent, children }) => (
  <div style={{
    background: c.white, borderRadius: 22, border: `1.5px solid ${c.line}`,
    borderTop: `5px solid ${accent}`, padding: "24px 26px 26px",
    boxShadow: "0 4px 18px rgba(33,29,70,.06)", marginBottom: 26,
  }}>{children}</div>
);

const Th = ({ children, w }) => (
  <div style={{
    flex: w ? `0 0 ${w}px` : 1, padding: "10px 12px", fontSize: 14.5, fontWeight: 900,
    color: c.ink, lineHeight: 1.25,
  }}>{children}</div>
);

const Td = ({ children, w, strong, dim }) => (
  <div style={{
    flex: w ? `0 0 ${w}px` : 1, padding: "12px 12px", fontSize: 13.5,
    fontWeight: strong ? 800 : 500, color: dim ? c.muted : c.body, lineHeight: 1.4,
  }}>{children}</div>
);

const Row = ({ children, tint, radius }) => (
  <div style={{
    display: "flex", alignItems: "stretch", background: tint || "transparent",
    borderRadius: radius || 0, borderBottom: `1px solid ${c.line}`,
  }}>{children}</div>
);

// ---------- tavola ----------

export default function TesiDiProdotto3Step() {
  return (
    <div style={{
      width: 1080, minHeight: 1780, background: c.bg, fontFamily: font,
      padding: "42px 46px 30px", boxSizing: "border-box",
      display: "flex", flexDirection: "column",
    }}>

      {/* ============ HEADER ============ */}
      <div style={{ textAlign: "center", marginBottom: 26 }}>
        <span style={{
          background: c.violaChip, color: c.violaDark, fontWeight: 800, fontSize: 13,
          letterSpacing: 2, padding: "7px 18px", borderRadius: 999, textTransform: "uppercase",
        }}>Guida al Posizionamento · Elemento 1</span>

        <h1 style={{
          fontSize: 52, fontWeight: 900, color: c.ink, margin: "20px 0 14px", lineHeight: 1.12,
        }}>
          3 Step per costruire la tua{" "}
          <span style={{ background: c.violaChip, borderRadius: 14, padding: "2px 14px" }}>
            Tesi di Prodotto
          </span>
        </h1>

        <p style={{ fontSize: 19, fontWeight: 600, color: c.body, margin: "0 auto 6px", maxWidth: 840, lineHeight: 1.45 }}>
          La linea che dirige lo sviluppo del prodotto: ti dice, prima di cosa costruire,
          cosa <strong style={{ color: c.ink }}>NON</strong> costruire.
        </p>
        <p style={{ fontSize: 16.5, fontWeight: 700, fontStyle: "italic", color: c.viola, margin: 0 }}>
          Una tesi che non ha mai ucciso una feature non è una tesi: è una tagline.
        </p>
      </div>

      {/* ============ STEP 1 — I 3 MATTONI ============ */}
      <StepBadge n={1} label="Costruisci i 3 mattoni" tint={c.violaSoft} accent={c.violaDark} />
      <Card accent={c.viola}>
        {/* header tabella */}
        <Row tint={c.violaSoft} radius={12}>
          <Th w={150}>Dimensione</Th>
          <Th>🧨 Status Quo<br /><span style={{ fontWeight: 600, fontSize: 12.5, color: c.body }}>trova il nemico</span></Th>
          <Th>💥 Why It's Broken<br /><span style={{ fontWeight: 600, fontSize: 12.5, color: c.body }}>perché non regge</span></Th>
          <Th>🌅 POV<br /><span style={{ fontWeight: 600, fontSize: 12.5, color: c.body }}>la scommessa</span></Th>
        </Row>
        <Row>
          <Td w={150} strong>In una frase</Td>
          <Td>Come opera oggi il mercato senza di te — e il nemico da superare</Td>
          <Td>La prova che la normalità è inadeguata: frizioni, costi nascosti</Td>
          <Td>Il nuovo modo contro il vecchio: la tua scommessa sul futuro</Td>
        </Row>
        <Row>
          <Td w={150} strong>La domanda chiave</Td>
          <Td>"Cosa usano oggi al posto tuo?"</Td>
          <Td>"Cosa succede se nulla cambia per 2 anni?"</Td>
          <Td>"Quale pratica comune non serve più al cliente?"</Td>
        </Row>
        <Row>
          <Td w={150} strong>Es. — Slack</Td>
          <Td dim>L'email come comunicazione interna</Td>
          <Td dim>La conoscenza muore nelle caselle</Td>
          <Td dim>"Canali, non caselle"</Td>
        </Row>

        {/* barra gradiente */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 18 }}>
          <span style={{ fontSize: 13, fontWeight: 900, color: c.ink }}>Dai FATTI</span>
          <div style={{
            flex: 1, height: 10, borderRadius: 999,
            background: `linear-gradient(90deg, ${c.violaSoft} 0%, ${c.viola} 100%)`,
          }} />
          <span style={{ fontSize: 13, fontWeight: 900, color: c.viola }}>alla SCOMMESSA</span>
        </div>
      </Card>

      {/* ============ STEP 2 — COMPONI LA TESI (formula a 7 righe) ============ */}
      <StepBadge n={2} label="Componi la tesi — una frase, 7 righe" tint={c.magentaSoft} accent={c.magenta} />
      <Card accent={c.magenta}>
        <Row tint={c.magentaSoft} radius={12}>
          <Th w={250}>La formula</Th>
          <Th>Compila</Th>
          <Th>Es. — Slack</Th>
        </Row>
        <Row>
          <Td w={250} strong>🧍 QUANDO<br /><span style={{ fontWeight: 600, fontSize: 12, color: c.muted }}>ICP: segmento · stage · ruolo</span></Td>
          <Td dim>un ______ specifico</Td>
          <Td>un team che lavora insieme ogni giorno</Td>
        </Row>
        <Row>
          <Td w={250} strong>🎯 VUOLE<br /><span style={{ fontWeight: 600, fontSize: 12, color: c.muted }}>il job concreto, non aggettivi</span></Td>
          <Td dim>ottenere ______</Td>
          <Td>decisioni e contesto accessibili a tutti</Td>
        </Row>
        <Row>
          <Td w={250} strong>🧨 OGGI DEVE<br /><span style={{ fontWeight: 600, fontSize: 12, color: c.muted }}>status quo — col nemico nominato</span></Td>
          <Td dim>usare ______</Td>
          <Td>usare l'email interna</Td>
        </Row>
        <Row>
          <Td w={250} strong>💥 ED È INACCETTABILE PERCHÉ<br /><span style={{ fontWeight: 600, fontSize: 12, color: c.muted }}>la rottura, con un costo misurabile</span></Td>
          <Td dim>______ costa ______</Td>
          <Td>la conoscenza muore nelle caselle: chi non è in CC non sa, chi arriva dopo non trova</Td>
        </Row>
        <Row>
          <Td w={250} strong>🌅 NOI CREDIAMO CHE<br /><span style={{ fontWeight: 600, fontSize: 12, color: c.muted }}>la scommessa — qualcuno può dirti che sbagli</span></Td>
          <Td dim>il futuro sarà ______</Td>
          <Td>il lavoro debba accadere in canali aperti e ricercabili</Td>
        </Row>
        <Row>
          <Td w={250} strong>🧭 PER QUESTO COSTRUIAMO<br /><span style={{ fontWeight: 600, fontSize: 12, color: c.muted }}>il meccanismo distintivo</span></Td>
          <Td dim>______</Td>
          <Td>tutto ciò che rende i canali il posto dove il lavoro accade</Td>
        </Row>
        <Row tint={c.magentaSoft} radius={12}>
          <Td w={250} strong>🚫 E NON COSTRUIAMO<br /><span style={{ fontWeight: 600, fontSize: 12, color: c.body }}>la clausola di rifiuto</span></Td>
          <Td strong>______</Td>
          <Td strong>caselle private, CC, o un client email migliore</Td>
        </Row>

        <p style={{ fontSize: 13.5, fontWeight: 700, fontStyle: "italic", color: c.magenta, margin: "14px 2px 0" }}>
          Le prime 6 righe raccontano. L'ultima decide: senza il NO, non è una tesi — è una tagline.
        </p>
      </Card>

      {/* ============ STEP 3 — USALA DA LUNEDÌ ============ */}
      <StepBadge n={3} label="Usala da lunedì: i 3 filtri + il test" tint={c.indigoSoft} accent={c.indigo} />
      <Card accent={c.indigo}>
        <p style={{ fontSize: 14.5, fontWeight: 700, color: c.body, margin: "0 0 12px" }}>
          Ogni richiesta di feature — del cliente, del competitor, del CEO — passa da qui:
        </p>

        <div style={{ display: "flex", gap: 14, marginBottom: 16 }}>
          {[
            ["1", "È coerente col prodotto che siamo?"],
            ["2", "Porta valore reale al cliente?"],
            ["3", "Quel valore torna all'azienda nel lungo periodo?"],
          ].map(([n, q]) => (
            <div key={n} style={{
              flex: 1, background: c.indigoSoft, borderRadius: 14, padding: "14px 14px",
              display: "flex", gap: 10, alignItems: "flex-start",
            }}>
              <span style={{
                background: c.indigo, color: c.white, fontWeight: 900, fontSize: 14,
                width: 26, height: 26, borderRadius: 999, display: "flex",
                alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>{n}</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: c.ink, lineHeight: 1.35 }}>{q}</span>
            </div>
          ))}
        </div>

        <p style={{ fontSize: 14.5, fontWeight: 600, color: c.body, margin: "0 0 6px" }}>
          Non li passa? Non è una feature in più: è <strong style={{ color: c.indigo }}>entropia</strong>.
        </p>
        <p style={{ fontSize: 13.5, fontWeight: 600, color: c.muted, margin: "0 0 16px" }}>
          Customer obsessed ≠ customer led: capire il job, non eseguire le richieste.
        </p>

        {/* box test del rifiuto */}
        <div style={{
          background: c.dark, borderRadius: 16, padding: "18px 22px",
          display: "flex", gap: 16, alignItems: "center",
        }}>
          <span style={{
            background: c.viola, color: c.white, fontWeight: 900, fontSize: 12,
            letterSpacing: 1.5, padding: "6px 12px", borderRadius: 999,
            textTransform: "uppercase", flexShrink: 0,
          }}>Il test del rifiuto</span>
          <p style={{ color: c.white, fontSize: 15.5, fontWeight: 700, margin: 0, lineHeight: 1.45 }}>
            Prendi le ultime 5 feature che ti hanno chiesto: questa tesi ne avrebbe uccisa
            almeno una? <span style={{ color: c.violaChip }}>Se no, hai scritto una tagline.</span>
          </p>
        </div>
      </Card>

      {/* ============ FOOTER ============ */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        marginTop: "auto", paddingTop: 6,
      }}>
        <span style={{ fontSize: 15, fontWeight: 800, color: c.ink }}>
          Stefano Martiradonna <span style={{ fontWeight: 600, color: c.muted }}>· Product Marketing Fractional</span>
        </span>
        <span style={{
          background: c.violaChip, color: c.violaDark, fontWeight: 800, fontSize: 14,
          padding: "8px 18px", borderRadius: 999,
        }}>Il metodo completo → newsletter "da 0 al PMF"</span>
      </div>
    </div>
  );
}
