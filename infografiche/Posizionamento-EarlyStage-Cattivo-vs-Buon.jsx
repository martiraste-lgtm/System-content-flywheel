// Infografica — Posizionamento Early Stage: Cattivo vs Buon
// Formato LinkedIn verticale 1080×1350. Struttura fedele allo schizzo a mano di Stefano:
//  · rettangolo "Il tuo Prodotto" in cima a ogni lato
//  · catena di nodi Use case → Offerta → Canale → Asset → Casi studio
//  · CATTIVO = 3 target, 3 catene parallele (tutto triplicato)
//  · BUON   = 4 target che convergono in UNA sola catena condivisa
//  · sotto a ogni lato: PROBLEMI / VANTAGGI
// Ricorda la struttura Fletch (prodotto → target) ma NON la copia: elementi QUADRATI, non tondi.

export default function PosizionamentoEarlyStageCattivoVsBuon() {
  const c = {
    bg: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#8A8A8A",
    white: "#FFFFFF",
    line: "#E5E5E5",
    accent: "#F47B20",
    // lato cattivo — rosso-corallo acceso
    bad: "#EF3B2C",
    badSoft: "#F9C8C1",
    badLane: "#FFF1EF",
    // lato buono — verde lime (colore aggiunto)
    good: "#65A30D",
    goodSoft: "#C3E88D",
    goodLane: "#F2FBE3",
    goodBright: "#A3E635", // lime acceso per il target scelto
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const chainBad = ["Use case", "Offerta", "Canale", "Asset · HP + Deck", "Casi studio"];
  const chainGood = ["1 Use case", "1 Offerta", "1 Canale", "Asset · 1 HP + Deck", "Casi studio"];

  const problemi = [
    "Non sai se usare lo stesso posizionamento coi diversi Target",
    "Devi mantenere messaging diversi",
    "Gestisci situazioni diverse in ogni sales demo",
    "Ti confronti con alternative diverse per ogni Target",
  ];
  const vantaggi = [
    "Un posizionamento unico per il tuo prodotto",
    "Attiri i clienti migliori",
    "Stesso messaging per tutti",
    "Sales demo sempre sullo stesso scenario",
    "Alternative chiare e stabili con cui confrontarti",
  ];

  return (
    <div
      style={{
        fontFamily: font,
        background: c.bg,
        width: 1080,
        height: 1350,
        margin: "0 auto",
        padding: "40px 44px 34px",
        color: c.ink,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ===== HEADER ===== */}
      <div style={{ borderBottom: `3px solid ${c.ink}`, paddingBottom: 16, marginBottom: 22 }}>
        <h1 style={{ fontSize: 44, fontWeight: 900, margin: 0, lineHeight: 1.05, whiteSpace: "nowrap" }}>
          Posizionamento <span style={{ color: c.accent }}>early stage</span>
        </h1>
        <p style={{ fontSize: 22, color: c.body, margin: "10px 0 0", fontWeight: 600 }}>
          Da 1.000€ a 30/50 mila € MRR
        </p>
      </div>

      {/* ===== DUE LATI ===== */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, flex: 1, alignItems: "stretch" }}>
        {/* ---------- CATTIVO ---------- */}
        <Side c={c} tone="bad" tag="CATTIVO POSIZIONAMENTO">
          <ProductBox c={c} />
          <Fan c={c} tone="bad" from={[50]} to={[16.7, 50, 83.3]} />
          <TargetsRow c={c} tone="bad" targets={["Target 1", "Target 2", "Target 3"]} />

          {/* 3 catene parallele */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 8 }}>
            {[0, 1, 2].map((lane) => (
              <div
                key={lane}
                style={{
                  background: c.badLane,
                  borderRadius: 10,
                  padding: "8px 6px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                {chainBad.map((n) => (
                  <Node key={n} c={c} tone="bad" label={n} small />
                ))}
              </div>
            ))}
          </div>

          <Caption c={c} tone="bad">
            Tutto triplicato: 3 use case, 3 offerte, 3 deck, 3 set di casi studio.
          </Caption>

          <List c={c} tone="bad" title="PROBLEMI CHE AVRAI" mark="✕" items={problemi} />
        </Side>

        {/* ---------- BUON ---------- */}
        <Side c={c} tone="good" tag="BUON POSIZIONAMENTO">
          <ProductBox c={c} />
          <Fan c={c} tone="good" from={[50]} to={[12.5, 37.5, 62.5, 87.5]} />
          <TargetsRow
            c={c}
            tone="good"
            targets={["Target 1", "Target 2", "Target 3", "Target 4"]}
            selected={3}
          />
          {/* solo il Target scelto prosegue verso la catena */}
          <Fan c={c} tone="good" from={[87.5]} to={[50]} />

          {/* 1 sola catena costruita sul target scelto */}
          <div
            style={{
              background: c.goodLane,
              border: `2px solid ${c.goodSoft}`,
              borderRadius: 10,
              padding: "10px 14px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              width: "72%",
              margin: "2px auto 0",
            }}
          >
            {chainGood.map((n) => (
              <Node key={n} c={c} tone="good" label={n} />
            ))}
          </div>

          <Caption c={c} tone="good">
            1 target, 1 use case, 1 offerta, 1 asset → <b>Focus</b>
          </Caption>

          <List c={c} tone="good" title="VANTAGGI CHE AVRAI" mark="✓" items={vantaggi} />
        </Side>
      </div>
    </div>
  );
}

