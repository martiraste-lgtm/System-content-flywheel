# Prompt esterno — Grafico "La crescita ARR di Mistral"

Per ricreare il grafico su Gemini / Banana / Canva AI / Midjourney. Brand system chiaro, landscape. Rifacimento del chart productify coi colori di Stefano e dati verificati.

---

```
Crea un grafico/infografica dati professionale con le seguenti specifiche:

TITOLO: "La crescita ARR di Mistral" + badge pill arancione "~20× in 12 mesi"
SOTTOTITOLO: "Annual recurring revenue · fine 2024 → obiettivo 2026"

FORMATO: landscape, 16:10 (circa 1180x720 px), alta qualità.

STILE: flat, pulito, "data-viz B2B da LinkedIn". NO 3D, NO foto.

PALETTE: sfondo #F8F8F8 · linea/accento arancione #F47B20 · area sotto la curva arancione molto trasparente · testo #2D2D2D / #555 · gridline grigie #E5E5E5 · card bianche · card evidenziata salmon #FDE0D8 · badge crema #FDF5D0. (NIENTE blu; niente footer "productify")

LAYOUT:
1. In alto: titolo + badge "~20× in 12 mesi" + sottotitolo.
2. Riga di 4 STAT-CARD: "Fine 2024 — $16M" · "Inizio 2025 — $20M" · "Fine 2025 — $300M+" · "Inizio 2026 — $400M+" (l'ultima evidenziata in salmon con numero arancione).
3. GRAFICO a LINEA + AREA con SCALA Y LOGARITMICA. Gridline orizzontali a $10M, $100M, $300M, $1B. Asse X con 5 tappe: Fine 2024, Inizio 2025, Fine 2025, Inizio 2026, Obiettivo 2026.
   - Curva: quasi piatta da $16M a $20M, poi impennata ripida verso $300M+ (fine 2025) e $400M+ (inizio 2026), poi plateau.
   - Linea piena arancione + area arancione trasparente sotto, per i 4 punti confermati (marker pieni).
   - Segmento finale TRATTEGGIATO arancione che sale verso il punto "Obiettivo 2026 ~$1,1B" (marker VUOTO, cerchio bianco bordo arancione).
4. Legenda: "ARR confermato" (pallino pieno) · "Obiettivo 2026 (~$1,1B · range $1–1,2B)" (pallino vuoto).
5. Nota piccola in fondo: "Scala logaritmica. ~20× = da ~$20M (gen 2025) a $400M+ (gen 2026). Obiettivo 2026: >$1B / €1–1,2B (A. Mensch)."

DATI ESATTI (ARR): Fine 2024 $16M · Inizio 2025 $20M · Fine 2025 ~$312M ($300M+) · Inizio 2026 $400M+ · Obiettivo 2026 ~$1,1B (range $1–1,2B, proiezione).

NOTE: testo leggibile; la curva deve mostrare chiaramente "piatta poi impennata" grazie alla scala log; il tratto proiettato va distinto (tratteggiato + marker vuoto). Max 5 colori.
```

---

## Adattamenti per tool
- **Gemini:** "Genera un grafico a linea/area professionale, scala logaritmica, testo leggibile, stile flat LinkedIn."
- **Midjourney:** poco adatto a dati precisi; preferire Gemini/Canva. Eventuale: `--ar 16:10 --style raw --no 3d, photorealistic`.
- **Canva/NotebookLM:** "line chart con area, scala log, 4 punti pieni + 1 punto proiezione tratteggiato, palette arancione su sfondo chiaro, 4 stat-card sopra".

## Note di contenuto (dati verificati giugno 2026)
Traiettoria ARR Mistral: ~$16M (fine 2024) → ~$20M (gen 2025) → ~$312M / €300M (fine 2025) → $400M+ (gen 2026) → obiettivo >$1B / €1–1,2B (2026, A. Mensch). Crescita ~20× in 12 mesi (gen 2025→gen 2026). **Correzione vs grafico originale productify:** il badge "~75×" era errato (confondeva confermato $16M e proiettato $1,15B); il dato corretto e riportato è ~20×. Fonti: mlq.ai, trendingtopics.eu, Sacra, Idlen, getpanto.
