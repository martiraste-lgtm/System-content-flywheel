// Infografica #2 (serie posizionamento early stage) — Tesi di Posizionamento: Cattiva vs Buona
// Fase 0 → 1/10k MRR: NON hai un Posizionamento ma una TESI (ipotesi). "Confusione Programmata".
// Stesso linguaggio visivo della 1ª tavola (palette, nodi quadrati, sfondi sfumati), layout diverso:
// 4 sezioni impilate. Verticale ~1080×1600, sfondo chiaro.
// Insight: in questa fase sbagli in 2 direzioni opposte — chiudi troppo presto / non chiudi mai.
// La via giusta: àncora il Problema, esplora un asse alla volta (il CHI), ascolta, CHIUDI sul pattern.

export default function TesiPosizionamentoCattivaVsBuona() {
  const c = {
    bg: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#8A8A8A",
    white: "#FFFFFF",
    line: "#E5E5E5",
    accent: "#F47B20", // arancio — Problema/àncora
    // cattiva (rosso) / buona (verde lime) — coerenti con la 1ª tavola
    bad: "#EF3B2C",
    badSoft: "#F9C8C1",
    badLane: "#FFF1EF",
    good: "#65A30D",
    goodSoft: "#C3E88D",
    goodLane: "#F2FBE3",
    goodBright: "#A3E635",
    // esplora (blu neutro) — elementi da testare/ascoltare
    explore: "#2563EB",
    exploreSoft: "#BFD4FB",
    exploreLane: "#EFF4FF",
    // anchor (arancio) fill
    anchorLane: "#FFF3E6",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const esplora = [
    { k: "Target", d: "chi ne trae più valore — esponiti a più segmenti" },
    { k: "Alternative", d: "contro cosa ti paragonano davvero" },
    { k: "Valore", d: "quale fattore li convince (spesso non quello che pensavi)" },
    { k: "Use case", d: "per cosa ti usano davvero (non lo decidi sempre tu)" },
  ];

  const cattiva = [
    { lead: "🔒 Troppo chiusa:", t: "tratti la tesi come verità e dai gas su un'ipotesi non validata" },
    { lead: "🌀 Non chiudi mai:", t: "dopo anni sei ancora su segmenti diversi, nessun pattern" },
    { t: "vari tutto insieme, senza àncora → dispersione di tempo ed energie" },
    { t: "blocchi gli asset ora, su ipotesi che cambieranno" },
    { t: "ottimizzi marketing e sales su un posizionamento ancora falso" },
  ];
  const buona = [
    { t: "àncori il Problema e varî un asse alla volta (il CHI)" },
    { t: "vai broad solo dove c'è energia di mercato" },
    { t: "ascolti valore e alternativa reali — non li imponi" },
    { t: "posizionamento libero, ma con un criterio d'uscita / time-box" },
    { t: "chiudi quando il pattern si ripete → pronto per il Focus" },
  ];

  return (
    <div
      style={{
        fontFamily: font,
        background: c.bg,
        width: 1080,
        height: 1600,
        margin: "0 auto",
        padding: "48px 52px 40px",
        color: c.ink,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ===== SEZIONE 1 — HEADER ===== */}
      <div style={{ borderBottom: `3px solid ${c.ink}`, paddingBottom: 22, marginBottom: 26 }}>
        <h1 style={{ fontSize: 50, fontWeight: 900, margin: 0, lineHeight: 1.05, whiteSpace: "nowrap" }}>
          <span style={{ color: c.accent }}>Tesi</span> di posizionamento
        </h1>
        <p style={{ fontSize: 24, color: c.body, margin: "10px 0 0", fontWeight: 600 }}>
          Da 0€ a 1/10 mila € MRR
        </p>
        <p style={{ fontSize: 17.5, color: c.body, margin: "12px 0 0", lineHeight: 1.45 }}>
          Prodotto nuovo: non sai in anticipo <b>CHI</b> e <b>COME</b> risponderà meglio alla tua offerta.
          È una prima fase, breve, di <b style={{ color: c.accent }}>CONFUSIONE PROGRAMMATA</b> — la governi, non la subisci.
        </p>
      </div>

      {/* ===== SEZIONE 2 — ELEMENTI DA OSSERVARE ===== */}
      <SectionLabel c={c} color={c.ink}>
        Gli elementi da osservare <span style={{ color: c.muted, fontWeight: 700 }}>(non da bloccare)</span>
      </SectionLabel>

      {/* àncora */}
      <Tier c={c} label="ÀNCORA" color={c.accent}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, background: c.anchorLane, border: `2px solid ${c.accent}`, borderRadius: 12, padding: "13px 16px" }}>
          <span style={{ fontSize: 22 }}>🔒</span>
          <div>
            <div style={{ fontSize: 17, fontWeight: 900, color: c.accent }}>Problema</div>
            <div style={{ fontSize: 14, color: c.body, marginTop: 1 }}>Lo tieni <b>fisso</b>: è la tua scommessa. Puoi testare solo sfumature.</div>
          </div>
        </div>
      </Tier>

      {/* da esplorare / ascoltare */}
      <Tier c={c} label="DA ESPLORARE / ASCOLTARE" color={c.explore}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {esplora.map((e) => (
            <div key={e.k} style={{ background: c.exploreLane, border: `2px solid ${c.exploreSoft}`, borderRadius: 11, padding: "12px 14px" }}>
              <div style={{ fontSize: 15.5, fontWeight: 900, color: c.explore }}>{e.k}</div>
              <div style={{ fontSize: 13, color: c.body, marginTop: 3, lineHeight: 1.3 }}>{e.d}</div>
            </div>
          ))}
        </div>
      </Tier>

      {/* output: pattern */}
      <Tier c={c} label="OUTPUT" color={c.good}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, background: c.goodLane, border: `2.5px solid ${c.good}`, borderRadius: 12, padding: "13px 16px", boxShadow: `0 0 16px ${c.goodBright}` }}>
          <span style={{ fontSize: 22 }}>⭐</span>
          <div>
            <div style={{ fontSize: 17, fontWeight: 900, color: c.good, letterSpacing: 0.3 }}>PATTERN · SEGNALI</div>
            <div style={{ fontSize: 14, color: c.body, marginTop: 1 }}>
              <b>chi</b> ama + <b>perché</b> + con quale <b>ricorrenza</b> — il segnale che ti fa uscire dalla fase.
            </div>
          </div>
        </div>
      </Tier>

      {/* ===== SEZIONE 3 — CATTIVA vs BUONA TESI ===== */}
      <div style={{ marginTop: 26 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26 }}>
          <CompareTitle c={c} color={c.bad} a="Cattiva tesi" b="di posizionamento" />
          <CompareTitle c={c} color={c.good} a="Buona tesi" b="di posizionamento" />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 26, marginTop: 14 }}>
          <CompareList c={c} tone="bad" mark="✕" items={cattiva} />
          <CompareList c={c} tone="good" mark="✓" items={buona} />
        </div>

        {/* nota: non bloccare gli asset */}
        <div style={{ display: "flex", alignItems: "center", gap: 14, background: c.badLane, border: `2px dashed ${c.bad}`, borderRadius: 12, padding: "18px 22px", marginTop: 20 }}>
          <span style={{ fontSize: 26 }}>🛑</span>
          <div style={{ fontSize: 16, color: c.ink, lineHeight: 1.4 }}>
            <b>Use case · Homepage · Sales deck · Value prop</b> → in questa fase li <b style={{ color: c.bad }}>SCOPRI</b>. Non bloccarli ora.
          </div>
        </div>
      </div>

      {/* ===== SEZIONE 4 — CALLOUT FINALE ===== */}
      <div style={{ marginTop: "auto", paddingTop: 26 }}>
        <div style={{ background: c.ink, borderRadius: 18, padding: "26px 28px", color: c.white }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ fontSize: 34 }}>📞</span>
            <div style={{ fontSize: 23, fontWeight: 800, lineHeight: 1.3 }}>
              Testa <span style={{ color: c.goodBright }}>in call</span>: il feedback è immediato, capisci subito cosa funziona e cosa no.
            </div>
          </div>
          <div style={{ display: "flex", gap: 10, marginTop: 18, flexWrap: "wrap", paddingLeft: 50 }}>
            <span style={{ fontSize: 14, color: "#CFCFCF", fontWeight: 600 }}>osserva →</span>
            {["tono di voce", "espressioni", "parole che usano"].map((x) => (
              <span key={x} style={{ background: "#3A3A3A", color: c.white, fontSize: 14, fontWeight: 700, padding: "6px 14px", borderRadius: 999 }}>
                {x}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- sotto-componenti ---------- */

function SectionLabel({ c, color, children }) {
  return (
    <div style={{ fontSize: 21, fontWeight: 900, color, margin: "2px 0 12px", letterSpacing: 0.2 }}>
      {children}
    </div>
  );
}

function Tier({ c, label, color, children }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
        <span style={{ fontSize: 11.5, fontWeight: 900, color, letterSpacing: 1 }}>{label}</span>
        <span style={{ flex: 1, height: 2, background: color, opacity: 0.25, borderRadius: 2 }} />
      </div>
      {children}
    </div>
  );
}

function CompareTitle({ c, color, a, b }) {
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ color, fontSize: 23, fontWeight: 900 }}>{a}</span>
      <span style={{ color: c.ink, fontSize: 18, fontWeight: 800 }}> {b}</span>
    </div>
  );
}

function CompareList({ c, tone, mark, items }) {
  const main = tone === "bad" ? c.bad : c.good;
  const lane = tone === "bad" ? c.badLane : c.goodLane;
  const soft = tone === "bad" ? c.badSoft : c.goodSoft;
  return (
    <div style={{ background: lane, border: `2px solid ${soft}`, borderRadius: 14, padding: "16px 16px" }}>
      {items.map((it, i) => (
        <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: i === items.length - 1 ? 0 : 11 }}>
          <span
            style={{
              flexShrink: 0,
              width: 22,
              height: 22,
              borderRadius: 6,
              background: main,
              color: c.white,
              fontSize: 13,
              fontWeight: 900,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 1,
            }}
          >
            {mark}
          </span>
          <span style={{ fontSize: 14.5, color: c.ink, lineHeight: 1.34 }}>
            {it.lead && <b style={{ color: main }}>{it.lead} </b>}
            {it.t}
          </span>
        </div>
      ))}
    </div>
  );
}
