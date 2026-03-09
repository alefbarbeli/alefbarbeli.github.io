---
title: 'URBEE'
category: 'Mobile'
image: '/images/works/urbee.png'
description: 'A mobile-first event discovery platform with social planning, map-based exploration, and ingestion-oriented backend architecture.'
stack: 'Expo, React Native, NestJS, Fastify, Prisma, PostgreSQL, Turborepo'
tags:
  - Expo
  - React Native
  - NestJS
  - Fastify
  - Prisma
  - PostgreSQL
  - Product Design
  - Geolocation
  - Event Discovery
  - Monorepo
date: '2026-03-09'
featured: true
---

# URBEE

## Project Overview
URBEE is a **mobile-first event discovery platform** I designed and engineered as a multi-app product covering **consumer discovery, lightweight social planning, and ingestion-oriented backend operations**.

The core idea was to make urban discovery feel cleaner, faster, and more trustworthy than traditional event platforms. Instead of treating events like a noisy classifieds feed, URBEE treats them as curated experiences with stronger context: category, neighborhood, timing, price, organizer identity, social proof, and map proximity.

The product is structured as a **pnpm + Turborepo monorepo** with:
- a **mobile app** focused on discovery and planning,
- a **NestJS API** for catalog, auth, social, source management, ingestion, review flows, and automation callbacks,
- a **web app foundation** for future multi-surface expansion,
- and **shared packages** for cross-app types and UI.

This project matters because it combines **consumer product UX**, **location-based interaction design**, and **backend pipeline thinking** in the same system. It is not just a frontend concept. It is a product architecture for keeping event data usable, current, and socially actionable.

## My Role
I built URBEE as an end-to-end product and engineering project, including:
- Product definition and information architecture
- Mobile UX for discovery, event detail, social feed, lists, and profile flows
- Monorepo architecture with shared packages
- API design with NestJS + Fastify
- Domain modeling for users, organizers, venues, events, lists, posts, follows, sources, ingestion jobs, and review queue items
- Prisma persistence design and seed strategy
- OpenAPI/Swagger contract generation
- Ingestion workflow design with review and automation hooks
- Frontend/backend integration patterns with React Query and authenticated requests

## Stack
- **Monorepo:** pnpm, Turborepo
- **Mobile:** Expo, React Native, Expo Router, TypeScript
- **Data Fetching:** TanStack React Query
- **UI/UX:** Expo Image, Expo Haptics, Expo Location, React Native Maps, Blur/Glass effects
- **API:** NestJS, Fastify, TypeScript
- **Persistence:** Prisma, PostgreSQL
- **Infra Services:** Redis, Docker Compose
- **Contracts:** Swagger / OpenAPI
- **Automation:** n8n callback integration
- **Shared Packages:** workspace types and UI

## Product Vision
URBEE was designed around a simple product goal:

**Help people discover what is happening in the city and turn that discovery into an actual plan.**

That means the app has to solve more than search. It has to support:
- quick browsing when the user does not know what they want yet,
- filtering by moment, category, price, and distance,
- confidence in event details,
- a map-first decision flow,
- and lightweight social mechanics so discovery can become coordination.

The product direction is especially strong for large urban environments like Sao Paulo, where event supply is broad, fragmented, and often poorly organized across source websites and social posts.

## What I Built
### 1) Mobile-First Discovery Experience
The mobile app is organized around five core navigation areas:
- **Hoje**
- **Explorar**
- **Mapa**
- **Social**
- **Perfil**

This structure mirrors how real users browse city plans:
- start from a daily feed,
- branch into category exploration,
- switch to map mode when proximity matters,
- check what friends or followed organizers are doing,
- and save or revisit plans from profile/lists.

### 2) Home Feed Designed for Fast Discovery
The **Hoje** tab is built as a layered discovery feed instead of a flat list.

It includes:
- a search input for direct lookup,
- quick chips for date and tag-based shortcuts,
- a trending section with visual cards,
- event cards with image, date, neighborhood, tags, and price,
- save and share actions directly on the card,
- and a social feed section that shows activity around events.

This gives the user multiple entry points into discovery:
- browse by momentum,
- browse by theme,
- browse by social context,
- or jump directly into a specific event.

### 3) Category-Based Exploration
The **Explorar** area turns broad discovery into a more intentional browsing flow.

Users can enter categories such as:
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

Inside each category, the experience supports:
- temporal filters such as today, tomorrow, and weekend,
- price filters from free to budget ranges,
- sorting modes such as trending, earliest, and cheapest,
- infinite scrolling,
- and modal-based filter controls that keep the browsing experience clean on mobile.

This is important because discovery apps fail when they force the same layout on every user. URBEE gives both fast browsing and more structured narrowing.

