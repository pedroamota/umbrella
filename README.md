# Umbrella · umbrella.lat

Portfólio de Pedro Mota e ponto de entrada para futuras demonstrações. Monorepo com npm workspaces, sem dependências de produção nesta etapa.

## Estrutura

- `apps/portfolio/public`: HTML, CSS e arquivos públicos do portfólio.
- `scripts/build.mjs`: copia o portfólio e gera as páginas de apresentação dos projetos e o sitemap em `dist`.
- `apps/`: espaço para aplicações futuras, inclusive Next.js + TypeScript.
- `packages/`: reservado para código compartilhado quando existir uma necessidade real.

## Executar

Requer Node.js 22 ou superior. `npm run build` gera `dist/`, sem instalar dependências. Sirva essa pasta com um servidor HTTP estático. Não abra o HTML via `file://`, pois os links usam caminhos a partir da raiz.

## Cloudflare Pages

Conecte o repositório GitHub ao Cloudflare Pages:

- Framework: nenhum.
- Diretório raiz: raiz do repositório.
- Comando de build: `npm run build`.
- Diretório de saída: `dist`.
- Variável de build: `NODE_VERSION=22`.
- Branch de produção: a branch principal real do repositório.

Depois do primeiro deploy, adicione `umbrella.lat` e `www.umbrella.lat` em Custom domains do projeto Pages. Para usar o domínio raiz, adicione a zona na Cloudflare e atualize os nameservers na Hostinger com os valores exatos fornecidos pela Cloudflare. Preserve registros de e-mail e outros serviços existentes. Não invente IPs nem CNAMEs antes de criar o projeto e associar os domínios.

Documentação: https://developers.cloudflare.com/pages/get-started/git-integration/ e https://developers.cloudflare.com/pages/configuration/custom-domains/.

## Evolução

Rotas atuais: `/`, `/projetos/marketplace/`, `/projetos/imobiliaria/` e `/projetos/whitelabel/`. As páginas de projetos são apresentações de escopo, sem funcionalidades simuladas. Futuramente, mantenha essas apresentações e publique apps independentes do mesmo monorepo em subdomínios como `marketplace.umbrella.lat` e `imoveis.umbrella.lat`. Cada app pode ter seu próprio build e deploy; visitantes do portfólio não carregam código dessas aplicações.

O portfólio não precisa de backend nem banco. Quando os apps precisarem de dados, use ORM no servidor, com filtros, paginação e ordenação na consulta. Não exponha credenciais no frontend.

## Adicionar projetos ao portfólio

Adicione uma entrada `.project-row` em `apps/portfolio/public/index.html`, com nome, descrição e um link real. Tranças Store abre a demonstração em `/trancas-store/`, publicada junto ao portfólio. Seu HTML e CSS ficam em `apps/trancas-store/public`, copiados pelo build. Não é necessário outro projeto Cloudflare para essa página estática.

Aplicações com backend ou necessidades próprias podem continuar em repositórios e deploys independentes, usando subdomínios. Páginas estáticas podem compartilhar este deploy em pastas distintas, como Tranças Store. Os projetos reservados em `/projetos/` são páginas de apresentação, não as aplicações completas.

## Desempenho e manutenção

HTML estático, CSS único, fontes do sistema, ilustração SVG e zero JavaScript no navegador. Sem dependências externas ou animações contínuas. Isso reduz transferência e execução; métricas reais ainda devem ser medidas no deploy e em aparelhos móveis. Next.js também pode gerar HTML estático; não é necessário carregar React para este escopo.

A política CSP atual bloqueia scripts e formulários por intenção. Ajuste-a de forma explícita quando integrar aplicações, analytics ou serviços. HTML e CSS revalidam o cache para evitar versões antigas de arquivos sem hash.
