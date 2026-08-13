import React from "react";

// ============================================================
// ANATOMIA DI UNA HERO CHE NON DICE NIENTE — teardown a hero singola
// Hero anonimizzata "Boostr" (ricostruita/parafrasata, brand inventato).
// Marker numerati ①-④ sui difetti + lista diagnosi + checklist ✓/❌ + before/after + CTA.
// Canvas: 1080 × ~1780 — fonte autorevole del layout (render Gemini = anteprima)
// ============================================================

const c = {
  bg: "#F8F8F8",
  ink: "#2D2D2D",
  body: "#555555",
  muted: "#8A8A8A",
  white: "#FFFFFF",
  line: "#E5E5E5",

  bad: "#EF3B2C",
  badBg: "#FFF1EF",
  warn: "#D97706",
  warnBg: "#FEF3C7",
  good: "#16A34A",
  goodBg: "#F0FDF4",

  brand: "#0D9488",     // teal del brand finto "Boostr"
  heroBg: "#F0FDFA",
  heroInk: "#134E4A",

  viola: "#7C3AED",
  darkCTA: "#211D46",
  violaChip: "#E9D5FF",
};

const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const Marker = ({ n }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    width: 26, height: 26, borderRadius: 999, background: c.bad, color: c.white,
    fontWeight: 900, fontSize: 14, flexShrink: 0, boxShadow: "0 1px 3px rgba(0,0,0,.25)",
  }}>{n}</span>
);

const DiagRow = ({ n, tone, children }) => (
  <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 12 }}>
    <Marker n={n} />
    <p style={{ fontSize: 14, fontWeight: 600, color: c.body, margin: 0, lineHeight: 1.45 }}>{children}</p>
  </div>
);

const CheckRow = ({ label, state, note }) => {
  const map = {
    no: { icon: "✕", col: c.bad },
    mid: { icon: "◐", col: c.warn },
  };
  const s = map[state];
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12, padding: "10px 14px",
      borderBottom: `1px solid ${c.line}`,
    }}>
      <span style={{ color: s.col, fontWeight: 900, fontSize: 18, width: 20, textAlign: "center" }}>{s.icon}</span>
      <span style={{ flex: 1, fontSize: 14, fontWeight: 800, color: c.ink }}>{label}</span>
      <span style={{ fontSize: 12.5, fontWeight: 600, color: c.muted, textAlign: "right" }}>{note}</span>
    </div>
  );
};

