# Prompt esterno — Infografica "Architettura di brand di Anthropic"

Per ricreare l'infografica su Gemini / Banana / Canva AID / Midjourney. Copia il blocco sotto e adatta al tool (note in fondo).

---

```
Crea un'infografica professionale con le seguenti specifiche:

TITOLO: "L'architettura di brand di Anthropic"
SOTTOTITOLO: "Un brand, un POV, un lead product: come si tiene insieme una piattaforma."

FORMATO E DIMENSIONI:
- Orientamento: portrait
- Proporzioni: 3:4 (800x1200 px circa)
- Risoluzione: alta qualità, adatta a LinkedIn/Substack

STILE VISIVO:
- Flat design, minimalista moderno, pulito, "infografica B2B da LinkedIn"
- Sensazione: corporate-educational, calda
- NO: foto stock, 3D, glass-morphism, illustrazioni complesse, loghi reali

LAYOUT: box-piattaforma con cascata (dall'alto verso il basso)
1. Titolo + sottotitolo in alto, allineati a sinistra.
2. BANDA SCURA (POV ombrello): rettangolo arrotondato grigio antracite #2D2D2D, testo bianco.
3. Freccia ↓ arancione centrata.
4. GRANDE BOX rosa salmon che rappresenta "THE CLAUDE PLATFORM", contenente:
   - una card bianca evidenziata col bordo arancione (il LEAD PRODUCT),
   - sotto, una riga di 3 card bianche più piccole (gli altri prodotti),
   - in fondo una striscia gialla con i modelli.
5. Freccia ↓ arancione centrata.
6. STRISCIA CASCATA: 3 chip arancio-pesca collegati da frecce → (Safety → Trust → Enterprise).
7. BOX BIANCO finale con l'etichetta architettura + 5 pill (le 5 architetture di Dunford, 2 evidenziate).

PALETTE COLORI:
- Sfondo generale: #F8F8F8
- Banda POV / testo titoli: #2D2D2D (antracite)
- Box piattaforma: #FDE0D8 (rosa salmon)
- Chip cascata: #FDE8C8 (arancio pesca)
- Striscia modelli: #FDF5D0 (giallo crema)
- Accento (bordo lead, frecce, badge, pill attive): #F47B20 (arancione)
- Card: #FFFFFF con ombra leggera
- Testo corpo: #555555

TIPOGRAFIA:
- Font: sans-serif pulito (Inter / Helvetica / SF Pro)
- Titolo principale: grande, grassetto (800)
- Label di sezione: piccole, maiuscolo, lettera spaziata
- Label card: medio, semi-grassetto
- Corpo: piccolo, grigio

CONTENUTO TESTUALE ESATTO:

[Banda POV — antracite]
Etichetta piccola: "POV AZIENDALE · L'OMBRELLO CHE GUIDA TUTTO"
Titolo: "Anthropic · Claude"
Citazione in corsivo: «AI research and products that put safety at the frontier»
Nota: "+ POV di Amodei: «l'AI scriverà il 100% del codice» → radicato nel coding, dove sta il fatturato."

[Box piattaforma — rosa]
Header centrato: "THE CLAUDE PLATFORM"
Sottotitolo: "Tutto vive sotto un solo brand: «Claude X»"

  Card LEAD (bordo arancione, badge in alto a destra "LEAD PRODUCT"):
  Titolo: "⭐ Claude Code"
  Testo: "La porta d'ingresso e la fonte principale di fatturato. Apre la relazione, il resto la espande."

  3 card piccole affiancate:
  - "Claude Cowork" — "Lavoro agentico per i team"
  - "Claude Security" — "Sicurezza e governance"
  - "Claude Platform" — "API per builder e dev"

  Striscia gialla in fondo al box (centrata):
  "Fondamenta · stessi modelli per tutti: Opus · Sonnet · Haiku · Fable"

[Striscia cascata — 3 chip con frecce →]
"Safety" (sotto: "il POV")  →  "Trust" (sotto: "la conseguenza")  →  "Enterprise" (sotto: "il mercato")

[Box finale bianco]
Etichetta: "ARCHITETTURA (DUNFORD)"
Titolo: "Piattaforma + Lead Product (coding)"
5 pill in riga: "Prodotto singolo", "Multi separati", "✓ Lead + add-on", "✓ Piattaforma", "Per segmento"
(le due con ✓ sono arancioni con testo bianco; le altre grigie spente)
Nota finale: "Il naming disciplinato (tutto è «Claude X», come IBM con DB2) amplifica il positioning unico invece di frammentarlo. Un solo brand, una sola storia."

ELEMENTI GRAFICI:
- 2 frecce verticali ↓ arancioni che collegano banda POV → box piattaforma → cascata
- frecce orizzontali → arancioni tra i 3 chip della cascata
- badge "LEAD PRODUCT" come pillola arancione sovrapposta al bordo della card
- pill arrotondate per le 5 architetture Dunford

NOTE:
- Tutto il testo leggibile e nitido. Il titolo è l'elemento più grande.
- Almeno il 30% di spazio bianco. Card con angoli arrotondati e ombra leggera. Max 5 colori.
```

---

## Adattamenti per tool

- **Gemini:** anteporre "Genera un'immagine di un'infografica professionale con testo leggibile e nitido. Stile flat design tipo LinkedIn."
- **Midjourney:** suffisso `--ar 3:4 --style raw --no photorealistic, 3d, glossy` + "Professional infographic, flat design, clean typography, LinkedIn post style".
- **Canva/NotebookLM:** versione descrittiva — "palette calda rosa/arancio/giallo pastello su sfondo chiaro, formato verticale, struttura a box impilati con frecce".

## Note di contenuto (perché questa architettura)
Anthropic = **Piattaforma (Dunford #4) + Lead Product (#3)**: un solo brand-ombrello (Claude), un solo POV aziendale (safety at the frontier → trust → enterprise), col coding (Claude Code) come lead product/porta d'ingresso. Non è "multi-prodotti separati" né "per segmento". Il naming "Claude X" rinforza il positioning unico.
