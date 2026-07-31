---
name: marketing-ignorante-notes
description: Trasforma un numero settimanale della newsletter MarkeThings (firma "Marketing Ignorante") in 3-4 Substack Notes, una al giorno, per far crescere gli iscritti. Scompone il numero nei suoi sei blocchi (tre notizie, editoriale, due risorse), scarta quelli che non reggono da soli, assegna a ciascuno un formato Note diverso e scrive i testi nella voce della testata. Usa quando l'utente incolla un numero della newsletter, o dice "trasforma questo numero in notes", "fammi le notes della settimana", "notes da questo numero", "notes per Substack", "spacchetta il numero", "MarkeThings in notes". Do NOT use per la rubrica mensile How Small Brands Grow (usa how-small-brands-growth), per post LinkedIn (usa linkedin-viral-post-writer), o per contenuti della newsletter personale "da 0 al PMF" (usa newsletter-writer).
license: MIT
metadata:
  author: Stefano Martiradonna
  version: 1.0.0
  category: content
  tags: [substack, notes, marketing-ignorante, markethings, distribuzione]
---

# MarkeThings → Substack Notes

## Overview

Ogni sabato esce un numero di MarkeThings: tre notizie di marketing, un editoriale, due risorse.
Questa skill lo trasforma in 3-4 Notes da pubblicare una al giorno.

**Obiettivo dichiarato:** far crescere gli iscritti alla newsletter facendosi conoscere dentro
l'ecosistema Substack.

**La regola che governa tutto:** *la Note non racconta la notizia, estrae il meccanismo.*
La notizia è la prova. Una Note che riassume un pezzo del numero è pubblicità; una Note che dice
una cosa autonoma e *poi* rimanda è contenuto. È già stato provato l'opposto — link più copertina —
e non ha funzionato (E0 in `marketing-ignorante/knowledge/ipotesi.md`).

**Test finale su ogni Note prodotta:** se il lettore non clicca niente, ha comunque ricevuto qualcosa?
Se la risposta è no, la Note si riscrive.

---

## File da leggere prima di iniziare

Nell'ordine, e **solo questi**:

1. `marketing-ignorante/knowledge/voce.md` — la voce della testata
2. `references/anatomia-numero.md` — come è fatto un numero e come si giudica un blocco
3. `references/formati-note.md` — i cinque formati e le regole di combinazione
4. `marketing-ignorante/knowledge/ipotesi.md` — cosa è ancora una scommessa

**Non caricare `knowledge/foundation/`.** È la voce di Stefano per "da 0 al PMF": prima persona
singolare, founder B2B tech, lessico da positioning. Marketing Ignorante è plurale redazionale e
parla a chi lancia senza budget. Mescolarle produce Note che non suonano né dell'uno né dell'altro.

---

## Instructions

### Step 1 — Parsing

Dal numero incollato, isola i blocchi candidati:

- **3 notizie** — un fatto di marketing con dentro un meccanismo
- **1 editoriale** — il blocco che non racconta un fatto ma sostiene una tesi. Attenzione: la posizione varia, può stare in fondo o prima delle risorse. Identificalo dal contenuto, non dalla posizione
- **2 risorse** — tool, piattaforme o libri

Scarta sempre l'intro (saluto + anticipazione dei temi): non contiene materiale.

Per ogni notizia, scrivi **il meccanismo in una riga**. Se non riesci a formularlo, il blocco
probabilmente non regge — annotalo e verificalo allo step 2.

Se il numero non ha questa struttura (numero speciale, rubrica HSBG, formato cambiato), fermati e
dillo invece di forzare lo schema.

### Step 2 — Selezione

Sei candidati, 3-4 slot. Valuta ogni blocco sui cinque segnali di `anatomia-numero.md`:
meccanismo enunciabile, dettaglio che si ricorda, numero che crea tensione, capacità di dividere,
nome proprio riconoscibile.

- Nessun segnale → **scarta**
- Un segnale → borderline, tienilo solo se servono quattro Note e non c'è di meglio
- Due o più → candidato forte

**Produci meno Note piuttosto che una Note debole.** Tre buone battono quattro con una fiacca: nel
feed un contenuto piatto costa distribuzione anche a quelli che vengono dopo.

Dichiara sempre cosa hai scartato e perché. Serve a Stefano per ribaltare la scelta se non è d'accordo.

### Step 3 — Assegnazione dei formati

A ciascun blocco selezionato assegna il formato più adatto tra F1-F5 (`formati-note.md`):

| Il blocco ha... | Formato |
|---|---|
| Un meccanismo chiaro e trasferibile | **F1 — Il meccanismo** |
| Un oggetto o un'immagine che si ricorda da sola | **F2 — Il fatto assurdo** |
| Una tensione su cui si può dissentire | **F3 — La cosa che divide** |
| Un contrasto numerico | **F4 — Il numero che non torna** |
| È una risorsa | **F5 — La risorsa con l'uso** |

Vincoli: mai due volte lo stesso formato nella stessa settimana; al massimo una F5.

Se due blocchi chiedono lo stesso formato, tieni il più forte e cambia formato all'altro o scartalo.

### Step 4 — Scrittura

Voce da `voce.md`: **mai "noi"** (narratore invisibile in terza persona + "tu" diretto solo nel
finale — registro diverso dalla newsletter), frasi cortissime, a capo frequenti, "perché" come
apertura di frase per spiegare il meccanismo, connettivi da parlato (Eppure, Però, Invece, Infatti,
Insomma, Chiaro) per rompere la linearità, zero gergo da consulente, numeri veri o niente — con
fonte nominata quando c'è, nessun nome di framework o di autore-guru nel testo.

