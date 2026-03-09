---
title: 'URBEE'
category: 'Produto Mobile'
image: '/images/works/urbee.png'
description: 'Uma plataforma mobile-first de descoberta de eventos com planejamento social, exploração por mapa e arquitetura backend orientada à ingestão.'
stack: 'Expo, React Native, NestJS, Fastify, Prisma, PostgreSQL, Turborepo'
tags:
  - Expo
  - React Native
  - NestJS
  - Fastify
  - Prisma
  - PostgreSQL
  - Product Design
  - Geolocalizacao
  - Descoberta de Eventos
  - Monorepo
date: '2026-03-09'
featured: true
---

# URBEE

## Visão Geral do Projeto
URBEE é uma **plataforma mobile-first de descoberta de eventos** que idealizei e desenvolvi como um produto multiaplicação cobrindo **descoberta para consumidores, planejamento social leve e operações de backend orientadas à ingestão**.

A ideia central era tornar a descoberta urbana mais limpa, rápida e confiável do que as plataformas tradicionais de eventos. Em vez de tratar eventos como um feed barulhento de classificados, a URBEE os trata como experiências curadas com contexto mais forte: categoria, bairro, horário, preço, identidade do organizador, prova social e proximidade no mapa.

O produto é estruturado como um **monorepo com pnpm + Turborepo** com:
- um **app mobile** focado em descoberta e planejamento,
- uma **API em NestJS** para catálogo, autenticação, social, gestão de fontes, ingestão, fluxos de revisão e callbacks de automação,
- uma **base de app web** para futura expansão em múltiplas superfícies,
- e **pacotes compartilhados** para tipos e UI entre aplicações.

Este projeto é importante porque combina **UX de produto para consumidor**, **design de interação baseado em localização** e **pensamento de pipeline backend** dentro do mesmo sistema. Não é apenas um conceito de frontend. É uma arquitetura de produto pensada para manter dados de eventos utilizáveis, atualizados e acionáveis socialmente.

## Meu Papel
Eu construí a URBEE como um projeto completo de produto e engenharia, incluindo:
- Definição de produto e arquitetura da informação
- UX mobile para descoberta, detalhe do evento, feed social, listas e fluxos de perfil
- Arquitetura de monorepo com pacotes compartilhados
- Design de API com NestJS + Fastify
- Modelagem de domínio para usuários, organizadores, locais, eventos, listas, posts, follows, fontes, jobs de ingestão e itens da fila de revisão
- Desenho de persistência com Prisma e estratégia de seed
- Geração de contratos OpenAPI/Swagger
- Desenho do workflow de ingestão com revisão e hooks de automação
- Padrões de integração frontend/backend com React Query e requisições autenticadas

## Stack
- **Monorepo:** pnpm, Turborepo
- **Mobile:** Expo, React Native, Expo Router, TypeScript
- **Data Fetching:** TanStack React Query
- **UI/UX:** Expo Image, Expo Haptics, Expo Location, React Native Maps, efeitos de Blur/Glass
- **API:** NestJS, Fastify, TypeScript
- **Persistência:** Prisma, PostgreSQL
- **Serviços de Infra:** Redis, Docker Compose
- **Contratos:** Swagger / OpenAPI
- **Automação:** integração de callback com n8n
- **Pacotes Compartilhados:** tipos e UI de workspace

## Visão de Produto
URBEE foi desenhada em torno de um objetivo simples:

**Ajudar pessoas a descobrir o que está acontecendo na cidade e transformar essa descoberta em um plano real.**

Isso significa que o app precisa resolver mais do que busca. Ele precisa suportar:
- navegação rápida quando o usuário ainda não sabe o que quer,
- filtros por momento, categoria, preço e distância,
- confiança nos detalhes do evento,
- um fluxo de decisão orientado por mapa,
- e mecânicas sociais leves para que descoberta possa virar coordenação.

A direção do produto é especialmente forte para grandes ambientes urbanos como São Paulo, onde a oferta de eventos é ampla, fragmentada e muitas vezes mal organizada entre sites-fonte e posts sociais.

## O Que Eu Construí
### 1) Experiência Mobile-First de Descoberta
O app mobile é organizado em torno de cinco áreas principais de navegação:
- **Hoje**
- **Explorar**
- **Mapa**
- **Social**
- **Perfil**

Essa estrutura espelha a forma como usuários reais exploram planos na cidade:
- começam por um feed diário,
- seguem para exploração por categoria,
- mudam para o modo mapa quando proximidade importa,
- checam o que amigos ou organizadores seguidos estão fazendo,
- e salvam ou revisitam planos a partir de perfil/listas.

### 2) Feed Inicial Projetado para Descoberta Rápida
A aba **Hoje** foi construída como um feed em camadas de descoberta, e não como uma lista plana.

