import React from "react";

// ============================================================
// LA MAPPA DEL SISTEMA — dalla Tesi di Prodotto alle 5-10 parole che il buyer legge
// Tavola-bandiera: dà forma visiva alla catena integrata di knowledge/foundation/metodo-catena.md
// (Dunford · Aaker · Estner · Fletch — raccordati, non giustapposti) + POV-master ("non è il copy").
// Concept: cascata di decisioni in 4 zone. Valore mostrato per-anello (decide / senza).
// Sistema-colore dei pillar: Tesi/POV = viola · Architettura = arancio · Strategia = blu.
// Canvas: 1080 × ~2560 — fonte autorevole del layout (render Gemini = anteprima).
// ============================================================

const c = {
  bg: "#F8F8F8",
  ink: "#2D2D2D",
  body: "#555555",
  muted: "#8A8A8A",
  white: "#FFFFFF",
  line: "#E5E5E5",

  viola: "#7C3AED",        // Tesi di Prodotto / POV
  violaSoft: "#F1EAFC",
  violaBorder: "#D8C4F5",

  arancio: "#F47B20",      // Architettura di Posizionamento
  aranSoft: "#FDEDDD",
  aranBorder: "#F5C79A",

  blu: "#2563EB",          // Strategia di Posizionamento
  bluSoft: "#EAF1FE",
  bluBorder: "#B7D0F8",

  good: "#65A30D",         // "esce da sé" / output
  goodSoft: "#F2FBE3",
  goodBorder: "#C3E88D",

  bad: "#DC4438",          // "senza:" — rosso attenuato (costo dell'accumulo)
  badSoft: "#FDECEA",

  dark: "#221F2E",         // banda Narrazione
};

const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const spine = "#CDBBEF"; // colore della spina verticale (viola tenue: viene dalle scommesse)

// ---------- componenti ----------

// freccia triangolare CSS verso il basso (niente distorsione)
const ArrowDown = ({ color = c.ink, size = 12, my = 8 }) => (
  <div style={{ display: "flex", justifyContent: "center", margin: `${my}px 0` }}>
    <div style={{
      width: 0, height: 0,
      borderLeft: `${size}px solid transparent`,
      borderRight: `${size}px solid transparent`,
      borderTop: `${size + 2}px solid ${color}`,
    }} />
  </div>
);

const ZoneLabel = ({ n, tint, title, sub }) => (
  <div style={{ display: "flex", alignItems: "baseline", gap: 12, margin: "0 0 14px" }}>
    <span style={{
      background: tint, color: c.white, fontWeight: 900, fontSize: 20,
      width: 34, height: 34, borderRadius: 999, display: "inline-flex",
      alignItems: "center", justifyContent: "center", flex: "0 0 auto",
    }}>{n}</span>
    <div>
      <span style={{ fontSize: 20, fontWeight: 900, color: c.ink, letterSpacing: 0.2 }}>{title}</span>
      {sub && <span style={{ fontSize: 14, fontWeight: 600, color: c.muted, marginLeft: 10 }}>{sub}</span>}
    </div>
  </div>
);

// card scommessa (livello strategico)
const Bet = ({ tint, tintSoft, tintBorder, name, sub, decide, subq, senza }) => (
  <div style={{
    flex: 1, background: c.white, border: `1.5px solid ${c.line}`,
    borderTop: `6px solid ${tint}`, borderRadius: 16, padding: "16px 16px 14px",
    boxShadow: "0 3px 10px rgba(0,0,0,.06)", display: "flex", flexDirection: "column",
  }}>
    <p style={{ fontSize: 17, fontWeight: 900, color: c.ink, margin: "0 0 2px", lineHeight: 1.15 }}>{name}</p>
    <p style={{ fontSize: 12, fontWeight: 700, color: tint, margin: "0 0 10px" }}>{sub}</p>
    <div style={{ background: tintSoft, border: `1px solid ${tintBorder}`, borderRadius: 9, padding: "8px 10px", marginBottom: 8 }}>
      <p style={{ fontSize: 12.5, fontWeight: 800, color: c.ink, margin: 0, lineHeight: 1.3 }}>
        decide <span style={{ color: tint }}>{decide}</span>
      </p>
    </div>
    <p style={{ fontSize: 12, fontWeight: 600, color: c.body, margin: "0 0 10px", lineHeight: 1.4 }}>{subq}</p>
    <div style={{ marginTop: "auto", background: c.badSoft, borderRadius: 9, padding: "7px 10px" }}>
      <p style={{ fontSize: 11.5, fontWeight: 700, color: c.bad, margin: 0, lineHeight: 1.35 }}>
        <strong>senza:</strong> {senza}
      </p>
    </div>
  </div>
);

