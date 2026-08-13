// Infografica — Tabella diagnostica "Posizionamento vs Marketing".
// Companion del post LinkedIn "Hai un Problema di Posizionamento o di Marketing?".
// Tesi: la maggior parte delle startup non ha problemi di marketing, ha problemi di
// POSIZIONAMENTO mascherati da problemi di marketing. Struttura a 3 colonne:
//   SINTOMO (quello che osservi) → CAUSA (la verità = posizionamento, colonna-eroe arancio)
//   → PROBLEMA DI MARKETING con cui lo confondi (il depistaggio/trappola, rosso).
// Look: brand system chiaro (STYLE-GUIDE.md §3–4), font Inter, celle rettangolari arrotondate.
// Layout: HTML/CSS Grid, verticale 1080×~1700. Render con artifact viewer / React.

export default function PosizionamentoVsMarketingDiagnostica() {
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const c = {
    bg: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#8A8A8A",
    white: "#FFFFFF",
    line: "#E5E5E5",
    accent: "#F47B20",     // arancio brand — colonna CAUSA (la verità)
    accentLane: "#FEECDB", // fondo arancio-tenue cella causa
    bad: "#EF3B2C",        // rosso — colonna PROBLEMA MKT (la trappola)
    badLane: "#FDE7E4",    // fondo rosso-tenue cella problema
    sympBg: "#F1F1F1",     // chip header sintomo (neutro)
  };

  // 10 righe. Ordine e contenuti da piano approvato.
  const rows = [
    {
      sintomo: "La nostra Sales Demo non converte",
      causa: "Poca chiarezza su ICP · Pain · Perché sceglierci",
      problema: "È colpa del Sales che non sa chiudere / La Demo è confusa / Il Sales Deck è debole",
    },
    {
      sintomo: "L'utente non riconosce il valore del tuo prodotto",
      causa: "Il prodotto ha troppe feature ma nessuna risolve in modo completo un problema preciso",
      problema: "Messaging & copy inefficace: aggiungiamo più emoji nelle email, così sembra più friendly",
    },
    {
      sintomo: "Il nostro outbound non funziona",
      causa: "ICP troppo largo e messaggio non differenziato: mandi le email giuste alle persone sbagliate",
      problema: "Compriamo un nuovo tool di outbound o aggiungiamo più lead in lista",
    },
    {
      sintomo: "Riacquisto molto basso",
      causa: "Segmentazione superficiale del target e promesse troppo alte durante la vendita",
      problema: "Tattiche di remarketing sbagliate: magari con un'altra newsletter e lo sconto del 20% tornano",
    },
    {
      sintomo: "Utilizzo del prodotto basso",
      causa: "Il prodotto non soddisfa esigenze e aspettative dei clienti in modo efficace",
      problema: "Problemi di UX e UI: mettiamo un onboarding gamificato e si risolve",
    },
    {
      sintomo: "Basso tasso di conversione",
      causa: "Non è chiaro l'UVP né l'elemento differenziante",
      problema: "È il prezzo, abbassiamolo / I competitor hanno una feature in più, facciamola anche noi subito",
    },
    {
      sintomo: "Messaggi di marketing inefficaci",
      causa: "Scarsa conoscenza della target audience e dei competitor",
      problema: "Home page, landing e contenuti confusi. Manca un CLAIM geniale!",
    },
    {
      sintomo: "Perdita di affari verso alternative con prodotti inferiori",
      causa: "Manca chiarezza sull'elemento differenziante che ti fa spiccare tra alternative simili",
      problema: "Prezzo troppo alto / Non facciamo abbastanza adv / Facciamo una call interna di allineamento. La quinta questo mese",
    },
    {
      sintomo: "Tanti lead, pochi clienti ideali",
      causa: "Il posizionamento è troppo ampio o troppo generico",
      problema: "Problemi di qualificazione lead o di targeting",
    },
    {
      sintomo: "Il team di vendita chiede sempre sconti",
      causa: "Mancanza di valore percepito, differenziazione debole",
      problema: "Prezzo troppo alto / Secondo me serve un rebranding totale. Partiamo dal logo",
    },
  ];

  // griglia colonne condivisa header + righe
  const cols = "minmax(0, 1fr) minmax(0, 1.05fr) minmax(0, 1.15fr)";
  const cellPad = "14px 15px";

  const headCell = {
    padding: "13px 15px",
    borderRadius: 11,
    fontSize: 14.5,
    fontWeight: 900,
    lineHeight: 1.2,
    letterSpacing: 0.2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: 58,
  };

  return (
    <div
      style={{
        background: c.bg,
        padding: "44px 46px 40px",
        fontFamily: font,
        width: 1080,
        boxSizing: "border-box",
        margin: "0 auto",
      }}
    >
      {/* ===================== HEADER ===================== */}
      <div style={{ borderBottom: `3px solid ${c.ink}`, paddingBottom: 22, marginBottom: 24 }}>
        <div style={{ fontSize: 43, fontWeight: 900, color: c.ink, lineHeight: 1.12, letterSpacing: -0.5 }}>
          La maggior parte delle startup{" "}
          <span style={{ color: c.bad }}>NON</span> ha problemi di Marketing.
        </div>
        <div style={{ fontSize: 32, fontWeight: 800, color: c.ink, lineHeight: 1.2, marginTop: 14 }}>
          Ha problemi di <span style={{ color: c.accent }}>Posizionamento</span>{" "}
          <span style={{ color: c.body, fontWeight: 700 }}>mascherati da problemi di marketing.</span>
        </div>
      </div>

      {/* ===================== HEADER COLONNE ===================== */}
      <div style={{ display: "grid", gridTemplateColumns: cols, gap: 12, marginBottom: 12 }}>
        <div style={{ ...headCell, background: c.sympBg, color: c.ink, border: `1.5px solid ${c.line}` }}>
          <span style={{ fontSize: 11, fontWeight: 800, color: c.muted, letterSpacing: 1.4, marginBottom: 3 }}>
            QUELLO CHE OSSERVI
          </span>
          SINTOMO di POSIZIONAMENTO
        </div>
        <div style={{ ...headCell, background: c.accent, color: c.white }}>
          <span style={{ fontSize: 11, fontWeight: 800, color: "rgba(255,255,255,.85)", letterSpacing: 1.4, marginBottom: 3 }}>
            LA VERITÀ ✓
          </span>
          CAUSA
        </div>
        <div style={{ ...headCell, background: c.bad, color: c.white }}>
          <span style={{ fontSize: 11, fontWeight: 800, color: "rgba(255,255,255,.85)", letterSpacing: 1.4, marginBottom: 3 }}>
            IL DEPISTAGGIO ✕
          </span>
          PROBLEMA di MARKETING con cui lo confondi
        </div>
      </div>

      {/* ===================== RIGHE ===================== */}
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {rows.map((r, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: cols, gap: 12 }}>
            {/* SINTOMO */}
            <div
              style={{
                background: c.white,
                border: `1.5px solid ${c.line}`,
                borderRadius: 11,
                padding: cellPad,
                boxShadow: "0 2px 4px rgba(0,0,0,.06)",
                display: "flex",
                alignItems: "center",
                gap: 9,
              }}
            >
              <span style={{ fontSize: 15, flexShrink: 0 }}>⚠️</span>
              <span style={{ fontSize: 15, fontWeight: 800, color: c.ink, lineHeight: 1.28 }}>
                {r.sintomo}
              </span>
            </div>

            {/* CAUSA — colonna-eroe */}
            <div
              style={{
                background: c.accentLane,
                border: `2px solid ${c.accent}`,
                borderRadius: 11,
                padding: cellPad,
                boxShadow: "0 2px 6px rgba(244,123,32,.14)",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 600, color: c.ink, lineHeight: 1.32 }}>
                {r.causa}
              </span>
            </div>

            {/* PROBLEMA DI MARKETING — la trappola */}
            <div
              style={{
                background: c.badLane,
                border: `1.5px solid ${c.bad}`,
                borderRadius: 11,
                padding: cellPad,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <span style={{ color: c.bad, fontWeight: 900, fontSize: 15, flexShrink: 0 }}>✕</span>
              <span style={{ fontSize: 13.5, fontWeight: 500, color: c.body, lineHeight: 1.3, fontStyle: "italic" }}>
                {r.problema}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ===================== CALLOUT FINALE ===================== */}
      <div
        style={{
          marginTop: 26,
          background: c.ink,
          borderRadius: 14,
          padding: "22px 26px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 10,
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: 21, fontWeight: 700, color: c.white, lineHeight: 1.3 }}>
          Il marketing non crea chiarezza.
          <span style={{ color: c.accent, fontWeight: 900 }}> Amplifica.</span>{" "}
          <span style={{ color: "rgba(255,255,255,.72)", fontWeight: 600, fontSize: 18 }}>
            Se il posizionamento è sbagliato, lo rende solo più visibile.
          </span>
        </span>
      </div>
    </div>
  );
}