Ela inclui:
- um campo de busca para procura direta,
- chips rápidos para atalhos por data e tags,
- uma seção de tendências com cards visuais,
- cards de eventos com imagem, data, bairro, tags e preço,
- ações de salvar e compartilhar diretamente no card,
- e uma seção de feed social mostrando atividade em torno de eventos.

Isso oferece ao usuário múltiplos pontos de entrada para a descoberta:
- navegar por momento,
- navegar por tema,
- navegar por contexto social,
- ou ir direto para um evento específico.

### 3) Exploração por Categorias
A área **Explorar** transforma descoberta ampla em um fluxo de navegação mais intencional.

Os usuários podem entrar em categorias como:
- Musica
- Arte
- Cinema
- Teatro
- Gastronomia
- Cursos
- Bem-estar
- Esportes
- Infantil
- Festa

Dentro de cada categoria, a experiência suporta:
- filtros temporais como hoje, amanhã e fim de semana,
- filtros de preço de gratuito até faixas econômicas,
- modos de ordenação como tendência, mais próximos e mais baratos,
- scroll infinito,
- e controles de filtro em modal que mantêm a experiência mobile limpa.

Isso é importante porque apps de descoberta falham quando forçam o mesmo layout para todo mundo. A URBEE oferece tanto navegação rápida quanto refinamento estruturado.

### 4) Descoberta de Eventos Baseada em Mapa
Uma das funcionalidades de usabilidade mais fortes é a aba **Mapa**.

Em dispositivos mobile nativos, implementei:
- fluxo de permissão de localização em tempo real,
- mapa centralizado no usuário ou em uma região padrão de São Paulo,
- marcadores de eventos com preço visível,
- seleção de marcador conectada a uma bottom sheet colapsável,
- filtros por data e raio,
- interação de “buscar nesta área” após mover a região,
- e uma visualização em lista de eventos próximos abaixo do mapa.

Isso atende a comportamentos muito práticos do usuário:
- “me mostra o que está acontecendo perto de mim”,
- “me mostra o que está acontecendo neste bairro hoje à noite”,
- ou “vou para outra parte da cidade, o que existe por lá?”

O valor de usabilidade aqui é alto porque decisões sobre eventos muitas vezes são geográficas antes de serem temáticas.

### 5) Camada Social de Planejamento
A URBEE não é uma rede social completa. Ela usa recursos sociais onde eles realmente adicionam utilidade ao planejamento.

A estrutura atual suporta:
- listas pessoais salvas,
- atividade de feed relacionada a eventos,
- seguir organizadores,
- posts e atualizações de eventos no feed,
- e estatísticas em nível de perfil que tornam visível o comportamento de salvar/planejar.

A aba **Social** exibe atividade de usuários vinculada a eventos, incluindo:
- quem quer ir,
- a qual evento a pessoa está se referindo,
- um comentário curto,
- e ações rápidas como curtir, comentar intenção e compartilhar.

Essa é uma escolha deliberada de produto. A camada social existe para reduzir atrito no planejamento e aumentar confiança por meio da descoberta compartilhada, não para sobrecarregar o produto com mecânicas genéricas de engajamento.

### 6) Detalhe do Evento como Tela de Conversão
A tela de detalhe do evento é onde navegação vira intenção.

Eu a construí para consolidar as informações mais críticas para a decisão:
- mídia principal,
- título e tags,
- apresentação completa de data/hora,
- contexto de local e bairro,
- estado de ingresso ou entrada gratuita,
- contagem de participantes/prova social,
- descrição completa,
- ações de salvar e compartilhar,
- e um CTA principal que alterna entre “Confirmar presenca” e “Comprar ingresso”.

Essa tela foi estruturada para responder rapidamente às perguntas práticas:
- O que é isso?
- Quando é?
- Onde é?
- É gratuito ou pago?
- Outras pessoas estão interessadas?
- Quero salvar, compartilhar ou ir agora?

## Usabilidade Detalhada e Fluxos de Usuário
### Onboarding e Acesso
O app inclui fluxos dedicados de **login** e **cadastro** com:
- campos claros de credenciais,
- validação para dados ausentes,
- alternância de visibilidade de senha,
- estados de carregamento,
- e navegação protegida para que usuários não autenticados sejam redirecionados antes de acessar as abas principais.

Isso cria um caminho direto da criação de conta até o produto, sem fricção desnecessária.

### Escaneamento Rápido e Tomada de Decisão
Ao longo da experiência mobile, a UI foi otimizada para leitura rápida:
- cards visuais fortes,
- linhas curtas de metadados,
- uso persistente de bairro e preço,
- pills compactas de tags,
- skeletons de carregamento,
- empty states,
- e feedback háptico em interações-chave.

O resultado é um produto que ajuda usuários a tomar uma decisão em segundos, em vez de forçá-los a interpretar listas densas de eventos.

