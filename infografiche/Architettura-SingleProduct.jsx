// Infografica — Deep-dive #1 della sub-serie "Architetture di Posizionamento": SINGLE PRODUCT.
// Masthead/rubrica ripetibile (header + strip-indice 4 tab) + hero "azienda = prodotto" + 4 esempi.
// Palette calda coerente con la serie architetture. Verticale 1080×~1300, sfondo chiaro.
// NB loghi: tile a colore brand + wordmark (nel render Gemini si chiedono i loghi veri).

export default function ArchitetturaSingleProduct() {
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

  const examples = [
    { name: "Loom", desc: "video/screen recording async", logoBg: "#625DF5", logoFg: c.white, mark: "L" },
    { name: "Miro", desc: "whiteboard online", logoBg: "#FFD02F", logoFg: c.ink, mark: "M" },
    { name: "Figma", desc: "design collaborativo", figma: true },
    { name: "Typeform", desc: "form conversazionali", logoBg: "#1A1A1A", logoFg: c.white, mark: "T" },
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
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        {tabs.map((t, i) => {
          const on = i === 0;
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
              {on ? "① " : ""}{t}
            </span>
          );
        })}
      </div>

      {/* ===== HERO BOX ===== */}
      <div style={{ background: c.white, border: `2px solid ${c.accent}`, borderRadius: 18, padding: "20px 22px", marginBottom: 22 }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: 22, fontWeight: 900, color: c.ink }}>Single Product Positioning</div>
          <div style={{ fontSize: 14, fontWeight: 800, color: c.accent, letterSpacing: 0.5, marginTop: 2 }}>azienda = prodotto</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 22, marginTop: 18 }}>
          <BigBox c={c} label="L'azienda" />
          <span style={{ fontSize: 44, fontWeight: 900, color: c.accent }}>=</span>
          <BigBox c={c} label="Il prodotto" />
        </div>

        <div style={{ textAlign: "center", fontSize: 15, color: c.body, marginTop: 16, lineHeight: 1.4 }}>
          In una one-product company sono la <b>stessa cosa</b>: <b style={{ color: c.ink }}>un solo posizionamento</b>.
        </div>
      </div>

      {/* ===== ESEMPI ===== */}
      <div style={{ fontSize: 14, color: c.body, fontWeight: 700, marginBottom: 12 }}>
        Esempi nella <b style={{ color: c.accent }}>fase iniziale</b>: un prodotto = l'azienda.
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, flex: 1 }}>
        {examples.map((e) => (
          <ExampleCard key={e.name} c={c} e={e} />
        ))}
      </div>
    </div>
  );
}

/* ---------- componenti ---------- */

function BigBox({ c, label }) {
  return (
    <div
      style={{
        border: `2.5px solid ${c.ink}`,
        borderRadius: 12,
        padding: "22px 30px",
        minWidth: 230,
        textAlign: "center",
        fontSize: 22,
        fontWeight: 800,
        color: c.ink,
        background: c.white,
      }}
    >
      {label}
    </div>
  );
}

function ExampleCard({ c, e }) {
  return (
    <div style={{ background: c.white, border: `1px solid ${c.line}`, borderRadius: 16, padding: "16px 18px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: 12 }}>
      {/* header: logo + nome */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <LogoTile c={c} e={e} />
        <div style={{ fontSize: 22, fontWeight: 900, color: c.ink }}>{e.name}</div>
      </div>

      {/* mini diagramma azienda = prodotto */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, background: c.accentSoft, borderRadius: 12, padding: "12px 10px" }}>
        <MiniBox c={c} name={e.name} sub="azienda" />
        <span style={{ fontSize: 24, fontWeight: 900, color: c.accent }}>=</span>
        <MiniBox c={c} name={e.name} sub="prodotto" />
      </div>

      {/* descrizione */}
      <div style={{ textAlign: "center", fontSize: 14, color: c.body, lineHeight: 1.35 }}>{e.desc}</div>
    </div>
  );
}

function MiniBox({ c, name, sub }) {
  return (
    <div style={{ border: `2px solid ${c.ink}`, borderRadius: 9, padding: "8px 12px", textAlign: "center", background: c.white, minWidth: 96 }}>
      <div style={{ fontSize: 15, fontWeight: 800, color: c.ink, lineHeight: 1.1 }}>{name}</div>
      <div style={{ fontSize: 11, color: c.muted, fontWeight: 600 }}>({sub})</div>
    </div>
  );
}

function LogoTile({ c, e }) {
  if (e.figma) {
    // Figma: tile chiaro con motivo multicolor
    const dots = ["#F24E1E", "#FF7262", "#A259FF", "#1ABCFE", "#0ACF83"];
    return (
      <div style={{ width: 46, height: 46, borderRadius: 12, background: "#1E1E1E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
          {dots.slice(0, 4).map((d) => (
            <span key={d} style={{ width: 9, height: 9, borderRadius: "50%", background: d, display: "block" }} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div style={{ width: 46, height: 46, borderRadius: 12, background: e.logoBg, color: e.logoFg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 900, flexShrink: 0 }}>
      {e.mark}
    </div>
  );
}
