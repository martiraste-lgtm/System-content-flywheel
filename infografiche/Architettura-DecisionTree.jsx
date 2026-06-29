// Infografica — Decision tree "Come scegliere la giusta architettura di posizionamento" (v2)
// Stile decision-tree alla Estner, veste BICOLORE: blu = percorso/struttura, arancio = foglie-architettura,
// verde/rosso = badge sì/no, rosso = STOP. Niente pastelli (salmon/peach/cream rimossi).
// Cascata top-to-bottom: ogni step → un ramo va a una foglia, l'altro scende. Larghezza 1080, altezza auto.

export default function ArchitetturaDecisionTree() {
  const c = {
    bg: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#8A8A8A",
    white: "#FFFFFF",
    line: "#E5E5E5",
    // percorso / struttura
    blue: "#2563EB",
    navy: "#1E3A8A",
    blueLite: "#E4ECFE",
    blueHi: "#DCE7FD",
    // foglie-architettura
    orange: "#F47B20",
    orangeLite: "#FFE8D2",
    // stop
    red: "#EF3B2C",
    redLite: "#FDE3E0",
    // badge
    green: "#16A34A",
    greenLite: "#DCFCE7",
    // box regola
    amberBg: "#FEF3D6",
    amber: "#E08A00",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  return (
    <div
      style={{
        fontFamily: font,
        background: c.bg,
        width: 1080,
        margin: "0 auto",
        padding: "40px 48px 44px",
        color: c.ink,
        boxSizing: "border-box",
      }}
    >
      {/* KICKER */}
      <div style={{ textAlign: "center" }}>
        <span style={{ background: c.blueLite, color: c.blue, fontSize: 13, fontWeight: 900, letterSpacing: 2, textTransform: "uppercase", padding: "6px 16px", borderRadius: 999 }}>
          Guida per Architettura di Posizionamento
        </span>
      </div>

      {/* TITOLO */}
      <h1 style={{ fontSize: 44, fontWeight: 900, color: c.navy, textAlign: "center", margin: "16px 0 0", lineHeight: 1.08 }}>
        Come scegliere la giusta{" "}
        <span style={{ background: c.blueHi, color: c.navy, padding: "0 12px", borderRadius: 10, boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}>
          architettura di posizionamento
        </span>
      </h1>

      {/* BOX REGOLA — ambra, centrato */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 18, marginBottom: -14, position: "relative", zIndex: 2 }}>
        <div style={{ background: c.amberBg, border: `2px solid ${c.amber}`, borderRadius: 14, padding: "10px 22px", textAlign: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <div style={{ fontSize: 15, fontWeight: 800, color: "#9A5B00", lineHeight: 1.25 }}>
            Rispondi dall'alto verso il basso.<br />Solo sì / no.
          </div>
        </div>
      </div>

      {/* GATE 0 */}
      <StepCard c={c} label="GATE 0" labelBg={c.amber} title="Prodotto o feature?"
        question="Questa cosa, DA SOLA, ha un suo buyer che la valuta e la compra? Ha un buyer journey proprio? Esisterebbe da sola?" topPad />
      <Branch
        c={c}
        cont={{ badge: "✓ Sì", tone: "yes", text: "Sono prodotti veri → scendi" }}
        leaf={{ badge: "✕ No", tone: "no", node: (
          <Leaf c={c} kind="stop" name="STOP · è una Feature"
            line="Non hai un problema di architettura ma di PACKAGING."
            note="Risolvi con tier, add-on, bundle e simili." />
        ) }}
      />

      <Flow c={c} />

      {/* STEP 1 */}
      <StepCard c={c} label="STEP 1" labelBg={c.blue} title="Quanti prodotti veri hai?" />
      <Branch
        c={c}
        cont={{ badge: "Più di uno", tone: "path", text: "→ scendi allo Step 2" }}
        leaf={{ badge: "Uno", tone: "path", node: (
          <Leaf c={c} kind="leaf" name="🟧 Single product" line="Azienda = prodotto → un solo posizionamento. Es. Calendly.">
            <SubBox c={c}>
              <b>Lo vendi a più segmenti? → stesso use case?</b><br />
              <span style={{ color: c.green, fontWeight: 800 }}>Sì →</span> ORIZZONTALE: resta 1 posizionamento (cambi solo messaging/esempi).<br />
              <span style={{ color: c.red, fontWeight: 800 }}>No →</span> use case diversi: restringi o vai verticale.
            </SubBox>
          </Leaf>
        ) }}
      />

      <Flow c={c} />

      {/* STEP 2 */}
      <StepCard c={c} label="STEP 2" labelBg={c.blue} title="A CHI li vendi?" />
      <Branch
        c={c}
        cont={{ badge: "Stesso buyer", tone: "path", text: "→ scendi allo Step 3" }}
        leaf={{ badge: "Buyer diversi", tone: "path", node: (
          <Leaf c={c} kind="leaf" name="🟧 ④ Per Segmento"
            line="Use case diversi: ti confrontano con alternative differenti."
            note="Posizionamenti separati (la meno comune)." noteOrange />
        ) }}
      />

      <Flow c={c} />

      {/* STEP 3 */}
      <StepCard c={c} label="STEP 3" labelBg={c.blue} title="COME li comprano?" question="Il comportamento d'acquisto decide l'architettura." />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 12 }}>
        <Leaf c={c} kind="leaf" small tag="Separati" name="① Ombrello"
          line="1 posizionamento per prodotto + ombrello che somma. L'azienda rassicura, non vende la combo."
          test="Lo comprerebbe anche senza gli altri?" es="Atlassian" />
        <Leaf c={c} kind="leaf" small tag="In sequenza" name="② Lead + Add-on"
          line="Posizioni il lead come l'azienda; add-on «i migliori per chi ha già il lead»."
          test="C'è un cavallo di Troia che entra per primo?" es="Salesforce → Marketing Cloud" />
        <Leaf c={c} kind="leaf" small tag="Combinati" name="③ Famiglia / Piattaforma"
          line="Master brand + value prop di sistema."
          test="«Meglio insieme» è vero e dimostrabile? ⚠️ «piattaforma» è abusata." es="Google" />
      </div>
    </div>
  );
}

/* ---------- componenti ---------- */

function StepCard({ c, label, labelBg, title, question, topPad }) {
  return (
    <div style={{ background: c.white, border: `1px solid ${c.line}`, borderRadius: 14, padding: topPad ? "26px 18px 16px" : "16px 18px", marginTop: 18, boxShadow: "0 2px 6px rgba(0,0,0,0.05)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ background: labelBg, color: c.white, fontSize: 12, fontWeight: 900, letterSpacing: 1, padding: "4px 11px", borderRadius: 8 }}>{label}</span>
        <span style={{ fontSize: 21, fontWeight: 900, color: c.navy }}>{title}</span>
      </div>
      {question && <div style={{ fontSize: 15, color: c.body, marginTop: 8, lineHeight: 1.4 }}>{question}</div>}
    </div>
  );
}

function Branch({ c, cont, leaf }) {
  // sinistra = ramo che prosegue (spine, blu) · destra = foglia che esce
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 14, marginTop: 10, alignItems: "start" }}>
      <div>
        <BadgeRow c={c} badge={cont.badge} tone={cont.tone} />
        <div style={{ fontSize: 20, color: c.blue, textAlign: "center", margin: "2px 0" }}>↓</div>
        <div style={{ background: c.blueLite, border: `2px solid ${c.blue}`, borderRadius: 12, padding: "14px 16px", fontSize: 15, fontWeight: 800, color: c.navy, textAlign: "center" }}>
          {cont.text}
        </div>
      </div>
      <div>
        <BadgeRow c={c} badge={leaf.badge} tone={leaf.tone} />
        <div style={{ fontSize: 20, color: leaf.tone === "no" ? c.red : c.orange, textAlign: "center", margin: "2px 0" }}>↓</div>
        {leaf.node}
      </div>
    </div>
  );
}