### Filtros Sem Complicação
Os filtros são tratados como uma ferramenta leve de decisão, não como um formulário pesado de busca.

A abordagem de usabilidade é:
- mostrar primeiro os filtros mais comuns,
- manter a tela de categoria focada em resultados,
- mover escolhas avançadas para uma bottom sheet/modal,
- tornar filtros ativos visíveis,
- e manter a ordenação fácil de alterar durante a navegação.

Isso equilibra velocidade e controle, o que é essencial em um produto de descoberta.

### Exploração Guiada por Proximidade
O fluxo do mapa foi desenhado em torno do comportamento real em mobile:
- o usuário concede localização,
- vê eventos distribuídos espacialmente,
- ajusta o raio,
- move o mapa para outra região,
- toca em “buscar aqui”,
- e abre o evento diretamente pela sheet ou pelo contexto do marcador.

Isso é mais útil do que um mapa passivo embutido. Vira uma superfície real de descoberta.

### Conteúdo Salvo e Retorno ao App
Eventos salvos e listas são um mecanismo importante de retenção.

O design atual do produto suporta:
- salvar a partir do feed,
- salvar a partir do detalhe do evento,
- lógica automática/padrão de lista salva no backend,
- e exibição de totais de listas na área de perfil.

Isso faz a URBEE ser útil tanto para decisões imediatas quanto para planejamento mais lento ao longo da semana.

### Prova Social Sem Ruído
A experiência social é intencionalmente contida.

Em vez de tentar virar um feed genérico de conteúdo, a URBEE conecta atividade à intenção de evento:
- pessoas querendo participar,
- comentários curtos,
- curtidas,
- relações de follow com organizadores,
- e atualizações ligadas aos organizadores.

Isso melhora relevância e mantém o feed alinhado com o propósito do produto.

## Arquitetura de Backend e Produto
### Estrutura de Monorepo
Organizei a base de código em um monorepo compartilhado para que contratos de produto não fossem duplicados entre superfícies.

As áreas principais são:
- `apps/mobile` para o app em Expo
- `apps/api` para a API em NestJS
- `apps/web` para a base da superfície web
- `packages/types` para contratos de domínio compartilhados
- `packages/ui` para UI web compartilhada
- `packages/config` para padrões de lint, formatação e TypeScript

Esse setup melhora consistência e facilita evoluir o produto entre mobile e web sem desalinhar modelos.

### Módulos da API
A API é dividida em módulos focados:
- **identity** para autenticação e acesso ao usuário atual
- **catalog** para recuperação de eventos e organizadores
- **social** para listas, follows e composição do feed
- **sources** para configuração de fontes
- **ingestion** para execuções de pipeline e auditoria de jobs
- **review** para aprovação/rejeição humana de itens extraídos com baixa confiança
- **automation** para callbacks seguros do n8n
- **system** para health checks

Isso dá à API uma forma clara orientada a produto, em vez de uma estrutura genérica de CRUD.

### Fluxos Autenticados do Produto
O backend suporta:
- endpoints de cadastro e login,
- acesso autenticado baseado em JWT,
- recuperação do usuário atual,
- acesso autenticado a listas,
- ações autenticadas de follow,
- e operações autenticadas de ingestão/revisão.

Essa separação importa porque a URBEE inclui tanto funcionalidades voltadas ao consumidor quanto ferramentas operacionais.

## Dados de Eventos, Confiança e Ingestão
Uma das partes mais fortes da URBEE como projeto de portfólio é que ela enfrenta o lado difícil de produtos de eventos: **qualidade de dados**.

### Gestão de Fontes
O backend inclui definições de fonte com configurações como:
- nome da fonte,
- URL base,
- cidade,
- tipo da fonte,
- peso de confiança,
- e configuração de rate limit.

Essa é a base para tratar ingestão de eventos como um sistema gerenciado, e não como um problema manual de planilha.

### Pensamento de Pipeline de Ingestão
O módulo de ingestão suporta:
- disparar ingestão por fonte ou cidade,
- criação de jobs de ingestão,
- registro de tentativas de extração,
- armazenamento de execuções,
- acompanhamento de níveis de confiança,
- e exigência de revisão quando a confiança da extração fica abaixo do limite.

Isso é valioso porque plataformas de eventos só são úteis na medida em que seus dados permanecem frescos e confiáveis.

### Revisão com Humano no Loop
A URBEE inclui um modelo de fila de revisão para resultados de extração com baixa confiança.

Isso significa que a plataforma foi desenhada para um fluxo híbrido prático:
- automação quando a confiança é alta,
- aprovação humana quando a confiança é menor,
- e transições auditáveis de estado para itens em revisão.

Essa é uma abordagem mais próxima de produção do que simplesmente raspar páginas e confiar cegamente em tudo.

