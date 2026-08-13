import React from "react";

// ============================================================
// COME SCEGLIERE LA GIUSTA STRATEGIA DI POSIZIONAMENTO — decision tree
// Pillar: 🔵 Strategia (blu/navy — niente arancio, riservato ad Architetture)
// Tavola gemella di Architettura-DecisionTree.jsx.
// Differenza strutturale: lo Step 1 BIFORCA in due colonne (MATURA / IMMATURA).
// Canvas: 1080 × ~1560 — fonte autorevole del layout (render Gemini = anteprima)
// ============================================================

const c = {
  bg: "#F8F8F8",
  ink: "#2D2D2D",
  body: "#555555",
  muted: "#8A8A8A",
  white: "#FFFFFF",
  line: "#E5E5E5",

  blue: "#2563EB",
  navy: "#1E3A8A",
  blueSoft: "#DBEAFE",
  blueChip: "#BFDBFE",

  amber: "#F59E0B",
  amberBg: "#FEF3C7",
  amberBorder: "#FCD34D",

  good: "#16A34A",
  bad: "#DC2626",
};

const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

// ---------- componenti ----------

const YesNo = ({ yes, label }) => (
  <span style={{
    background: yes ? c.good : c.bad, color: c.white, fontWeight: 900,
    fontSize: 12.5, padding: "4px 12px", borderRadius: 999,
  }}>{yes ? "✓" : "✕"} {label}</span>
);

const QuestionBox = ({ step, children }) => (
  <div style={{
    background: c.white, border: `2.5px solid ${c.blue}`, borderRadius: 14,
    padding: "14px 18px", boxShadow: "0 2px 6px rgba(0,0,0,.07)",
  }}>
    <p style={{ fontSize: 12, fontWeight: 900, color: c.blue, margin: "0 0 4px", letterSpacing: 1 }}>{step}</p>
    <p style={{ fontSize: 15.5, fontWeight: 800, color: c.ink, margin: 0, lineHeight: 1.35 }}>{children}</p>
  </div>
);

const TesiMeter = ({ n }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
    <span style={{ fontSize: 11, fontWeight: 800, color: c.navy, letterSpacing: 0.5 }}>DIPENDENZA TESI</span>
    <div style={{ display: "flex", gap: 3 }}>
      {[1, 2, 3, 4].map(i => (
        <span key={i} style={{
          width: 22, height: 8, borderRadius: 4,
          background: i <= n ? c.blue : c.blueSoft,
        }} />
      ))}
    </div>
    <span style={{ fontSize: 11, fontWeight: 900, color: c.blue }}>{n}/4</span>
  </div>
);

const Leaf = ({ num, title, children, meter, es }) => (
  <div style={{
    background: c.white, border: `2px solid ${c.navy}`, borderRadius: 14,
    padding: "14px 16px", boxShadow: "0 2px 6px rgba(0,0,0,.07)",
  }}>
    <p style={{ fontSize: 15.5, fontWeight: 900, color: c.navy, margin: "0 0 6px" }}>{num} {title}</p>
    <div style={{ fontSize: 12.5, fontWeight: 600, color: c.body, lineHeight: 1.45 }}>{children}</div>
    <TesiMeter n={meter} />
    <p style={{ fontSize: 11.5, fontWeight: 700, color: c.muted, margin: "8px 0 0" }}>Es: {es}</p>
  </div>
);

const BucketBand = ({ title, sub }) => (
  <div style={{
    background: c.navy, borderRadius: 12, padding: "10px 14px", textAlign: "center",
  }}>
    <p style={{ color: c.white, fontSize: 16, fontWeight: 900, margin: 0, letterSpacing: 0.5 }}>{title}</p>
    <p style={{ color: c.blueChip, fontSize: 11.5, fontWeight: 700, margin: "2px 0 0" }}>{sub}</p>
  </div>
);

const Arrow = () => (
  <div style={{ display: "flex", justifyContent: "center", padding: "6px 0" }}>
    <div style={{
      width: 0, height: 0, borderLeft: "8px solid transparent",
      borderRight: "8px solid transparent", borderTop: `10px solid ${c.blue}`,
    }} />
  </div>
);

// ---------- tavola ----------

