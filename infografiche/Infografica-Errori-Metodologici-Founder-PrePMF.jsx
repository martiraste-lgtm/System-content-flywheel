export default function Infografica5Errori() {
  const errori = [
    {
      num: "1",
      titolo: "Scegli la nicchia prima di scoprirla",
      sintomo: "Applichi \"focus sulla nicchia\" al giorno 1, scegliendo a tavolino",
      radice: "Pre-PMF la nicchia si SCOPRE testando 2-3 tesi di ICP in parallelo. Non si sceglie.",
    },
    {
      num: "2",
      titolo: "Cerchi validazione, non falsificazione",
      sintomo: "Parli con amici e network, chiedi \"ti piacerebbe?\", ignori i no",
      radice: "Senza il NO che rompe la tua tesi, non impari. Collezioni complimenti.",
    },
    {
      num: "3",
      titolo: "Confondi attività con apprendimento",
      sintomo: "Tracci numero di call, demo, risposte. Il pipeline si muove.",
      radice: "Non tracci cosa hai imparato che cambia la tua ipotesi di ICP o problema.",
    },
    {
      num: "4",
      titolo: "Ottimizzi gli asset prima del buyer",
      sintomo: "Riscrivi la hero, limi le obiezioni, rifai lo script di discovery",
      radice: "Non sai ancora a CHI lo stai raccontando. Nessun pitch salva un buyer sbagliato.",
    },
    {
      num: "5",
      titolo: "Ragioni per analogia, non per principi primi",
      sintomo: "Guardi Notion, Linear, Stripe e copi sito, pricing, motion",
      radice: "Copi i pattern visibili senza le fondamenta che li hanno generati.",
    },
  ];
  return (
    <div
      style={{ fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}
      className="bg-gray-50 p-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="bg-gray-800 rounded-2xl p-8 mb-6">
          <div className="text-xs font-semibold tracking-widest text-orange-400 mb-3">
            FOUNDER 0–1M ARR · PRE-PMF
          </div>
          <h1 className="text-3xl font-bold text-white leading-tight mb-3">
            5 errori che vedo in ogni founder pre-PMF
          </h1>
          <p className="text-base text-gray-300 leading-relaxed">
            Non sono ICP vago, positioning debole, anchor sbagliato.{" "}
            <span className="text-white font-semibold">Quelli sono sintomi.</span>{" "}
            La vera causa è METODOLOGICA.
          </p>
        </div>
        {/* LEGENDA COLONNE */}
        <div className="grid grid-cols-12 gap-4 px-2 mb-3">
          <div className="col-span-1"></div>
          <div className="col-span-5">
            <div className="flex items-center gap-2">
              <span className="text-red-500 text-lg leading-none">✕</span>
              <span className="text-xs font-bold tracking-wider text-gray-500 uppercase">
                Cosa fai (il sintomo)
              </span>
            </div>
          </div>
          <div className="col-span-6">
            <div className="flex items-center gap-2">
              <span className="text-orange-500 text-lg leading-none">→</span>
              <span className="text-xs font-bold tracking-wider text-gray-500 uppercase">
                La radice metodologica
              </span>
            </div>
          </div>
        </div>
        {/* RIGHE ERRORI */}
        <div className="space-y-3 mb-6">
          {errori.map((e, i) => (
            <div
              key={e.num}
              className={`grid grid-cols-12 gap-4 p-5 rounded-xl items-center ${
                i % 2 === 0 ? "bg-white" : "bg-orange-50"
              } border border-gray-200`}
            >
              {/* Badge numerico */}
              <div className="col-span-1 flex items-start justify-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
                  style={{ backgroundColor: "#F47B20" }}
                >
                  {e.num}
                </div>
              </div>
              {/* Titolo + sintomo */}
              <div className="col-span-5">
                <div className="text-base font-bold text-gray-800 leading-tight mb-1">
                  {e.titolo}
                </div>
                <div className="text-sm text-gray-500 leading-snug flex items-start gap-2">
                  <span className="text-red-400 mt-0.5">✕</span>
                  <span>{e.sintomo}</span>
                </div>
              </div>
              {/* Radice */}
              <div className="col-span-6">
                <div className="text-sm text-gray-700 leading-relaxed flex items-start gap-2">
                  <span className="text-orange-500 font-bold mt-0.5">→</span>
                  <span>{e.radice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* META-ERRORE */}
        <div
          className="rounded-2xl p-8"
          style={{ backgroundColor: "#FDE8C8" }}
        >
          <div className="text-xs font-bold tracking-widest text-orange-600 mb-2">
            ↓ IL META-ERRORE CHE GENERA TUTTI GLI ALTRI
          </div>
          <div className="text-2xl font-bold text-gray-800 leading-tight mb-4">
            Tratti il pre-PMF come <span className="underline decoration-orange-500 decoration-4">ESECUZIONE</span>,
            <br />
            quando è <span className="underline decoration-orange-500 decoration-4">INDAGINE</span>.
          </div>
          <div className="text-sm text-gray-700 leading-relaxed">
            Chi entra in execution mode prima di aver capito, sta ottimizzando la risposta
            a una domanda che non ha ancora formulato bene.
          </div>
          <div className="mt-4 pt-4 border-t border-orange-300">
            <div className="text-base font-semibold text-gray-800">
              Non è una questione di velocità. È di <span style={{ color: "#F47B20" }}>ORDINE</span>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