### Hooks de Automação
Também construí um endpoint seguro de **callback para n8n** para que workflows externos possam reportar o status de execução dos jobs de volta para a plataforma.

Isso permite que a URBEE evolua para padrões operacionais mais robustos, como:
- ingestão agendada,
- tratamento de falhas,
- enriquecimento assíncrono,
- e fluxos de automação com múltiplas etapas.

## Modelagem de Dados
O modelo de domínio cobre as entidades centrais necessárias para esse tipo de plataforma:
- users
- organizer profiles
- venues
- events
- lists and list items
- follows
- posts
- sources
- ingestion jobs
- extraction attempts
- ingestion executions
- review queue items

Isso é importante em termos de portfólio porque mostra pensamento de sistema de produto, não apenas construção de telas.

## Contexto de Produto com Seed
Para tornar o sistema utilizável em desenvolvimento, eu populei a base com entidades realistas inspiradas em São Paulo, incluindo:
- organizadores como **Mamba Negra**, **Gop Tun** e **Casa Natura**
- locais como **Audio Club**, **MIS**, **SESC Pompeia** e **Parque Ibirapuera**
- múltiplos eventos públicos com categorias, tags, preços, URLs de origem e scores de confiança
- e posts associados a organizadores e membros

Isso ajudou a validar os fluxos de descoberta, social e ingestão sobre um contexto urbano crível.

## Direção de Design e Frontend
A interface mobile foi intencionalmente desenhada para não parecer um app utilitário genérico.

A direção de design foca em:
- tratamento visual escuro e adequado à vida noturna,
- cards grandes com mídia,
- apresentação de metadados com forte contraste,
- interações táteis via feedback háptico,
- descoberta orientada por mapa em dispositivos nativos,
- e padrões de motion/feedback que fazem o app parecer ativo e moderno.

Tratei a experiência como um produto de lifestyle/descoberta, e não como um diretório simples de eventos.

## Decisões de Engenharia Que Importam
### 1) Arquitetura de Produto Mobile-First
Eu priorizei a experiência nativa mobile porque descoberta de eventos, contexto de localização e planejamento de última hora são comportamentos naturalmente mobile.

### 2) Contratos Compartilhados Entre Apps
A estrutura de monorepo e a estratégia de pacotes compartilhados reduzem duplicação e criam um caminho mais limpo para escalar o produto entre superfícies.

### 3) Pensamento de Backoffice Operacional
A API faz mais do que servir listas de eventos. Ela também modela jobs de ingestão, estados de revisão, gestão de fontes e callbacks de automação. Isso torna o projeto muito mais realista como sistema de produto.

### 4) Separação Clara Entre UX de Descoberta e Infraestrutura Operacional
Os usuários veem um produto polido de descoberta, enquanto o backend está preparado para orquestração de fontes e fluxos de confiança. Essa separação é uma escolha forte de engenharia para manutenção de longo prazo.

## Estado Atual do Produto
Hoje, a URBEE pode ser descrita da melhor forma como:
- um **produto mobile de descoberta substancialmente construído**,
- uma **base backend bem estruturada para fluxos de catálogo/social/ingestão**,
- e uma **superfície web pronta para expansão, mas ainda não concluída em termos de funcionalidades**.

Essa distinção importa. Prefiro apresentar o produto com honestidade como um sistema sério de mobile + API com uma camada web em crescimento, em vez de inflar artificialmente o que o app web já faz hoje.

## Por Que Este Projeto Importa no Meu Portfólio
A URBEE demonstra que eu consigo entregar:
- **UX de produto para consumidor**, não apenas landing pages
- **arquitetura de app mobile** com navegação real e fluxos de estado
- **interfaces de descoberta sensíveis à localização**
- **funcionalidades sociais com utilidade ligada ao propósito do produto**
- **sistemas backend para confiabilidade operacional**
- **modelagem de dados para plataformas com múltiplas entidades**
- **design de API e automação além de CRUD simples**

Ela mostra minha capacidade de atuar em toda a stack de um produto onde **qualidade do conteúdo, confiança, usabilidade e arquitetura importam ao mesmo tempo**.

## Palavras-chave / Serviços para Freelancing
- Desenvolvimento mobile com Expo e React Native
- Desenvolvimento de plataforma de descoberta de eventos
- Design de produto baseado em localização
- Funcionalidades sociais de planejamento e conteúdo salvo
- Arquitetura de API com NestJS
- Sistemas backend com Prisma + PostgreSQL
- OpenAPI e design de contratos de API
- Arquitetura de workflow de ingestão
- Sistemas de revisão com humano no loop
- Arquitetura de monorepo com contratos TypeScript compartilhados
- Desenvolvimento full-stack orientado a produto

---
Se você precisa de um **produto mobile-first** que combine UX forte, estrutura backend real e modelagem de domínio cuidadosa, a URBEE representa o tipo de sistema que eu construo.
