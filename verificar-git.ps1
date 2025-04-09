# Script para verificar se o Git está instalado e iniciar o processo de upload

# Verificar se o Git está instalado
$gitInstalado = $null
try {
    $gitInstalado = Get-Command git -ErrorAction Stop
    Write-Host "Git encontrado: $($gitInstalado.Source)"
} catch {
    Write-Host "Git não está instalado no seu sistema." -ForegroundColor Red
    Write-Host "Abrindo o site para download do Git..."
    Start-Process "https://git-scm.com/download/win"
    
    Write-Host "`nApós instalar o Git:" -ForegroundColor Yellow
    Write-Host "1. Reinicie este terminal PowerShell" -ForegroundColor Yellow
    Write-Host "2. Execute novamente este script ou use o arquivo github-upload.bat" -ForegroundColor Yellow
    
    Write-Host "`nAlternativamente, siga as instruções em INSTRUCOES_GITHUB.md" -ForegroundColor Cyan
    
    # Abrir as instruções
    Invoke-Item "INSTRUCOES_GITHUB.md"
    
    Read-Host "Pressione Enter para sair"
    exit
}

# Se chegamos aqui, o Git está instalado
Write-Host "Git está corretamente instalado." -ForegroundColor Green
Write-Host "Repositório de destino: https://github.com/FrancielBorges/Lupi-Midias.git" -ForegroundColor Cyan
Write-Host "`nAgora você pode:"
Write-Host "1. Executar o arquivo github-upload.bat (recomendado)" -ForegroundColor Green
Write-Host "   - Navegue até a pasta no Explorer e dê um clique duplo em github-upload.bat"
Write-Host "`nOU`n"
Write-Host "2. Siga as instruções em INSTRUCOES_GITHUB.md" -ForegroundColor Green

# Perguntar se deseja continuar
$continuar = Read-Host "Deseja iniciar o upload agora? (S/N)"

if ($continuar -eq "S" -or $continuar -eq "s") {
    Write-Host "Iniciando o script de upload..." -ForegroundColor Green
    Start-Process "cmd.exe" -ArgumentList "/c github-upload.bat" -Wait
} else {
    Write-Host "Você pode iniciar o upload mais tarde executando github-upload.bat" -ForegroundColor Yellow
    Invoke-Item "INSTRUCOES_GITHUB.md"
}

Read-Host "Pressione Enter para sair" 