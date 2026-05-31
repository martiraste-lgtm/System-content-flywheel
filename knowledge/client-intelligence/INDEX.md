# Client Intelligence — il vantaggio sleale

> Questo è il layer che ti distingue. Non vendi un prodotto, ma hai accesso diretto a founder reali
> in consulenza: una fonte più ricca delle sales call di un'azienda. Qui la sistematizzi.
>
> **Prova del perché serve:** in `../hypotheses/active.md` ogni "evidenza pro" cita Wester/Estner/Herubel —
> nessuna cita un tuo cliente. Stai facendo reverse-engineering dei quote altrui invece di minare i tuoi.
> Questo layer inverte la cosa.

---

## Cosa contiene

| File / cartella | Contenuto |
|-----------------|-----------|
| `insights/` | Un file per engagement (o per tema ricorrente): insight strutturati e anonimizzati |
| `lexicon.md` | Lessico: come parla il founder (reale) vs come parla il marketer/consulente (vendor-speak) |
| `patterns.md` | Pattern che emergono su ≥3 engagement → segnale forte, alimenta `../foundation/` a monte |

---

## ⚠️ Regola di anonimizzazione (NON negoziabile)

I clienti sono sotto NDA. Prima di salvare qualsiasi entry:

- **Rimuovi:** nome persona, nome/brand azienda, dettagli identificativi unici (prodotto specifico riconoscibile, città piccola, ecc.).
- **Tieni:** ruolo, settore, scala (stage + ordine di grandezza ARR/team), il *contenuto* dell'insight, le quote testuali ripulite.
- **Esempio corretto:** "Il founder di una SaaS fintech seed (~300K ARR)" — non "Marco di Acme Pay".

Il repo è privato su GitHub → le entry anonimizzate sono versionate. Ma l'anonimizzazione va fatta **all'ingresso**, non si confida nella privacy del repo.

---

## Workflow di intake

Quando Stefano dice: *"estrai gli insight da questa sessione"* (+ appunti/trascrizione grezza):

1. Anonimizzo secondo la regola sopra.
2. Creo (o aggiorno) un file in `insights/` col template qui sotto.
3. Propongo 0-N voci nuove per `lexicon.md` (frasi founder vs equivalente vendor).
4. Se l'insight conferma/contraddice un pattern in `patterns.md`, aggiorno quel file.
5. Se tocca un'ipotesi attiva, aggiorno `../hypotheses/active.md` con l'evidenza (ora da fonte *mia*).

> Step futuro opzionale: skill dedicata `engagement-insight-extractor` (via `skill-builder`) per automatizzare 1-4.
> Per ora bastano template + questo workflow.

---

## Template entry `insights/[slug-anonimo].md`

```markdown
---
engagement: [slug anonimo, es. saas-fintech-seed-01]
settore: [es. fintech B2B]
scala: [es. seed, ~300K ARR, team 6]
data: [YYYY-MM]
---

## JTBD — cosa il founder sta cercando di ottenere (e perché)

## Pain con contesto — problema, trigger, costo (tempo/rischio/denaro), urgenza

## Realtà operativa — come fa oggi (workaround, fogli Excel, processi fragili, tool incollati)

## Decisione — come valuta/compra advisory, criteri, obiezioni ricorrenti

## Menzioni competitor/tool — cosa nomina, con che sentiment

## Quote anonimizzate — frasi testuali (rimosso nome/brand, tenuto ruolo+settore+scala)
> "[quote esatta del founder]" — [ruolo, settore, scala]
```

---

## Come alimenta il resto del sistema (intelligence → multiple outputs)

Una sola estrazione alimenta output distinti:
- **Quote anonimizzate** → hook per post LinkedIn (dialogo founder/consulente, T02) e aperture di articoli.
- **Pain con contesto** → angoli per newsletter; mappati a `../proof-library/results.md` se hai risolto quel pain.
- **Lessico** → rende il contenuto "scritto da un practitioner", non da un vendor.
- **Pattern cross-engagement** → affinano `../foundation/audience.md`, `../foundation/pov.md` (review 3-6 mesi).

Non è un problema di produzione di contenuti. È un problema di **distribuzione di intelligence**.
