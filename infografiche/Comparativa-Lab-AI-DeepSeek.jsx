// Infografica comparativa — 4 lab AI (OpenAI, Anthropic, DeepSeek, Mistral)
// Rifacimento della comparativa productify nel brand system di Stefano, con DeepSeek al posto di xAI.
// Dati verificati giugno 2026. Companion dell'articolo "Valore del Positioning". Landscape ~1180px. No loghi.

export default function ComparativaLabAIDeepSeek() {
  const c = {
    bg: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#888888",
    salmon: "#FDE0D8",
    peach: "#FDE8C8",
    cream: "#FDF5D0",
    blueSoft: "#E3F2FD",
    accent: "#F47B20",
    white: "#FFFFFF",
    line: "#E5E5E5",
    chip: "#F1F1F1",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  // tinte-azienda (entro la palette)
  const col = {
    openai: "#7FA8D8",   // blu tenue
    anthropic: "#9FBF7F", // verde tenue
    deepseek: "#C9A227",  // oro/senape (Cina)
    mistral: "#E0795B",   // arancio-mattone (accento Mistral)
  };

  const superlatives = [
    { k: "Ricavi più alti", v: "~$47B", who: "Anthropic", color: col.anthropic },
    { k: "Valutazione più alta", v: "~$965B", who: "Anthropic (Series H)", color: col.anthropic },
    { k: "Crescita più rapida", v: "~20×", who: "Mistral (12 mesi)", color: col.mistral },
    { k: "Valutata (quasi) senza ricavi", v: "~$55B / ~$0", who: "DeepSeek", color: col.deepseek },
  ];

  const cards = [
    {
      id: "OAI", name: "OpenAI", color: col.openai,
      sub: "Consumer + enterprise platform",
      revLabel: "RICAVI (2026)", rev: "~$24–25B",
      valLabel: "VALUTAZIONE", val: "Centinaia di mld (pre-IPO)",
      tag: "ChatGPT hub · MSFT tie",
    },
    {
      id: "ANT", name: "Anthropic", color: col.anthropic,
      sub: "Enterprise-first, Claude safety-heavy",
      revLabel: "RICAVI (2026)", rev: "~$47B",
      valLabel: "VALUTAZIONE", val: "~$965B (Series H)",
      tag: "Safety-first · Enterprise",
    },
    {
      id: "DS", name: "DeepSeek", color: col.deepseek,
      sub: "Open-weight, efficiente, research-led (Cina)",
      revLabel: "RICAVI (2026)", rev: "~$0 commerciali",
      valLabel: "VALUTAZIONE", val: "~$52–59B (1° round)",
      tag: "Open-weight · valutata su capacità + geopolitica",
    },
    {
      id: "MIS", name: "Mistral", color: col.mistral,
      sub: "Sovereign, open-weight, efficient EU",
      revLabel: "ARR ORA → TARGET", rev: "$400M → $1,1–1,2B",
      valLabel: "VALUTAZIONE", val: "~€20B (~$23B)",
      tag: "Open-weight · EU sovereign",
    },
  ];

  // bar chart (ricavi annualizzati, scala log)
  const bars = [
    { name: "Anthropic", v: 47e9, disp: "~$47B", color: col.anthropic },
    { name: "OpenAI", v: 24.5e9, disp: "$24–25B", color: col.openai },
    { name: "Mistral", v: 400e6, disp: "$400M ARR", color: col.mistral },
    { name: "DeepSeek", v: 5e6, disp: "~$0 (ricavi non commerciali)", color: col.deepseek, sliver: true },
  ];
  const logMin = Math.log10(1e6);   // 1M floor
  const logMax = Math.log10(60e9);  // ~60B ceiling
  const barFrac = (v) => (Math.log10(v) - logMin) / (logMax - logMin);

  return (
    <div
      style={{
        fontFamily: font,
        background: c.bg,
        width: 1180,
        margin: "0 auto",
        padding: 36,
        color: c.ink,
        boxSizing: "border-box",
      }}
    >
      {/* SUPERLATIVE CARDS */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12 }}>
        {superlatives.map((s) => (
          <div key={s.k} style={{ background: c.white, border: `1px solid ${c.line}`, borderRadius: 12, padding: "14px 16px" }}>
            <div style={{ fontSize: 12.5, color: c.muted, fontWeight: 600 }}>{s.k}</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: s.color, marginTop: 2 }}>{s.v}</div>
            <div style={{ fontSize: 13, color: c.body, marginTop: 2 }}>{s.who}</div>
          </div>
        ))}
      </div>

      {/* CARD AZIENDA 2x2 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 16 }}>
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              background: c.white,
              border: `1px solid ${c.line}`,
              borderLeft: `6px solid ${card.color}`,
              borderRadius: 12,
              padding: 18,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 42, height: 42, borderRadius: "50%",
                  background: card.color + "33",
                  color: card.color, fontWeight: 800, fontSize: 13,
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}
              >
                {card.id}
              </div>
              <div>
                <div style={{ fontSize: 19, fontWeight: 800, lineHeight: 1.1 }}>{card.name}</div>
                <div style={{ fontSize: 13, color: c.body, marginTop: 2 }}>{card.sub}</div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 14 }}>
              <div style={{ background: c.chip, borderRadius: 8, padding: "10px 12px" }}>
                <div style={{ fontSize: 10.5, color: c.muted, fontWeight: 700, letterSpacing: 0.4 }}>{card.revLabel}</div>
                <div style={{ fontSize: 15, fontWeight: 800, marginTop: 3 }}>{card.rev}</div>
              </div>
              <div style={{ background: c.chip, borderRadius: 8, padding: "10px 12px" }}>
                <div style={{ fontSize: 10.5, color: c.muted, fontWeight: 700, letterSpacing: 0.4 }}>{card.valLabel}</div>
                <div style={{ fontSize: 15, fontWeight: 800, marginTop: 3 }}>{card.val}</div>
              </div>
            </div>

            <div style={{ marginTop: 12 }}>
              <span style={{ background: card.color + "22", color: c.ink, fontSize: 12, fontWeight: 600, padding: "5px 12px", borderRadius: 999 }}>
                {card.tag}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* BAR CHART */}
      <div style={{ marginTop: 20 }}>
        <div style={{ fontSize: 16, fontWeight: 800 }}>Ricavi annualizzati stimati (2026) — scala log</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 12 }}>
          {bars.map((b) => (
            <div key={b.name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 110, fontSize: 13, color: c.body, textAlign: "right", flexShrink: 0 }}>{b.name}</div>
              <div style={{ flex: 1, background: "#EFEFEF", borderRadius: 8, height: 30, position: "relative" }}>
                <div
                  style={{
                    width: `${Math.max(barFrac(b.v) * 100, 3)}%`,
                    background: b.color,
                    height: "100%",
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: b.sliver ? "flex-start" : "flex-end",
                    paddingLeft: b.sliver ? 0 : 0,
                    paddingRight: b.sliver ? 0 : 12,
                    boxSizing: "border-box",
                  }}
                >
                  {!b.sliver && (
                    <span style={{ fontSize: 12.5, fontWeight: 700, color: c.ink }}>{b.disp}</span>
                  )}
                </div>
                {b.sliver && (
                  <span style={{ position: "absolute", left: `calc(${Math.max(barFrac(b.v) * 100, 3)}% + 10px)`, top: 6, fontSize: 12.5, fontWeight: 700, color: c.body }}>
                    {b.disp}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 12.5, color: c.muted, marginTop: 12, fontStyle: "italic" }}>
          Il punto: la barra di DeepSeek è quasi invisibile (ricavi ~0), ma la sua valutazione è ~$55B.
          Valutazione ≠ ricavi ≠ chiarezza di positioning.
        </div>
      </div>

      <div style={{ fontSize: 11, color: c.muted, marginTop: 14 }}>
        Dati verificati giu 2026 (fonti: Anthropic, Bloomberg/TechCrunch, Reuters/SiliconANGLE, mlq.ai). Valori approssimati/stimati.
      </div>
    </div>
  );
}
