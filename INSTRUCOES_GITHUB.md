# Instruções para Subir o Projeto Lupi Mídias no GitHub

O Git não está instalado no seu computador. Vamos precisar instalá-lo primeiro para poder subir o projeto para o GitHub.

## 1. Instalar o Git

1. Visite [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Clique no link para baixar a versão 64-bit Git for Windows Setup
3. Execute o instalador baixado
4. Nas opções de instalação, você pode deixar as configurações padrão e clicar em "Next" até concluir
5. Após a instalação, reinicie o computador (ou pelo menos reinicie o PowerShell/CMD)

## 2. Repositório no GitHub

Você já criou um repositório no GitHub:
- URL: [https://github.com/FrancielBorges/Lupi-Midias](https://github.com/FrancielBorges/Lupi-Midias)
- Este repositório está pronto para receber os arquivos do projeto

## 3. Subir o projeto usando o script automatizado

Agora que você tem o Git instalado e o repositório já está criado, pode usar o script que preparamos:

1. No Windows Explorer, navegue até a pasta do projeto Lupi Mídias
2. Dê um clique duplo no arquivo `github-upload.bat`
3. O script verificará se o Git está instalado
4. Digite seu nome quando solicitado (ou pressione Enter para pular)
5. Digite seu email quando solicitado (ou pressione Enter para pular)
6. O script já está configurado para usar o repositório correto
7. Aguarde até que o processo seja concluído

## 4. Verificar o upload

1. Acesse seu repositório no GitHub: [https://github.com/FrancielBorges/Lupi-Midias](https://github.com/FrancielBorges/Lupi-Midias)
2. Você deverá ver todos os arquivos do projeto, incluindo o README.md atualizado

## 5. Configurar GitHub Pages (hospedagem gratuita)

Para configurar o GitHub Pages e hospedar o site gratuitamente:

1. No repositório, clique em "Settings" (aba de configurações)
2. No menu lateral esquerdo, clique em "Pages"
3. Na seção "Build and deployment", em Source, selecione "GitHub Actions"
4. O GitHub irá automaticamente detectar o workflow já configurado em `.github/workflows/deploy.yml`
5. Após alguns minutos, seu site estará disponível em `https://francielborges.github.io/Lupi-Midias/`

## Problemas comuns e soluções

### Erro de autenticação no Git

Se o Git solicitar nome de usuário e senha e você receber um erro de autenticação:

1. Vá para [https://github.com/settings/tokens](https://github.com/settings/tokens)
2. Clique em "Generate new token (classic)"
3. Dê um nome como "Lupi Mídias Deploy"
4. Marque a caixa "repo"
5. Clique em "Generate token"
6. Copie o token gerado
7. Quando o Git pedir seu nome de usuário, digite seu nome de usuário do GitHub
8. Quando pedir a senha, cole o token que você copiou

### O script não funciona

Se o script `github-upload.bat` não funcionar corretamente, você pode seguir estas instruções manuais:

1. Abra um novo PowerShell ou CMD como administrador
2. Navegue até a pasta do projeto:
   ```
   cd "E:\Franciel\Desktop\Projetos - Cursor\Lupi Mídias"
   ```
3. Configure o Git:
   ```
   git config --global user.name "Seu Nome"
   git config --global user.email "seu.email@exemplo.com"
   ```
4. Inicialize o repositório:
   ```
   git init
   ```
5. Adicione todos os arquivos:
   ```
   git add .
   ```
6. Faça o primeiro commit:
   ```
   git commit -m "Versão inicial do site da Lupi Mídias"
   ```
7. Adicione o repositório remoto:
   ```
   git remote add origin https://github.com/FrancielBorges/Lupi-Midias.git
   ```
8. Envie os arquivos para o GitHub:
   ```
   git branch -M main
   git push -u origin main
   ``` 