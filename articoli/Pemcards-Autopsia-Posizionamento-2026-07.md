# [WIP] Pemcards — L'autopsia di posizionamento

> **File di lavoro — iterativo.** Caso vissuto (ruolo misto PM/PMM di Stefano). Articolo companion della
> "Guida al Posizionamento — I 3 elementi": ne applica i framework a un caso reale.
> **Stato: BOZZA v1 completa — in attesa di review di Stefano.**

**Titolo di lavoro:** da decidere al pass titoli. Candidati:
- "700.000 euro, venti features, due che servivano. Autopsia di un posizionamento mai deciso"
- "La startup che ho visto morire di accumulo (e il mio fallimento nel fermarla)"
- "Non è morta di waterfall. È morta di decisioni mai prese"

---

## REGOLE DI FRAMING (decise da Stefano, non negoziabili)

1. **Nome vero, colpe sistemiche** — Pemcards si nomina; MAI colpe individuali a CTO o founder.
2. **Il fallimento di Stefano è dentro la storia** — niente "io l'avevo detto".
3. **NON è un pezzo su waterfall/discovery/MVP** — disinnescato esplicitamente all'inizio.
4. Ogni autopsia chiude su un **framework applicabile subito** (template della guida, compilati sul caso).

## FATTI CONFERMATI (intake 2026-07-13)

- Timeline: inizio ~6 anni fa, engagement di 3 anni. 700k di investimento: **dato pubblico**.
- Team: 3 founder (uno CTO) + 4 persone incluso Stefano. Capacità operativa: 1 marketing (Stefano), 1 dev junior (+ CTO sulla piattaforma).
- Features: **una ventina** (non 50), costruite in waterfall; ai clienti ne servivano 2-3.
- Tentativi di Stefano: 3 anni di test, interviste, prototipi, campagne — per dimostrare cosa non funzionava e dove c'era traction.
- Evidenza B2B: interviste + **test con un ecommerce reale, engagement e conversioni migliori di email e adv**.
- Gift credits: si vendevano ai brand, ma nessun KPI sull'utilizzo reale; le poche campagne monitorate mostravano engagement debole dei destinatari.

---

## BOZZA v1

700.000 euro. Tre anni. Una ventina di features costruite. Due che servivano davvero.

Questa è la storia di Pemcards, una startup dove ho lavorato tre anni con un ruolo a metà tra product manager e product marketing. Oggi non c'è più.

E no — non è la solita storia sul waterfall.

### La lezione che NON troverete qui

Potrei raccontarvela così: hanno costruito troppo prima di validare, non hanno fatto discovery, dovevano partire da una feature e iterare sui feedback. Tutto vero. E tutto inutile: quella lezione la conoscete già, sta in ogni libro di product management degli ultimi quindici anni.

Il punto è un altro, e vale la pena dirlo chiaro:

> Se Pemcards avesse fatto una discovery perfetta, sarebbe morta lo stesso.

Perché il problema non era *come* costruivamo. Era che nessuno aveva deciso *cosa* stavamo costruendo, *per chi*, e *in quale campo* stavamo giocando. Nell'ultimo articolo vi ho presentato i tre elementi del posizionamento — tesi di prodotto, architettura, strategia. Oggi ve li mostro dal vivo, in negativo: cosa succede quando mancano tutti e tre contemporaneamente.

