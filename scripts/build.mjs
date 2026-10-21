import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, 'apps/portfolio/public'), output, { recursive: true });
await cp(path.join(root, 'apps/trancas-store/public'), path.join(output, 'trancas-store'), { recursive: true });

const projects = [
  { slug: 'marketplace', name: 'Marketplace & estoque', number: '01', category: 'COMÉRCIO & GESTÃO', description: 'Uma vitrine para vender. Uma operação para organizar.', scope: 'Espaço reservado para a demonstração de marketplace e controle de estoque.' },
  { slug: 'imobiliaria', name: 'Imobiliária', number: '02', category: 'IMÓVEIS & EXPERIÊNCIA', description: 'O próximo endereço começa com uma boa experiência.', scope: 'Espaço reservado para a demonstração de catálogo de imóveis e apresentação de propriedades.' },
  { slug: 'whitelabel', name: 'White label', number: '03', category: 'IDENTIDADE & PRODUTO', description: 'Uma base. Diferentes identidades.', scope: 'Espaço reservado para demonstrações de produtos adaptados a diferentes marcas.' },
];

for (const project of projects) {
  const directory = path.join(output, 'projetos', project.slug);
  await mkdir(directory, { recursive: true });
  await writeFile(path.join(directory, 'index.html'), `<!doctype html>
<html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="${project.scope}"><title>${project.name} — Umbrella</title><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="/styles.css"><link rel="canonical" href="https://umbrella.lat/projetos/${project.slug}/"></head>
<body><a class="skip" href="#conteudo">Pular para o conteúdo</a><header class="header wrap"><a class="brand" href="/" aria-label="Umbrella, início"><span class="brand-symbol">u.</span>umbrella<span class="muted">/</span></a><nav aria-label="Principal"><a href="/#projetos">Projetos</a><a href="/#sobre">Sobre</a><a class="contact-link" href="/#contato">Vamos conversar <span aria-hidden="true">↗</span></a></nav></header>
<main id="conteudo" class="wrap project-page"><a class="back" href="/#projetos">← Todos os projetos</a><p class="eyebrow">${project.number} / ${project.category}</p><h1>${project.name}<span class="accent">.</span></h1><p class="project-lead">${project.description}</p><section class="construction"><span class="status"><span></span> Em construção</span><h2>O espaço está pronto.<br>O projeto vem a seguir.</h2><p>${project.scope} As funcionalidades serão desenvolvidas em uma próxima etapa.</p><a class="button" href="/">Explorar o portfólio <span aria-hidden="true">↗</span></a></section></main><footer class="wrap footer"><a class="brand" href="/">umbrella<span class="accent">.</span></a><span>Pedro Mota · Desenvolvimento de software</span><a href="https://github.com/pedroamota" target="_blank" rel="noopener noreferrer">GitHub ↗</a></footer></body></html>`);
}
await writeFile(path.join(output, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${['', 'trancas-store/', ...projects.map(p => `projetos/${p.slug}/`)].map(route => `<url><loc>https://umbrella.lat/${route}</loc></url>`).join('')}</urlset>`);
console.log('Site estático gerado em dist/');
