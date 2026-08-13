// Infografica — Posizionamento "Famiglia / Piattaforma": li posizioni combinati e spieghi perché insieme
// Companion dell'articolo "Valore del Positioning". Brand system chiaro, portrait ~800px.
// Uniforme alla serie architetture. Esempio HubSpot (verificato live, giugno 2026; no loghi).
// Reference (non clonata): Dunford "A multi-product family or platform".

export default function PosizionamentoFamigliaPiattaforma() {
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

  const hubs = [
    { name: "Marketing Hub", fn: "Attrai e converti" },
    { name: "Sales Hub", fn: "Chiudi più deal" },
    { name: "Service Hub", fn: "Assisti i clienti" },
    { name: "Content Hub", fn: "Sito e contenuti" },
    { name: "Data Hub", fn: "Dati puliti e sync" },
    { name: "Commerce Hub", fn: "Pagamenti e fatture" },
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
        Posizionamento «Famiglia / Piattaforma»: li posizioni combinati
      </h1>
      <p style={{ fontSize: 15, color: c.body, marginTop: 10, marginBottom: 0, lineHeight: 1.45 }}>
        Più prodotti per lo stesso cliente, comprati insieme o uno alla volta in qualsiasi ordine. Non
        li posizioni uno per uno: li posizioni <b>combinati</b> e spieghi <b>perché conviene prenderli
        insieme</b>.
      </p>

      {/* VISUAL */}
      <div
        style={{
          background: c.white,
          border: `1px solid ${c.line}`,
          borderRadius: 16,
          padding: 22,
          marginTop: 20,
        }}
      >
        {/* POV HEADER */}
        <div style={{ background: c.ink, color: c.white, borderRadius: 12, padding: "14px 18px", textAlign: "center" }}>
          <div style={{ fontSize: 12, letterSpacing: 1.4, color: c.accent, fontWeight: 800 }}>
            POSITIONING DI PIATTAFORMA
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, marginTop: 4 }}>HubSpot — Agentic Customer Platform</div>
          <div style={{ fontSize: 13.5, color: "#EDEDED", marginTop: 4 }}>
            «Unisci marketing, sales e service su <b>un'unica piattaforma</b>»
          </div>
        </div>

        {/* HUB TILES */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginTop: 14 }}>
          {hubs.map((h) => (
            <div
              key={h.name}
              style={{
                background: c.peach,
                borderRadius: 10,
                padding: "10px 12px",
              }}
            >
              <div style={{ fontSize: 13.5, fontWeight: 800 }}>{h.name}</div>
              <div style={{ fontSize: 11.5, color: c.body, marginTop: 2 }}>{h.fn}</div>
            </div>
          ))}
        </div>

        {/* connettori verso la base */}
        <div style={{ textAlign: "center", color: c.accent, fontSize: 18, margin: "6px 0 2px" }}>
          ↑ &nbsp; ↑ &nbsp; ↑
        </div>

        {/* FOUNDATION — Smart CRM */}
        <div
          style={{
            background: c.salmon,
            border: `2px solid ${c.accent}`,
            borderRadius: 12,
            padding: "12px 16px",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 15, fontWeight: 800 }}>Smart CRM — il dato connesso</div>
          <div style={{ fontSize: 12.5, color: c.body, marginTop: 2 }}>
            Single source of truth (gratis, sotto tutti gli Hub): è ciò che li tiene insieme.
          </div>
        </div>

        <div style={{ textAlign: "center", fontSize: 13, color: c.body, marginTop: 14, lineHeight: 1.4 }}>
          Li compri <b>insieme o uno alla volta, in qualsiasi ordine</b> — ognuno è una porta d'ingresso.
          Bundle «Customer Platform» oppure Hub singoli.
        </div>
      </div>

      {/* PERCHÉ INSIEME */}
      <div style={{ background: c.cream, borderRadius: 12, padding: 16, marginTop: 18 }}>
        <div style={{ fontSize: 14, fontWeight: 800 }}>💡 Il positioning sta nel «meglio insieme»</div>
        <div style={{ fontSize: 13, color: c.body, marginTop: 6, lineHeight: 1.45 }}>
          Non «il miglior tool di email» o «il miglior help desk», ma <b>«tutto il go-to-market su una
          piattaforma connessa, con dati unificati — non una dozzina di tool scollegati»</b>. Il lavoro
          è spiegare il <b>valore dell'insieme</b>: stesso dato, niente silos.
        </div>
        <div style={{ fontSize: 12, color: c.muted, marginTop: 8, fontStyle: "italic" }}>
          Venderli singoli o in bundle è poi una scelta di pricing & packaging, non di positioning. (Dunford)
        </div>
      </div>
    </div>
  );
}
