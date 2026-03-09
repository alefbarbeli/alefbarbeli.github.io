---
title: 'E-mail Platform Lab'
category: 'Aplicação Full-Stack'
image: '/images/works/work8.jpg'
description: 'Um laboratório completo de engenharia de e-mail com templates artesanais, portal de aprovação e construtor visual por blocos.'
projectUrl: 'https://github.com/alefb/kake/tree/main'
stack: 'Node.js, React, TypeScript, Next.js, Vite, Tailwind CSS, Zustand, dnd-kit'
tags:
  - Desenvolvimento de E-mail
  - Templates HTML de E-mail
  - Construtor de Newsletter
  - E-mails Transacionais
  - React
  - Next.js
  - TypeScript
  - Tailwind CSS
  - Fluxo de QA
  - CI/CD
date: '2026-02-23'
featured: true
---

## Resumo do Projeto
Email Platform Lab é uma plataforma de e-mail em estilo de produção que construí de ponta a ponta para demonstrar templating avançado e operações de campanhas.  
O projeto evoluiu de um exercício de template estático para um sistema completo de workflow, com proteções de renderização, checkpoints de QA e ferramentas internas para aprovação de campanhas.

## Por Que Eu Construí
Eu queria um projeto de portfólio que comprovasse entrega prática, não apenas acabamento visual.  
E-mail é um canal de alta fricção, no qual pequenos erros de HTML/CSS podem quebrar comunicações críticas para o negócio, então construí este laboratório para demonstrar:

- desenvolvimento robusto de templates responsivos para e-mail;
- engenharia de compatibilidade entre clientes de e-mail;
- automação de fluxo para operações de marketing;
- arquitetura sustentável para iteração rápida.

## Estrutura da Plataforma
### 1) Email Lab (`apps/email-lab`)
- Templates HTML artesanais para casos de uso de newsletter, promoções e transacionais.
- Partials em estilo de componentes (`header`, `button`, `footer`) com hidratação de tokens.
- Pipeline de build que sanitiza a saída, compila templates e gera um índice de preview.
- Monitoramento de tamanho de payload para evitar clipping no Gmail e melhorar a prontidão de entregabilidade.

### 2) Portal Growth Admin (`apps/admin-portal`)
- Interface em React + TypeScript para gerenciar status de campanhas e fluxo de revisão.
- Modelo de estado com Zustand e transições protegidas:
  - `Draft -> In Review -> Approved/Rejected`
- Permissões por papel e eventos de auditoria para rastreabilidade.
- Validação de QA e conteúdo antes da aprovação para reduzir erros de publicação.

### 3) Construtor Visual de E-mail (`apps/email-builder`)
- Editor drag-and-drop em Next.js + React com `@dnd-kit`.
- Composição baseada em blocos para seções reutilizáveis de e-mail.
- Controles de inspeção para espaçamento, tipografia e sobrescritas de conteúdo.
- Importação/exportação em JSON para conectar prototipação visual e templates de produção.

## Decisões Técnicas e Soluções
- Implementei comportamento bulletproof para CTAs com fallback em VML para Outlook e links padrão para clientes modernos.
- Adicionei regras de sanitização para normalizar padrões problemáticos de markup e reduzir regressões de renderização.
- Incluí padrões de resiliência para dark mode, lidando com inversão forçada e troca de logotipo com segurança.
- Criei templates de teste de acessibilidade/localização para validar textos longos, RTL e estrutura semântica.
- Montei um checklist de QA realista considerando comportamento em Apple Mail, Gmail, Outlook e Yahoo.

## Linha do Tempo de Build (a partir do Git History)
1. `2026-02-09`: scaffold inicial do email lab orientado por curso e workflow de administração.
2. `2026-02-22`: lançamento do construtor visual de e-mail e expansão da documentação.
3. `2026-02-23`: refinamentos de nomenclatura e estrutura após estabilização.

## Resultados Relevantes para Freelance
Este projeto demonstra as capacidades exatas necessárias para engenharia moderna de e-mail em contexto freelance:

- codificação de e-mails HTML responsivos;
- sistemas de templates para newsletters;
- implementação de e-mails transacionais;
- correções de compatibilidade para Outlook/Gmail;
- desenho de processo de QA de e-mail;
- ferramentas internas para times de marketing e CRM;
- ownership full-stack do produto, da arquitetura à qualidade de entrega.
