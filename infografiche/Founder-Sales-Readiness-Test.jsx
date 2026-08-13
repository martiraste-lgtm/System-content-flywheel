// Infografica companion al post "Il collo di bottiglia founder-led"
// Test di trasferibilità: le domande da farti PRIMA di assumere un sales.
// Layout: Checklist/Audit multi-area (5 aree, 18 domande) — brand system infographic-creator.
// Formato: portrait ~1080px. Render con artifact viewer / React.

export default function FounderSalesReadinessTest() {
  const aree = [
    {
      titolo: "Segmento & Clienti",
      icona: "🎯",
      colore: "#FDE8C8",
      domande: [
        ["Sai definire UN segmento con 4-6 attributi?", "Non il TAM: un segmento, un use case."],
        ["I tuoi clienti migliori hanno un tratto comune?", "Alto uso, basso churn, ciclo di vendita più breve."],
        ["Quanta parte delle vendite arriva dal tuo network?", "vs freddo / inbound. Conosci la percentuale?"],
        ["I clienti attuali sono lo stesso profilo?", "O sono 10 eccezioni diverse tra loro?"],
      ],
    },
    {
      titolo: "Dipendenza dal founder",
      icona: "⚠️",
      colore: "#FFE2E2",
      domande: [
        ["Cosa si chiude sulla fiducia in TE?", "E non sul prodotto. Sii onesto."],
        ["Se non vendessi per un mese, cosa si ferma?", "Misura quanto dipende dalla tua persona."],
        ["Quali passaggi salti perché «tanto ci sei tu»?", "Qualificazione, obiezioni, prezzo."],
      ],
    },
    {
      titolo: "Processo & canali di vendita",
      icona: "🔧",
      colore: "#E3F2FD",
      domande: [
        ["Sai descrivere i passaggi della tua vendita?", "O ogni deal è diverso dal precedente?"],
        ["Il processo è scritto o vive solo nella tua testa?", "Se non è documentato, non è trasferibile."],
        ["Conosci le top 3 obiezioni ricorrenti?", "E come si gestiscono? Sono scritte?"],
        ["Hai chiuso deal con chi NON ti conosceva?", "La prova del fuoco della trasferibilità."],
        ["Su quali e quanti canali fai acquisizione?", "Un canale che genera pipeline, o sparso su troppi?"],
      ],
    },
    {
      titolo: "Economics & Obiettivi",
      icona: "💰",
      colore: "#E8F5E9",
      domande: [
        ["Conosci CAC, ACV, ciclo di vendita, conversion?", "I numeri base del tuo motore commerciale."],
        ["Quanti deal servono per l'obiettivo di revenue?", "Reverse-engineering della crescita."],
        ["Le economics reggono il costo di un sales?", "Quanto deve chiudere per ripagarsi?"],
      ],
    },
    {
      titolo: "Il ruolo del sales",
      icona: "👥",
      colore: "#F3E5F5",
      domande: [
        ["Assumi il sales per ESEGUIRE o per CREARE il processo?", "Red flag se la risposta è «crearlo»."],
        ["Hai pipeline e lead da dargli?", "O deve costruire tutto da zero?"],
        ["Sai com'è fatto un «buon primo deal»?", "Uno che lui possa replicare."],
      ],
    },
  ];

  let counter = 0;

  return (
    <div
      style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
      className="w-[1080px] mx-auto bg-[#F8F8F8] p-8"
    >
      {/* Header */}
      <div className="bg-[#2D2D2D] rounded-2xl px-8 py-7 mb-6">
        <h1 className="text-white text-4xl font-bold leading-tight">
          Sei pronto ad assumere un{" "}
          <span className="bg-[#F47B20] text-white px-3 py-0.5 rounded-lg">sales</span>?
        </h1>
        <p className="text-gray-300 text-lg mt-3">
          18 domande da farti <span className="font-semibold text-white">prima</span> di toglierti
          dalle vendite. Un test di trasferibilità del tuo processo.
        </p>
      </div>

      {/* Aree in 2 colonne bilanciate */}
      <div className="[column-count:2] [column-gap:1.25rem]">
        {aree.map((area) => (
          <div
            key={area.titolo}
            className="break-inside-avoid mb-5 rounded-2xl p-5"
            style={{ backgroundColor: area.colore }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">{area.icona}</span>
              <h2 className="text-xl font-bold text-[#2D2D2D]">{area.titolo}</h2>
            </div>

            <div className="flex flex-col gap-2">
              {area.domande.map((d) => {
                counter += 1;
                const n = counter;
                return (
                  <div
                    key={n}
                    className="bg-white rounded-xl p-3 shadow-sm flex gap-3 items-start"
                  >
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#F47B20] text-white text-sm font-bold flex items-center justify-center">
                      {n}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[#2D2D2D] leading-snug">{d[0]}</p>
                      <p className="text-xs text-[#777777] mt-0.5 leading-snug">{d[1]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Strip conclusiva (manifesto) */}
      <div className="bg-[#2D2D2D] rounded-2xl px-8 py-5 mt-1 mb-6">
        <p className="text-white text-lg font-semibold leading-snug">
          Se a troppe di queste la risposta è «no», non sei pronto a delegare.
        </p>
        <p className="text-gray-300 text-base mt-1">
          Togliere il founder dalle vendite è l'obiettivo. È l'ultimo passo, non il primo.
        </p>
      </div>

      {/* Footer firma */}
      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#F47B20] text-white font-bold flex items-center justify-center">
            SM
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-[#2D2D2D]">Stefano Martiradonna</p>
            <p className="text-xs text-[#888888]">Product Marketing Fractional</p>
          </div>
        </div>
        <p className="text-sm font-semibold text-[#2D2D2D]">newsletter «da 0 al PMF»</p>
      </div>
    </div>
  );
}
