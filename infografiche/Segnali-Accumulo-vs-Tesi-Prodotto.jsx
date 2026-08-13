// Infografica — Checklist segnali di crescita per ACCUMULO (non su una tesi di prodotto)
// Formato: portrait 800x1200 (social-friendly)
// Brand system: infographic-creator (palette antracite/arancio, Inter)

export default function SegnaliAccumuloChecklist() {
  const segnali = [
    {
      segnale: "Ogni demo è diversa, non hai un percorso standard",
      esempio: "con un prospect parti dalla feature A, con un altro dalla C",
    },
    {
      segnale: "Non hai un criterio per dire NO a una feature",
      esempio: "ogni richiesta sembra sensata: come giustifichi un rifiuto?",
    },
    {
      segnale: "Hai un competitor diverso per ogni modulo",
      esempio: "su una cosa competi con Tizio, su un'altra con Caio",
    },
    {
      segnale: "La risposta a «chi è il tuo cliente?» si allunga ogni anno",
      esempio: "serviamo PMI ma anche enterprise, in più settori: dipende",
    },
    {
      segnale: "Le conversioni ballano e dai la colpa al canale o al copy",
      esempio: "a volte le ads vanno, a volte no, e non capisci il perché",
    },
    {
      segnale: "Ogni preventivo è negoziato da zero",
      esempio: "il listino è cresciuto a strati, sconti caso per caso",
    },
    {
      segnale: "La cassa è imprevedibile perché mischi modelli di ricavo",
      esempio: "metà ricorrente, metà progetti spot: che azienda sei?",
    },
    {
      segnale: "Internamente non siete d'accordo su qual è il prodotto principale",
      esempio: "il product dice A, le vendite spingono B, tu pensi C",
    },
  ];

  return (
    <div
      className="w-[800px] min-h-[1200px] bg-[#F8F8F8] p-8 flex flex-col"
      style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
    >
      {/* HEADER */}
      <div className="bg-[#2D2D2D] rounded-2xl p-7">
        <div className="text-[#F47B20] text-xs font-semibold tracking-widest uppercase mb-3">
          Autodiagnosi · Product Strategy
        </div>
        <h1 className="text-white text-[28px] font-bold leading-tight">
          Come ti accorgi che il tuo prodotto è cresciuto per{" "}
          <span className="text-[#F47B20]">ACCUMULO</span>{" "}
          <span className="text-gray-400 font-semibold">(di features)</span>
          <br />e non su una <span className="text-[#F47B20]">TESI DI PRODOTTO</span>?
        </h1>
        <p className="text-gray-300 text-sm mt-4 leading-relaxed">
          8 segnali latenti: li riconosci solo se qualcuno te li indica.
          Presi uno a uno sembrano problemi operativi scollegati. Hanno la stessa radice.
        </p>
      </div>

      {/* CHECKLIST */}
      <div className="flex flex-col gap-3 mt-6">
        {segnali.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-start gap-4"
          >
            {/* Checkbox */}
            <div className="flex-shrink-0 w-7 h-7 rounded-md border-2 border-[#F47B20] flex items-center justify-center mt-0.5">
              <span className="text-[#F47B20] text-sm font-bold leading-none">{i + 1}</span>
            </div>
            {/* Testo */}
            <div className="flex-1">
              <p className="text-[#2D2D2D] text-[15px] font-semibold leading-snug">
                {s.segnale}
              </p>
              <p className="text-gray-500 text-[13px] italic mt-1 leading-snug">
                {s.esempio}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CHIUSURA */}
      <div className="mt-6 bg-[#FDE0D8] rounded-xl p-5">
        <p className="text-[#2D2D2D] text-sm leading-relaxed">
          Nessuno di questi è il vero problema. Sono tutti{" "}
          <span className="font-semibold">sintomi a valle</span> della stessa causa:
          crescendo per richieste hai mischiato modello di business e go-to-market che non hanno fit.
        </p>
      </div>

      {/* FOOTER (opzionale) */}
      <div className="mt-auto pt-6 flex items-center justify-center gap-2">
        <div className="w-7 h-7 rounded-full bg-[#2D2D2D] flex items-center justify-center text-white text-xs font-bold">
          SM
        </div>
        <span className="text-gray-400 text-xs">
          Stefano Martiradonna · newsletter «da 0 al PMF»
        </span>
      </div>
    </div>
  );
}
