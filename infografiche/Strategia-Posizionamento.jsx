// Infografica — Pillar "Strategia di Posizionamento": le 5 strategie unificate per maturità di categoria.
// Domanda: "In che campo di mercato gioco?". Accento BLU (distingue il pillar dall'arancio di Architetture).
// Spina: spettro di maturità (matura/affollata → categoria che non esiste ancora). Verticale 1080×~1550.

export default function StrategiaPosizionamento() {
  const c = {
    bg: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#8A8A8A",
    white: "#FFFFFF",
    line: "#E5E5E5",
    blue: "#2563EB",
    navy: "#1E3A8A",
    blueLite: "#E4ECFE",
    // puntini-maturità (coerenti con la barra-gradiente)
    hot: "#EF4444",
    warm: "#F59E0B",
    coolL: "#65D08A",
    cool: "#16A34A",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const mature = [
    {
      n: "①",
      dot: c.hot,
      title: "Domina categoria matura · head-to-head",
      mech: "accetti i criteri esistenti, vinci su quelli",
      quando: "Sei leader o quasi, oppure nessun leader chiaro.",
      caso: "Coca/Pepsi · Samsung/Apple",
    },
    {
      n: "②",
      dot: c.hot,
      title: "Riformula categoria matura",
      mech: "cambi i criteri di valutazione",
      quando: "Svolta tech/di modello, leader vulnerabile sui vecchi criteri.",
      caso: "Tesla (EV: da efficienza a performance) · Apple (smartphone: da email ad app)",
    },
  ];
  const rest = [
    {
      n: "③",
      dot: c.warm,
      chip: "Matura · nicchia",
      title: "Big Fish, Smaller Pond",
      mech: "sotto-segmento mal servito",
      quando: "Non hai risorse per affrontare il leader e non vuoi, ma trovi una nicchia abbastanza grande per i tuoi obiettivi di business.",
      caso: "DuckDuckGo (privacy-minded) · CRM per banche/assicurazioni",
    },
    {
      n: "④",
      dot: c.coolL,
      chip: "Immatura in crescita",
      title: "Categoria immatura in crescita",
      mech: "sposti l'attenzione dal «perché noi vs loro» al «perché il tuo modo attuale non va più bene»",
      quando: "La categoria esiste ma il tuo buyer non lo sa. Lo agganci spiegando perché il modo in cui lavora oggi è rotto. Non vendi la differenza dentro una categoria: vendi la categoria stessa a chi non la conosce ancora.",
      caso: "Docusign (e-signature) · Dropbox (file sharing)",
    },
    {
      n: "⑤",
      dot: c.cool,
      chip: "Nuova",
      title: "Crea una nuova categoria",
      mech: "è un percorso",
      quando: "Nessuna etichetta esistente aiuta più di quanto danneggi.",
      caso: "Salesforce (cloud CRM) · Vanta (SOC2)",
    },
  ];

  return (
    <div style={{ fontFamily: font, background: c.bg, width: 1080, margin: "0 auto", padding: "40px 44px 38px", color: c.ink, boxSizing: "border-box" }}>
      {/* MASTHEAD */}
      <div style={{ borderBottom: `3px solid ${c.navy}`, paddingBottom: 14, marginBottom: 18 }}>
        <h1 style={{ fontSize: 42, fontWeight: 900, color: c.navy, margin: 0, lineHeight: 1.05, whiteSpace: "nowrap" }}>
          Strategia di <span style={{ color: c.blue }}>Posizionamento</span>
        </h1>
        <p style={{ fontSize: 18, color: c.body, margin: "9px 0 0", fontWeight: 700 }}>
          Che gioco decidi di fare: <span style={{ color: c.blue }}>5 strategie di posizionamento</span>
        </p>
      </div>

      {/* BARRA-LEGENDA MATURITÀ */}
      <div style={{ marginBottom: 18 }}>
        <div style={{ height: 14, borderRadius: 999, background: `linear-gradient(90deg, ${c.hot} 0%, ${c.warm} 45%, ${c.coolL} 72%, ${c.cool} 100%)` }} />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6, fontSize: 12.5, fontWeight: 800, color: c.muted }}>
          <span>◄ Categoria matura, affollata</span>
          <span>Categoria che non esiste ancora ►</span>
        </div>
      </div>

      {/* ZONA MATURA — 1 + 2 affiancate */}
      <ZoneLabel c={c} dot={c.hot} text="CATEGORIA MATURA — stessa maturità, due mosse opposte" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
        {mature.map((s) => <StrategyCard key={s.n} c={c} s={s} compact />)}
      </div>

      {/* 3 · 4 · 5 in sequenza */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {rest.map((s) => <StrategyCard key={s.n} c={c} s={s} />)}
      </div>
    </div>
  );
}

/* ---------- componenti ---------- */

function ZoneLabel({ c, dot, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
      <span style={{ width: 11, height: 11, borderRadius: "50%", background: dot, display: "inline-block" }} />
      <span style={{ fontSize: 12.5, fontWeight: 900, letterSpacing: 0.6, color: c.ink, textTransform: "uppercase" }}>{text}</span>
    </div>
  );
}

function StrategyCard({ c, s, compact }) {
  return (
    <div style={{ background: c.white, border: `1px solid ${c.line}`, borderRadius: 14, padding: "14px 16px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", height: "100%", boxSizing: "border-box" }}>
      {/* header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 30, height: 30, borderRadius: 8, background: c.navy, color: c.white, fontSize: 16, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.n}</span>
        <span style={{ width: 12, height: 12, borderRadius: "50%", background: s.dot, flexShrink: 0 }} />
        <span style={{ fontSize: compact ? 16 : 18, fontWeight: 900, color: c.ink, lineHeight: 1.1 }}>{s.title}</span>
        {s.badge && (
          <span style={{ marginLeft: "auto", background: c.blueLite, color: c.blue, fontSize: 10.5, fontWeight: 900, padding: "3px 9px", borderRadius: 999, border: `1px solid ${c.blue}`, whiteSpace: "nowrap" }}>{s.badge}</span>
        )}
      </div>

      <div style={{ fontSize: 13, fontStyle: "italic", color: c.blue, fontWeight: 700, margin: "7px 0 0", lineHeight: 1.3 }}>{s.mech}</div>

      {/* quando / caso */}
      <div style={{ display: "grid", gridTemplateColumns: compact ? "1fr" : "1fr 1.1fr", gap: compact ? 6 : 14, marginTop: 10 }}>
        <div>
          <div style={{ fontSize: 10.5, fontWeight: 900, color: c.muted, letterSpacing: 0.6, textTransform: "uppercase" }}>Quando</div>
          <div style={{ fontSize: 13, color: c.body, marginTop: 2, lineHeight: 1.32 }}>{s.quando}</div>
        </div>
        <div>
          <div style={{ fontSize: 10.5, fontWeight: 900, color: c.muted, letterSpacing: 0.6, textTransform: "uppercase" }}>Caso</div>
          <div style={{ fontSize: 13, color: c.ink, marginTop: 2, lineHeight: 1.32, fontWeight: 600 }}>{s.caso}</div>
        </div>
      </div>
    </div>
  );
}
