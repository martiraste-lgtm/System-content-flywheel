# launch-content-radar.ps1
# Avvia il Content Radar in modalità supervisionata.
# Chiamato dallo scheduled task Windows "Content Radar" (domenica alterna, 10:00),
# oppure lanciabile a mano quando vuoi far partire un ciclo.
#
# Modalità: launcher supervisionato — apre Claude Code interattivo nel repo e avvia
# la skill content-radar. Usa il TUO Chrome (già loggato su LinkedIn) per la Fase 1.
# Tu supervisioni (10-15 min) e approvi i prompt (scrittura Google Doc, git push).

$RepoPath = 'C:\Users\Utente\Documents\System-content-flywheel'

Set-Location -Path $RepoPath

Write-Host ''
Write-Host '=== CONTENT RADAR — run bisettimanale (supervisionato) ===' -ForegroundColor Cyan
Write-Host ''
Write-Host 'PRIMA DI PROCEDERE: assicurati che Chrome sia APERTO e LOGGATO su LinkedIn.' -ForegroundColor Yellow
Write-Host 'Senza login, la Fase 1 (post degli autori) degrada a sola WebSearch.' -ForegroundColor Yellow
Write-Host ''

$Prompt = @'
Esegui la skill content-radar in questa directory (System-content-flywheel). È il run bisettimanale automatico: segui il workflow completo dalla Fase 0 alla Fase 5 (git pull, radar autori via chrome-devtools-mcp, radar temi via WebSearch, sintesi editoriale, Google Doc, riga in radar/log.md + push). Prima di iniziare la Fase 1 verifica che Chrome sia aperto e loggato su LinkedIn; se non lo è, avvisami e fermati.
'@

# Avvia Claude Code interattivo con il prompt del radar.
& claude $Prompt