// etichetta di cluster (respiro tra i gruppi di anelli)
const ClusterLabel = ({ text }) => (
  <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "6px 0 10px" }}>
    <span style={{ flex: 1, height: 1, background: c.line }} />
    <span style={{
      fontSize: 11.5, fontWeight: 800, color: c.muted, letterSpacing: 1.5,
      textTransform: "uppercase", whiteSpace: "nowrap",
    }}>{text}</span>
    <span style={{ flex: 1, height: 1, background: c.line }} />
  </div>
);

// anello della catena: nodo centrale sulla spina + decide (destra) + senza (sotto)
const Ring = ({ n, name, detail, decide, senza, callout, calloutTint }) => (
  <div style={{ position: "relative", padding: "0 0 0 0" }}>
    <div style={{
      display: "flex", alignItems: "stretch", gap: 14,
      background: callout ? c.white : c.white,
      border: callout ? `2px solid ${calloutTint}` : `1.5px solid ${c.line}`,
      borderRadius: 12, padding: "12px 16px",
      boxShadow: callout ? `0 4px 14px ${calloutTint}22` : "0 2px 6px rgba(0,0,0,.05)",
    }}>
      {/* colonna sinistra: numero + nome anello */}
      <div style={{ flex: "0 0 42%", display: "flex", alignItems: "center", gap: 11 }}>
        <span style={{
          flex: "0 0 auto", width: 26, height: 26, borderRadius: 999,
          background: callout ? calloutTint : c.ink, color: c.white,
          fontSize: 13, fontWeight: 900, display: "inline-flex",
          alignItems: "center", justifyContent: "center",
        }}>{n}</span>
        <div>
          <p style={{ fontSize: 15, fontWeight: 900, color: c.ink, margin: 0, lineHeight: 1.12 }}>{name}</p>
          {detail && <p style={{ fontSize: 11, fontWeight: 600, color: c.muted, margin: "2px 0 0", lineHeight: 1.25 }}>{detail}</p>}
        </div>
      </div>
      {/* colonna destra: decide + senza */}
      <div style={{ flex: 1, borderLeft: `1px solid ${c.line}`, paddingLeft: 14 }}>
        <p style={{ fontSize: 12.5, fontWeight: 700, color: c.ink, margin: "0 0 4px", lineHeight: 1.32 }}>
          <span style={{ fontWeight: 900, color: callout ? calloutTint : c.viola }}>decide </span>
          {decide}
        </p>
        <p style={{ fontSize: 11.5, fontWeight: 600, color: c.bad, margin: 0, lineHeight: 1.3 }}>
          <strong>senza:</strong> {senza}
        </p>
      </div>
    </div>
    {callout && (
      <span style={{
        position: "absolute", top: -10, right: 14, background: calloutTint, color: c.white,
        fontSize: 10, fontWeight: 900, letterSpacing: 0.8, padding: "3px 9px", borderRadius: 999,
        textTransform: "uppercase",
      }}>{callout}</span>
    )}
  </div>
);

const AssetChip = ({ label }) => (
  <div style={{
    background: c.white, border: `1.5px solid ${c.goodBorder}`, borderRadius: 11,
    padding: "12px 12px", textAlign: "center", boxShadow: "0 2px 5px rgba(0,0,0,.05)",
    display: "flex", alignItems: "center", justifyContent: "center", minHeight: 58,
  }}>
    <p style={{ fontSize: 13, fontWeight: 800, color: c.ink, margin: 0, lineHeight: 1.25 }}>{label}</p>
  </div>
);

