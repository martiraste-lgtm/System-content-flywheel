# Content Flywheel — Cervello del Sistema

Questo file è il punto di ingresso per tutte le sessioni di lavoro editoriale.
Leggilo integralmente prima di qualsiasi task.

---

## Chi sono e cosa faccio

Sono Stefano Martiradonna. Product Marketing Fractional e consulente.
Lavoro con startup tech early stage (pre-PMF, 150K–2M ARR), startup in growth, e PMI.

Pubblico su due canali:
- **LinkedIn** — post testuali, caroselli, hook
- **Substack "da 0 al PMF"** — articoli long-form su product marketing, positioning, GTM

Il mio posizionamento ruota attorno alla newsletter. Trattala come canale strategico, non side project.

---

## Il Sistema

### Come funziona

Il sistema accumula conoscenza ogni volta che lavoro. Non parte da zero.

1. `CLAUDE.md` → regole, voce, workflow (questo file)
2. `knowledge/INDEX.md` → router: leggi sempre quello prima di drill-down
3. Ogni sottocartella è un dominio separato — carica solo quello che serve al task

### Divisione dei ruoli

**Stefano decide:**
- Cosa pubblicare e cosa non pubblicare
- Quale prospettiva adottare su un tema
- Opinioni, credenze, tesi personali
- Cosa eliminare dalla knowledge base
- Quali fatti necessitano doppia verifica

**Claude gestisce:**
- Ricerca e estrazione pattern
- Verifica strutturale e confronto con knowledge
- Opzioni di angolazione per un pezzo
- Update automatici dei file di conoscenza (vedi Learning Mode)
- Commit e push delle modifiche ai file knowledge (nessuna autorizzazione necessaria per i file in `knowledge/`)

---

## Skills da invocare

Quando lavoro su contenuti editoriali, usa sempre le skill dedicate come base.
La knowledge del sistema si aggiunge sopra, non sostituisce.

| Task | Skill da invocare | Knowledge aggiuntiva da leggere |
|------|-------------------|---------------------------------|
| Scrivi post LinkedIn | `linkedin-viral-post-writer` | `knowledge/platforms/linkedin/` + `knowledge/references/` |
| Scrivi articolo Substack | `newsletter-writer` | `knowledge/platforms/substack/` + `knowledge/references/` |
| Crea carosello LinkedIn | `linkedin-carousel-creator` | `knowledge/platforms/linkedin/` |
| Analizza autore di riferimento | nessuna skill, usa Chrome MCP | `knowledge/references/` |
| Feedback su un mio pezzo | `newsletter-writer` Modalità 3 | `knowledge/posts/` + `knowledge/hypotheses/active.md` |
| Scrivi Company Teardown | `company-teardown` | `knowledge/companies/` (se esiste) |

Le skill stanno in `~/.claude/skills/`. Leggine il SKILL.md prima di invocarle.

---

## Convenzione di output — dove salvare i deliverable

Ogni deliverable va salvato nella cartella dedicata al suo tipo. Non mischiarli nella root.

| Tipo di output | Cartella di destinazione | Estensioni tipiche |
|----------------|--------------------------|---------------------|
| Caroselli LinkedIn | `caroselli/` | `.pptx`, `.pdf` |
| Infografiche | `infografiche/` | `.html`, `.jsx`, `.png`, `.pdf` |
| Post LinkedIn (idee, bozze, varianti) | `post-idee/` | `.md` |
| Post LinkedIn (già pubblicati) | `post-pubblicati/` | `.md` |
| Articoli Substack (bozze) | `articoli/` (crea se manca) | `.md` |
| Company Teardown (rubrica newsletter) | `articoli/` | `.md` |

**Workflow post LinkedIn:**
1. Nascita di un'idea → file in `post-idee/` (anche solo un titolo o un hook)
2. Iterazione, draft, hook, varianti → stesso file o sottocartella in `post-idee/[topic]/`
3. Quando pubblicato su LinkedIn → spostare il file in `post-pubblicati/` e (opzionale) registrare performance in `knowledge/posts/published.md`

Convenzione nome file: `[Topic-Principale]-[Angle-o-Data].ext`
Esempio: `Carosello-Moltiplicatori-GTM.pdf`, `Post-ICP-vs-ECP-2026-04.md`

Se il deliverable è multi-file (es. carosello = .pptx + .pdf), tienili insieme nella stessa cartella. Se è una serie di output correlati, crea una sottocartella dedicata.

---

## Learning Mode — Istruzioni per l'aggiornamento automatico

Quando mi chiedi di analizzare post di un autore di riferimento:

1. Naviga il profilo LinkedIn con Chrome MCP
2. Per ogni post estratto, identifica:
   - Hook: tipo, struttura, caratteri prima del "leggi di più"
   - Struttura del corpo: lista / narrative / framework / dati
   - Lunghezza approssimativa
   - Eventuali segnali di engagement (commenti, reaction) se visibili
3. Confronta con pattern già in `knowledge/references/[autore]/`
4. Se trovi un pattern nuovo → aggiungilo a `references/[autore]/patterns.md`
5. Se qualcosa "non dovrebbe funzionare" ma funziona → aggiungilo a `knowledge/craft/false_beliefs.md`
6. Se trovi evidenza per o contro un'ipotesi attiva → aggiorna `knowledge/hypotheses/active.md`
7. Commit e push (branch main) — messaggio: `chore: update knowledge — [autore]`

Quando pubblico un pezzo e mi chiedi di registrarlo:

1. Aggiungi entry in `knowledge/posts/published.md`
2. Se ci sono dati di performance (impressions, commenti, reazioni) aggiungili nel file
3. Identifica: cosa ha funzionato, quale pattern era nel pezzo
4. Aggiorna `knowledge/hypotheses/active.md` con l'evidenza
5. Commit e push — messaggio: `chore: add post — [titolo breve]`

**Non chiedere autorizzazione per aggiornare i file `knowledge/`.
Chiedi solo se devi modificare questo CLAUDE.md o i file nelle cartelle `platforms/`.**

---

## Voce e stile

Vedi skill `linkedin-viral-post-writer` → `references/mio-stile.md` per le regole complete.

Principi non negoziabili:
- Diretto, mai pomposo, mai da guru
- Specifico per early stage B2B SaaS — mai generico
- Ogni concetto ha bisogno di un esempio concreto (azienda, numero, caso)
- Mai: mindset, hustle, game changer, life-changing
- Italiano di default, mix naturale con termini tecnici inglesi

---

## Sync cross-surface

Questo repo è condiviso tra Claude Code, Cowork, e Web (via GitHub).

- **Claude Code**: analisi batch, script, update knowledge, commit
- **Cowork**: bozze, iterazione, brainstorming
- **Web/mobile**: accesso da qualsiasi dispositivo, stessa knowledge base

Regola: fai sempre `git pull` prima di iniziare una sessione se stai usando Cowork o Web.
Fai sempre `git push` dopo aver aggiornato la knowledge base.

---

## Stato del sistema

- **Avviato**: aprile 2026
- **Versione**: 0.1 (MVP)
- **Prossimo step**: popolare `knowledge/references/` con i primi autori analizzati
