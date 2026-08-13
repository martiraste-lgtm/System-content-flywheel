# Prompt esterno — Infografica "Architettura di brand di Mistral"

Per ricreare l'infografica su Gemini / Banana / Canva AI / Midjourney. Companion della versione Anthropic (stesso stile, layout a scala invece che a box).

---

```
Crea un'infografica professionale con le seguenti specifiche:

TITOLO: "L'architettura di brand di Mistral"
SOTTOTITOLO: "Una piattaforma, quattro segmenti: la gravità apre dal basso e converte verso l'alto."

FORMATO E DIMENSIONI:
- Orientamento: portrait
- Proporzioni: 3:4 (800x1200 px circa)
- Risoluzione: alta qualità, adatta a LinkedIn/Substack

STILE VISIVO:
- Flat design, minimalista moderno, pulito, "infografica B2B da LinkedIn"
- Sensazione: corporate-educational, calda
- NO: foto stock, 3D, glass-morphism, illustrazioni complesse, loghi reali

LAYOUT: scala/piramide per segmento (dall'alto verso il basso)
1. Titolo + sottotitolo in alto a sinistra.
2. BANDA SCURA (POV ombrello): rettangolo arrotondato grigio antracite #2D2D2D, testo bianco, con 3 pill "pilastri" bordate arancione.
3. Freccia ↓ arancione centrata.
4. PIRAMIDE/SCALA: 4 bande orizzontali centrate, larghezza decrescente verso l'alto (base 100%, poi 87%, 74%, 60%), che formano una piramide. La BASE (la più larga) ha bordo arancione e un badge "PORTA D'INGRESSO".
5. Freccia ↓ arancione centrata.
6. STRISCIA DI FLUSSO: 3 chip arancio-pesca collegati da frecce → (il motore land-and-expand).
7. BOX BIANCO finale con etichetta architettura + 5 pill Dunford (2 evidenziate).

PALETTE COLORI:
- Sfondo: #F8F8F8
- Banda POV / titoli: #2D2D2D
- Banda piramide top: #FDE0D8 (salmon) → poi #FDE8C8 (pesca) → base #FDF5D0 (giallo crema)
- Chip flusso: #FDE8C8
- Accento (bordo base, frecce, badge, pill attive): #F47B20
- Card/box: #FFFFFF
- Testo corpo: #555555

TIPOGRAFIA: sans-serif pulito (Inter). Titolo grande grassetto; label sezione maiuscole spaziate; corpo piccolo grigio.

CONTENUTO TESTUALE ESATTO:

[Banda POV — antracite]
Etichetta: "POV AZIENDALE · L'OMBRELLO CHE GUIDA TUTTO"
Titolo: "Mistral"
POV in corsivo prominente: «L'AI di frontiera la vuoi nelle tue mani.»
Sotto-etichetta: "FONDAMENTA · TRE PILASTRI SOSTENGONO LA SCOMMESSA"
3 pill bordate arancione: "Sovranità · niente lock-in USA" · "Open weights · scarichi e self-hosti" · "Efficienza · TCO più basso (MoE)"

[Piramide a 4 bande centrate (larghezza crescente verso il basso) con didascalie a destra collegate da linee tratteggiate — contenuto fedele alla product ladder Mistral]
Banda 1 (top, più stretta): IN PIRAMIDE "Le Chat + tools" / "Knowledge workers" — DIDASCALIA DX "Knowledge workers · Discovery + product surface"
Banda 2: IN PIRAMIDE "Private & on-prem" / "Regulated enterprises" — DIDASCALIA DX "Regulated industries · High ARPU · Long contracts"
Banda 3: IN PIRAMIDE "Hosted APIs" / "Dev teams, SaaS builders" — DIDASCALIA DX "Startups & dev teams · Usage-based revenue"
Banda 4 (base, più larga): IN PIRAMIDE "Open models" / "Engineers, builders, startups" — DIDASCALIA DX "Builders & experimenters · Volume » ARPU"
(Gradiente caldo: top arancio chiaro → salmon → pesca → base giallo crema. Le didascalie a destra sono collegate a ogni banda da una linea tratteggiata grigia.)

[Striscia di flusso — 3 chip con frecce →]
"Open-source gravity" (sotto: "attira i builder") → "API conversion" (sotto: "esperimenti → revenue") → "Enterprise contracts" (sotto: "high ARPU, lungo termine")

[Box finale bianco]
Etichetta: "ARCHITETTURA (DUNFORD)"
Titolo: "Piattaforma + Posizionamento per segmento"
5 pill: "Prodotto singolo", "Multi separati", "Lead + add-on", "✓ Piattaforma", "✓ Per segmento" (le due con ✓ arancioni testo bianco, le altre grigie spente)
Nota: "La credibilità open-source (un segmento) costruisce la fiducia che converte verso l'enterprise (un altro): è ciò che giustifica l'ombrello unico. E il POV fa da filtro anti-accumulo — Mistral consolida (3 modelli fusi in Small 4, Le Chat → Vibe)."

ELEMENTI GRAFICI:
- 2 frecce verticali ↓ arancioni tra le sezioni
- frecce orizzontali → arancioni tra i 3 chip di flusso
- badge "PORTA D'INGRESSO" come pillola arancione sovrapposta al bordo della banda base
- pill arrotondate per pilastri e architetture Dunford

NOTE:
- Effetto piramide chiaro (bande centrate a larghezza decrescente verso l'alto).
- Testo leggibile e nitido. Almeno 30% spazio bianco. Max 5 colori.
```

---

## Adattamenti per tool
- **Gemini:** anteporre "Genera un'immagine di un'infografica professionale con testo leggibile e nitido. Stile flat design tipo LinkedIn."
- **Midjourney:** suffisso `--ar 3:4 --style raw --no photorealistic, 3d, glossy` + "Professional infographic, flat pyramid/ladder layout, clean typography, LinkedIn post style".
- **Canva/NotebookLM:** "piramide a 4 bande su sfondo chiaro, palette calda rosa/arancio/giallo, banda POV scura in cima, striscia di flusso in basso".

## Note di contenuto (perché questa architettura)
Mistral = **Piattaforma (Dunford #4) + Posizionamento per segmento (#5)**: un POV ombrello ("in your hands": sovranità · open · efficienza) e una scala per tipo di cliente — open models/Compute (builder, la gravità/porta d'ingresso) → Hosted APIs/Studio (dev) → Private & on-prem/Forge (enterprise regolato) → Vibe (knowledge workers). Motore land-and-expand: open-source gravity → API conversion → enterprise contracts. La credibilità in un segmento (open-source) cross-vende nell'altro (enterprise) — la giustificazione Dunford dell'ombrello unico. Differenza da Anthropic: Anthropic è una piattaforma single-brand con lead product (coding); Mistral è una piattaforma a scala per segmento.
