# Instruções para Upload no GitHub

Siga os passos abaixo para subir o projeto Lupi Mídias no GitHub:

## 1. Instalação do Git (se ainda não tiver instalado)

- Visite [git-scm.com](https://git-scm.com/download/win) e baixe o instalador para Windows
- Execute o instalador e siga as instruções padrão
- Após a instalação, abra um novo terminal (PowerShell ou CMD)

## 2. Configuração do Git

Execute os seguintes comandos, substituindo seu nome e email:

```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu.email@exemplo.com"
```

## 3. Criar um novo repositório no GitHub

- Acesse [github.com](https://github.com/) e faça login na sua conta
- Clique no ícone "+" no canto superior direito e selecione "New repository"
- Dê um nome ao repositório (exemplo: "lupi-midias-site")
- Adicione uma descrição como "Site institucional da Lupi Mídias"
- Mantenha o repositório como público ou privado conforme sua preferência
- NÃO inicialize o repositório com um README, .gitignore ou licença
- Clique em "Create repository"

## 4. Inicializar o Git no projeto e fazer o primeiro commit

Abra um terminal no diretório do projeto e execute os seguintes comandos:

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Versão inicial do site da Lupi Mídias"

# Adicionar o repositório remoto (substitua com a URL do seu repositório)
git remote add origin https://github.com/SEU-USUARIO/lupi-midias-site.git

# Enviar os arquivos para o GitHub
git push -u origin main
```

Se o comando `push` falhar com erro de branch, tente:

```bash
git branch -M main
git push -u origin main
```

## 5. Verificar o upload

- Acesse seu repositório no GitHub para verificar se os arquivos foram enviados corretamente
- O README.md atualizado deve aparecer na página principal do repositório

## 6. Próximos passos

Após o upload inicial, você pode continuar trabalhando no projeto e fazer novos commits:

```bash
# Para verificar arquivos modificados
git status

# Para adicionar arquivos modificados
git add .

# Para fazer um novo commit
git commit -m "Descrição das alterações"

# Para enviar as alterações para o GitHub
git push
```

## Hospedar o site (opcional)

Você pode usar o GitHub Pages ou outros serviços para hospedar o site:

1. **GitHub Pages**: Vá para "Settings" > "Pages" no seu repositório e configure o branch para deploy
2. **Netlify**: Conecte seu repositório GitHub e configure as opções de build
3. **Vercel**: Similar ao Netlify, oferece hospedagem gratuita para projetos React 