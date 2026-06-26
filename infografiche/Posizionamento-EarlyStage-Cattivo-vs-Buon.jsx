// Infografica — Posizionamento Early Stage: Cattivo vs Buon
// Formato LinkedIn verticale 1080×1350. Struttura fedele allo schizzo a mano di Stefano.
// Parte centrale resa come la versione preferita da Stefano:
//  · titoli colorati a testo (CATTIVO / BUON POSIZIONAMENTO)
//  · pannelli con sfondo sfumato (rosa / verde)
//  · "IL TUO PRODOTTO" → frecce divergenti
//  · CATTIVO = 3 catene parallele identiche, target con ⚠️
//  · BUON   = 4 target potenziali, ne SCEGLI uno (Target 4 verde + ✓ + glow); i 3 scartati grigi a sx
//  · catena: Use Case → Offerta → Canale → Asset: H.P./Sales Deck → Casi Studio (buon: "unici")
// Ricorda la struttura Fletch ma NON la copia: elementi QUADRATI, non tondi.

export default function PosizionamentoEarlyStageCattivoVsBuon() {
  const c = {
    bg: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#8A8A8A",
    white: "#FFFFFF",
    line: "#E5E5E5",
    accent: "#F47B20",
    // lato cattivo — rosso-corallo
    bad: "#EF3B2C",
    badSoft: "#F9C8C1",
    badLane: "#FFF1EF",
    badGrad: "linear-gradient(180deg, #F7CDC6 0%, #FBE4E0 48%, #FFFFFF 100%)",
    // lato buono — verde lime
    good: "#65A30D",
    goodSoft: "#C3E88D",
    goodLane: "#F2FBE3",
    goodBright: "#A3E635",
    goodGrad: "linear-gradient(160deg, #D8EFBE 0%, #EAF6D8 45%, #FFFFFF 100%)",
    // target scartati
    grayBorder: "#D5D5D5",
    grayBg: "#EFEFEF",
    grayText: "#B3B3B3",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const chainBad = ["Use Case", "Offerta", "Canale", "Asset: H.P. / Sales Deck", "Casi Studio"];
  const chainGood = ["1 Use Case", "1 Offerta", "1 Canale", "Asset: H.P. / Sales Deck", "Casi Studio unici"];

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
      <div style={{ borderBottom: `3px solid ${c.ink}`, paddingBottom: 16, marginBottom: 20 }}>
        <h1 style={{ fontSize: 44, fontWeight: 900, margin: 0, lineHeight: 1.05, whiteSpace: "nowrap" }}>
          Posizionamento <span style={{ color: c.accent }}>early stage</span>
        </h1>
        <p style={{ fontSize: 22, color: c.body, margin: "8px 0 0", fontWeight: 600 }}>
          Da 1.000€ a 30/50 mila € MRR
        </p>
      </div>

      {/* ===== DUE LATI ===== */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22, alignItems: "start" }}>
        {/* ---------- CATTIVO ---------- */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SectionTitle color={c.bad} lines={["CATTIVO", "POSIZIONAMENTO"]} />
          <div style={{ background: c.badGrad, borderRadius: 16, padding: "16px 12px 18px" }}>
            <ProductBox c={c} tone="bad" />
            <DivergeLines color={c.bad} targets={[50, 150, 250]} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginTop: 2 }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                  <ArrowMini color={c.bad} />
                  <TargetBox c={c} tone="bad" warn label={`Target ${i + 1}`} />
                  {chainBad.map((n) => (
                    <div key={n}>
                      <ArrowMini color={c.bad} />
                      <Node c={c} tone="bad" label={n} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <Caption c={c} tone="bad">
            Tutto triplicato: 3 use case, 3 offerte, 3 deck, 3 set di casi studio.
          </Caption>
          <List c={c} tone="bad" title="PROBLEMI CHE AVRAI" mark="✕" items={problemi} />
        </div>

        {/* ---------- BUON ---------- */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <SectionTitle color={c.good} lines={["BUON", "POSIZIONAMENTO"]} />
          <div style={{ background: c.goodGrad, borderRadius: 16, padding: "16px 12px 18px" }}>
            <ProductBox c={c} tone="good" />
            <BuonLines c={c} />
            <div style={{ display: "grid", gridTemplateColumns: "0.82fr 1.18fr", gap: 10, marginTop: 2 }}>
              {/* target scartati (grigi) */}
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", gap: 12, paddingTop: 4 }}>
                {["Target 1", "Target 2", "Target 3"].map((t) => (
                  <TargetBox key={t} c={c} dim label={t} />
                ))}
              </div>
              {/* target scelto + catena */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <ArrowMini color={c.good} />
                <TargetBox c={c} tone="good" check glow label="Target 4" />
                {chainGood.map((n) => (
                  <div key={n}>
                    <ArrowMini color={c.good} />
                    <Node c={c} tone="good" label={n} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Caption c={c} tone="good">
            1 target, 1 use case, 1 offerta, 1 asset → <b>Focus</b>
          </Caption>
          <List c={c} tone="good" title="VANTAGGI CHE AVRAI" mark="✓" items={vantaggi} />
        </div>
      </div>
    </div>
  );
}

/* ---------- sotto-componenti ---------- */

function SectionTitle({ color, lines }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 10 }}>
      {lines.map((l) => (
        <div key={l} style={{ color, fontSize: 25, fontWeight: 900, letterSpacing: 0.5, lineHeight: 1.06 }}>
          {l}
        </div>
      ))}
    </div>
  );
}

function ProductBox({ c, tone }) {
  const main = tone === "bad" ? c.bad : c.good;
  return (
    <div
      style={{
        width: 124,
        margin: "0 auto",
        textAlign: "center",
        background: c.white,
        border: `2.5px solid ${main}`,
        borderRadius: 10,
        padding: "10px 6px",
        fontWeight: 900,
        fontSize: 13,
        letterSpacing: 0.4,
        lineHeight: 1.15,
        boxShadow: "0 2px 6px rgba(0,0,0,0.10)",
      }}
    >
      IL TUO<br />PRODOTTO
    </div>
  );
}

// linee divergenti prodotto → 3 target (lato cattivo)
function DivergeLines({ color, targets }) {
  return (
    <svg width="100%" height="40" viewBox="0 0 300 40" preserveAspectRatio="none" style={{ display: "block", margin: "4px 0 0" }}>
      {targets.map((x, i) => (
        <line key={i} x1="150" y1="2" x2={x} y2="38" stroke={color} strokeWidth="3" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
  );
}

// linee lato buono: 3 grigie (opzioni scartate) + 1 verde spessa (target scelto)
function BuonLines({ c }) {
  return (
    <svg width="100%" height="44" viewBox="0 0 300 44" preserveAspectRatio="none" style={{ display: "block", margin: "4px 0 0" }}>
      {[40, 75, 110].map((x, i) => (
        <line key={i} x1="150" y1="2" x2={x} y2="42" stroke={c.grayBorder} strokeWidth="2" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      ))}
      <line x1="150" y1="2" x2="250" y2="42" stroke={c.good} strokeWidth="4" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

// piccola freccia (triangolo) verso il basso tra i nodi
function ArrowMini({ color }) {
  return (
    <div
      style={{
        width: 0,
        height: 0,
        borderLeft: "6px solid transparent",
        borderRight: "6px solid transparent",
        borderTop: `8px solid ${color}`,
        margin: "3px auto",
      }}
    />
  );
}

function TargetBox({ c, tone, label, warn, check, glow, dim }) {
  if (dim) {
    return (
      <div
        style={{
          background: c.grayBg,
          border: `2px solid ${c.grayBorder}`,
          borderRadius: 10,
          padding: "13px 6px",
          textAlign: "center",
          color: c.grayText,
          fontWeight: 800,
          fontSize: 13,
        }}
      >
        {label}
      </div>
    );
  }
  const main = tone === "bad" ? c.bad : c.good;
  return (
    <div
      style={{
        position: "relative",
        background: check ? c.goodBright : c.white,
        border: `2.5px solid ${main}`,
        borderRadius: 10,
        padding: "10px 6px",
        textAlign: "center",
        fontWeight: 900,
        fontSize: 13,
        color: c.ink,
        boxShadow: glow ? `0 0 16px ${c.goodBright}` : "0 2px 5px rgba(0,0,0,0.08)",
      }}
    >
      {warn && <div style={{ fontSize: 14, lineHeight: 1, marginBottom: 2 }}>⚠️</div>}
      {check && (
        <span
          style={{
            position: "absolute",
            top: -9,
            right: -8,
            background: c.good,
            color: c.white,
            fontSize: 12,
            fontWeight: 900,
            width: 20,
            height: 20,
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
      {label}
    </div>
  );
}

function Node({ c, tone, label }) {
  const main = tone === "bad" ? c.bad : c.good;
  return (
    <div
      style={{
        background: c.white,
        border: `2px solid ${main}`,
        borderRadius: 9,
        padding: "9px 5px",
        textAlign: "center",
        fontSize: 12.5,
        fontWeight: 700,
        color: c.ink,
        lineHeight: 1.15,
        boxShadow: "0 2px 4px rgba(0,0,0,0.06)",
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
    <div style={{ background: lane, borderRadius: 12, padding: "14px 14px", marginTop: 14 }}>
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