Per ogni Note:
- **Prima riga autonoma.** È l'unica cosa che il feed garantisce. Non un titolo: già il contenuto
- **Un'idea sola**
- **Chiusura che non riassume.** Due varianti, non mescolarle nella stessa Note:
  domanda-specchio che nomina di nuovo il caso (default, confermata su caption) oppure affermazione/
  massima quando il meccanismo è già la battuta finale (🟡 ipotesi, vedi H5)
- **CTA secondo le regole di `formati-note.md`**: la prima Note della settimana non porta link; almeno una nomina la newsletter per nome; nessuna è un annuncio del numero

### Step 5 — Output

```markdown
# Notes — MarkeThings #[N] ([data numero])

**Blocchi scartati:** [quali e perché — una riga ciascuno]
**Cadenza assegnata:** [giorni] — variante [A/B] di H4

---

## Note 1 — [giorno] · formato [Fx] · da [blocco]

[testo pronto al copia-incolla]

*Perché questo formato:* [una riga]
*Ipotesi applicate:* [es. H2 — la provocazione rende più delle campagne]

---

## Note 2 — ...

---

## Da incollare nel log dopo la pubblicazione

| Data | Numero | Blocco | Formato | Restack | Like | Commenti | Iscritti | Nota |
|------|--------|--------|---------|---------|------|----------|----------|------|
| | #[N] | | | | | | | |
```

**Default attuale: output in chat, non su file.** Stefano copia i testi in un documento che passa a chi
pubblica. Restituisci le Notes pronte al copia-incolla, con la meta-informazione (formato, blocco,
perché) separata dal testo così non finisce nel copia. Il file in `marketing-ignorante/notes/` si
salva solo se richiesto esplicitamente, con nome `YYYY-MM-DD-notes-markethings-[N].md`.

Questo default va rivisto quando il formato delle Notes si sarà stabilizzato e l'archivio servirà
davvero per misurare.

**Ricorda a Stefano** che la quarta Note della settimana, secondo H3, dovrebbe essere una reazione a
qualcun altro nel feed e non un derivato del numero — quella non la può scrivere la skill, va scritta
leggendo il feed.

---

## Examples

### Esempio 1 — Numero pieno, quattro Notes

Input: #131 (Bayer, Sourmilk, Haaland, editoriale sulla standardizzazione estetica, 21st.dev, Trigger).

Selezione: Bayer (meccanismo forte + numero: un ictus ogni 12 secondi) → F1. Sourmilk (contrasto
numerico sui follower) → F4. Editoriale (divide: chi fa grafica con i template si sente chiamato in
causa) → F3. Trigger (risorsa italiana, problema chiaro) → F5.

Scartati: Haaland — il meccanismo c'è ma è debole per il pubblico della testata, è cronaca di un
fenomeno più che una mossa copiabile; 21st.dev — seconda risorsa, e il vincolo è una sola F5.

### Esempio 2 — Numero con un blocco che non regge

Input: #130. La notizia Pepsi (post ritirato, scuse) è un fatto di cronaca senza meccanismo
trasferibile: "non fate battute ambigue" non è un'idea.

Comportamento atteso: la skill la scarta e lo dice, producendo tre Notes — RAI in F3 (divide
davvero), Goodwipes in F2 (il cartellone che profuma), Vercel in F5. Non la forza dentro pur di
arrivare a quattro.

### Esempio 3 — Numero già coperto altrove

Input: #129, notizia su Bending Spoons. Esiste già `articoli/Company-Teardown-Bending-Spoons-2026-05.md`.

Comportamento atteso: la Note rimanda al teardown invece che al numero. È materiale più profondo e
converte meglio chi arriva incuriosito dal nome.

---

## Troubleshooting

**"Le Notes si somigliano tutte."** Stai usando lo stesso formato o stai partendo sempre dal brand.
Controlla lo step 3: quattro formati diversi, e la prima riga non deve mai aprire con il nome dell'azienda.

**"Il numero ha solo due blocchi decenti."** Produci due Notes. Il conteggio 3-4 è un obiettivo, non
una quota: riempirlo con materiale debole è il modo più veloce per abituare il feed a saltarti.

**"Suona come Stefano su LinkedIn."** Hai caricato `knowledge/foundation/`. Ricomincia leggendo solo
i quattro file elencati sopra.

**"Suona istituzionale, da comunicato stampa."** Hai usato "noi"/"ci"/"abbiamo". Nelle Note non si
usa mai, nemmeno per dichiarare una posizione in F3 — vedi `voce.md`, sezione "Chi parla". È il
registro della newsletter, non quello del feed.

**"La Note polarizzante mi sembra rischiosa."** F3 richiede che i due lati siano dati onestamente. Se
il rischio resta, il problema è la tesi, non il formato — cambia blocco. Ma una testata che promette
di "dire le cose come stanno" senza mai prendere posizione non mantiene la promessa.

**"Non so quale giorno usare."** H4 è ancora aperta: alterna le due varianti e guarda il log. Finché
non ci sono dati, l'assegnazione dei giorni è una scommessa dichiarata, non una regola.

---

## References

- `references/anatomia-numero.md` — struttura reale del numero, segnali di forza di un blocco
- `references/formati-note.md` — i cinque formati, combinazione, CTA, formati bocciati
- `marketing-ignorante/knowledge/voce.md` — voce della testata
- `marketing-ignorante/knowledge/ipotesi.md` — cosa stiamo testando
- `marketing-ignorante/knowledge/log.md` — dove finiscono le performance
- `marketing-ignorante/newsletter/INDEX.md` — i numeri già scomposti