### 4) Map-Based Event Discovery
One of the strongest usability features is the **Mapa** tab.

On native mobile devices, I implemented:
- live location permission handling,
- a map centered on the user or a Sao Paulo default region,
- event markers with visible price labels,
- marker selection tied to a collapsible bottom sheet,
- date and radius filters,
- a "search in this area" interaction after region movement,
- and a list view of nearby events beneath the map.

This supports a very practical user behavior:
- "show me what is happening near me",
- "show me what is happening in this neighborhood tonight",
- or "I am going to another part of the city, what is around there?"

The usability value here is high because event decisions are often geographic before they are thematic.

### 5) Social Planning Layer
URBEE is not a full social network. It uses social features where they add utility to planning.

The current structure supports:
- personal saved lists,
- feed activity related to events,
- organizer following,
- posts and event updates in the feed,
- and profile-level stats that make saved/planned behavior visible.

The **Social** tab displays user activity tied to events, including:
- who wants to go,
- what event they are referencing,
- a short comment,
- and quick actions such as like, comment intent, and share.

This is a deliberate product choice. The social layer exists to reduce planning friction and increase confidence through shared discovery, not to overwhelm the product with generic engagement mechanics.

### 6) Event Detail as the Conversion Screen
The event detail screen is where browsing turns into intent.

I built it to consolidate the most decision-critical information:
- hero media,
- title and tags,
- full date/time presentation,
- venue and neighborhood context,
- ticket or free-entry state,
- attendee count/social proof,
- full description,
- save and share actions,
- and a primary CTA that adapts between "Confirmar presenca" and "Comprar ingresso".

This screen is structured to answer the practical questions quickly:
- What is this?
- When is it?
- Where is it?
- Is it free or paid?
- Are other people interested?
- Do I want to save it, share it, or go now?

## Detailed Usability and User Flows
### Onboarding and Access
The app includes dedicated **login** and **registration** flows with:
- clear credential fields,
- validation for missing data,
- password visibility toggle,
- loading states,
- and guarded navigation so unauthenticated users are redirected before accessing the main tabs.

This creates a straightforward path from account creation into the product without unnecessary friction.

### Fast Scanning and Decision-Making
Across the mobile experience, the UI is optimized for rapid scanning:
- strong visual cards,
- short metadata rows,
- persistent use of neighborhood and price,
- compact tag pills,
- loading skeletons,
- empty states,
- and haptic feedback on key interactions.

The result is a product that helps users make a decision in seconds rather than forcing them to parse dense event listings.

### Filtering Without Overcomplication
Filtering is treated as a lightweight decision tool, not as a heavy search form.

The usability approach is:
- show the most common filters first,
- keep the category screen focused on results,
- move advanced filter choices into a bottom sheet/modal,
- make active filters visible,
- and keep sort selection easy to change during browsing.

This balances speed and control, which is essential for a discovery product.

### Proximity-Driven Exploration
The map flow was designed around actual mobile behavior:
- the user grants location,
- sees events plotted spatially,
- adjusts radius,
- pans to another region,
- taps "search here",
- and opens the event directly from the sheet or marker context.

This is more useful than a passive map embed. It becomes a real discovery surface.

### Saved Content and Return Visits
Saved events and lists are an important retention mechanic.

The current product design supports:
- saving from the feed,
- saving from event detail,
- automatic/default saved-list logic in the backend,
- and surfacing list totals in the profile area.

This makes URBEE useful both for immediate decisions and for slower planning across the week.

### Social Proof Without Noise
The social experience is intentionally restrained.

Instead of trying to become a generic content feed, URBEE ties activity back to event intent:
- people wanting to attend,
- short commentary,
- likes,
- organizer-follow relationships,
- and organizer-related updates.

This improves relevance and keeps the feed aligned with the product purpose.

## Backend and Product Architecture
### Monorepo Structure
I organized the codebase into a shared monorepo so product contracts are not duplicated across surfaces.

The main areas are:
- `apps/mobile` for the Expo app
- `apps/api` for the NestJS API
- `apps/web` for the web surface foundation
- `packages/types` for shared domain contracts
- `packages/ui` for shared web UI
- `packages/config` for linting, formatting, and TypeScript standards

This setup improves consistency and makes it easier to evolve the product across mobile and web without drifting models.

### API Modules
The backend is split into focused modules:
- **identity** for auth and current-user access
- **catalog** for event and organizer retrieval
- **social** for lists, follows, and feed assembly
- **sources** for source configuration
- **ingestion** for pipeline runs and job auditing
- **review** for human approval/rejection of low-confidence extraction items
- **automation** for secure n8n callbacks
- **system** for health checks

This gives the API a clear product-oriented shape rather than a generic CRUD structure.

