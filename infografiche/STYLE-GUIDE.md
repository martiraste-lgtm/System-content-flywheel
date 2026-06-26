# Style Guide — Infografiche "Comparativa" (Cattivo vs Buon)

> Modello di riferimento approvato da Stefano.
> Implementazione canonica: [`Posizionamento-EarlyStage-Cattivo-vs-Buon.jsx`](Posizionamento-EarlyStage-Cattivo-vs-Buon.jsx)
> + prompt AI gemello: [`Posizionamento-EarlyStage-Cattivo-vs-Buon-PROMPT.md`](Posizionamento-EarlyStage-Cattivo-vs-Buon-PROMPT.md)
>
> Usa questo file quando devi creare un'altra infografica che deve **ricordare questo stile, colori e struttura**.
> Riusa lo stesso `.jsx` come scheletro: cambia solo testi/colori-lato, tieni componenti e palette.

---

## 1. Quando usare questo stile

Confronto a due lati **negativo vs positivo** (errore vs soluzione, prima vs dopo, sbagliato vs giusto)
in cui ogni lato è una **catena/flusso di elementi**. Pensato per LinkedIn: deve far capire "a colpo
d'occhio" cosa è buono e cosa no.

Ricorda la struttura della reference **Fletch** ("Bad vs Good") ma **non la copia**: tutti i nodi sono
**quadrati/rettangoli arrotondati**, mai cerchi.

---

## 2. Canvas

| Proprietà | Valore |
|-----------|--------|
| Formato | Verticale **1080×1350** (ratio 4:5, max LinkedIn singola immagine) |
| Export | PNG alta risoluzione, scala 2× |
| Sfondo pagina | `#F8F8F8` |
| Padding esterno | `40px 44px 34px` |
| Font | `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` |
| Layout | flex column: header → grid 2 colonne (lato sx / lato dx) |

---

## 3. Palette

```js
const c = {
  bg: "#F8F8F8",        // sfondo pagina
  ink: "#2D2D2D",       // testo titoli / nodi
  body: "#555555",      // testo corpo / sottotitolo
  muted: "#8A8A8A",
  white: "#FFFFFF",
  line: "#E5E5E5",
  accent: "#F47B20",    // arancione brand (parole evidenziate nel titolo)

  // LATO NEGATIVO — rosso-corallo
  bad: "#EF3B2C",
  badSoft: "#F9C8C1",
  badLane: "#FFF1EF",   // sfondo lista problemi
  badGrad: "linear-gradient(180deg, #F7CDC6 0%, #FBE4E0 48%, #FFFFFF 100%)", // pannello

  // LATO POSITIVO — verde lime (colore aggiunto al brand caldo)
  good: "#65A30D",
  goodSoft: "#C3E88D",
  goodLane: "#F2FBE3",  // sfondo lista vantaggi
  goodBright: "#A3E635",// riempimento dell'elemento SCELTO/vincente
  goodGrad: "linear-gradient(160deg, #D8EFBE 0%, #EAF6D8 45%, #FFFFFF 100%)", // pannello

  // ELEMENTI SCARTATI / disattivati
  grayBorder: "#D5D5D5",
  grayBg: "#EFEFEF",
  grayText: "#B3B3B3",
};
```