/* ---------- sotto-componenti ---------- */

function Side({ c, tone, tag, children }) {
  const main = tone === "bad" ? c.bad : c.good;
  const soft = tone === "bad" ? c.badSoft : c.goodSoft;
  return (
    <div
      style={{
        background: c.white,
        border: `2px solid ${soft}`,
        borderRadius: 16,
        padding: "16px 16px 18px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          background: main,
          color: c.white,
          fontSize: 15,
          fontWeight: 900,
          letterSpacing: 0.8,
          textAlign: "center",
          padding: "8px 0",
          borderRadius: 9,
          marginBottom: 12,
        }}
      >
        {tag}
      </div>
      {children}
    </div>
  );
}

function ProductBox({ c }) {
  return (
    <div
      style={{
        textAlign: "center",
        border: `2.5px solid ${c.ink}`,
        borderRadius: 10,
        padding: "11px 0",
        fontWeight: 800,
        fontSize: 16,
        background: c.white,
      }}
    >
      Il tuo Prodotto
    </div>
  );
}

function TargetsRow({ c, tone, targets, selected }) {
  const main = tone === "bad" ? c.bad : c.good;
  const hasSel = selected != null;
  return (
    <div style={{ display: "flex", gap: 7, justifyContent: "center", alignItems: "stretch" }}>
      {targets.map((t, i) => {
        const isSel = hasSel && i === selected;
        const isDim = hasSel && i !== selected;
        return (
          <div
            key={t}
            style={{
              flex: 1,
              position: "relative",
              textAlign: "center",
              background: isSel ? c.goodBright : c.white,
              border: `${isSel ? 2.5 : 2}px solid ${isDim ? c.line : main}`,
              borderRadius: 9,
              padding: "8px 2px",
              fontSize: 12.5,
              fontWeight: isSel ? 900 : 800,
              color: isDim ? c.muted : c.ink,
              opacity: isDim ? 0.5 : 1,
            }}
          >
            {t}
            {isSel && (
              <span
                style={{
                  position: "absolute",
                  top: -9,
                  right: -7,
                  background: c.good,
                  color: c.white,
                  fontSize: 11,
                  fontWeight: 900,
                  width: 19,
                  height: 19,
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: `2px solid ${c.white}`,
                }}
              >
                ✓
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

// fan di linee: diverge (from 1 → many) o converge (from many → 1)
function Fan({ c, tone, from, to }) {
  const main = tone === "bad" ? c.bad : c.good;
  const lines = [];
  from.forEach((fx) => to.forEach((tx) => lines.push([fx, tx])));
  return (
    <svg
      width="100%"
      height="26"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ display: "block", margin: "2px 0" }}
    >
      {lines.map(([fx, tx], i) => (
        <line
          key={i}
          x1={fx}
          y1="0"
          x2={tx}
          y2="100"
          stroke={main}
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

function Node({ c, tone, label, small }) {
  const main = tone === "bad" ? c.bad : c.good;
  return (
    <div
      style={{
        background: c.white,
        border: `2px solid ${main}`,
        borderRadius: 8,
        padding: small ? "8px 4px" : "11px 10px",
        textAlign: "center",
        fontSize: small ? 11.5 : 14.5,
        fontWeight: 700,
        color: c.ink,
        lineHeight: 1.15,
      }}
    >
      {label}
    </div>
  );
}

function Caption({ c, tone, children }) {
  const main = tone === "bad" ? c.bad : c.good;
  return (
    <div style={{ fontSize: 12.5, color: main, fontStyle: "italic", fontWeight: 600, textAlign: "center", margin: "12px 0 0", lineHeight: 1.3 }}>
      {children}
    </div>
  );
}

function List({ c, tone, title, mark, items }) {
  const main = tone === "bad" ? c.bad : c.good;
  const lane = tone === "bad" ? c.badLane : c.goodLane;
  return (
    <div style={{ background: lane, borderRadius: 12, padding: "14px 14px", marginTop: 14, flex: 1 }}>
      <div style={{ fontSize: 15, fontWeight: 900, color: main, letterSpacing: 0.4, marginBottom: 10 }}>
        {title}
      </div>
      {items.map((t) => (
        <div key={t} style={{ display: "flex", gap: 9, alignItems: "flex-start", marginBottom: 9 }}>
          <span
            style={{
              flexShrink: 0,
              width: 20,
              height: 20,
              borderRadius: 5,
              background: main,
              color: c.white,
              fontSize: 12,
              fontWeight: 900,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 1,
            }}
          >
            {mark}
          </span>
          <span style={{ fontSize: 13.5, color: c.ink, lineHeight: 1.32 }}>{t}</span>
        </div>
      ))}
    </div>
  );
}
