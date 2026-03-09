---
title: 'Email Platform Lab'
category: 'Full-Stack Application'
image: '/images/works/work8.jpg'
description: 'A complete email engineering lab with handcrafted templates, an approval portal, and a visual block builder.'
projectUrl: 'https://github.com/alefb/kake/tree/main'
stack: 'Node.js, React, TypeScript, Next.js, Vite, Tailwind CSS, Zustand, dnd-kit'
tags:
  - Email Development
  - HTML Email Templates
  - Newsletter Builder
  - Transactional Emails
  - React
  - Next.js
  - TypeScript
  - Tailwind CSS
  - QA Workflow
  - CI/CD
date: '2026-02-23'
featured: true
---

## Project Summary
Email Platform Lab is a production-style email platform I built end-to-end to showcase advanced email templating and campaign operations.  
The project evolved from a static template exercise into a complete workflow system with rendering safeguards, QA checkpoints, and internal tooling for campaign approvals.

## Why I Built It
I wanted a portfolio project that proves practical delivery, not just UI polish.  
Email is a high-friction channel where small HTML/CSS mistakes can break business-critical communication, so I built this lab to demonstrate:

- robust responsive email template development;
- cross-client compatibility engineering;
- workflow automation for marketing operations;
- maintainable architecture for fast iteration.

## Platform Structure
### 1) Email Lab (`apps/email-lab`)
- Handcrafted HTML templates for newsletter, promo, and transactional use cases.
- Component-style partials (`header`, `button`, `footer`) with token hydration.
- Build pipeline that sanitizes output, compiles templates, and generates a preview index.
- Payload size tracking to avoid Gmail clipping and improve deliverability readiness.

### 2) Growth Admin Portal (`apps/admin-portal`)
- React + TypeScript interface to manage campaign status and review flow.
- Zustand state model with guarded transitions:
  - `Draft -> In Review -> Approved/Rejected`
- Role-based permissions and audit events for traceability.
- QA and content validation before approval to reduce publishing errors.

### 3) Visual Email Builder (`apps/email-builder`)
- Next.js + React drag-and-drop editor with `@dnd-kit`.
- Block-based composition for reusable email sections.
- Inspector controls for spacing, typography, and content overrides.
- JSON import/export to bridge visual prototyping and production templates.

## Technical Decisions and Solutions
- Implemented bulletproof CTA behavior with Outlook VML fallback and standard links for modern clients.
- Added sanitization rules to normalize problematic markup patterns and reduce rendering regressions.
- Included dark mode resilience patterns to handle forced inversion and logo swapping safely.
- Created accessibility/localization test templates to validate long text, RTL, and semantic structure.
- Built a realistic QA checklist around Apple Mail, Gmail, Outlook, and Yahoo behavior.

## Build Timeline (from Git History)
1. `2026-02-09`: initial scaffold of the course-driven email lab and admin workflow.
2. `2026-02-22`: launch of the visual email builder and expanded documentation.
3. `2026-02-23`: naming and structural refinements after stabilization.

## Freelancer-Relevant Outcomes
This project demonstrates the exact capabilities needed for modern freelance email engineering:

- responsive HTML email coding;
- newsletter template systems;
- transactional email implementation;
- Outlook/Gmail compatibility fixes;
- email QA process design;
- internal tooling for marketing and CRM teams;
- full-stack product ownership from architecture to release quality.
