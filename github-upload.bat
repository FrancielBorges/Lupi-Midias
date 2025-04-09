@echo off
echo ====================================
echo = Script de Upload para GitHub     =
echo = Lupi Midias Site                 =
echo ====================================
echo.

REM Verificar se o Git está instalado
where git >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Git não encontrado. Por favor, instale o Git antes de continuar.
    echo Visite: https://git-scm.com/download/win
    pause
    exit /b
)

echo Git encontrado. Continuando...
echo.

REM Configurar nome e email
echo Configurando Git...
set /p name=Digite seu nome (ou pressione Enter para pular): 
if not "%name%"=="" (
    git config --global user.name "%name%"
)

set /p email=Digite seu email (ou pressione Enter para pular): 
if not "%email%"=="" (
    git config --global user.email "%email%"
)

echo.

REM Inicializar o repositório
echo Inicializando repositório Git...
git init
echo.

REM Adicionar todos os arquivos
echo Adicionando arquivos ao Git...
git add .
echo.

REM Fazer o primeiro commit
echo Criando o primeiro commit...
git commit -m "Versão inicial do site da Lupi Mídias"
echo.

REM Configurar repositório remoto (já definido)
echo Configurando repositório remoto...
echo Usando o repositório: https://github.com/FrancielBorges/Lupi-Midias.git
git remote add origin https://github.com/FrancielBorges/Lupi-Midias.git
echo.

REM Enviar arquivos para o GitHub
echo Enviando arquivos para o GitHub...
git branch -M main
git push -u origin main

echo.
echo ====================================
echo = Upload completo!                 =
echo ====================================
echo.
echo Visite https://github.com/FrancielBorges/Lupi-Midias para ver seu repositório.
echo.
pause 