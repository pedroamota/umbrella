---
name: Umbrella
description: Portfólio de engenharia de software de Pedro Mota, com a identidade verde original.
colors:
  green: "#c7ee9b"
  accent: "#375e2c"
  bg: "#f6f8f2"
  fg: "#17251c"
  muted: "#526252"
  line: "#d1d9ca"
  surface: "#edf2e7"
  ink: "#111513"
  dark-fg: "#edf0e8"
  dark-muted: "#a4afa7"
  dark-line: "#313b33"
  dark-surface: "#1b241d"
  art-bg: "#1d2820"
  button-hover: "#dbffb7"
typography:
  display:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "clamp(3.7rem, 7.6vw, 7.2rem)"
    fontWeight: 500
    lineHeight: 1.07
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "clamp(2.1rem, 4vw, 3.6rem)"
    fontWeight: 500
    lineHeight: 1.07
    letterSpacing: "-.035em"
  title:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "clamp(1.4rem, 2.6vw, 2.3rem)"
    fontWeight: 500
    lineHeight: 1.07
    letterSpacing: "-.035em"
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.6
  label:
    fontFamily: "monospace"
    fontSize: ".71rem"
    letterSpacing: ".12em"
  serif:
    fontFamily: "Georgia, 'Times New Roman', serif"
    fontWeight: 400
rounded:
  art: "2px"
  status: "20px"
  circle: "50%"
spacing:
  small-gap: "24px"
  section-gap: "50px"
  row-padding: "34px 0"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.ink}"
    padding: "15px 22px"
  button-primary-hover:
    backgroundColor: "{colors.button-hover}"
  status:
    textColor: "{colors.accent}"
    rounded: "{rounded.status}"
    padding: "5px 12px"
  education:
    backgroundColor: "{colors.surface}"
    padding: "26px 30px"
---

# Design System: Umbrella

## Overview

Documentação descritiva da implementação em `public/styles.css` e `public/index.html`, com os compromissos confirmados em `PRODUCT.md`. Não introduz nova identidade nem uma metáfora criativa ainda não aprovada.

O sistema preserva o verde-lima, a ilustração de guarda-chuva e os projetos apresentados em linhas. A alteração aprovada se limita ao refinamento de Sobre mim/currículo e ao tema claro padrão com opção escura lembrada.

**Key Characteristics:**
- Tipografia de sistema, títulos amplos e detalhes monoespaçados.
- Superfícies planas, divisórias finas e verde persistente nos elementos de identidade.
- HTML/CSS estáticos, sem bibliotecas JavaScript de runtime; `theme.js` pequeno persiste a escolha via `localStorage`.

## Colors

### Primary

O verde-lima (`green`) identifica marca, botão principal, seleção e bloco de contato. `accent` oferece contraste para texto e links no tema claro; no escuro assume o mesmo verde-lima. O fundo da arte permanece verde profundo nos dois temas.

### Neutral

`bg`, `fg`, `muted`, `line` e `surface` definem fundo, texto principal, texto secundário, divisórias e formação acadêmica. No tema escuro, o fundo assume `ink` e os demais recebem suas variantes `dark-*`. `ink` continua sendo o texto sobre o verde-lima.

**Regra da identidade preservada.** Manter verde, arte original e composição dos projetos; detecções genéricas de estilo não autorizam sua substituição.

## Typography

Arial/Helvetica compõem o texto e os títulos; Georgia em itálico destaca palavras da abertura e do contato. Monoespaçada aparece em identificadores, categorias e números dos projetos. A hierarquia fluida está no frontmatter; o contato possui título próprio (`clamp(3rem,6vw,5.5rem)`).

Sobre mim usa introdução fluida (`clamp(1.7rem,3vw,2.3rem)`), subtítulos compactos (1.35rem), parágrafos com entrelinha (1.8) e listas profissionais (0.9rem). O conteúdo principal dessa seção limita-se a 70ch, com parágrafos e listas até 610px.

## Layout

Container central até 1280px com largura `calc(100% - 112px)`. A abertura usa duas colunas (1.2fr / 1fr), arte à direita e respiro vertical amplo. Projetos seguem linhas com número, informação, status e seta: `55px 1fr auto 45px`, intervalo de 22px.

Sobre mim usa `minmax(230px,.8fr) minmax(0,1.6fr)` e intervalo `clamp(35px,6vw,100px)`. O perfil fica sticky a 35px do topo; a coluna de leitura reúne apresentação, formação, trajetória e detalhes nativos.

- Até 900px: margens laterais de 24px, abertura com intervalo de 24px, arte com mínimo de 380px e projetos em `35px 1fr auto 25px`.
- Até 800px: Sobre mim vira coluna única, perfil perde sticky, intervalo de 36px e navegação pode quebrar linha.
- Até 640px: cabeçalho quebra em duas linhas; abertura e contato viram coluna única; arte ganha proporção 1.2 e SVG até 340px de altura. Projetos usam `24px 1fr 24px`, status abaixo do título e seta à direita. Sobre mim tem intervalo de 25px e padding vertical de 50px; formação recebe padding de 22px; sumários têm altura mínima de 56px.
- A partir de 1600px: padding superior da abertura aumenta para 100px.

## Elevation & Depth

Sem sombras CSS de componentes. Divisórias e tons de superfície organizam o conteúdo. A arte original contém grade sutil, gradiente no guarda-chuva e sombra elíptica dentro do SVG; preservar esses detalhes existentes.

## Shapes

Botões e formação usam cantos retos. A arte tem arredondamento discreto, status são cápsulas e símbolo de marca/pontos da trajetória são círculos. A trajetória combina linha vertical fina com marcadores, sem transformar os projetos em cartões.

## Components

- **Navegação:** links compactos, contato sublinhado e checkbox nativo de tema com rótulo visível. Claro é o padrão; apenas a escolha escura salva restaura escuro. Não segue automaticamente a preferência do sistema.
- **Botão principal:** retângulo verde-lima com seta, intervalo interno de 46px e texto (0.84rem, peso 600); hover clareia o fundo.
- **Projetos:** linhas divisórias, categoria monoespaçada, título, descrição e cápsula de status. Hover colore o título e desloca a seta (3px, −3px) em 0.15s. O projeto futuro sem link permanece um artigo.
- **Sobre mim/currículo:** perfil lateral com fatos e link de currículo, bloco tonal de formação e trajetória aberta inicialmente. Outros grupos usam `details`/`summary` nativos, com marcador colorido e título aberto em accent.
- **Contato:** superfície verde-lima com título e links sociais separados por linhas.
- **Acessibilidade:** link de pular conteúdo; foco de links com contorno de 2px em accent, deslocado 7px; checkbox e sumários possuem foco próprio. `prefers-reduced-motion` desativa transições e força rolagem automática.

## Do's and Don'ts

- **Do** preservar a arte do guarda-chuva, o verde e as linhas de projetos aprovadas.
- **Do** manter o claro padrão, a opção escura lembrada e navegação nativa por teclado.
- **Do** aplicar refinamentos de leitura ao currículo respeitando a hierarquia existente.
- **Don't** reinterpretar o portfólio como identidade de estúdio ou iniciar um redesign.
- **Don't** adicionar bibliotecas de runtime, cartões de projetos ou efeitos sem necessidade aprovada.
