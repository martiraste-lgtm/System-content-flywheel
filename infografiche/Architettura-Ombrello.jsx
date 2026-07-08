// Infografica — Deep-dive #2 della sub-serie "Architetture di Posizionamento": OMBRELLO (standard multi-product).
// Masthead/rubrica ripetibile (header + strip-indice, "② Ombrello" evidenziato) + hero "azienda = somma
// delle capability" + 3 esempi per dimensione (IBM grande · Atlassian media · 37signals piccola).
// Palette calda coerente con la serie architetture. Verticale 1080×1300, sfondo chiaro.
// NB loghi: tile a colore brand + wordmark (nel render Gemini si chiedono i loghi veri).

export default function ArchitetturaOmbrello() {
  const c = {
    bg: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#888888",
    white: "#FFFFFF",
    line: "#E5E5E5",
    salmon: "#FDE0D8",
    peach: "#FDE8C8",
    cream: "#FDF5D0",
    accent: "#F47B20",
    accentSoft: "#FFE8D2",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const tabs = ["Single", "Ombrello", "Lead+Add-on", "Famiglia"];
  const activeTab = 1; // Ombrello
  const puntata = "②";

  const examples = [
    {
      size: "GRANDE",
      sizeNote: "~$60B",
      name: "IBM",
      logoBg: "#0530AD",
      logoFg: c.white,
      mark: "IBM",
      prodotti: "Software · Consulting · Infrastructure",
      ombrello: "L'unica che le integra tutte + il valore della combinazione.",
    },
    {
      size: "MEDIA",
      sizeNote: "~$4B",
      name: "Atlassian",
      logoBg: "#0052CC",
      logoFg: c.white,
      mark: "A",
      prodotti: "Jira · Confluence · Trello · Bitbucket",
      ombrello: "Strumenti per far lavorare meglio i team.",
    },
    {
      size: "PICCOLA",
      sizeNote: "bootstrapped",
      name: "37signals",
      logoBg: "#1A1A1A",
      logoFg: c.white,
      mark: "37s",
      prodotti: "Basecamp · HEY · ONCE",
      ombrello: "Software semplice e con un'opinione.",
    },
  ];

  return (
    <div
      style={{
        fontFamily: font,
        background: c.bg,
        width: 1080,
        height: 1300,
        margin: "0 auto",
        padding: "40px 44px 36px",
        color: c.ink,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ===== MASTHEAD (rubrica) ===== */}
      <div style={{ borderBottom: `3px solid ${c.ink}`, paddingBottom: 14, marginBottom: 14 }}>
        <h1 style={{ fontSize: 40, fontWeight: 900, margin: 0, lineHeight: 1.05, whiteSpace: "nowrap" }}>
          Architetture di <span style={{ color: c.accent }}>Posizionamento</span>
        </h1>
        <p style={{ fontSize: 16, color: c.body, margin: "8px 0 0", lineHeight: 1.4 }}>
          Serve a rispondere alla domanda: <b style={{ color: c.ink }}>«Cosa stai posizionando? un
          prodotto, più prodotti, un brand, una piattaforma…?»</b>
        </p>
      </div>

      {/* strip-indice rubrica */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
        {tabs.map((t, i) => {
          const on = i === activeTab;
          return (
            <span
              key={t}
              style={{
                background: on ? c.accent : c.white,
                color: on ? c.white : c.muted,
                border: `1.5px solid ${on ? c.accent : c.line}`,
                fontSize: 13,
                fontWeight: on ? 900 : 700,
                padding: "6px 14px",
                borderRadius: 999,
              }}
            >
              {on ? `${puntata} ` : ""}{t}
            </span>
          );
        })}
      </div>

      {/* ===== HERO BOX — azienda = somma delle capability ===== */}
      <div style={{ background: c.white, border: `2px solid ${c.accent}`, borderRadius: 18, padding: "18px 20px", marginBottom: 20 }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 22, fontWeight: 900, color: c.ink }}>☂️ Ombrello · Standard multi-product</div>
          <div style={{ fontSize: 14, fontWeight: 800, color: c.accent, letterSpacing: 0.4, marginTop: 2 }}>azienda = somma delle capability dei prodotti</div>
        </div>

        {/* box azienda */}
        <div style={{ border: `2.5px solid ${c.ink}`, borderRadius: 12, padding: "12px 14px", textAlign: "center", margin: "16px auto 0", maxWidth: 560 }}>
          <div style={{ fontSize: 18, fontWeight: 900 }}>La tua Azienda</div>
          <div style={{ fontSize: 12.5, color: c.body, marginTop: 2 }}>posizionamento = somma delle capability dei prodotti</div>
        </div>

        {/* frecce divergenti */}
        <svg width="100%" height="26" viewBox="0 0 300 26" preserveAspectRatio="none" style={{ display: "block", margin: "4px 0 0" }}>
          {[50, 150, 250].map((x, i) => (
            <line key={i} x1="150" y1="1" x2={x} y2="25" stroke={c.accent} strokeWidth="2.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
          ))}
        </svg>

        {/* 3 prodotti, ognuno col suo posizionamento */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 2 }}>
          {[{ t: "Prodotto A", bg: c.salmon }, { t: "Prodotto B", bg: c.peach }, { t: "Prodotto C", bg: c.cream }].map((p) => (
            <div key={p.t} style={{ background: p.bg, border: `2px solid ${c.accent}`, borderRadius: 10, padding: "12px 8px", textAlign: "center" }}>
              <div style={{ fontSize: 15, fontWeight: 900, color: c.ink }}>{p.t}</div>
              <div style={{ fontSize: 11.5, color: c.body, marginTop: 2 }}>il suo posizionamento</div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", fontSize: 13.5, color: c.body, marginTop: 14, lineHeight: 1.4 }}>
          Un posizionamento <b>per prodotto</b> + un <b>ombrello aziendale</b> che li somma. Venduti
          separati (ognuno sta in piedi da solo); il brand <b>rassicura</b>, non vende la combo.
        </div>
      </div>

      {/* ===== ESEMPI (3, per dimensione) ===== */}
      <div style={{ fontSize: 14, color: c.body, fontWeight: 700, marginBottom: 12 }}>
        Funziona <b style={{ color: c.accent }}>a ogni scala</b> — grande, media, piccola.
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14, flex: 1 }}>
        {examples.map((e) => (
          <ExampleCard key={e.name} c={c} e={e} />
        ))}
      </div>
    </div>
  );
}

/* ---------- componenti ---------- */

function ExampleCard({ c, e }) {
  return (
    <div style={{ background: c.white, border: `1px solid ${c.line}`, borderRadius: 16, padding: "16px 16px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: 11 }}>
      {/* size chip */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ background: c.ink, color: c.white, fontSize: 11, fontWeight: 900, letterSpacing: 0.8, padding: "4px 11px", borderRadius: 999 }}>{e.size}</span>
        <span style={{ fontSize: 12, color: c.muted, fontWeight: 700 }}>{e.sizeNote}</span>
      </div>

      {/* logo + nome */}
      <div style={{ display: "flex", alignItems: "center", gap: 11 }}>
        <div style={{ width: 44, height: 44, borderRadius: 11, background: e.logoBg, color: e.logoFg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: e.mark.length > 2 ? 15 : 22, fontWeight: 900, flexShrink: 0 }}>
          {e.mark}
        </div>
        <div style={{ fontSize: 20, fontWeight: 900, color: c.ink }}>{e.name}</div>
      </div>

      {/* prodotti venduti separati */}
      <div>
        <div style={{ fontSize: 10.5, fontWeight: 900, color: c.accent, letterSpacing: 0.5, textTransform: "uppercase" }}>Prodotti (venduti separati)</div>
        <div style={{ fontSize: 13.5, color: c.ink, marginTop: 3, lineHeight: 1.35, fontWeight: 600 }}>{e.prodotti}</div>
      </div>

      {/* ombrello */}
      <div style={{ background: c.accentSoft, borderRadius: 10, padding: "10px 12px", marginTop: "auto" }}>
        <div style={{ fontSize: 10.5, fontWeight: 900, color: c.accent, letterSpacing: 0.5, textTransform: "uppercase" }}>☂️ Ombrello aziendale</div>
        <div style={{ fontSize: 12.5, color: c.body, marginTop: 3, lineHeight: 1.35 }}>{e.ombrello}</div>
      </div>
    </div>
  );
}