// ---------- catena (dati) ----------
const rings = [
  {
    n: 1, name: "ICP + Anchor", detail: "per canale",
    callout: "entrata", calloutTint: c.blu,
    decide: "con quale vocabolario il buyer ti classifica in testa.",
    senza: "parli a tutti = a nessuno.",
  },
  {
    n: 2, name: "Problema", detail: "il dolore che agganci",
    decide: "quale dolore reale il buyer riconosce come suo.",
    senza: "una soluzione senza domanda.",
  },
  {
    n: 3, name: "Positioning", detail: "cosa fai · per chi · perché tu",
    decide: "come ti collochi, in modo che non debba lavorare per capirti.",
    senza: "il buyer decifra da solo → chiude la tab.",
  },
  {
    n: 4, name: "Alternatives / Competitor", detail: "il tuo termine di paragone",
    decide: "contro cosa vieni confrontato (spesso non è un software).",
    senza: "ti confrontano con la cosa sbagliata.",
  },
  {
    n: 5, name: "UVP + Elemento differenziante", detail: "il perché-te",
    decide: "perché scelgono te e non l'alternativa.",
    senza: "“anche noi facciamo X” = parità, nessun motivo.",
  },
  {
    n: 6, name: "Features / Capabilities / Benefit", detail: "le prove",
    decide: "quali prove sostengono l'UVP.",
    senza: "una lista di feature che il buyer deve tradurre.",
  },
  {
    n: 7, name: "Messaging", detail: "cosa dici",
    decide: "cosa dici, e in che ordine.",
    senza: "dici tutto, non resta niente.",
  },
  {
    n: 8, name: "Copy", detail: "come lo dici",
    decide: "come lo dici — tono, ritmo, parole.",
    senza: "contenuto giusto, tono che non aggancia.",
  },
  {
    n: 9, name: "Hero / H1", detail: "le prime 5-10 parole",
    callout: "uscita", calloutTint: c.arancio,
    decide: "le 5-10 parole che il buyer legge per prime.",
    senza: "H1 vago = il sintomo più visibile dell'accumulo.",
  },
];

const assets = [
  "Home page", "Sales deck", "Pitch deck", "Pagina Pack & Pricing",
  "Casi studio", "Email (awareness → education)", "Argomenti pillar", "GTM motions",
];

