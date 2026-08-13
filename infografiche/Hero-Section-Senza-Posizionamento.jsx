import React from "react";

// ============================================================
// HERO SECTION SENZA POSIZIONAMENTO — galleria diagnostica + CTA serie
// 3 hero anonimizzate (brand/colori/copy INVENTATI, parafrasati dagli originali):
// il difetto è reale, il brand no. Ogni card mappa a un pezzo della serie.
// Canvas: 1080 × ~1680 — fonte autorevole del layout (render Gemini = anteprima)
// ============================================================

const c = {
  bg: "#F8F8F8",
  ink: "#2D2D2D",
  body: "#555555",
  muted: "#8A8A8A",
  white: "#FFFFFF",
  line: "#E5E5E5",

  bad: "#EF3B2C",
  badBg: "#FFF1EF",

  // colori pillar per i chip "serie"
  viola: "#7C3AED",
  arancio: "#F47B20",
  blu: "#2563EB",

  darkCTA: "#211D46",
  violaChip: "#E9D5FF",
};

const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

// ---------- mockup di hero finta ----------

const FakeHero = ({ brand, brandColor, heroBg, heroInk, subInk, h1, sub, buttons, bullets }) => (
  <div style={{ background: c.white, borderRadius: 14, overflow: "hidden", border: `1.5px solid ${c.line}` }}>
    {/* finta browser bar */}
    <div style={{
      display: "flex", alignItems: "center", gap: 8, padding: "8px 14px",
      background: "#EDEDED", borderBottom: `1px solid ${c.line}`,
    }}>
      <span style={{ width: 9, height: 9, borderRadius: 99, background: "#CFCFCF" }} />
      <span style={{ width: 9, height: 9, borderRadius: 99, background: "#CFCFCF" }} />
      <span style={{ width: 9, height: 9, borderRadius: 99, background: "#CFCFCF" }} />
      <span style={{
        marginLeft: 8, background: c.white, borderRadius: 99, padding: "3px 12px",
        fontSize: 11, color: c.muted, fontWeight: 600,
      }}>{brand.toLowerCase()}.co</span>
    </div>
    {/* corpo hero */}
    <div style={{ background: heroBg, padding: "22px 26px 26px", textAlign: "center" }}>
      <p style={{ fontSize: 15, fontWeight: 900, color: brandColor, margin: "0 0 14px", letterSpacing: 0.5 }}>
        ◆ {brand}
      </p>
      <p style={{ fontSize: 26, fontWeight: 900, color: heroInk, margin: "0 0 10px", lineHeight: 1.18 }}>{h1}</p>
      {sub && <p style={{ fontSize: 14, fontWeight: 500, color: subInk, margin: "0 auto", maxWidth: 460, lineHeight: 1.4 }}>{sub}</p>}
      {bullets && (
        <div style={{ textAlign: "left", maxWidth: 320, margin: "12px auto 0", fontFamily: "monospace" }}>
          {bullets.map((b, i) => (
            <p key={i} style={{ fontSize: 13, fontWeight: 600, color: subInk, margin: "0 0 4px" }}>
              <span style={{ color: brandColor }}>/ </span>{b}
            </p>
          ))}
        </div>
      )}
      {buttons && (
        <div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 16 }}>
          {buttons.map((b, i) => (
            <span key={i} style={{
              fontSize: 12.5, fontWeight: 800, padding: "8px 18px", borderRadius: 99,
              background: i === 0 ? brandColor : "transparent",
              color: i === 0 ? c.white : brandColor,
              border: `1.5px solid ${brandColor}`,
            }}>{b}</span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const DefectStrip = ({ text, chipLabel, chipColor }) => (
  <div style={{
    background: c.badBg, border: `1.5px solid ${c.bad}`, borderTop: "none",
    borderRadius: "0 0 14px 14px", padding: "12px 16px", marginTop: -8,
    display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap",
  }}>
    <span style={{ color: c.bad, fontWeight: 900, fontSize: 16 }}>✕</span>
    <span style={{ flex: 1, minWidth: 260, fontSize: 13.5, fontWeight: 700, color: c.ink, lineHeight: 1.35 }}>{text}</span>
    <span style={{
      background: chipColor, color: c.white, fontWeight: 800, fontSize: 12,
      padding: "5px 12px", borderRadius: 99, whiteSpace: "nowrap",
    }}>{chipLabel}</span>
  </div>
);

const Block = ({ children }) => <div style={{ marginBottom: 22 }}>{children}</div>;

// ---------- tavola ----------

export default function HeroSectionSenzaPosizionamento() {
  return (
    <div style={{
      width: 1080, minHeight: 1680, background: c.bg, fontFamily: font,
      padding: "40px 44px 32px", boxSizing: "border-box",
      display: "flex", flexDirection: "column",
    }}>

      {/* ============ HEADER ============ */}
      <div style={{ textAlign: "center", borderBottom: `3px solid ${c.ink}`, paddingBottom: 18, marginBottom: 24 }}>
        <h1 style={{ fontSize: 42, fontWeight: 900, color: c.ink, margin: "0 0 10px", lineHeight: 1.1 }}>
          3 Hero Section, 3 modi di <span style={{ color: c.bad }}>non dire niente</span>
        </h1>
        <p style={{ fontSize: 18, fontWeight: 600, color: c.body, margin: "0 0 8px" }}>
          Nessuna dice cosa fa, per chi, e perché sceglierla. La tua l'hai testata?
        </p>
        <p style={{ fontSize: 12, fontWeight: 600, color: c.muted, margin: 0, fontStyle: "italic" }}>
          Esempi ricostruiti e anonimizzati — il difetto è reale, il brand è inventato.
        </p>
      </div>

      {/* ============ HERO 1 — Generico + AI ============ */}
      <Block>
        <FakeHero
          brand="Boostr" brandColor="#0D9488"
          heroBg="#F0FDFA" heroInk="#134E4A" subInk="#4B5563"
          h1="Facciamo crescere la tua app e i tuoi ricavi"
          sub="Una piattaforma di acquisizione utenti 100% a performance, potenziata dall'AI."
          buttons={["Inizia ora", "Scopri di più"]}
        />
        <DefectStrip
          text="Lo firmerebbe qualsiasi competitor. 'Crescita e ricavi' è un desiderio, non una promessa — e 'potenziata dall'AI' non differenzia niente."
          chipLabel="→ Positioning" chipColor={c.blu}
        />
      </Block>

      {/* ============ HERO 2 — Due ICP + metafora vaga ============ */}
      <Block>
        <FakeHero
          brand="Circlia" brandColor="#C2410C"
          heroBg="#FFF7ED" heroInk="#1F1300" subInk="#7C6455"
          h1="L'ecosistema che fa crescere insieme aziende e talenti del tech"
          sub="Abbiamo unito selezione e formazione per ripensare il lavoro tech. Finalmente."
          buttons={["Sono un'Azienda", "Sono uno Sviluppatore"]}
        />
        <DefectStrip
          text="Due ICP opposti nella stessa hero = nessun focus, il buyer non sa se è per lui. E 'ecosistema circolare' non dice cosa fai davvero."
          chipLabel="→ ICP-ECP · Architettura" chipColor={c.arancio}
        />
      </Block>

      {/* ============ HERO 3 — Qualsiasi × 5 ============ */}
      <Block>
        <FakeHero
          brand="Omnia" brandColor="#818CF8"
          heroBg="#111114" heroInk="#FFFFFF" subInk="#A9AAB2"
          h1="Un sistema per ogni processo che la tua azienda ripete"
          bullets={[
            "Legge qualsiasi input",
            "Comprende qualsiasi processo",
            "Connette qualsiasi software",
            "Decide con governance",
            "Agisce dove serve davvero",
          ]}
        />
        <DefectStrip
          text="'Qualsiasi' cinque volte = fa tutto = non si capisce cosa fa. È l'H1 della confessione: quando manca la tesi, prometti tutto."
          chipLabel="→ Tesi di Prodotto" chipColor={c.viola}
        />
      </Block>

      {/* ============ CTA ============ */}
      <div style={{
        background: c.darkCTA, borderRadius: 18, padding: "26px 30px", marginTop: "auto",
        textAlign: "center",
      }}>
        <p style={{ color: c.white, fontSize: 21, fontWeight: 900, margin: "0 0 10px", lineHeight: 1.3 }}>
          Se non vuoi finire in questa lista.
        </p>
        <p style={{ color: "#C9C6D6", fontSize: 15, fontWeight: 500, margin: "0 0 16px", lineHeight: 1.5 }}>
          Una hero che converte non si scrive: si <strong style={{ color: c.white }}>raccoglie</strong> da un
          posizionamento fatto bene. La mia serie ti porta lì, un pezzo alla volta:
        </p>
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 18 }}>
          {["Tesi di Prodotto", "Positioning", "Architettura", "Strategia", "Homepage & Deck"].map((t, i) => (
            <span key={i} style={{
              background: "rgba(255,255,255,.1)", color: c.white, fontWeight: 700, fontSize: 13,
              padding: "6px 14px", borderRadius: 99,
            }}>{t}</span>
          ))}
        </div>
        <span style={{
          background: c.violaChip, color: "#6D28D9", fontWeight: 900, fontSize: 15,
          padding: "11px 24px", borderRadius: 99, display: "inline-block",
        }}>👉 Iscriviti a "da 0 al PMF"</span>
      </div>
    </div>
  );
}
