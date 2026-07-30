# Ipotesi attive — Substack Notes

Stesso meccanismo di `knowledge/hypotheses/active.md`: un'ipotesi confermata **3 volte**
diventa regola in `.claude/skills/marketing-ignorante-notes/references/formati-note.md`.
Una regola contraddetta da nuova evidenza torna ipotesi.

**Queste sono scommesse, non regole.** La skill le applica dichiarandolo. Nessuna di queste
ipotesi si basa su dati verificati sul funzionamento di Substack Notes: si basano su ragionamento
e vanno validate dal log.

Stato: 🟡 in test · 🟢 confermata (conta le conferme) · 🔴 smentita

---

## E0 — Evidenza acquisita: la Note-annuncio non funziona
**Stato:** 🟢 acquisita (non è un'ipotesi, è un risultato)

Le Notes pubblicate finora erano **link al numero + copertina**, senza testo autonomo.
Sono andate male.

**Cosa se ne ricava:** una Note che è solo un annuncio non dà niente a chi non conosce già la
testata, e chi non la conosce è esattamente il pubblico che serve raggiungere. Da qui la regola
non negoziabile della skill: *la Note deve reggersi anche se nessuno clicca*.

Questo è anche il motivo per cui il formato "riassunto del numero" è tra quelli bocciati in
`.claude/skills/marketing-ignorante-notes/references/formati-note.md`.

---

## H1 — Il KPI prossimo non è "iscritti", è il restack da account con audience sovrapposta
**Stato:** 🟡 in test · conferme: 0/3

Le Notes convertono per esposizione di secondo grado: qualcuno con un pubblico affine ti
restacka, e il suo pubblico ti scopre. Non per click diretto dalla singola Note.

**Perché conta:** se si misurano solo gli iscritti generati nel giorno della Note, dopo un mese
il programma sembra morto e viene tagliato. È lo stesso errore di misurazione descritto in
`~/.claude/skills/inbound-how-to-start-albanese/references/failure-modes-e-misurazione.md`:
indicatore anticipato (restack da account rilevanti) contro indicatore ritardato (iscritti).

**Come si conferma o si smentisce:** nel log, per ogni Note, si registrano restack e iscritti del
giorno. Se i picchi di iscritti seguono i restack invece delle Notes con più like, H1 regge.

**Cosa cambia se è vera:** il criterio di scrittura diventa "questa Note è restackabile da qualcun
altro?", non "questa Note fa cliccare?". Sono due testi diversi.

---

## H2 — La provocazione rende più delle campagne; il tool è il più salvabile
**Stato:** 🟡 in test · conferme: 0/3

Ordine di resa atteso sui blocchi del numero settimanale:
1. **Tema/provocazione** — il feed premia l'opinione e il disaccordo
2. **Tool** — alto valore di salvataggio, e il salvataggio spesso precede il follow
3. **Campagne** — funzionano solo se hanno un numero forte o un visual forte; senza, sono aneddoti

**Come si conferma:** tre settimane in cui la Note dalla provocazione supera le altre per
restack e commenti.

**Cosa cambia se è vera:** la provocazione prende lo slot migliore della settimana, e una campagna
senza numero né visual si scarta invece di diventare una Note debole.

---

## H3 — Una Note della settimana non dovrebbe venire dal numero
**Stato:** 🟡 in test · conferme: 0/3

Su una piattaforma sociale la crescita viene dall'interazione, non dal broadcast. Una delle 3-4
Notes settimanali dovrebbe essere una **reazione a qualcun altro nel feed** — un commento, un
disaccordo, un'aggiunta a una Note di un altro autore — non un derivato del proprio numero.

**Come si conferma:** confrontare la crescita di follower nelle settimane con e senza la Note
di reazione.

**Cosa cambia se è vera:** la skill produce 3 Notes derivate invece di 4, e lascia uno slot
esplicito da riempire a mano leggendo il feed.

---

## H4 — Cadenza: subito dopo l'uscita, o prima del numero successivo?
**Stato:** 🟡 in test · conferme: 0/3

Due opzioni, da testare a settimane alterne:
- **A — domenica → mercoledì.** Le Notes escono a ridosso del numero, quando il materiale è fresco
- **B — mercoledì → sabato.** Le Notes scaldano il pubblico verso l'uscita successiva

**Come si conferma:** due settimane con A, due con B, confronto degli iscritti nuovi nei sette giorni.

**Cosa cambia se è vera una delle due:** l'assegnazione dei giorni nello step 5 della skill smette
di essere una variabile e diventa un default.

---

## Da valutare più avanti

- Le Notes con immagine (screenshot della campagna) rendono più di quelle di solo testo?
- Il link alla newsletter dentro la Note deprime la distribuzione, o è ininfluente?
- La Note che cita un altro autore Substack per nome ottiene più restack?

Non sono ancora ipotesi formali: diventano tali quando c'è un motivo per crederci e un modo per misurarle.