export default function MappaSistemaPosizionamento() {
  return (
    <div style={{
      width: 1080, background: c.bg, fontFamily: font,
      padding: "44px 48px 40px", boxSizing: "border-box",
    }}>

      {/* ============ HEADER ============ */}
      <div style={{ textAlign: "center", borderBottom: `3px solid ${c.ink}`, paddingBottom: 20, marginBottom: 26 }}>
        <span style={{
          background: c.violaSoft, color: c.viola, fontWeight: 800, fontSize: 12,
          letterSpacing: 1.5, padding: "6px 16px", borderRadius: 999, textTransform: "uppercase",
        }}>Il sistema · dalla tesi di prodotto alle 5-10 parole che il buyer legge</span>
        <h1 style={{ fontSize: 46, fontWeight: 900, color: c.ink, margin: "18px 0 10px", lineHeight: 1.08 }}>
          Il tuo problema non è il <span style={{ color: c.muted, textDecoration: "line-through", textDecorationThickness: 3 }}>copy</span>.<br />
          È la <span style={{ color: c.viola }}>catena</span> che non hai deciso.
        </h1>
        <p style={{ fontSize: 18, fontWeight: 700, color: c.body, margin: "0 auto 8px", maxWidth: 820, lineHeight: 1.4 }}>
          12 decisioni collegate: ognuna sblocca la prossima. Decidi in alto una volta —
          sotto, gli asset e la narrazione si scrivono <span style={{ color: c.good }}>quasi da soli</span>.
        </p>
        <p style={{ fontSize: 12.5, fontWeight: 600, color: c.muted, margin: 0 }}>
          La catena integrata: Dunford · Aaker · Estner · Fletch — raccordati, non giustapposti.
        </p>
      </div>

      {/* ============ ZONA ① — LE 3 SCOMMESSE ============ */}
      <ZoneLabel n="1" tint={c.viola} title="Le 3 scommesse" sub="le decisioni di business, a monte" />
      <div style={{ display: "flex", gap: 16, alignItems: "stretch", marginBottom: 4 }}>
        <Bet
          tint={c.viola} tintSoft={c.violaSoft} tintBorder={c.violaBorder}
          name="Tesi di Prodotto → POV" sub="cosa costruisci, e perché"
          decide="COSA ha diritto di esistere"
          subq="Cosa credi che il mercato diventerà, e perché costruisci quello che costruisci."
          senza="crescita per accumulo: 100 sì e nessuna tesi."
        />
        <Bet
          tint={c.arancio} tintSoft={c.aranSoft} tintBorder={c.aranBorder}
          name="Architettura di Posizionamento" sub="quante cose, e come si legano"
          decide="QUANTE cose posizioni"
          subq="Quanti prodotti hai · a chi li vendi · come li vendi."
          senza="una narrazione per ogni feature = nessuna narrazione."
        />
        <Bet
          tint={c.blu} tintSoft={c.bluSoft} tintBorder={c.bluBorder}
          name="Strategia di Posizionamento" sub="in che campo giochi"
          decide="IN CHE CAMPO giochi"
          subq="Quanto è matura la categoria · l'ICP la conosce? · contro chi/cosa vieni confrontato."
          senza="combatti sul campo scelto dal leader."
        />
      </div>

      {/* confluenza: le 3 scommesse alimentano l'unica catena */}
      <div style={{ position: "relative", height: 46, margin: "2px 0 6px" }}>
        <svg viewBox="0 0 1000 46" width="100%" height="46" preserveAspectRatio="none"
          style={{ display: "block", position: "absolute", inset: 0 }}>
          <path d="M167 0 C167 26 500 18 500 44" fill="none" stroke={spine} strokeWidth="3" />
          <path d="M500 0 L500 44" fill="none" stroke={spine} strokeWidth="3" />
          <path d="M833 0 C833 26 500 18 500 44" fill="none" stroke={spine} strokeWidth="3" />
        </svg>
        <div style={{ position: "absolute", left: "50%", bottom: -2, transform: "translateX(-50%)" }}>
          <div style={{
            width: 0, height: 0, borderLeft: "9px solid transparent",
            borderRight: "9px solid transparent", borderTop: `11px solid ${spine}`,
          }} />
        </div>
      </div>

      {/* ============ ZONA ② — LA CATENA ============ */}
      <ZoneLabel n="2" tint={c.viola} title="La catena di posizionamento" sub="ogni anello decide il prossimo" />

      {/* spina verticale continua dietro i nodi */}
      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute", left: 12, top: 8, bottom: 8, width: 3,
          background: spine, borderRadius: 2, zIndex: 0,
        }} />
        <div style={{ position: "relative", zIndex: 1, paddingLeft: 30 }}>
          <ClusterLabel text="Come ti classificano" />
          {rings.slice(0, 3).map((r) => (
            <div key={r.n} style={{ marginBottom: 10 }}><Ring {...r} /></div>
          ))}
          <ClusterLabel text="Perché tu" />
          {rings.slice(3, 6).map((r) => (
            <div key={r.n} style={{ marginBottom: 10 }}><Ring {...r} /></div>
          ))}
          <ClusterLabel text="Cosa dici e come" />
          {rings.slice(6, 9).map((r) => (
            <div key={r.n} style={{ marginBottom: 10 }}><Ring {...r} /></div>
          ))}
        </div>
      </div>

      {/* fan-out: la catena sblocca gli asset */}
      <ArrowDown color={c.good} size={13} my={14} />

      {/* ============ ZONA ③ — GLI ASSET ============ */}
      <div style={{
        background: c.goodSoft, border: `1.5px solid ${c.goodBorder}`,
        borderRadius: 16, padding: "18px 20px 20px", marginBottom: 6,
      }}>
        <ZoneLabel n="3" tint={c.good} title="Gli asset" sub="non lavoro da fare: output che si scrivono quasi da soli" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {assets.map((a) => <AssetChip key={a} label={a} />)}
        </div>
      </div>

      <ArrowDown color={c.dark} size={13} my={14} />

      {/* ============ ZONA ④ — LA NARRAZIONE ============ */}
      <div style={{ background: c.dark, borderRadius: 18, padding: "26px 30px", textAlign: "center" }}>
        <span style={{
          background: "rgba(255,255,255,.12)", color: "#E6DEFB", fontWeight: 900, fontSize: 12,
          letterSpacing: 1.5, padding: "5px 14px", borderRadius: 999, textTransform: "uppercase",
        }}>④ La narrazione · la conseguenza automatica</span>
        <p style={{ color: c.white, fontSize: 22, fontWeight: 800, margin: "16px auto 0", maxWidth: 860, lineHeight: 1.45 }}>
          La narrazione che costruisce fiducia — <span style={{ color: "#C9B6F5" }}>cosa fai, come, per chi, perché tu</span> —
          non è il lavoro. È ciò che resta quando il prodotto ha <span style={{ color: c.arancio }}>smesso di voler essere tutto</span>.
        </p>
      </div>

    </div>
  );
}
