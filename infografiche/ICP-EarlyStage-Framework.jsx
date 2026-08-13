export default function ICPFramework() {
  const Section = ({ bg, children }) => (
    <div style={{ backgroundColor: bg, padding: '24px', margin: '0 16px 14px', borderRadius: '16px' }}>
      {children}
    </div>
  );

  const Card = ({ num, icon, title, desc }) => (
    <div style={{ backgroundColor: 'white', borderRadius: '12px', padding: '14px', position: 'relative', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}>
      <div style={{ position: 'absolute', top: '-8px', right: '-8px', width: '24px', height: '24px', backgroundColor: '#F47B20', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid white' }}>
        <span style={{ color: 'white', fontSize: '11px', fontWeight: '700' }}>{num}</span>
      </div>
      <div style={{ fontSize: '18px', marginBottom: '6px' }}>{icon}</div>
      <div style={{ color: '#2D2D2D', fontSize: '13px', fontWeight: '700', marginBottom: '4px' }}>{title}</div>
      <div style={{ color: '#666', fontSize: '11px', lineHeight: '1.5' }}>{desc}</div>
    </div>
  );

  const steps = [
    { text: '📊 Impara dai pattern' },
    { arrow: true },
    { text: '🎯 Scegli 1–2 segmenti' },
    { arrow: true },
    { text: '🚫 Smetti di aggiungerne' },
  ];

  return (
    <div style={{ width: '800px', backgroundColor: '#F8F8F8', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif', paddingBottom: '0' }}>

      {/* HEADER */}
      <div style={{ backgroundColor: '#2D2D2D', padding: '28px 32px 26px' }}>
        <div style={{ display: 'inline-block', backgroundColor: '#F47B20', padding: '3px 10px', borderRadius: '4px', marginBottom: '10px' }}>
          <span style={{ color: 'white', fontSize: '10px', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>Early Stage B2B</span>
        </div>
        <h1 style={{ color: 'white', fontSize: '26px', fontWeight: '800', margin: '0 0 6px 0', lineHeight: '1.2' }}>
          ICP in Early Stage
        </h1>
        <p style={{ color: '#AAAAAA', fontSize: '13px', margin: '0 0 18px 0' }}>
          Dal primo cliente alla nicchia — come gestire questa fase
        </p>
        <div style={{ backgroundColor: 'rgba(255,255,255,0.07)', borderRadius: '10px', padding: '14px 16px', borderLeft: '3px solid #F47B20' }}>
          <p style={{ color: '#FF8A80', fontSize: '12px', fontWeight: '700', margin: '0 0 5px 0' }}>❌ Il Trap Comune</p>
          <p style={{ color: '#CCCCCC', fontSize: '12px', margin: '0 0 8px 0', lineHeight: '1.65' }}>
            Settimane a costruire l'ICP "perfetto" — segmento definito, firmografiche precisissime, pain point mappati. Risultato: zero clienti.
          </p>
          <p style={{ color: '#F47B20', fontSize: '12px', fontWeight: '700', margin: '0' }}>
            Il problema non è l'analisi. È l'ordine.
          </p>
        </div>
      </div>

      <div style={{ height: '16px' }} />

      {/* SEZIONE 1 — PRIMO ICP */}
      <Section bg="#FDE0D8">
        <div style={{ marginBottom: '16px' }}>
          <div style={{ color: '#999', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Fase 1</div>
          <h2 style={{ color: '#2D2D2D', fontSize: '16px', fontWeight: '800', margin: '0 0 4px 0' }}>
            Il Primo ICP: 4 Caratteristiche
          </h2>
          <p style={{ color: '#777', fontSize: '12px', margin: '0' }}>Non quello "perfetto" — quello raggiungibile adesso</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '14px' }}>
          <Card num="1" icon="🥇" title="Raggiungibile dal network" desc="A costo quasi zero. Senza o con basso budget ads." />
          <Card num="2" icon="🥇" title="Disposto a validare" desc="Non aspetta il prodotto finito. Sperimenta con te." />
          <Card num="3" icon="🥇" title="Dà feedback reali" desc="Non cortesi. Scomodi ma utili. Dice cosa non funziona." />
          <Card num="4" icon="🥇" title="Ha un problema concreto" desc="Già in fase di ricerca attiva di una soluzione." />
        </div>
        <div style={{ backgroundColor: '#F47B20', borderRadius: '8px', padding: '10px 14px' }}>
          <p style={{ color: 'white', fontSize: '12px', fontWeight: '600', margin: '0' }}>
            🐮 Anche se "non è perfetto per il prodotto in generale" — è giusto per gli outcome che devi raggiungere ORA
          </p>
        </div>
      </Section>

      {/* SEZIONE 2 — VERSO LA NICCHIA */}
      <Section bg="#FDE8C8">
        <div style={{ marginBottom: '16px' }}>
          <div style={{ color: '#999', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Fase 2 — Sulla Nicchia</div>
          <h2 style={{ color: '#2D2D2D', fontSize: '16px', fontWeight: '800', margin: '0 0 4px 0' }}>
            Come Capisci il Vero ICP
          </h2>
          <p style={{ color: '#777', fontSize: '12px', margin: '0' }}>Tieni clienti diversi — ma traccia comportamenti e KPI con metodo</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <Card num="1" icon="📌" title="Comportamenti" desc="Verbali e non, durante incontri e call." />
          <Card num="2" icon="📌" title="Tasso di rinnovo" desc="Chi rinnova e perché — segnale forte di fit." />
          <Card num="3" icon="📌" title="Utilizzo reale" desc="Chi usa davvero il prodotto, non solo chi lo paga." />
          <Card num="4" icon="📌" title="Allineamento strategico" desc="Il cliente massimizza risultati, tu massimizzi redditività e impatto sul network." />
        </div>
      </Section>

      {/* SEZIONE 3 — ERRORE */}
      <Section bg="#FDF5D0">
        <div style={{ marginBottom: '14px' }}>
          <div style={{ color: '#999', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Errore da Evitare</div>
          <h2 style={{ color: '#2D2D2D', fontSize: '16px', fontWeight: '800', margin: '0' }}>
            ❌ Troppi Segmenti per Troppo Tempo
          </h2>
        </div>
        <div style={{ backgroundColor: 'white', borderRadius: '10px', padding: '12px 14px', marginBottom: '14px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', borderLeft: '3px solid #CC3333' }}>
          <p style={{ color: '#CC3333', fontSize: '12px', fontWeight: '700', margin: '0 0 3px 0' }}>Il trap:</p>
          <p style={{ color: '#555', fontSize: '12px', margin: '0', lineHeight: '1.6' }}>
            Restare con 5–6 segmenti troppo a lungo. Ogni nuovo sembra un'opportunità. Diventa dispersione.
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          {steps.map((item, i) =>
            item.arrow ? (
              <div key={i} style={{ color: '#F47B20', fontSize: '20px', fontWeight: '700', flexShrink: 0 }}>→</div>
            ) : (
              <div key={i} style={{ flex: '1', backgroundColor: 'white', borderRadius: '8px', padding: '10px 8px', textAlign: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
                <p style={{ color: '#2D2D2D', fontSize: '11px', fontWeight: '700', margin: '0', lineHeight: '1.5' }}>{item.text}</p>
              </div>
            )
          )}
        </div>
      </Section>

      {/* NOTA EARLY STAGE */}
      <div style={{ margin: '0 16px 16px', backgroundColor: '#E3F2FD', borderRadius: '12px', padding: '12px 16px' }}>
        <p style={{ color: '#1565C0', fontSize: '11px', fontWeight: '700', margin: '0 0 3px 0' }}>📌 Nota sull'Early Stage</p>
        <p style={{ color: '#555', fontSize: '11px', margin: '0', lineHeight: '1.6' }}>
          Non indica solo le startup. È una fase di mercato che qualsiasi azienda affronta ogni volta che lancia un nuovo progetto o feature su un target completamente nuovo.
        </p>
      </div>

      {/* FOOTER */}
      <div style={{ backgroundColor: '#2D2D2D', padding: '14px 24px', textAlign: 'center' }}>
        <p style={{ color: '#888', fontSize: '10px', margin: '0', letterSpacing: '0.3px' }}>
          ICP = Ideal Customer Profile · ECP = Early Customer Profile · Early Stage B2B
        </p>
      </div>

    </div>
  );
}
