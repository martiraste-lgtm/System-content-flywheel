import React from "react";

// ============================================================
// ARCHITETTURE × FASI DI CRESCITA (ponte con gli stage di Estner)
// Pillar: 🟧 Architetture (palette calda della serie)
// Canvas: 1080 × ~1900 — fonte autorevole del layout (render Gemini = anteprima)
// Due strati per fase: (1) risposta di ARCHITETTURA · (2) artefatto di POSIZIONAMENTO (ciclo Tesi→Posizionamento)
// Tesi della tavola: prima di 1M l'architettura è una distrazione; dopo, è una decisione.
// Contro-tesi complementare: una tesi di posizionamento invece ti serve da subito — e cambia forma a ogni fase.
// ============================================================

const c = {
  bg: "#F8F8F8",
  ink: "#2D2D2D",
  body: "#555555",
  muted: "#8A8A8A",
  white: "#FFFFFF",
  line: "#E5E5E5",
  accent: "#F47B20",       // arancio pillar Architetture

  cream: "#FDF5D0",        // Stage 1
  peach: "#FDE8C8",        // Stage 2
  salmon: "#FDE0D8",       // Stage 3
  creamBorder: "#E8D98A",
  peachBorder: "#EFC080",
  salmonBorder: "#EFA98F",

  bad: "#EF3B2C",          // ✕ anti-pattern
  good: "#65A30D",         // ✓ puntuali · verde = Posizionamento provato
  dark: "#2D2D2D",         // linea PMF + banda punchline

  tesi: "#2563EB",         // blu = Tesi (da validare) — grammatica del sistema
  tesiSoft: "#EFF4FE",     // sfondo mini-box Tesi
  tesiBorder: "#BBD1F7",
  posSoft: "#F2FBE3",      // sfondo mini-box Posizionamento
  posBorder: "#C3E88D",
};

const font = "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";

const StageBadge = ({ n, tint }) => (
  <span style={{
    background: tint, color: c.white, fontWeight: 900, fontSize: 12.5,
    padding: "4px 12px", borderRadius: 999, letterSpacing: 0.5,
  }}>Stage {n}</span>
);