**Regole colore:**
- Rosso = lato sbagliato/negativo. Verde lime = lato giusto/positivo. Arancio = accento neutro (titolo).
- Il **vincitore/scelto** si evidenzia con `goodBright` (#A3E635) + bordo `good` + **glow** verde + badge ✓.
- Lo **scartato** è grigio piatto (`grayBg`/`grayBorder`/`grayText`).
- Sfondi dei pannelli sempre **sfumati** verso il bianco (rosa a sx, verde a dx). Non barre piene.

---

## 4. Tipografia

| Elemento | Size | Peso | Colore |
|----------|------|------|--------|
| Titolo H1 | 44 | 900 | `ink`, con parola chiave in `accent`. `whiteSpace: nowrap` (no rotture parola) |
| Sottotitolo | 22 | 600 | `body` |
| Titolo lato (2 righe) | 25 | 900 | colore del lato (`bad`/`good`) — **testo, non barra** |
| "IL TUO PRODOTTO" | 13 | 900 | `ink`, maiuscolo, 2 righe |
| Target / nodi | 12.5–13 | 700–900 | `ink` |
| Titolo lista | 15 | 900 | colore del lato |
| Voci lista | 13.5 | 400 | `ink` |
| Caption | 12.5 | 600 italic | colore del lato |

Header: bordo inferiore `3px solid ink`.

---

## 5. Componenti (già pronti nel .jsx canonico)

- **`SectionTitle({ color, lines })`** — titolo lato a testo colorato, 2 righe, centrato.
- **Pannello** — `div` con `background: badGrad|goodGrad`, `borderRadius:16`, `padding:"16px 12px 18px"`.
- **`ProductBox({ tone })`** — rettangolo bianco bordato, "IL TUO PRODOTTO", ombra leggera.
- **`DivergeLines({ color, targets })`** — SVG linee divergenti prodotto → N target (lato negativo).
- **`Lines` lato positivo** — 3 linee grigie sottili (scartati) + 1 linea verde spessa (scelto).
- **`ArrowMini({ color })`** — piccola freccia triangolare ▼ tra i nodi (CSS borders, niente distorsione).
- **`TargetBox({ tone, label, warn, check, glow, dim })`** — box target. `warn`=⚠️, `check`=✓ badge,
  `glow`=alone verde, `dim`=stato grigio scartato.
- **`Node({ tone, label })`** — nodo catena (Use Case, Offerta, …), bianco bordato, ombra leggera, testo a capo auto.
- **`Caption({ tone })`** — riga corsiva colorata sotto al pannello.
- **`List({ tone, title, mark, items })`** — pannello lista con sfondo `lane`, marker quadrato (✕ / ✓).

Dettagli stile nodi/box: `borderRadius` 9–10, bordo `2–2.5px` nel colore del lato,
`boxShadow: 0 2px 4–6px rgba(0,0,0,.06–.10)`.

---

## 6. Struttura della composizione

```
┌ HEADER (full width) ───────────────────────────────┐
│ H1 "Titolo + <accent>parola</accent>"               │
│ sottotitolo · linea nera sotto                      │
└─────────────────────────────────────────────────────┘
┌ LATO NEGATIVO (sx) ──────┐  ┌ LATO POSITIVO (dx) ──────┐
│ SectionTitle (rosso)     │  │ SectionTitle (verde)      │
│ ┌ pannello sfumato rosa ┐│  │ ┌ pannello sfumato verde ┐│
│ │ IL TUO PRODOTTO       ││  │ │ IL TUO PRODOTTO        ││
│ │ frecce divergenti     ││  │ │ frecce: 3 grigie+1verde││
│ │ ┌T1⚠┐┌T2⚠┐┌T3⚠┐      ││  │ │ scartati(grigi) │ scelto││
│ │ │UC ││UC ││UC │ …     ││  │ │ T1,T2,T3 grigi  │ T4✓★ ││
│ │ catene parallele x3   ││  │ │                 │ catena││
│ └───────────────────────┘│  │ └────────────────────────┘│
│ Caption rossa            │  │ Caption verde             │
│ LISTA "PROBLEMI" (✕)     │  │ LISTA "VANTAGGI" (✓)      │
└──────────────────────────┘  └───────────────────────────┘
```

**Pattern lato negativo:** prodotto → divergenza → N target (con ⚠️) → **N catene parallele identiche**
(= duplicazione/caos). Caption che quantifica lo spreco ("Tutto triplicato: 3 use case, 3 offerte…").

**Pattern lato positivo:** prodotto → N target potenziali ma **ne SCEGLI uno**. Gli scartati restano
grigi e impilati a lato; il **scelto** è evidenziato (lime + ✓ + glow) e SOLO da lui scende la catena
(= Focus). Caption che sintetizza il principio ("1 target, 1 use case, 1 offerta, 1 asset → Focus").

---

## 7. Come riusarlo per una nuova infografica

1. Duplica `Posizionamento-EarlyStage-Cattivo-vs-Buon.jsx` con nuovo nome in `infografiche/`.
2. Tieni `c` (palette) e tutti i sotto-componenti invariati.
3. Cambia solo: titolo/sottotitolo, `SectionTitle` lines, label di `ProductBox`/target/`Node`,
   le caption e gli `items` delle liste.
4. Mantieni le invarianti: 1080×1350, nodi quadrati, pannelli sfumati, titoli a testo,
   evidenza del "vincente" con lime+✓+glow, scartati grigi.
5. Genera anche il `-PROMPT.md` gemello (stesso schema) se serve la versione AI-image.
6. Registra il nuovo asset in [`knowledge/posts/visual-assets.md`](../knowledge/posts/visual-assets.md).
```
