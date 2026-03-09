---
title: 'CENAS x NITROGEN'
category: 'Code'
image: '/images/works/work7.jpg'
description: 'Headless Shopify storefront em Nuxt 4 com arquitetura Nitrogen, foco em performance, SEO técnico e engenharia escalável.'
projectUrl: 'https://cenas.com.br/'
stack: 'Nuxt 4 + Shopify Storefront API + TypeScript + GraphQL'
tags:
  - Nuxt 4
  - Shopify
  - Headless Commerce
  - GraphQL
  - TypeScript
  - SEO
  - Performance
date: '2026-03-01'
featured: true
---

## Project Overview
CENAS is a **headless Shopify storefront** I designed and developed end-to-end using **Nuxt 4** and the **Nitrogen architecture** (a Nuxt approach inspired by Shopify Hydrogen).

This project started as a strong visual concept and evolved into a production-ready commerce platform with a full customer journey: catalog discovery, product pages, cart, checkout handoff, account area, address management, search, localization, newsletter, and back-in-stock flows.

The goal was not just to build a beautiful storefront, but to build a **stable, scalable, maintainable e-commerce application** I could confidently run in production.

## My Role
I built this project solo and owned the entire delivery lifecycle:
- Product thinking and UX direction
- Frontend architecture and component system
- Shopify Storefront API integration
- Data modeling with GraphQL fragments/operations
- State management with Pinia
- Performance and SEO optimization
- API hardening (validation, payload limits, rate limiting)
- Testing and CI quality gates
- Ongoing refactoring for long-term maintainability

## Stack
- **Framework:** Nuxt 4, Vue 3, TypeScript
- **Commerce:** Shopify Storefront API (GraphQL)
- **Architecture:** Nitrogen-style composables + server proxy + typed operations
- **State:** Pinia + persisted state plugin
- **Styling/UI:** Tailwind CSS v4, custom typography system
- **Media/UX:** Nuxt Image, Embla Carousel, GSAP, OGL, Lenis
- **Marketing/Tracking:** Klaviyo, Google Analytics/gtag, Vercel Analytics & Speed Insights
- **Tooling:** GraphQL Code Generator, ESLint, Vitest, GitHub Actions CI

## What I Built
### Full Headless Commerce Experience
- Dynamic collection/category pages with filtering, sorting, and pagination
- Product detail pages with media galleries, variants, size guide, recommendations, and rich product content
- Cart drawer and cart line management (add/update/remove)
- Authentication flows: register, login, recover password, reset password
- Account area: profile context, orders, saved addresses (add/edit/delete + default address)
- Predictive and full search experience
- Localization-aware storefront behavior (country/language/currency)

### Modular Server Layer for Shopify
I implemented a server-side proxy and organized operations by domain (`cart`, `customer`, `product`, `collection`, `search`, `localization`), with typed GraphQL operations and reusable fragments.

This structure keeps the frontend clean, secures credentials, and makes feature work faster and safer.

## Engineering Solutions That Made It Stable
### 1) Typed GraphQL Workflow
- Codegen-generated TypeScript types for queries/mutations
- Typed operation wrappers for each commerce domain
- Safer refactors and fewer runtime surprises

### 2) Hardened API Proxies
- Request body validation
- Content-length guards against oversized payloads
- In-memory rate limiting per endpoint namespace/IP

This reduced risk in external integrations (Shopify/Klaviyo) and improved resilience under invalid or abusive traffic.

### 3) Performance-First Decisions
- Nuxt image optimization and modern formats
- Non-blocking client bootstrap for smoother initial rendering
- Bounded GraphQL cache strategy (TTL + LRU behavior)
- Deferred analytics/lenis initialization to avoid competing with critical rendering

### 4) SEO Foundation for Commerce
- Canonical URLs
- Open Graph and Twitter metadata on key pages
- Runtime-config-driven site URL support
- Better discoverability for product/collection/search pages

### 5) Quality Gates and Maintainability
- Linting, Nuxt type-checking, and unit tests as recurring quality gates (including CI workflows)
- Typed error helpers replacing broad `any`-style handling
- Clear improvement roadmap executed in incremental commits

## Delivery Story (From Visual Build to Production Hardening)
A key part of this project was the progression:
1. **Visual and UX build-out** (new interface, mobile improvements, richer product/collection experiences)
2. **Core commerce features** (cart, auth, account, filters, search, localization, Klaviyo)
3. **Technical hardening** (analytics unification, proxy security, tests + CI, type-safety, caching, SEO, runtime config)
4. **Final stabilization pass** (lint/typecheck cleanup and operational consistency)

This is exactly how I like to deliver freelance commerce projects: fast iteration first, then systematic hardening until the app is reliable.

## Design and Frontend Direction
CENAS was built with a deliberate visual voice:
- Strong editorial typography
- Custom hero and category interactions
- Motion and transitions that support brand feel without sacrificing UX clarity
- Responsive behavior tailored for mobile and desktop shopping journeys

The result is a storefront that feels distinctive while remaining practical and conversion-oriented.

## Why This Project Matters in My Portfolio
This case study demonstrates that I can deliver:
- **End-to-end headless commerce implementation**
- **Nuxt + Shopify architecture** that is production-ready
- **Performance, SEO, and integration hardening** beyond surface-level UI work
- **Long-term maintainability** with typed systems and clear engineering standards

## Freelance Keywords / Services
- Headless Shopify development
- Nuxt.js e-commerce development
- Shopify Storefront API integration
- Custom storefront architecture
- Shopify Hydrogen-inspired builds with Nuxt
- Performance optimization for e-commerce
- Technical SEO for headless storefronts
- Conversion-focused frontend engineering
- GraphQL + TypeScript commerce architecture
- Klaviyo integration (newsletter / back-in-stock)
- CI/CD quality setup for frontend teams

---
If you need a custom **headless Shopify storefront** with strong branding and serious engineering quality, this is the type of project I deliver.