function BadgeRow({ c, badge, tone }) {
  const map = {
    yes: { bg: c.greenLite, fg: c.green },
    no: { bg: c.redLite, fg: c.red },
    path: { bg: c.blueLite, fg: c.blue },
  };
  const s = map[tone] || map.path;
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ background: s.bg, color: s.fg, fontSize: 14, fontWeight: 900, padding: "6px 16px", borderRadius: 999, border: `1.5px solid ${s.fg}`, display: "inline-block" }}>
        {badge}
      </span>
    </div>
  );
}

function Leaf({ c, kind, name, line, test, es, note, noteOrange, tag, small, children }) {
  const isStop = kind === "stop";
  const bg = isStop ? c.redLite : c.orangeLite;
  const border = isStop ? c.red : c.orange;
  return (
    <div style={{ background: bg, border: `2px solid ${border}`, borderRadius: 14, padding: small ? "13px 14px" : "14px 16px", boxShadow: "0 2px 6px rgba(0,0,0,0.06)", height: small ? "100%" : "auto", boxSizing: "border-box" }}>
      {tag && (
        <div style={{ display: "inline-block", background: c.white, color: c.orange, fontSize: 11, fontWeight: 900, letterSpacing: 0.5, textTransform: "uppercase", padding: "3px 10px", borderRadius: 999, border: `1px solid ${c.orange}`, marginBottom: 7 }}>{tag}</div>
      )}
      <div style={{ fontSize: small ? 16 : 18, fontWeight: 900, color: isStop ? c.red : c.ink, lineHeight: 1.15 }}>{name}</div>
      {line && <div style={{ fontSize: small ? 12.5 : 13.5, color: c.body, marginTop: 5, lineHeight: 1.32 }}>{line}</div>}
      {test && (
        <div style={{ fontSize: 12, color: c.ink, marginTop: 8, lineHeight: 1.3 }}>
          <b style={{ color: c.orange }}>Test:</b> {test}
        </div>
      )}
      {es && <div style={{ fontSize: 12, color: c.muted, marginTop: 6, fontWeight: 600 }}>Es. {es}</div>}
      {note && <div style={{ fontSize: 12.5, fontWeight: 700, color: noteOrange ? c.orange : c.red, marginTop: 7, lineHeight: 1.3 }}>{note}</div>}
      {children}
    </div>
  );
}

function SubBox({ c, children }) {
  return (
    <div style={{ background: c.white, border: `1px dashed ${c.orange}`, borderRadius: 10, padding: "10px 12px", marginTop: 10, fontSize: 12.5, color: c.body, lineHeight: 1.4 }}>
      {children}
    </div>
  );
}

function Flow({ c }) {
  return <div style={{ textAlign: "center", fontSize: 24, color: c.blue, margin: "4px 0 0" }}>↓</div>;
}