export default function StrategiaDecisionTree() {
  return (
    <div style={{
      width: 1080, minHeight: 1560, background: c.bg, fontFamily: font,
      padding: "36px 44px 32px", boxSizing: "border-box",
      display: "flex", flexDirection: "column",
    }}>

      {/* ============ HEADER ============ */}
      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <span style={{
          background: c.blueSoft, color: c.navy, fontWeight: 800, fontSize: 11.5,
          letterSpacing: 2, padding: "5px 14px", borderRadius: 999, textTransform: "uppercase",
        }}>Guida per Strategia di Posizionamento</span>
        <h1 style={{ fontSize: 34, fontWeight: 900, color: c.ink, margin: "14px 0 0", lineHeight: 1.2 }}>
          Come scegliere la giusta<br />
          <span style={{ background: c.blueChip, borderRadius: 10, padding: "0 12px", color: c.navy }}>
            STRATEGIA DI POSIZIONAMENTO
          </span>
        </h1>
      </div>

      {/* ============ BOX-REGOLA ============ */}
      <div style={{
        background: c.amberBg, border: `2px solid ${c.amberBorder}`, borderRadius: 12,
        padding: "12px 18px", textAlign: "center", marginBottom: 18,
      }}>
        <p style={{ fontSize: 14.5, fontWeight: 800, color: "#92400E", margin: 0, lineHeight: 1.4 }}>
          ⚠️ Rispondi guardando la cassa e il team che hai OGGI — non quelli del prossimo round.
        </p>
        <p style={{ fontSize: 11.5, fontWeight: 600, color: "#B45309", margin: "3px 0 0" }}>
          Rispondi dall'alto verso il basso. Solo sì / no.
        </p>
      </div>

      {/* ============ STEP 1 (centrale) ============ */}
      <div style={{ maxWidth: 560, margin: "0 auto", width: "100%" }}>
        <QuestionBox step="STEP 1">
          Il tuo buyer conosce già la categoria?<br />
          <span style={{ fontSize: 12.5, fontWeight: 600, color: c.body }}>
            La cerca, confronta i vendor, ha budget allocato?
          </span>
        </QuestionBox>
      </div>

      {/* biforcazione */}
      <div style={{ display: "flex", justifyContent: "space-around", padding: "12px 60px 6px" }}>
        <YesNo yes label="Sì → campo MATURO" />
        <YesNo yes={false} label="No → campo IMMATURO" />
      </div>

      {/* ============ DUE COLONNE ============ */}
      <div style={{ display: "flex", gap: 20, alignItems: "stretch" }}>

        {/* ---- COLONNA SINISTRA: MATURA ---- */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
          <BucketBand title="CATEGORIA MATURA" sub="domanda e budget già esistono · nemico: il leader" />
          <QuestionBox step="STEP 2A">
            Hai una ragione netta per battere il leader sui criteri esistenti, su TUTTO il mercato?<br />
            <span style={{ fontSize: 12.5, fontWeight: 600, color: c.body }}>
              (vantaggio su un parametro + distribuzione)
            </span>
          </QuestionBox>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <YesNo yes label="Sì" />
            <Arrow />
          </div>
          <Leaf num="①" title="Head-to-head vs leader" meter={1}
            es="Coca/Pepsi · Samsung/Apple">
            Accetti i criteri esistenti e vinci su quelli.<br />
            <strong>La mossa:</strong> comparison e battlecard; attacca dove il leader è debole.
          </Leaf>

          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
            <YesNo yes={false} label="No, ma c'è un segmento servito male" />
            <Arrow />
          </div>
          <Leaf num="②" title="Big Fish, Smaller Pond" meter={2}
            es="DuckDuckGo · CRM per banche">
            Prendi il sotto-segmento che i generalisti trattano come eccezione.<br />
            <strong>Due modalità:</strong> A) fit superiore, stessi criteri · B) reframing
            nella nicchia <em>(serve tesi forte)</em>.
          </Leaf>
        </div>

        {/* ---- COLONNA DESTRA: IMMATURA ---- */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
          <BucketBand title="CATEGORIA IMMATURA" sub="domanda e budget NON esistono · nemico: l'inerzia" />
          <QuestionBox step="STEP 2B">
            La categoria esiste già da qualche altra parte?<br />
            <span style={{ fontSize: 12.5, fontWeight: 600, color: c.body }}>
              (altro mercato, altro paese, altro settore)
            </span>
          </QuestionBox>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <YesNo yes label="Sì, la porto al mio mercato" />
            <Arrow />
          </div>
          <Leaf num="③" title="Immatura in crescita" meter={3}
            es="Docusign · Dropbox">
            Il buyer non sa che esiste un software per il suo problema.<br />
            <strong>La mossa:</strong> spiega il problema prima della soluzione; non nominare
            i competitor; motion educational, founder-led.
          </Leaf>

          <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
            <YesNo yes={false} label="No, e nessuna etichetta regge" />
            <Arrow />
          </div>
          <Leaf num="④" title="Crea una nuova categoria" meter={4}
            es="Salesforce · Vanta">
            Non la porti: la fondi.<br />
            <strong>La mossa:</strong> 3 convincimenti in fila — deve esistere → dovrebbe
            interessarti → il leader sono io. Nome e criteri li scrivi tu.
          </Leaf>

          {/* guardrail */}
          <div style={{
            background: c.blueSoft, border: `2px dashed ${c.blue}`, borderRadius: 12,
            padding: "10px 14px",
          }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: c.navy, margin: 0, lineHeight: 1.4 }}>
              🔁 <strong>Guardrail:</strong> se puoi descrivere il tuo valore cambiando i criteri
              di una categoria che esiste → non stai creando, stai riformulando.
              <strong> Torna a ② modalità B.</strong>
            </p>
          </div>
        </div>
      </div>

      {/* ============ PUNCHLINE ============ */}
      <div style={{
        background: c.navy, borderRadius: 14, padding: "18px 24px", marginTop: 20,
        textAlign: "center",
      }}>
        <p style={{ color: c.white, fontSize: 17.5, fontWeight: 800, margin: 0, lineHeight: 1.45 }}>
          Più scendi, più la strategia dipende dalla tesi.<br />
          <span style={{ color: c.blueChip }}>Dimmi che strategia scegli, e ti dirò quanta tesi ti serve.</span>
        </p>
      </div>
    </div>
  );
}