### Authenticated Product Flows
The backend supports:
- register and login endpoints,
- JWT-based authenticated access,
- current-user retrieval,
- authenticated list access,
- authenticated follow actions,
- and authenticated ingestion/review operations.

That separation matters because URBEE includes both consumer-facing features and operational tooling.

## Event Data, Trust, and Ingestion
One of the strongest parts of URBEE as a portfolio project is that it addresses the hard side of event products: **data quality**.

### Source Management
The backend includes source definitions with configuration such as:
- source name,
- base URL,
- city,
- source type,
- confidence weight,
- and rate limit configuration.

This is the foundation for treating event ingestion as a managed system rather than a manual spreadsheet problem.

### Ingestion Pipeline Thinking
The ingestion module supports:
- triggering ingestion by source or city,
- creating ingestion jobs,
- recording extraction attempts,
- storing execution records,
- tracking confidence levels,
- and requiring review when extraction confidence falls below threshold.

This is valuable because event platforms are only as useful as their freshness and reliability.

### Human-in-the-Loop Review
URBEE includes a review queue model for low-confidence extraction results.

That means the platform is designed for a practical hybrid workflow:
- automation where confidence is high,
- human approval when confidence is weaker,
- and auditable state transitions for review items.

This is a more production-aware approach than simply scraping pages and trusting everything blindly.

### Automation Hooks
I also built a secure **n8n callback endpoint** so external workflows can report job execution status back into the platform.

This enables URBEE to grow into more robust operational patterns such as:
- scheduled ingestion,
- failure handling,
- async enrichment,
- and multi-step automation flows.

## Data Modeling
The domain model spans the core product entities needed for this kind of platform:
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

This is important in portfolio terms because it shows product systems thinking, not just screen building.

## Seeded Product Context
To make the system usable in development, I seeded realistic Sao Paulo-flavored entities including:
- organizers such as **Mamba Negra**, **Gop Tun**, and **Casa Natura**
- venues such as **Audio Club**, **MIS**, **SESC Pompeia**, and **Parque Ibirapuera**
- multiple public events with categories, tags, pricing, source URLs, and confidence scores
- and posts associated with organizers and members

This helped validate the discovery, social, and ingestion flows against a believable urban event context.

## Design and Frontend Direction
The mobile interface is intentionally not built like a generic utility app.

The design direction focuses on:
- dark, nightlife-friendly visual treatment,
- large media cards,
- contrast-forward metadata presentation,
- tactile interactions through haptics,
- map-first discovery on native devices,
- and motion/feedback patterns that make the app feel active and modern.

I treated the experience as a lifestyle/discovery product rather than a plain events directory.

## Engineering Decisions That Matter
### 1) Mobile-First Product Architecture
I prioritized the native mobile experience because event discovery, location context, and last-minute planning are naturally mobile behaviors.

### 2) Shared Contracts Across Apps
The monorepo structure and shared package strategy reduce duplication and create a cleaner path for scaling the product across surfaces.

### 3) Operational Backoffice Thinking
The API does more than serve lists of events. It also models ingestion jobs, review states, source management, and automation callbacks. That makes the project much more realistic as a product system.

### 4) Clear Separation Between Discovery UX and Operational Infrastructure
Users see a polished discovery product, while the backend is prepared for source orchestration and trust workflows. That separation is a strong engineering choice for long-term maintainability.

## Current Product State
URBEE today is best described as:
- a **substantially built mobile discovery product**,
- a **well-structured backend foundation for catalog/social/ingestion workflows**,
- and a **web surface ready for expansion rather than already feature-complete**.

That distinction matters. I would rather present the product honestly as a serious mobile + API system with a growing web layer than inflate what the web app currently does.

## Why This Project Matters in My Portfolio
URBEE demonstrates that I can deliver:
- **consumer product UX**, not just landing pages
- **mobile app architecture** with real navigation and state flows
- **location-aware discovery interfaces**
- **social utility features tied to product purpose**
- **backend systems for operational reliability**
- **data modeling for multi-entity platforms**
- **API and automation design beyond simple CRUD**

It shows my ability to work across the full stack of a product where **content quality, trust, usability, and architecture all matter at the same time**.

## Freelance Keywords / Services
- Mobile app development with Expo and React Native
- Event discovery platform development
- Location-based product design
- Social planning and saved-content features
- NestJS API architecture
- Prisma + PostgreSQL backend systems
- OpenAPI and API contract design
- Ingestion workflow architecture
- Human-in-the-loop review systems
- Monorepo architecture with shared TypeScript contracts
- Product-focused full-stack development

---
If you need a **mobile-first product** that combines strong UX, real backend structure, and thoughtful domain modeling, URBEE represents the kind of system I build.
