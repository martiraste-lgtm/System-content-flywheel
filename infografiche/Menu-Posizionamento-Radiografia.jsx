// Infografica — "Radiografia di un posizionamento mai deciso"
// Due menù reali (anonimizzati) ricostruiti come mockup + callout che spiegano perché non funzionano.
// Companion del post LinkedIn "Dove si vede subito che NON hai un posizionamento chiaro? Dal menù".
// Brand system chiaro, palette calda pillar Posizionamento + rosso per i problemi. 1080px portrait.

export default function MenuPosizionamentoRadiografia() {
  const c = {
    bg: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#8A8A8A",
    white: "#FFFFFF",
    line: "#E5E5E5",
    accent: "#F47B20",
    salmon: "#FDE0D8",
    peach: "#FDE8C8",
    cream: "#FDF5D0",
    bad: "#EF3B2C",
    badSoft: "#FBE4E0",
    navBg: "#F1F1F1",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  /* ---------- componenti ---------- */

  const NumBadge = ({ n, style }) => (
    <div
      style={{
        width: 26,
        height: 26,
        borderRadius: 8,
        background: c.bad,
        color: c.white,
        fontSize: 14,
        fontWeight: 900,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        ...style,
      }}
    >
      {n}
    </div>
  );

  const MenuItem = ({ label, sub }) => (
    <div
      style={{
        background: c.white,
        border: `1px solid ${c.line}`,
        borderRadius: 7,
        padding: "6px 10px",
        marginBottom: 6,
      }}
    >
      <div style={{ fontSize: 12, fontWeight: 700, color: c.ink }}>{label}</div>
      {sub && <div style={{ fontSize: 10.5, color: c.body, marginTop: 1 }}>{sub}</div>}
    </div>
  );

  // Colonna del mega-menu, cerchiabile in rosso con badge numerato
  const MenuCol = ({ title, items, flagged, n, width }) => (
    <div
      style={{
        position: "relative",
        border: flagged ? `2.5px dashed ${c.bad}` : `1px solid ${c.line}`,
        borderRadius: 10,
        padding: "10px 10px 5px",
        background: flagged ? "#FFF7F5" : c.white,
        width,
        boxSizing: "border-box",
      }}
    >
      {flagged && <NumBadge n={n} style={{ position: "absolute", top: -13, right: -10 }} />}
      <div
        style={{
          fontSize: 10.5,
          fontWeight: 800,
          letterSpacing: 0.8,
          color: flagged ? c.bad : c.muted,
          textTransform: "uppercase",
          marginBottom: 7,
        }}
      >
        {title}
      </div>
      {items.map((it) => (typeof it === "string" ? <MenuItem key={it} label={it} /> : <MenuItem key={it.label} {...it} />))}
    </div>
  );

  const NavBar = ({ items, active }) => (
    <div
      style={{
        display: "flex",
        gap: 22,
        alignItems: "center",
        background: c.navBg,
        borderRadius: "10px 10px 0 0",
        padding: "10px 16px",
        borderBottom: `1px solid ${c.line}`,
      }}
    >
      <div style={{ width: 54, height: 14, borderRadius: 4, background: c.ink, opacity: 0.85 }} />
      {items.map((it) => (
        <div
          key={it}
          style={{
            fontSize: 11.5,
            fontWeight: it === active ? 900 : 700,
            color: it === active ? c.accent : c.ink,
            borderBottom: it === active ? `2px solid ${c.accent}` : "none",
            paddingBottom: 2,
          }}
        >
          {it} ▾
        </div>
      ))}
    </div>
  );

  const Callout = ({ n, title, text }) => (
    <div
      style={{
        display: "flex",
        gap: 10,
        background: c.badSoft,
        border: `1.5px solid ${c.bad}`,
        borderRadius: 10,
        padding: "10px 12px",
        marginBottom: 10,
      }}
    >
      <NumBadge n={n} />
      <div>
        <div style={{ fontSize: 13, fontWeight: 800, color: c.ink, lineHeight: 1.25 }}>{title}</div>
        <div style={{ fontSize: 12, color: c.body, marginTop: 3, lineHeight: 1.4 }}>{text}</div>
      </div>
    </div>
  );

  const PanelTag = ({ children }) => (
    <div
      style={{
        display: "inline-block",
        background: c.ink,
        color: c.white,
        fontSize: 11.5,
        fontWeight: 800,
        letterSpacing: 1,
        borderRadius: 6,
        padding: "5px 12px",
        textTransform: "uppercase",
        marginBottom: 10,
      }}
    >
      {children}
    </div>
  );

  const StatPill = ({ v, k }) => (
    <div
      style={{
        background: c.white,
        border: `1.5px solid ${c.bad}`,
        borderRadius: 9,
        padding: "7px 14px",
        textAlign: "center",
      }}
    >
      <span style={{ fontSize: 17, fontWeight: 900, color: c.bad }}>{v}</span>{" "}
      <span style={{ fontSize: 11.5, fontWeight: 700, color: c.body }}>{k}</span>
    </div>
  );

  /* ---------- dati ---------- */

  const menu1cols = [
    {
      title: "Cosa puoi fare con XXX",
      flagged: true,
      n: 1,
      width: 240,
      items: [
        "Customer Data Platform",
        "Campagne multicanale",
        "Marketing automation",
        "Messaggi transazionali",
        "Lead acquisition",
        "Analisi e report",
      ],
    },
    {
      title: "I nostri canali",
      flagged: true,
      n: 2,
      width: 210,
      items: ["Email", "SMS", "RCS", "WhatsApp", "Survey", "Landing page e form", "Pop-up e banner", "Canali custom"],
    },
    {
      title: "Pacchetti · Settori",
      flagged: true,
      n: 3,
      width: 200,
      items: ["B2B", "Retail e Ecommerce", "Non-profit", "Enterprise"],
    },
  ];

  const menu2colProduct = {
    title: "Product",
    flagged: true,
    n: 1,
    width: 320,
    items: [
      { label: "Grow your app", sub: "UA per finance, shopping, sport…" },
      { label: "Grow your mobile game", sub: "user acquisition ROAS-driven" },
      { label: "Technology", sub: "unleash the power of A.I." },
      { label: "Dynamic Creatives", sub: "multi-page ads ad alto impatto" },
    ],
  };

  const menu2colSolutions = {
    title: "Solutions",
    flagged: true,
    n: 2,
    width: 320,
    items: [
      { label: "XXX for Mobile Games", sub: "growth per i games" },
      { label: "XXX for Shopping Apps", sub: "growth per lo shopping" },
      { label: "XXX for Fintech Apps", sub: "growth per il fintech" },
      { label: "XXX for Agencies", sub: "growth per le agenzie" },
    ],
  };

  /* ---------- render ---------- */

  return (
    <div
      style={{
        fontFamily: font,
        background: c.bg,
        width: 1080,
        margin: "0 auto",
        padding: "40px 44px 34px",
        color: c.ink,
        boxSizing: "border-box",
      }}
    >
      {/* MASTHEAD */}
      <h1 style={{ fontSize: 40, fontWeight: 900, margin: 0, lineHeight: 1.12 }}>
        Radiografia di un <span style={{ color: c.accent }}>posizionamento</span> mai deciso
      </h1>
      <p style={{ fontSize: 18, color: c.body, fontWeight: 600, margin: "10px 0 0" }}>
        Due menù reali (anonimizzati). Stessa malattia: la paura di lasciare fuori qualcuno.
      </p>
      <div style={{ height: 3, background: c.ink, marginTop: 16, marginBottom: 24 }} />

      {/* ===== MENÙ 1 ===== */}
      <PanelTag>Menù 1 · Suite martech</PanelTag>
      <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
        {/* mockup */}
        <div style={{ flex: "0 0 660px" }}>
          <div style={{ borderRadius: 10, boxShadow: "0 3px 10px rgba(0,0,0,.08)", background: c.white }}>
            <NavBar items={["Piattaforma", "Soluzioni", "Risorse", "Pacchetti", "Partner"]} active="Piattaforma" />
            <div style={{ display: "flex", gap: 14, padding: "16px 14px 14px", flexWrap: "wrap" }}>
              {menu1cols.map((col) => (
                <MenuCol key={col.title} {...col} />
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
            <StatPill v="18" k="voci di menù" />
            <StatPill v="3" k="tassonomie sovrapposte" />
            <StatPill v="0" k="scelte fatte" />
          </div>
        </div>
        {/* callout */}
        <div style={{ flex: 1 }}>
          <Callout
            n={1}
            title="Il prodotto spacchettato in capability"
            text="CDP, automation, transazionali… È l'indice della documentazione, non una proposta. Il buyer deve capire da solo quale gli serve."
          />
          <Callout
            n={2}
            title="La feature list promossa a navigazione"
            text="8 canali elencati uno per uno. Nessuno compra «RCS»: compra un risultato. La traduzione capability→beneficio è scaricata sul visitatore."
          />
          <Callout
            n={3}
            title="Il «per chi» nascosto sotto Pacchetti"
            text="B2B, retail, non-profit, enterprise: 4 target diversissimi, tutti tenuti buoni. La scelta del cliente ideale è rimandata — cioè mai fatta."
          />
        </div>
      </div>

      {/* ===== MENÙ 2 ===== */}
      <div style={{ marginTop: 28 }}>
        <PanelTag>Menù 2 · Adtech / growth</PanelTag>
        <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
          {/* mockup */}
          <div style={{ flex: "0 0 660px" }}>
            <div style={{ borderRadius: 10, boxShadow: "0 3px 10px rgba(0,0,0,.08)", background: c.white }}>
              <NavBar items={["Product", "Solutions", "Resources", "Company"]} active="Product" />
              <div style={{ display: "flex", gap: 14, padding: "16px 14px 14px" }}>
                <MenuCol {...menu2colProduct} />
                <MenuCol {...menu2colSolutions} />
              </div>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
              <StatPill v="3" k="logiche in una colonna" />
              <StatPill v="2×" k="stessa offerta ri-affettata" />
            </div>
          </div>
          {/* callout */}
          <div style={{ flex: 1 }}>
            <Callout
              n={1}
              title="Job, tecnologia e feature mescolati"
              text="«Grow your app» è un job, «Technology» è la tecnologia, «Dynamic Creatives» è una feature. Tre logiche diverse nella stessa colonna: il buyer non sa cosa sta confrontando."
            />
            <Callout
              n={2}
              title="Solutions duplica Product"
              text="I segmenti (games, shopping, fintech) stanno già dentro «Grow your app» — e riappaiono come Solutions. Stessa offerta venduta due volte. E «for Agencies» è un tipo di buyer, non un settore: accumulo anche nella segmentazione."
            />
          </div>
        </div>
      </div>

      {/* ===== DIAGNOSI ===== */}
      <div
        style={{
          background: c.ink,
          color: c.white,
          borderRadius: 14,
          padding: "20px 24px",
          marginTop: 28,
        }}
      >
        <div style={{ fontSize: 12, letterSpacing: 1.4, color: c.accent, fontWeight: 800 }}>LA DIAGNOSI</div>
        <div style={{ fontSize: 19, fontWeight: 800, marginTop: 6, lineHeight: 1.35 }}>
          Il menù non è un problema di UX: è la decisione di posizionamento che nessuno ha preso, resa pubblica.
        </div>
        <div style={{ fontSize: 14, color: "#CFCFCF", marginTop: 8, lineHeight: 1.5 }}>
          Ogni voce in più è un «sì» detto a qualcuno in azienda. Il totale è un «boh» detto al buyer — che
          non trasforma da solo una lista di capability in vantaggi per il suo caso, e se ne va. La cura non
          è riscrivere il copy: è scegliere <b style={{ color: c.white }}>un'architettura di posizionamento</b> e
          lasciare fuori qualcosa.
        </div>
      </div>
    </div>
  );
}
