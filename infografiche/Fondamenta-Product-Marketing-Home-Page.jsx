// Infografica "Non è un problema di Copy, è un problema di Fondamenta" (iceberg)
// Companion visual del post LinkedIn: il founder rifà Home Page/Hero/copy, ma il problema
// non è il copy — è la MANCANZA di fondamenta di Product Marketing.
// Metafora: iceberg. Punta emersa = la Home Page (Àncora + Hero: quello che continui a rifare).
// Massa sommersa = le 5 fondamenta PMM. Esempi: Figma, attraverso tutte e 5.
// Look: brand system chiaro + acqua/fondamenta blu (blu = foundation, come GTM Power System).
// Layout: SVG, portrait 1080×1600. Render con artifact viewer / React. Senza firma, senza footer.

export default function FondamentaProductMarketingHomePage() {
  const sans = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

  const c = {
    sky: "#F8F8F8",
    ink: "#2D2D2D",
    body: "#555555",
    muted: "#8A8A8A",
    accent: "#F47B20",
    bad: "#EF3B2C",
    badSoft: "#FDE7E4",
    iceBorder: "#C9D6E5",
    iceFill: "#FFFFFF",
    iceCard: "#F3F8FF",
    slabRole: "#D6E4FF",
    navy: "#1E3A8A",
  };

  // dots del logo Figma (stilizzato — nel PROMPT gemello si chiede il logo vero)
  const figmaDots = ["#F24E1E", "#FF7262", "#A259FF", "#1ABCFE", "#0ACF83"];

  // fondamenta ordinate per profondità: dalla superficie (ICP) al keel (Tesi di Prodotto)
  const slabs = [
    {
      name: "ICP",
      role: "Chi esattamente: contesto, job, come risolve oggi, trigger, chi decide.",
      figma: [
        "team di prodotto (designer + PM + dev), non freelance.",
        "Trigger: l'handoff doloroso e i file 'final_v3'.",
      ],
      y: 498, w: 960,
    },
    {
      name: "Strategia di Posizionamento",
      role: "In che campo giochi: categoria matura, emergente o da creare.",
      figma: [
        "categoria matura (Adobe, Sketch): non sfida le feature,",
        "cambia i criteri → collaborazione real-time nel browser.",
      ],
      y: 680, w: 940,
    },
    {
      name: "Architettura di Posizionamento",
      role: "Cosa posizioni: un prodotto, più prodotti, una piattaforma, un brand.",
      figma: [
        "nasce Single Product (azienda = prodotto), poi piattaforma",
        "sullo stesso canvas: FigJam, Dev Mode, Slides.",
      ],
      y: 862, w: 910,
    },
    {
      name: "POV",
      role: "Dove va il mercato e perché — la bussola credibile, non il fornitore migliore.",
      figma: [
        "«il design è un lavoro di squadra, non un file da passarsi».",
        "Il futuro è collaborativo e multiplayer: tutto il team nel canvas.",
      ],
      y: 1044, w: 870,
    },
    {
      name: "Tesi di Prodotto",
      role: "La scommessa di fondo: quale problema possiedi, e per chi.",
      figma: [
        "il design professionale può vivere nel browser, in tempo reale —",
        "contro i tool desktop single-player (Adobe, Sketch).",
      ],
      y: 1226, w: 820,
    },
  ];

  const SLAB_H = 170;

  return (
    <div style={{ background: c.sky, padding: 16, display: "flex", justifyContent: "center" }}>
      <svg
        viewBox="0 0 1080 1600"
        width="100%"
        style={{ maxWidth: 1080, display: "block", fontFamily: sans }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4C93F7" />
            <stop offset="35%" stopColor="#2563EB" />
            <stop offset="72%" stopColor="#1E3A8A" />
            <stop offset="100%" stopColor="#132552" />
          </linearGradient>
          <linearGradient id="berg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DCEBFF" />
            <stop offset="30%" stopColor="#93C0FE" />
            <stop offset="65%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1E40AF" />
          </linearGradient>
          <linearGradient id="tip" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E4F0FF" />
          </linearGradient>
        </defs>

        {/* ====================== SFONDO CIELO ====================== */}
        <rect x="0" y="0" width="1080" height="460" fill={c.sky} />

        {/* ====================== HEADER (reframe) ====================== */}
        <text x="540" y="70" textAnchor="middle" fontSize="39" fontWeight="800" fill={c.ink}>
          Hai già rifatto la tua <tspan fill={c.accent}>Home Page</tspan>,
        </text>
        <text x="540" y="118" textAnchor="middle" fontSize="39" fontWeight="800" fill={c.ink}>
          ma i risultati sperati non arrivano?
        </text>

        {/* H2 negativo */}
        <text x="540" y="176" textAnchor="middle" fontSize="33" fontWeight="900" fill={c.bad}>
          Non è un problema di Copy.
        </text>
        <line x1="333" y1="166" x2="747" y2="166" stroke={c.bad} strokeWidth="3.5" />

        {/* H3 accent */}
        <text x="540" y="214" textAnchor="middle" fontSize="23" fontWeight="800" fill={c.ink}>
          È un problema di <tspan fill={c.accent}>fondamenta di Product Marketing</tspan>.
        </text>

        {/* ====================== PUNTA EMERSA = LA HOME PAGE ====================== */}
        {/* tag sintomo */}
        <rect x="356" y="240" width="368" height="30" rx="15" fill={c.bad} />
        <text x="540" y="260" textAnchor="middle" fontSize="13.5" fontWeight="800" fill="#FFFFFF" letterSpacing="0.4">
          ⟳  QUELLO CHE CONTINUI A RIFARE
        </text>

        {/* pannello-ghiaccio (la punta) */}
        <rect x="175" y="282" width="730" height="150" rx="18" fill="url(#tip)" stroke={c.iceBorder} strokeWidth="2" />
        <text x="540" y="309" textAnchor="middle" fontSize="13" fontWeight="800" fill={c.muted} letterSpacing="2">
          LA PUNTA DELL'ICEBERG · LA HOME PAGE
        </text>

        {/* card ÀNCORA */}
        <rect x="195" y="322" width="335" height="94" rx="11" fill={c.iceCard} stroke={c.iceBorder} strokeWidth="1.5" />
        <text x="214" y="349" fontSize="17" fontWeight="900" fill={c.ink}>ÀNCORA</text>
        <text x="214" y="371" fontSize="12.5" fill={c.body}>Fai capire subito chi sei e cosa fai:</text>
        <text x="214" y="389" fontSize="12" fontWeight="600" fill={c.accent}>Use Case · Product Category ·</text>
        <text x="214" y="406" fontSize="12" fontWeight="600" fill={c.accent}>Alternativa a X · una serie di Attività</text>

        {/* card HERO SECTION */}
        <rect x="550" y="322" width="335" height="94" rx="11" fill={c.iceCard} stroke={c.iceBorder} strokeWidth="1.5" />
        <text x="569" y="349" fontSize="17" fontWeight="900" fill={c.ink}>HERO SECTION</text>
        <text x="569" y="371" fontSize="12.5" fill={c.body}>Le 5–10 parole che il buyer legge</text>
        <text x="569" y="389" fontSize="12.5" fill={c.body}>per prime — o se ne va.</text>
        <text x="569" y="408" fontSize="11.5" fontWeight="700" fill={c.muted} fontStyle="italic">≈ il 10% visibile</text>

        {/* ====================== ACQUA ====================== */}
        <rect x="0" y="445" width="1080" height="1155" fill="url(#water)" />

        {/* linea di galleggiamento ondulata + schiuma */}
        <path
          d="M0,447 Q90,435 180,447 T360,447 T540,447 T720,447 T900,447 T1080,447"
          fill="none" stroke="#EAF3FF" strokeWidth="4" opacity="0.9"
        />
        <path
          d="M0,455 Q90,443 180,455 T360,455 T540,455 T720,455 T900,455 T1080,455"
          fill="none" stroke="#BBD7FF" strokeWidth="2" opacity="0.6"
        />
        <text x="44" y="486" fontSize="13" fontWeight="700" fill="#DCE9FF" letterSpacing="0.5">
          ↓  quello che regge davvero (e che nessuno guarda)
        </text>

        {/* ====================== MASSA SOMMERSA (iceberg) ====================== */}
        <polygon
          points="40,455 1040,455 1030,1150 900,1360 700,1500 540,1560 380,1500 180,1360 50,1150"
          fill="url(#berg)" opacity="0.96"
        />
        {/* facce/ghiaccio: highlight tenui */}
        <polyline points="40,455 300,470 240,1120 120,900" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.16" />
        <polyline points="1040,455 800,475 860,1080 970,860" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.14" />
        <polyline points="540,1560 620,1360 700,1500" fill="none" stroke="#FFFFFF" strokeWidth="2" opacity="0.18" />

        {/* asse profondità (margine destro) */}
        <line x1="1058" y1="500" x2="1058" y2="1300" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.35" strokeDasharray="2 6" />
        <text
          x="1072" y="900" fontSize="12" fontWeight="800" fill="#FFFFFF" opacity="0.55"
          textAnchor="middle" letterSpacing="2" transform="rotate(90 1072 900)"
        >
          PIÙ PROFONDO = PIÙ STRATEGICO
        </text>

        {/* ====================== SLAB FONDAMENTA ====================== */}
        {slabs.map((s) => {
          const x = 540 - s.w / 2;
          const chipX = x + 20;
          const chipY = s.y + 78;
          const chipW = s.w - 40;
          const chipH = 76;
          return (
            <g key={s.name}>
              {/* card translucida */}
              <rect
                x={x} y={s.y} width={s.w} height={SLAB_H} rx="14"
                fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.30)" strokeWidth="1.5"
              />
              {/* barra accento a sinistra */}
              <rect x={x} y={s.y + 14} width="6" height={SLAB_H - 28} rx="3" fill="#FFFFFF" opacity="0.85" />

              {/* nome */}
              <text x={x + 28} y={s.y + 40} fontSize="25" fontWeight="900" fill="#FFFFFF">
                {s.name}
              </text>
              {/* ruolo (cos'è) */}
              <text x={x + 28} y={s.y + 66} fontSize="15" fontWeight="500" fill={c.slabRole}>
                {s.role}
              </text>

              {/* chip esempio Figma */}
              <rect x={chipX} y={chipY} width={chipW} height={chipH} rx="10" fill="#FFFFFF" />
              <text x={chipX + 16} y={chipY + 25} fontSize="13.5" fontWeight="800" fill={c.navy}>
                Es.
              </text>
              {figmaDots.map((d, i) => (
                <circle key={i} cx={chipX + 52 + i * 13} cy={chipY + 20} r="4.5" fill={d} />
              ))}
              <text x={chipX + 122} y={chipY + 25} fontSize="13.5" fontWeight="900" fill={c.ink}>
                Figma:
              </text>
              <text x={chipX + 16} y={chipY + 48} fontSize="13" fill={c.body}>
                {s.figma[0]}
              </text>
              <text x={chipX + 16} y={chipY + 66} fontSize="13" fill={c.body}>
                {s.figma[1]}
              </text>
            </g>
          );
        })}

        {/* ====================== KEEL CAPTION ====================== */}
        <rect x="300" y="1420" width="480" height="72" rx="14" fill="rgba(8,18,45,0.55)" stroke="rgba(255,255,255,0.22)" strokeWidth="1.2" />
        <text x="540" y="1450" textAnchor="middle" fontSize="16" fontWeight="900" fill="#FFFFFF">
          Le fondamenta sono il 90% invisibile.
        </text>
        <text x="540" y="1475" textAnchor="middle" fontSize="14" fontWeight="600" fill="#DCE9FF">
          Lì si perde — o si vince — il deal.
        </text>
      </svg>
    </div>
  );
}
