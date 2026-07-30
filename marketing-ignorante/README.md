# Marketing Ignorante

Spazio separato dentro il repo per la testata **MarkeThings — firma "Marketing Ignorante"**.

## Perché è separato

Il resto di questo repo è il sistema di **"da 0 al PMF"**: il brand personale di Stefano.
Marketing Ignorante è un'altra pubblicazione, con audience, voce e obiettivi diversi.

| | da 0 al PMF | Marketing Ignorante |
|---|---|---|
| Chi parla | Stefano, prima persona singolare | Plurale redazionale ("noi", "lascia che ti raccontiamo") |
| Chi legge | Founder B2B tech in growth | Founder e marketer che devono lanciare **senza budget** |
| Di cosa parla | Positioning, product marketing, GTM B2B | Campagne e brand, spesso consumer |
| Registro | Diretto, tecnico quando serve | Frasi cortissime, ritmo parlato, zero gergo da consulente |
| Obiettivo | Lead per la consulenza | Iscritti alla newsletter |

**Regola operativa: `knowledge/foundation/` del repo non si carica mai per il lavoro su Marketing Ignorante.**
La voce sta in [knowledge/voce.md](knowledge/voce.md). Mescolare le due produce testi che non
suonano né dell'uno né dell'altro — è la context pollution che il `CLAUDE.md` del repo vieta.

## Cosa c'è dentro

```
newsletter/   numeri settimanali archiviati (input)
notes/        Substack Notes prodotte da ogni numero (output)
knowledge/    voce, ipotesi in test, log delle performance
```

## Le due linee editoriali

1. **How Small Brands Grow** — rubrica mensile, storie di prime mosse di brand.
   Gestita dalla skill globale `how-small-brands-growth`.
   I pezzi archiviati stanno ancora in `articoli/HSBG-*.md` (non spostati).
2. **Numero settimanale** — ogni sabato: 3 campagne di brand spiegate, 1 tool utile,
   1 tema come provocazione. È la fonte delle Notes.

## Il flusso Notes

Ogni numero settimanale diventa 3-4 Substack Notes, una al giorno, con l'obiettivo di
farsi conoscere dentro l'ecosistema Substack e far crescere gli iscritti.

- **Si costruisce** in Claude Code (skill, knowledge, commit)
- **Si usa** in Cowork ogni sabato: si incolla il numero, si ottengono le Notes

Skill: `.claude/skills/marketing-ignorante-notes/` (skill di progetto — viaggia con il repo,
quindi è disponibile ovunque si cloni, senza dipendere dalla sincronizzazione del brain globale).

## Dopo la pubblicazione

Ogni Note pubblicata va registrata in [knowledge/log.md](knowledge/log.md).
Quando un'ipotesi in [knowledge/ipotesi.md](knowledge/ipotesi.md) viene confermata 3 volte,
diventa una regola in `.claude/skills/marketing-ignorante-notes/references/formati-note.md`.