export default function ArchitetturaFasiStartup() {
  return (
    <div style={{
      width: 1080, minHeight: 1900, background: c.bg, fontFamily: font,
      padding: "40px 44px 34px", boxSizing: "border-box",
      display: "flex", flexDirection: "column",
    }}>

      {/* ============ HEADER ============ */}
      <div style={{ textAlign: "center", borderBottom: `3px solid ${c.ink}`, paddingBottom: 18, marginBottom: 24 }}>
        <span style={{
          background: c.cream, color: "#B4690E", fontWeight: 800, fontSize: 12.5,
          letterSpacing: 2, padding: "6px 16px", borderRadius: 999, textTransform: "uppercase",
        }}>Architetture di Posizionamento × Fasi di crescita</span>
        <h1 style={{ fontSize: 44, fontWeight: 900, color: c.ink, margin: "16px 0 8px", lineHeight: 1.1 }}>
          Che <span style={{ color: c.accent }}>architettura</span> ti serve, da 0 a 1M+ ARR
        </h1>
        <p style={{ fontSize: 21, fontWeight: 700, color: c.body, margin: "0 0 6px" }}>
          Spoiler: fino a 1M, quasi sempre <span style={{ color: c.accent }}>nessuna</span>.
        </p>
        <p style={{ fontSize: 13, fontWeight: 600, color: c.muted, margin: 0 }}>
          Modello delle fasi: Alex Estner · La lettura architetturale è il livello che aggiungo io
        </p>
      </div>

      {/* ============ TIMELINE + STRATO (contenitore per la linea PMF) ============ */}
      <div style={{ position: "relative", flex: 1 }}>

        {/* linea PMF verticale — al confine Stage2/Stage3 */}
        <div style={{
          position: "absolute", left: "66.4%", top: -6, bottom: 0, width: 0,
          borderLeft: `3px dashed ${c.dark}`, zIndex: 3,
        }} />
        <div style={{
          position: "absolute", left: "66.4%", top: -14, transform: "translateX(-50%)",
          background: c.dark, color: c.white, fontWeight: 900, fontSize: 12,
          padding: "5px 12px", borderRadius: 999, letterSpacing: 1, zIndex: 4, whiteSpace: "nowrap",
        }}>1M · PMF / GTM FIT</div>

        {/* ---- riga 1: le 3 bande-stage (gradini crescenti) ---- */}
        <div style={{ display: "flex", gap: 16, alignItems: "flex-end", marginBottom: 18, paddingTop: 26 }}>
          {/* Stage 1 */}
          <div style={{
            flex: 1, background: c.cream, border: `2px solid ${c.creamBorder}`,
            borderRadius: 14, padding: "14px 16px", height: 150, boxSizing: "border-box",
          }}>
            <StageBadge n={1} tint="#C9A227" />
            <p style={{ fontSize: 18, fontWeight: 900, color: c.ink, margin: "8px 0 2px" }}>Hustle Mode</p>
            <p style={{ fontSize: 12.5, fontWeight: 700, color: c.muted, margin: "0 0 6px" }}>0 → 100k ARR</p>
            <p style={{ fontSize: 12.5, fontWeight: 600, color: c.body, margin: 0, lineHeight: 1.35 }}>
              Test, ipotesi da validare, GTM experimentation
            </p>
          </div>
          {/* Stage 2 */}
          <div style={{
            flex: 1, background: c.peach, border: `2px solid ${c.peachBorder}`,
            borderRadius: 14, padding: "14px 16px", height: 190, boxSizing: "border-box",
          }}>
            <StageBadge n={2} tint="#D97A16" />
            <p style={{ fontSize: 18, fontWeight: 900, color: c.ink, margin: "8px 0 2px" }}>Focus Mode</p>
            <p style={{ fontSize: 12.5, fontWeight: 700, color: c.muted, margin: "0 0 6px" }}>100k → 1M ARR</p>
            <p style={{ fontSize: 12.5, fontWeight: 600, color: c.body, margin: 0, lineHeight: 1.35 }}>
              1 ICP · 1 use case · 1-2 canali. GTM Playbook V1
            </p>
          </div>
          {/* Stage 3 */}
          <div style={{
            flex: 1, background: c.salmon, border: `2px solid ${c.salmonBorder}`,
            borderRadius: 14, padding: "14px 16px", height: 230, boxSizing: "border-box",
          }}>
            <StageBadge n={3} tint={c.accent} />
            <p style={{ fontSize: 18, fontWeight: 900, color: c.ink, margin: "8px 0 2px" }}>Expansion Mode</p>
            <p style={{ fontSize: 12.5, fontWeight: 700, color: c.muted, margin: "0 0 6px" }}>1M+ ARR</p>
            <p style={{ fontSize: 12.5, fontWeight: 600, color: c.body, margin: 0, lineHeight: 1.35 }}>
              Scegli: double down · nuovi ICP · nuovi use case · nuovi canali. GTM Scale
            </p>
          </div>
        </div>

        {/* ---- connettore ---- */}
        <p style={{ textAlign: "center", fontSize: 14, fontWeight: 800, color: c.ink, margin: "0 0 14px" }}>
          ↓ e a ogni fase, la sua risposta di architettura ↓
        </p>

        {/* ---- riga 2: strato architetture ---- */}
        <div style={{ display: "flex", gap: 16, alignItems: "stretch" }}>

          {/* S1 — obbligato */}
          <div style={{
            flex: 1, background: c.white, border: `1.5px solid ${c.line}`,
            borderTop: `5px solid ${c.creamBorder}`, borderRadius: 14, padding: "16px 16px 18px",
            boxShadow: "0 2px 6px rgba(0,0,0,.06)",
          }}>
            <p style={{ fontSize: 15.5, fontWeight: 900, color: c.ink, margin: "0 0 8px" }}>
              SINGLE PRODUCT<br /><span style={{ color: "#C9A227" }}>— obbligato</span>
            </p>
            <p style={{ fontSize: 13, fontWeight: 600, color: c.body, lineHeight: 1.45, margin: "0 0 10px" }}>
              Azienda = prodotto. Un solo posizionamento — e nemmeno definitivo:
              qui è ancora <strong>un'ipotesi in validazione</strong>. Non è una scelta
              di architettura: è l'unica opzione sana.
            </p>
            <div style={{ background: "#FFF1EF", borderRadius: 10, padding: "10px 12px" }}>
              <p style={{ fontSize: 12.5, fontWeight: 700, color: c.bad, margin: 0, lineHeight: 1.4 }}>
                ✕ Anti-pattern: cercare un posizionamento corporate separato
                "perché un giorno faremo tante cose".
              </p>
            </div>
          </div>

          {/* S2 — difeso */}
          <div style={{
            flex: 1, background: c.white, border: `1.5px solid ${c.line}`,
            borderTop: `5px solid ${c.peachBorder}`, borderRadius: 14, padding: "16px 16px 18px",
            boxShadow: "0 2px 6px rgba(0,0,0,.06)",
          }}>
            <p style={{ fontSize: 15.5, fontWeight: 900, color: c.ink, margin: "0 0 8px" }}>
              SINGLE PRODUCT<br /><span style={{ color: "#D97A16" }}>— difeso</span>
            </p>
            <p style={{ fontSize: 13, fontWeight: 600, color: c.body, lineHeight: 1.45, margin: "0 0 10px" }}>
              La tentazione multi nasce QUI: il cliente chiede, il competitor lancia,
              il board suggerisce. La risposta giusta è quasi sempre: <strong>non ancora</strong>.
            </p>
            <div style={{ background: c.dark, borderRadius: 10, padding: "10px 12px", marginBottom: 10 }}>
              <p style={{ fontSize: 12.5, fontWeight: 800, color: c.white, margin: 0, lineHeight: 1.4 }}>
                GATE 0 — "Questa cosa, da sola, avrebbe un suo buyer che la valuta e la compra?"<br />
                <span style={{ color: "#F9C8A0" }}>No → è una feature: packaging (tier, add-on a listino), non architettura.</span>
              </p>
            </div>
            <p style={{ fontSize: 12, fontWeight: 600, color: c.muted, margin: 0, lineHeight: 1.4 }}>
              ✓ Vendere a più settori con lo stesso use case resta single (es. Calendly).
            </p>
          </div>

          {/* S3 — la direzione decide */}
          <div style={{
            flex: 1, background: c.white, border: `1.5px solid ${c.line}`,
            borderTop: `5px solid ${c.accent}`, borderRadius: 14, padding: "16px 16px 18px",
            boxShadow: "0 2px 6px rgba(0,0,0,.06)",
          }}>
            <p style={{ fontSize: 15.5, fontWeight: 900, color: c.ink, margin: "0 0 8px" }}>
              IL MENU SI APRE<br /><span style={{ color: c.accent }}>— la direzione decide</span>
            </p>
            <div style={{ fontSize: 12.5, fontWeight: 600, color: c.body, lineHeight: 1.5 }}>
              <p style={{ margin: "0 0 6px" }}><strong>Double down</strong> → resti single, più profondo</p>
              <p style={{ margin: "0 0 4px" }}><strong>Nuovo use case, stesso ICP</strong> → nuovo prodotto → <em>come li comprano?</em></p>
              <div style={{ margin: "0 0 6px 10px" }}>
                <p style={{ margin: "0 0 3px" }}>• separati → <strong style={{ color: c.accent }}>① Ombrello</strong> <span style={{ color: c.muted }}>(Atlassian)</span></p>
                <p style={{ margin: "0 0 3px" }}>• in sequenza → <strong style={{ color: c.accent }}>② Lead + Add-on</strong> <span style={{ color: c.muted }}>(Stripe)</span> — la prima multi più naturale</p>
                <p style={{ margin: 0 }}>• insieme → <strong style={{ color: c.accent }}>③ Famiglia / Piattaforma</strong> <span style={{ color: c.muted }}>(HubSpot)</span></p>
              </div>
              <p style={{ margin: 0 }}><strong>Nuovi canali</strong> → non è architettura: è GTM</p>
            </div>
          </div>
        </div>

        {/* ---- connettore #2: ponte verso lo strato posizionamento ---- */}
        <p style={{ textAlign: "center", fontSize: 14, fontWeight: 800, color: c.ink, margin: "22px 0 14px" }}>
          ↓ L'architettura può aspettare. Una <span style={{ color: c.tesi }}>tesi di posizionamento</span>, no — e cambia forma a ogni fase ↓
        </p>

        {/* ---- riga 3: strato artefatto di posizionamento (Tesi → Posizionamento) ---- */}
        <div style={{ display: "flex", gap: 16, alignItems: "stretch" }}>

          {/* P1 — Tesi (da validare) */}
          <div style={{
            flex: 1, background: c.white, border: `1.5px solid ${c.line}`,
            borderTop: `5px solid ${c.tesi}`, borderRadius: 14, padding: "16px 16px 18px",
            boxShadow: "0 2px 6px rgba(0,0,0,.06)",
          }}>
            <p style={{ fontSize: 15.5, fontWeight: 900, color: c.ink, margin: "0 0 8px" }}>
              TESI DI POSIZIONAMENTO<br /><span style={{ color: c.tesi }}>— da validare</span>
            </p>
            <p style={{ fontSize: 13, fontWeight: 600, color: c.body, lineHeight: 1.45, margin: 0 }}>
              Una <strong>scommessa, non una certezza</strong>: chi sei, per chi, contro cosa.
              Vive nelle conversazioni di vendita, non ancora incisa sul sito.
            </p>
          </div>

          {/* P2 — la tesi diventa posizionamento (provato) */}
          <div style={{
            flex: 1, background: c.white, border: `1.5px solid ${c.line}`,
            borderTop: `5px solid ${c.tesi}`, borderImage: `linear-gradient(90deg, ${c.tesi}, ${c.good}) 1`,
            borderRadius: 14, padding: "16px 16px 18px", boxShadow: "0 2px 6px rgba(0,0,0,.06)",
          }}>
            <p style={{ fontSize: 15.5, fontWeight: 900, color: c.ink, margin: "0 0 8px" }}>
              LA TESI DIVENTA POSIZIONAMENTO<br /><span style={{ color: c.good }}>— provato dal mercato</span>
            </p>
            <p style={{ fontSize: 13, fontWeight: 600, color: c.body, lineHeight: 1.45, margin: 0 }}>
              Il mercato ha risposto. La tesi che regge <strong>si consolida</strong>: stesso ICP,
              stesso use case — ora dimostrato. È quello che difendi e ripeti.
            </p>
          </div>

          {/* P3 — posizionamento + nuova tesi (il ciclo riparte) */}
          <div style={{
            flex: 1, background: c.white, border: `1.5px solid ${c.line}`,
            borderTop: `5px solid ${c.good}`, borderRadius: 14, padding: "16px 16px 18px",
            boxShadow: "0 2px 6px rgba(0,0,0,.06)",
          }}>
            <p style={{ fontSize: 15.5, fontWeight: 900, color: c.ink, margin: "0 0 10px" }}>
              POSIZIONAMENTO + NUOVA TESI<br /><span style={{ color: c.good }}>— il ciclo <span style={{ color: c.tesi }}>riparte</span></span>
            </p>
            <div style={{ background: c.posSoft, border: `1px solid ${c.posBorder}`, borderRadius: 10, padding: "10px 12px", marginBottom: 8 }}>
              <p style={{ fontSize: 12.5, fontWeight: 600, color: c.body, margin: 0, lineHeight: 1.4 }}>
                Ciò che già funziona → <strong style={{ color: c.good }}>mantieni il posizionamento</strong>.
                Prodotti e segmenti provati non si rimettono in discussione.
              </p>
            </div>
            <div style={{ background: c.tesiSoft, border: `1px solid ${c.tesiBorder}`, borderRadius: 10, padding: "10px 12px" }}>
              <p style={{ fontSize: 12.5, fontWeight: 600, color: c.body, margin: 0, lineHeight: 1.4 }}>
                Nuovo prodotto / nuovo segmento → <strong style={{ color: c.tesi }}>riparte da una tesi</strong> da validare.
                Non eredita la certezza del primo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ============ PUNCHLINE ============ */}
      <div style={{
        background: c.dark, borderRadius: 16, padding: "20px 26px", marginTop: 22,
        textAlign: "center",
      }}>
        <p style={{ color: c.white, fontSize: 19, fontWeight: 800, margin: 0, lineHeight: 1.45 }}>
          Prima di questa linea l'architettura è una <span style={{ color: "#F9C8A0" }}>distrazione</span>.<br />
          Dopo, è una <span style={{ color: c.accent }}>decisione</span>.
        </p>
      </div>
    </div>
  );
}
