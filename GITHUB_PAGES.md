# Hospedando o Site da Lupi Mídias no GitHub Pages

Este guia explica como configurar o site para ser hospedado no GitHub Pages, permitindo que ele fique disponível online gratuitamente.

## Pré-requisitos

- Repositório já configurado no GitHub (seguindo as instruções em GITHUB_UPLOAD.md)
- GitHub Actions habilitado (ativado por padrão em novos repositórios)

## Ajustes no projeto para GitHub Pages

Antes de configurar o GitHub Pages, precisamos fazer um pequeno ajuste no projeto para garantir que as rotas funcionem corretamente:

1. Crie um arquivo `vite.config.ts` ou edite o existente:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: './', // Isso é importante para o GitHub Pages
})
```

2. Faça commit e push dessas alterações para o GitHub:

```bash
git add vite.config.ts
git commit -m "Ajuste para GitHub Pages"
git push
```

## Configurando GitHub Pages

1. Acesse seu repositório no GitHub
2. Vá para "Settings" (aba de configurações)
3. Navegue até "Pages" no menu lateral esquerdo
4. Na seção "Build and deployment":
   - Source: selecione "GitHub Actions"
   - Clique no botão "Configure" ao lado de "Static HTML"

5. Será criado um novo arquivo de workflow. Substitua seu conteúdo pelo seguinte:

```yaml
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches: ['main']

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow one concurrent deployment
concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  # Single deploy job since we're just deploying
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      - name: Set up Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'
      - name: Install dependencies
        run: npm install
      - name: Build
        run: npm run build
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          # Upload dist repository
          path: './dist'
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

6. Clique em "Commit changes..." e confirme a criação do arquivo de workflow

7. Aguarde a execução do workflow (você pode acompanhar em "Actions")

8. Após a conclusão, o site estará disponível em: `https://[seu-usuario].github.io/[nome-do-repositorio]/`

## Problemas de roteamento com React Router

Se após o deploy você notar problemas de roteamento (páginas 404 ao atualizar), adicione um arquivo `public/404.html` com o seguinte conteúdo:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Lupi Mídias</title>
  <script type="text/javascript">
    // Solução para o GitHub Pages com Single Page Applications
    var segmentCount = 1;
    var l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + segmentCount).join('/') + '/?p=/' +
      l.pathname.slice(1).split('/').slice(segmentCount).join('/').replace(/&/g, '~and~') +
      (l.search ? '&q=' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
  </script>
</head>
<body>
  Redirecionando...
</body>
</html>
```

E também ajuste seu `public/index.html` adicionando este script antes do fechamento da tag `</head>`:

```html
<script type="text/javascript">
  // Processa o redirecionamento do 404.html
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) { 
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
</script>
```

Faça commit e push dessas alterações, e o roteamento funcionará corretamente no GitHub Pages.

## Domínio personalizado (opcional)

Se você tem um domínio personalizado:

1. No GitHub, vá para "Settings" > "Pages"
2. Na seção "Custom domain", adicione seu domínio
3. Siga as instruções para configurar os registros DNS
4. Marque a opção "Enforce HTTPS" para segurança adicional 