export default function HeroTeardownAnatomia() {
  return (
    <div style={{
      width: 1080, minHeight: 1780, background: c.bg, fontFamily: font,
      padding: "40px 44px 32px", boxSizing: "border-box",
      display: "flex", flexDirection: "column",
    }}>

      {/* ============ HEADER ============ */}
      <div style={{ textAlign: "center", borderBottom: `3px solid ${c.ink}`, paddingBottom: 18, marginBottom: 22 }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, color: c.ink, margin: "0 0 10px", lineHeight: 1.12 }}>
          Anatomia di una Hero che <span style={{ color: c.bad }}>non dice niente</span>
        </h1>
        <p style={{ fontSize: 17.5, fontWeight: 600, color: c.body, margin: "0 0 8px" }}>
          Nessun ancoraggio, nessun ICP, una promessa che il prodotto non può mantenere.
        </p>
        <p style={{ fontSize: 12, fontWeight: 600, color: c.muted, margin: 0, fontStyle: "italic" }}>
          Esempio ricostruito e anonimizzato — il difetto è reale, il brand è inventato.
        </p>
      </div>

      {/* ============ HERO MOCKUP con marker ============ */}
      <div style={{ background: c.white, borderRadius: 14, overflow: "hidden", border: `1.5px solid ${c.line}`, marginBottom: 22 }}>
        {/* browser bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 14px", background: "#EDEDED", borderBottom: `1px solid ${c.line}` }}>
          <span style={{ width: 9, height: 9, borderRadius: 99, background: "#CFCFCF" }} />
          <span style={{ width: 9, height: 9, borderRadius: 99, background: "#CFCFCF" }} />
          <span style={{ width: 9, height: 9, borderRadius: 99, background: "#CFCFCF" }} />
          <span style={{ marginLeft: 8, background: c.white, borderRadius: 99, padding: "3px 12px", fontSize: 11, color: c.muted, fontWeight: 600 }}>boostr.co</span>
        </div>
        {/* hero body */}
        <div style={{ background: c.heroBg, padding: "26px 30px 30px", textAlign: "center", position: "relative" }}>
          <p style={{ fontSize: 15, fontWeight: 900, color: c.brand, margin: "0 0 16px", letterSpacing: 0.5 }}>◆ Boostr</p>

          {/* H1 + marker 1 */}
          <div style={{ position: "relative", display: "inline-block" }}>
            <span style={{ position: "absolute", left: -34, top: 2 }}><Marker n="1" /></span>
            <p style={{ fontSize: 30, fontWeight: 900, color: c.heroInk, margin: "0 0 12px", lineHeight: 1.15 }}>
              Facciamo crescere la tua<br />app e i tuoi ricavi
            </p>
          </div>

          {/* sub + marker 2 */}
          <div style={{ position: "relative", display: "inline-block", maxWidth: 520 }}>
            <span style={{ position: "absolute", left: -34, top: 0 }}><Marker n="2" /></span>
            <p style={{ fontSize: 15, fontWeight: 500, color: "#4B5563", margin: "0 auto", lineHeight: 1.45 }}>
              Una piattaforma di acquisizione utenti 100% a performance,{" "}
              {/* marker 3 sulla parte AI */}
              <span style={{ position: "relative", fontWeight: 700, color: c.heroInk, whiteSpace: "nowrap" }}>
                potenziata dall'AI
                <span style={{ position: "absolute", right: -30, top: -4 }}><Marker n="3" /></span>
              </span>.
            </p>
          </div>

          {/* CTA + marker 4 */}
          <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 20, position: "relative" }}>
            <span style={{ position: "relative", fontSize: 12.5, fontWeight: 800, padding: "9px 20px", borderRadius: 99, background: c.brand, color: c.white }}>
              Inizia ora
              <span style={{ position: "absolute", right: -30, top: -8 }}><Marker n="4" /></span>
            </span>
            <span style={{ fontSize: 12.5, fontWeight: 800, padding: "9px 20px", borderRadius: 99, background: "transparent", color: c.brand, border: `1.5px solid ${c.brand}` }}>Scopri di più</span>
          </div>
        </div>
      </div>

      {/* ============ DIAGNOSI ============ */}
      <div style={{ background: c.badBg, border: `1.5px solid ${c.bad}`, borderRadius: 14, padding: "18px 20px", marginBottom: 20 }}>
        <p style={{ fontSize: 15, fontWeight: 900, color: c.bad, margin: "0 0 14px", letterSpacing: 0.3 }}>DOVE SI ROMPE</p>
        <DiagRow n="1">
          <strong>Nessun ancoraggio.</strong> L'H1 promette un <em>outcome di business</em> (crescita e ricavi),
          non una categoria né un job. E "ricavi" è a 5 anelli dal prodotto — install → attivazione →
          retention → monetizzazione: una promessa che questo prodotto NON può garantire.
        </DiagRow>
        <DiagRow n="2">
          <strong>La roba buona è sepolta qui.</strong> La categoria vera ("user acquisition") e il vero
          elemento differenziante ("paghi solo a risultato") stanno nel sottotitolo, sottovoce.
          Dovevano essere l'H1.
        </DiagRow>
        <DiagRow n="3">
          <strong>"Potenziata dall'AI" non differenzia niente.</strong> Nel 2026 lo dicono tutti:
          è rumore, non un vantaggio.
        </DiagRow>
        <DiagRow n="4">
          <strong>CTA sproporzionata.</strong> "Inizia ora" chiede un impegno alto per una spesa
          importante — che il copy vago non si è ancora guadagnato.
        </DiagRow>
      </div>

      {/* ============ CHECKLIST ============ */}
      <div style={{ background: c.white, border: `1.5px solid ${c.line}`, borderRadius: 14, padding: "8px 8px 4px", marginBottom: 20 }}>
        <p style={{ fontSize: 14.5, fontWeight: 900, color: c.ink, margin: "10px 14px 6px" }}>
          Cosa deve avere una Hero — e cosa manca qui
        </p>
        <CheckRow label="Ancoraggio (Product Category o JTBD)" state="no" note="assente — solo un outcome vago" />
        <CheckRow label="ICP — per chi è" state="no" note="'la tua app' = chiunque" />
        <CheckRow label="Cosa fa (capabilities)" state="no" note="nessun meccanismo" />
        <CheckRow label="Come lo fa" state="mid" note="c'è ('a performance') ma sepolto" />
        <CheckRow label="Perché te (differenziazione)" state="mid" note="nascosto nel sub" />
        <CheckRow label="Promessa credibile e attribuibile al prodotto" state="no" note="'ricavi' non dipende da loro" />
      </div>

      {/* ============ BEFORE / AFTER ============ */}
      <div style={{ display: "flex", gap: 16, marginBottom: 22 }}>
        <div style={{ flex: 1, background: c.badBg, border: `1.5px solid ${c.bad}`, borderRadius: 14, padding: "16px 18px" }}>
          <p style={{ fontSize: 12.5, fontWeight: 900, color: c.bad, margin: "0 0 8px" }}>✕ PRIMA</p>
          <p style={{ fontSize: 16, fontWeight: 800, color: c.ink, margin: "0 0 6px", lineHeight: 1.3 }}>
            "Facciamo crescere la tua app e i tuoi ricavi"
          </p>
          <p style={{ fontSize: 13, fontWeight: 500, color: c.body, margin: 0 }}>
            + "potenziata dall'AI"
          </p>
        </div>
        <div style={{ flex: 1, background: c.goodBg, border: `1.5px solid ${c.good}`, borderRadius: 14, padding: "16px 18px" }}>
          <p style={{ fontSize: 12.5, fontWeight: 900, color: c.good, margin: "0 0 8px" }}>✓ DOPO</p>
          <p style={{ fontSize: 16, fontWeight: 800, color: c.ink, margin: "0 0 6px", lineHeight: 1.3 }}>
            "User acquisition per consumer app — paghi solo a risultato"
          </p>
          <p style={{ fontSize: 13, fontWeight: 500, color: c.body, margin: 0 }}>
            Categoria + differenziazione, al livello che il prodotto controlla davvero.
          </p>
        </div>
      </div>
      <p style={{ fontSize: 13.5, fontWeight: 700, fontStyle: "italic", color: c.body, textAlign: "center", margin: "0 0 22px" }}>
        La promessa credibile ce l'avevano già — l'hanno buttata nel sottotitolo.
      </p>

      {/* ============ CTA ============ */}
      <div style={{ background: c.darkCTA, borderRadius: 18, padding: "24px 30px", marginTop: "auto", textAlign: "center" }}>
        <p style={{ color: c.white, fontSize: 19, fontWeight: 900, margin: "0 0 8px", lineHeight: 1.3 }}>
          Una Hero non si scrive. Si raccoglie.
        </p>
        <p style={{ color: "#C9C6D6", fontSize: 14.5, fontWeight: 500, margin: "0 0 16px", lineHeight: 1.5 }}>
          Da un posizionamento fatto bene: tesi di prodotto, ICP, differenziazione.
          La mia serie ti porta lì, un pezzo alla volta.
        </p>
        <span style={{ background: c.violaChip, color: "#6D28D9", fontWeight: 900, fontSize: 15, padding: "11px 24px", borderRadius: 99, display: "inline-block" }}>
          👉 Iscriviti a "da 0 al PMF"
        </span>
      </div>
    </div>
  );
}
