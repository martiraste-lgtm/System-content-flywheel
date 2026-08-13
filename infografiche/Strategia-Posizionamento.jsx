// Infografica — Pillar "Strategia di Posizionamento": 4 strategie in 2 campi (maturità di categoria).
// "Che gioco decidi di fare". Accento BLU (distingue il pillar dall'arancio di Architetture).
// Bucket A CATEGORIA MATURA (① head-to-head, ② big fish) · Bucket B CATEGORIA IMMATURA (③ in crescita,
// ④ crea categoria). Card compatte + meter (onere educativo, dipendenza tesi). Verticale 1080×~2000.

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
    green: "#16A34A",
    red: "#EF3B2C",
  };
  const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const buckets = [
    {
      key: "matura",
      title: "Categoria matura",
      desc: "Domanda e budget già esistono · nemico: il leader · onere educativo basso",
      cards: [
        {
          n: "①",
          title: "Head-to-head vs leader",
          cos: "Accetti i criteri esistenti e vinci su quelli: giochi meglio alle regole date.",
          quando: "Sei leader/quasi o nessun leader chiaro, e hai un vantaggio netto su un parametro o nella distribuzione.",
          mossa: ["Dimostra sui criteri noti dove sei meglio; presidia comparison e battlecard.", "Scegli il fronte dove il leader è debole (o attacchi tutto, ma serve capitale)."],
          vantaggi: ["Domanda e budget già pronti: dirotti, non crei.", "Zero onere educativo: entri a valle."],
          rischi: ["Il leader ti schiaccia coi soldi.", "Guerra di logoramento feature/prezzo: vince chi ha più cassa."],
          edu: 1, tesi: 1,
          es: "Coca/Pepsi · Samsung/Apple",
        },
        {
          n: "②",
          title: "Big Fish, Smaller Pond",
          cos: "Prendi un sotto-segmento servito male dai generalisti e lo servi meglio: «fatto apposta per te», non «faccio di più».",
          quando: "Il leader non può servirti la nicchia (strutturale > temporaneo) e la nicchia è grande abbastanza per i tuoi obiettivi.",
          mossa: ["Esplicita il «per chi»; porta prova di fit (casi della nicchia).", "Due modi: A) stessi criteri, fit superiore · B) reframing dei criteri nella nicchia (tesi-dipendente)."],
          vantaggi: ["Head-to-head reso sostenibile: awareness/budget su scala che reggi.", "Difendibile se è un «non può»."],
          rischi: ["Nicchia troppo stretta per i tuoi obiettivi.", "Se cresci e ti proteggevi con un «non vuole», il leader entra e ti schiaccia."],
          edu: 1, tesi: 2, tesiNote: "3/4 in modalità B",
          es: "DuckDuckGo · CRM per banche/assicurazioni",
        },
      ],
    },
    {
      key: "immatura",
      title: "Categoria immatura",
      desc: "Domanda e budget NON esistono · nemico: l'inerzia / il fare a mano · onere educativo alto",
      cards: [
        {
          n: "③",
          title: "Immatura in crescita",
          cos: "La categoria esiste ma è nascente per il tuo mercato: la porti dove non è arrivata. Il buyer non sa che esista un software.",
          quando: "Credi che la categoria possa diventare grande e hai le capabilities per educare (motion educational, marketing+founder-led).",
          mossa: ["Vinci spiegando il problema e che esiste un modo migliore; non nominare i competitor.", "Scegli la taglia giusta del JTBD."],
          vantaggi: ["Diventi il riferimento della categoria (fragile).", "Insight in esclusiva: nessuno raccoglie quel feedback."],
          rischi: ["Onere educativo enorme + ciclo lungo.", "Paghi tu l'educazione, incassa chi arriva dopo."],
          edu: 3, tesi: 3,
          es: "Docusign (e-signature) · Dropbox (file sharing)",
        },
        {
          n: "④",
          title: "Crea una nuova categoria",
          cos: "La categoria non esiste da nessuna parte: la fondi, comprese le parole con cui il mercato ne parlerà. La più tesi-dipendente.",
          quando: "Infilarti in una categoria esistente danneggia più di quanto aiuti + tesi fortissima e risorse/pazienza. Test: se puoi descriverti cambiando i criteri di una categoria esistente, stai riformulando (→ è Big Fish).",
          mossa: ["3 convincimenti in fila: deve esistere → dovrebbe interessarti → il leader sono io.", "Conia nome e criteri; àncora al noto senza farti riassorbire; prova di inevitabilità (trend/dati)."],
          vantaggi: ["Scrivi tu le regole: il metro con cui ti giudicano.", "Vantaggio di associazione + insight in esclusiva mondiale."],
          rischi: ["La più dura e lenta: serve capitale e pazienza.", "Il primo che crea raramente è il primo che scala (Slack→Teams); rischio vaghezza."],
          edu: 4, tesi: 4,
          es: "Salesforce (cloud CRM) · Vanta (SOC2)",
        },
      ],
    },
  ];

  return (
    <div style={{ fontFamily: font, background: c.bg, width: 1080, margin: "0 auto", padding: "40px 44px 40px", color: c.ink, boxSizing: "border-box" }}>
      {/* MASTHEAD */}
      <div style={{ borderBottom: `3px solid ${c.navy}`, paddingBottom: 14, marginBottom: 20 }}>
        <h1 style={{ fontSize: 42, fontWeight: 900, color: c.navy, margin: 0, lineHeight: 1.05, whiteSpace: "nowrap" }}>
          Strategia di <span style={{ color: c.blue }}>Posizionamento</span>
        </h1>
        <p style={{ fontSize: 18, color: c.body, margin: "9px 0 0", fontWeight: 700 }}>
          Che gioco decidi di fare: <span style={{ color: c.blue }}>4 strategie in 2 campi</span>
        </p>
      </div>

      {buckets.map((b) => (
        <div key={b.key} style={{ marginBottom: 22 }}>
          {/* header bucket */}
          <div style={{ background: c.navy, color: c.white, borderRadius: 12, padding: "12px 18px", marginBottom: 14 }}>
            <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: 0.4 }}>{b.title}</div>
            <div style={{ fontSize: 13, color: c.blueLite, marginTop: 3, fontWeight: 600 }}>{b.desc}</div>
          </div>
          {/* 2 card */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {b.cards.map((s) => <StrategyCard key={s.n} c={c} s={s} />)}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------- componenti ---------- */

function StrategyCard({ c, s }) {
  return (
    <div style={{ background: c.white, border: `1px solid ${c.line}`, borderRadius: 16, padding: "16px 16px 14px", boxShadow: "0 2px 6px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", gap: 9 }}>
      {/* header */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span style={{ width: 30, height: 30, borderRadius: 8, background: c.blue, color: c.white, fontSize: 16, fontWeight: 900, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{s.n}</span>
        <span style={{ fontSize: 17, fontWeight: 900, color: c.navy, lineHeight: 1.1 }}>{s.title}</span>
      </div>

      <div style={{ fontSize: 13, color: c.ink, lineHeight: 1.35 }}>{s.cos}</div>

      <Field c={c} label="Quando è la tua">{s.quando}</Field>

      <div>
        <FieldLabel c={c}>La mossa</FieldLabel>
        {s.mossa.map((m, i) => <Bullet key={i} c={c} color={c.blue} text={m} />)}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <div>
          <FieldLabel c={c} color={c.green}>Vantaggi</FieldLabel>
          {s.vantaggi.map((v, i) => <Bullet key={i} c={c} color={c.green} mark="✓" text={v} />)}
        </div>
        <div>
          <FieldLabel c={c} color={c.red}>Rischi</FieldLabel>
          {s.rischi.map((r, i) => <Bullet key={i} c={c} color={c.red} mark="✕" text={r} />)}
        </div>
      </div>

      {/* meter */}
      <div style={{ display: "flex", gap: 16, marginTop: 2 }}>
        <Meter c={c} label="Onere educativo" level={s.edu} />
        <Meter c={c} label="Dipendenza tesi" level={s.tesi} note={s.tesiNote} />
      </div>

      <div style={{ fontSize: 12, color: c.muted, fontWeight: 600, marginTop: 2, borderTop: `1px solid ${c.line}`, paddingTop: 8 }}>
        Es. {s.es}
      </div>
    </div>
  );
}

function FieldLabel({ c, color, children }) {
  return <div style={{ fontSize: 10.5, fontWeight: 900, letterSpacing: 0.6, textTransform: "uppercase", color: color || c.muted, marginBottom: 3 }}>{children}</div>;
}

function Field({ c, label, children }) {
  return (
    <div>
      <FieldLabel c={c} color={c.blue}>{label}</FieldLabel>
      <div style={{ fontSize: 12.5, color: c.body, lineHeight: 1.32 }}>{children}</div>
    </div>
  );
}

function Bullet({ c, color, mark, text }) {
  return (
    <div style={{ display: "flex", gap: 6, alignItems: "flex-start", marginBottom: 3 }}>
      <span style={{ color, fontWeight: 900, fontSize: 12, lineHeight: 1.3, flexShrink: 0 }}>{mark || "•"}</span>
      <span style={{ fontSize: 12, color: c.body, lineHeight: 1.3 }}>{text}</span>
    </div>
  );
}

function Meter({ c, label, level, note }) {
  return (
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: 10, fontWeight: 800, color: c.muted, textTransform: "uppercase", letterSpacing: 0.4, marginBottom: 3 }}>
        {label}{note ? <span style={{ textTransform: "none", fontWeight: 600, color: c.blue }}> · {note}</span> : ""}
      </div>
      <div style={{ display: "flex", gap: 3 }}>
        {[1, 2, 3, 4].map((i) => (
          <span key={i} style={{ flex: 1, height: 7, borderRadius: 3, background: i <= level ? c.blue : c.blueLite }} />
        ))}
      </div>
    </div>
  );
}
