// Infografica "Anatomia di una Tesi di Prodotto"
// Companion visual del post LinkedIn (round != maturità → parti dalla Tesi di Prodotto).
// Reference: modello concentrico "Mic Drop Strategic Narrative" di Josh Lowman / Gold Front.
// Adattamento: 4 anelli (Cambiamento → Nemico → Prodotto → ICP), brand GTM Power System.
// Look: base scura + anelli 🔴 storia / 🔵 foundation + glow centrale di convergenza.
// Layout: SVG concentrico radiale, formato portrait 900×1080. Render con artifact viewer / React.

export default function AnatomiaTesiDiProdotto() {
  const cx = 450;
  const cy = 600;

  // dall'esterno verso l'interno. color = stroke anello, wordFill = colore voci, nameSize = corpo nome
  const rings = [
    {
      name: "CAMBIAMENTO",
      r: 380,
      color: "#FF5A5F",
      wordFill: "#F0C7C7",
      nameSize: 28,
      words: [
        { t: ["status quo"], a: 215 },
        { t: ["perché è rotto"], a: 178 },
        { t: ["perché ora"], a: 135 },
        { t: ["vecchio vs", "nuovo gioco"], a: 60 },
        { t: ["nuovi vincitori", "e vinti"], a: 22 },
        { t: ["nuova tecnologia"], a: 330 },
      ],
      dot: 300,
    },
    {
      name: "NEMICO",
      r: 292,
      color: "#E5484D",
      wordFill: "#F0C7C7",
      nameSize: 25,
      words: [
        { t: ["credenza rotta"], a: 208 },
        { t: ["convinzione", "che non regge"], a: 162 },
        { t: ["frizioni", "che subisce"], a: 110 },
        { t: ["saggezza", "convenzionale"], a: 48 },
        { t: ["come si è", "sempre fatto"], a: 335 },
      ],
      dot: 25,
    },
    {
      name: "PRODOTTO",
      r: 205,
      color: "#3B82F6",
      wordFill: "#BFD4F2",
      nameSize: 22,
      words: [
        { t: ["cosa risolve"], a: 218 },
        { t: ["come funziona"], a: 172 },
        { t: ["use cases"], a: 128 },
        { t: ["contro chi", "compete"], a: 55 },
        { t: ["perché è", "migliore"], a: 15 },
        { t: ["il ruolo", "che giochi"], a: 322 },
      ],
      dot: 100,
    },
    {
      name: "ICP",
      r: 128,
      color: "#60A5FA",
      wordFill: "#BFD4F2",
      nameSize: 18,
      words: [
        { t: ["che problema", "ha"], a: 210 },
        { t: ["come risolve", "senza di te"], a: 162 },
        { t: ["per chi", "è vitale"], a: 118 },
        { t: ["cosa cambia", "se vince"], a: 58 },
        { t: ["cosa crede", "già"], a: 14 },
        { t: ["segmento,", "stage, ruolo"], a: 322 },
      ],
      dot: 270,
    },
  ];

  const pos = (r, deg) => {
    const a = (deg * Math.PI) / 180;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  };

  const serif = "Georgia, 'Times New Roman', serif";
  const sans = "Inter, -apple-system, 'Segoe UI', sans-serif";

  return (
    <div
      style={{
        background: "#15131C",
        padding: 16,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <svg
        viewBox="0 0 900 1080"
        width="100%"
        style={{ maxWidth: 900, display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF66B2" />
            <stop offset="50%" stopColor="#C44CC4" />
            <stop offset="100%" stopColor="#6D4DE0" />
          </radialGradient>
          <filter id="softBlur" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="22" />
          </filter>
        </defs>

        {/* sfondo */}
        <rect x="0" y="0" width="900" height="1080" fill="#15131C" />

        {/* titolo */}
        <text
          x={cx}
          y={78}
          fill="#FFFFFF"
          fontFamily={sans}
          fontSize="34"
          fontWeight="800"
          textAnchor="middle"
          letterSpacing="1"
        >
          ANATOMIA DI UNA
        </text>
        <text
          x={cx}
          y={120}
          fill="#FFFFFF"
          fontFamily={sans}
          fontSize="34"
          fontWeight="800"
          textAnchor="middle"
          letterSpacing="1"
        >
          TESI DI PRODOTTO
        </text>
        <text
          x={cx}
          y={158}
          fill="#9A95AB"
          fontFamily={sans}
          fontSize="14"
          fontWeight="400"
          textAnchor="middle"
        >
          Cosa cambia, contro chi combatti, per chi, quale trasformazione inneschi.
        </text>

        {/* anelli concentrici tratteggiati */}
        {rings.map((ring) => (
          <circle
            key={`c-${ring.name}`}
            cx={cx}
            cy={cy}
            r={ring.r}
            fill="none"
            stroke={ring.color}
            strokeWidth="1.3"
            strokeDasharray="2 6"
            opacity="0.75"
          />
        ))}

        {/* puntini decorativi sugli anelli */}
        {rings.map((ring) => {
          const [dx, dy] = pos(ring.r, ring.dot);
          return (
            <circle
              key={`dot-${ring.name}`}
              cx={dx}
              cy={dy}
              r="4"
              fill={ring.color}
            />
          );
        })}

        {/* glow centrale di convergenza */}
        <circle cx={cx} cy={cy} r="112" fill="url(#centerGlow)" opacity="0.55" filter="url(#softBlur)" />
        <circle cx={cx} cy={cy} r="72" fill="url(#centerGlow)" />
        <text
          x={cx}
          y={cy}
          fill="#FFFFFF"
          fontFamily={serif}
          fontSize="30"
          fontWeight="700"
          textAnchor="middle"
          dominantBaseline="central"
          letterSpacing="3"
        >
          TESI
        </text>

        {/* nomi degli anelli (serif, in cima a ogni banda) */}
        {rings.map((ring) => (
          <text
            key={`n-${ring.name}`}
            x={cx}
            y={cy - ring.r + ring.nameSize * 0.9}
            fill="#F2EDE4"
            fontFamily={serif}
            fontSize={ring.nameSize}
            fontWeight="400"
            textAnchor="middle"
          >
            {ring.name}
          </text>
        ))}

        {/* voci distribuite radialmente su ogni anello */}
        {rings.map((ring) =>
          ring.words.map((w, i) => {
            const [x, y] = pos(ring.r, w.a);
            const lines = w.t;
            const startY = y - (lines.length - 1) * 6.5 + 4;
            return (
              <text
                key={`w-${ring.name}-${i}`}
                x={x}
                y={startY}
                fill={ring.wordFill}
                fontFamily={sans}
                fontSize="12"
                fontWeight="600"
                textAnchor="middle"
                letterSpacing="0.8"
              >
                {lines.map((ln, j) => (
                  <tspan key={j} x={x} dy={j === 0 ? 0 : 13}>
                    {ln.toUpperCase()}
                  </tspan>
                ))}
              </text>
            );
          })
        )}
      </svg>
    </div>
  );
}