*(Se non l'avete letto, partite da lì: [link alla guida]. Questo pezzo è la prova sul campo.)*

### Cos'era Pemcards

Un'app semplice, persino bella: scegli una foto dal telefono, la trasformi in una cartolina fisica — la foto davanti, il tuo testo dietro — e la spedisci a chi vuoi. Nel mondo reale, nella cassetta della posta.

Una capability sola: **trasformare un momento digitale in un oggetto fisico.**

Il problema è che dentro quella capability c'erano tre business diversi:

1. **L'app consumer (B2C)** — persone che mandano cartoline a persone care.
2. **Direct marketing per brand ed ecommerce (B2B)** — cartoline e flyer fisici al posto di email e adv, per promuovere prodotti e campagne: carta che arriva in casa, in un mondo di inbox sature.
3. **Gift credits brandizzati (B2B2C)** — il brand regala crediti ai propri utenti; loro mandano cartoline agli amici, col logo del brand sopra.

Tre business. Tre buyer diversi. Tre modi diversi di vendere.

E un team così: 3 founder (uno era il CTO) più 4 persone. Sul marketing, io. Sullo sviluppo, un ragazzo junior più il CTO sulla piattaforma. E 700.000 euro di investimento — è un dato pubblico — per costruirla, quella piattaforma.

La piattaforma se li mangiò quasi tutti: una ventina di features, costruite in waterfall. Ai clienti ne servivano due, forse tre.

Ma ripeto: il waterfall è il sintomo. Facciamo l'autopsia vera — un elemento alla volta.

### Autopsia 1 — La tesi che non c'era

Nella guida ho definito la tesi di prodotto così: la linea che dirige lo sviluppo dicendoti, prima di cosa costruire, **cosa non costruire**. E il test è uno: una tesi che non ha mai ucciso una feature non è una tesi, è una tagline.

Applichiamolo a Pemcards. Una ventina di features. Quante ne ha uccise una tesi?

**Zero.** Perché la tesi non c'era.

Ogni feature aveva la sua ragione: una serviva "per il B2B", una veniva dalla visione, una l'aveva chiesta un partner, una sembrava indispensabile per il lancio. Nessuna di quelle scelte era stupida — questa è la parte che dovete capire davvero. Ognuna, presa da sola, aveva senso. La somma era una piattaforma che faceva troppe cose diverse, troppo complessa, in cui nessun cliente riconosceva un prodotto fatto per sé.

Ecco la tesi che non abbiamo mai scritto. La compilo oggi, col senno del framework — ed era una delle tesi possibili, non l'unica:

- 🧍 **Per chi:** ecommerce e brand DTC che combattono per l'attenzione in inbox sature
- 🧨 **Il nemico:** l'email promozionale — open rate in caduta, tutti nella stessa casella, tutti ignorati
- 💥 **La rottura:** il digitale è infinito e ignorabile; la casa è l'ultimo spazio senza rumore
- 🌅 **La scommessa:** in un mondo di messaggi infiniti, un oggetto fisico ben fatto vale più di mille impression
- 🧭 **La tesi:** "Crediamo che l'attenzione vera si sia spostata fuori dall'inbox. Per questo costruiamo il modo più semplice per un brand di mandare carta che converte — e NON costruiamo tutto ciò che serve solo a far girare cartoline tra amici."

Notate una cosa: anche la tesi **opposta** — puntare tutto sul consumer — sarebbe stata meglio di nessuna tesi. Avrebbe ucciso l'altra metà della roadmap. Il valore della tesi non sta nell'indovinare la direzione giusta al primo colpo: sta nell'avere un criterio che dice no. Senza, dice sì tutto, e il sì di tutti costa 700.000 euro.

### Autopsia 2 — Il POV mai articolato

Cosa credeva Pemcards sul mondo? Non l'abbiamo mai detto. Eppure il POV era lì, latente, ed era pure bello:

- 🧱 **Vecchio modo:** comunicare — affetto o marketing, non importa — attraverso canali digitali saturi, dove ogni messaggio è uno tra mille
- 🌅 **Nuovo approccio:** il momento digitale che diventa oggetto fisico — non si archivia, non finisce nello spam, resta sul frigo
- 🔮 **Il futuro che vedevamo (senza dircelo):** più il digitale abbonda, più il fisico si carica di valore
- 🚀 **La frase manifesto mai scritta:** "Crediamo che in un mondo di messaggi infiniti l'oggetto fisico sia il nuovo premium — e per questo trasformiamo foto in carta, invece di aggiungere pixel al rumore."

Vi sembra un esercizio di stile? Guardate cosa cambia in pratica. Senza quel POV dichiarato, non avevamo nessun criterio per riconoscere quale dei tre business fosse IL business — perché tutti e tre erano "coerenti" con un'app che manda cartoline. Il POV è il livello a cui si decide: come ho scritto nella guida, nel racconto di vendita il POV racconta, ma nella tesi di prodotto il POV **decide**. Noi non avevamo niente che decidesse.

### Autopsia 3 — L'architettura mai decisa

Ora la domanda della guida: *quante cose sto posizionando, e come si legano?*

Pemcards non se l'è mai posta, e aveva la versione più pericolosa del problema. Perché B2C e B2B non erano due canali della stessa azienda. Erano **due aziende diverse**:

- buyer diversi: una persona che vuole emozionare qualcuno vs un ecommerce manager con un KPI di conversione
- alternative diverse: WhatsApp e le poste vs email marketing e adv
- pricing diverso, ciclo di vendita diverso, motion diverso: consumer app vs vendita founder-led

Non decidere quale azienda fossimo significava che l'app, il sito, il pitch dovevano parlare a tutti. E infatti non parlavano a nessuno: il test del minuto — cosa fai, per chi, perché te — Pemcards non lo passava, e non per mancanza di copy.

E qui arriva il dettaglio più istruttivo di tutta la storia: **i gift credits.**

Sulla carta erano la quadratura del cerchio: "vendiamo ai brand E alimentiamo il sogno consumer". Il brand paga, i suoi utenti mandano cartoline agli amici, l'app gira. E si vendevano davvero — i brand li compravano.

Poi guardavi le poche campagne monitorate: l'engagement di chi riceveva quei crediti era debole. Nessun KPI vero sull'utilizzo. Il brand stava comprando un'idea carina — una tantum — non uno strumento che risolveva un suo job misurabile.

> Revenue vera, validazione falsa. Si vendeva senza che nessun job venisse svolto. E un prodotto così muore al rinnovo.

I gift credits sembravano B2B. Erano il sogno B2C travestito: servivano a far girare cartoline tra utenti, non il lavoro del buyer che pagava. Se nel tuo prodotto c'è una linea che "si vende ma non si usa", non hai una linea di business: hai un sintomo con un fatturato.

### Autopsia 4 — La strategia scelta contro le proprie risorse

Ultimo elemento: *in quale campo giochi?* Nella guida ho mostrato che ogni campo ha un costo d'ingresso. Questa autopsia dimostra che il campo non si sceglie in astratto: **si sceglie guardando il campo E la propria cassa.**

Il campo B2C consumer: farsi notare tra milioni di app, costruire un'abitudine nuova, in una categoria dove l'alternativa è "non fare niente" o WhatsApp. Si gioca con capitale — adv, influencer, brand awareness. Con 700k già impegnati sulla piattaforma e un solo marketing, quel campo era perso in partenza. Non per qualità del prodotto: per fisica dei soldi.

Il campo B2B — direct marketing per ecommerce — era una categoria immatura da portare al nostro mercato: l'ecommerce manager non cercava "cartoline per il retargeting", andava educato. Motion educational, founder-led: **sostenibile in due persone.** E soprattutto: lì le evidenze c'erano. Interviste che confermavano il pain. Un test con un ecommerce reale con engagement e conversioni migliori di email e adv.

Il campo vincibile bussava. Abbiamo continuato a giocare nell'altro.

Nella guida ho chiuso la strategia con "dimmi che strategia scegli e ti dirò quanta tesi ti serve". Pemcards aggiunge il corollario: *e ti dirò quanta cassa ti serve.* Se il campo che sogni costa dieci volte la tua cassa, non è il tuo campo — è il campo di qualcun altro col tuo prodotto.

### Il mio fallimento (la parte che avrei preferito non scrivere)

Adesso la domanda che vi state facendo: "e tu, che eri dentro, cosa hai fatto?"

Ho fatto tre anni di lavoro: test, interviste, prototipi, campagne. Ho documentato cosa non funzionava e dove c'era traction — incluso quel test con l'ecommerce. Evidenza vera, raccolta bene.

E non è bastato. La direzione non è cambiata: il consumer prima, i gift credits poi.

Per un po' l'ho archiviata come testardaggine dei founder. Oggi la leggo diversamente, e questa è la lezione più cara che Pemcards mi ha lasciato: **stavo combattendo alla quota sbagliata.** Portavo evidenza di esecuzione a un problema di identità. Un test che dice "questa campagna converte meglio" non risponde alla domanda che i founder non si stavano facendo: *quale azienda siamo?* Il dato dice cosa funziona. Non decide chi sei disposto a diventare.

E c'è un secondo strato, ancora più umano. Il percorso che l'evidenza indicava — vendere carta agli ecommerce, founder-led, un segmento alla volta — suonava lontanissimo dal sogno: l'app che milioni di persone usano per emozionarsi. Quando il percorso sostenibile parte così distante dall'obiettivo, il founder non sente "strada". Sente "rinuncia". E alla rinuncia si resiste con tutte le forze, anche contro i dati — *soprattutto* contro i dati.

Cosa farei oggi, di diverso? Non porterei più risultati sperando che le decisioni si prendano da sole. Le decisioni non si prendono da sole: qualcuno le deve nominare. Metterei sul tavolo le tre decisioni — tesi, architettura, strategia — come scommesse esplicite, ognuna con pro, contro e costi. La scelta resta del founder: è la sua scommessa imprenditoriale, e su questo non si bara. Ma la scommessa va **scelta**, non evitata.

> Il mio lavoro non era dimostrare. Era costringere a decidere. L'ho capito troppo tardi per Pemcards.

### Le 4 domande del lunedì mattina

Se vi siete riconosciuti da qualche parte in questa storia, ecco il minimo sindacale — una domanda per autopsia:

1. **Tesi** — delle ultime 5 feature che avete costruito, quante ne avrebbe uccise la vostra tesi di prodotto? Se la risposta è zero, non avete una tesi.
2. **POV** — cosa credete sul futuro del vostro mercato che un competitor avrebbe paura di dire ad alta voce? Se non c'è niente, non avete un criterio per dire no.
3. **Architettura** — state vendendo a un buyer o a due? Se sono due: quale delle due aziende siete davvero? E la linea che "si vende ma non si usa" — è business o sintomo?
4. **Strategia** — il campo dove state giocando, ve lo potete permettere con la cassa e il team di OGGI? Non quello del prossimo round: quello di oggi.

I template per lavorarci — tesi, POV, architettura, strategia — sono nella guida ai 3 elementi: [link]. Compilarli costa un pomeriggio. Non compilarli, a Pemcards, è costato tutto.

Perché 700.000 euro comprano tanta esecuzione. Ma nemmeno un euro di direzione: quella non si compra. Si decide.

---

*[CTA newsletter: se sei un founder e ti sei riconosciuto in una delle 4 domande, iscriviti / scrivimi.]*

---

## NOTE APERTE (decide Stefano)

1. **Verifica fattuale pre-pubblicazione**: "oggi non c'è più" — confermare lo stato esatto di Pemcards (morta/dormiente) prima di pubblicare; il 700k è pubblico, ok.
2. **Le ragioni delle feature nell'Autopsia 1** sono ricostruite in modo generico e plausibile ("una per il B2B, una dalla visione, una chiesta da un partner") — se ricordi 2-3 feature reali con la loro ragione reale, il passaggio diventa molto più forte.
3. **La tesi/POV compilati** usano l'angolo B2B come "una delle tesi possibili" — verifica che ti rappresenti.
4. **Titolo**: da scegliere al pass finale (3 candidati in testa al file).
5. **Spokes LinkedIn** (dopo pubblicazione → post-idee/): il numero-hook · gift credits "si vendeva ma non si usava" · "B2C e B2B sono due aziende" · "combattevo alla quota sbagliata".
