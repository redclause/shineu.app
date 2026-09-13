# ShineU — Influence Marketing OS

ShineU is a creator/influence marketing workspace for discovering creators, managing relationships, running campaigns, reviewing content, scheduling deliverables, tracking payments, and reporting performance.

## Current product build

The app is a functional Next.js application rather than a static dashboard mockup. The main workspace includes:

- Overview dashboard with campaign performance, attention queue, creator opportunities, campaign progress, and creator funnel
- Creator discovery with search, category filtering, fit scoring, shortlist actions, and creator creation
- Creator CRM with editable local records and removal
- Relationship pipeline with outreach/negotiation stages
- Campaign management with campaign creation, activation, progress, budgets, revenue and creator counts
- Content approval workflow with pending, approved and changes-requested states
- Weekly campaign calendar with deliverables, payments, deadlines and launches
- Payment tracking with pending, scheduled and paid states
- Analytics for ROAS, revenue, spend, creator quality and campaign performance
- Report center with CSV export and executive snapshots
- Workspace settings and integration placeholders
- Responsive desktop/tablet/mobile interface
- Browser persistence using localStorage so records survive refreshes without requiring a database

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

For a production build:

```bash
npm run build
npm start
```

## Data architecture

This first complete product build intentionally uses a local-first storage adapter (`localStorage`). This makes every core workflow usable immediately and keeps the repository dependency-light.

For a multi-user production SaaS deployment, the storage layer should be replaced with a hosted database plus authentication. The UI/domain models are already separated enough to make that migration straightforward: creators, campaigns, content, payments and workspace settings are explicit entities rather than hard-coded screen-only content.

Recommended production expansion:

1. Authentication and team/workspace membership
2. PostgreSQL persistence and migrations
3. Role-based access control
4. Social platform OAuth/API connections
5. Object storage for content submissions
6. Email/outreach delivery and webhook processing
7. Real attribution/affiliate conversion ingestion
8. Audit logs and immutable payment records
9. Background jobs for imports, syncs and reporting
10. Automated tests and production observability

## CI

`.github/workflows/ci.yml` runs dependency installation and `npm run build` for pushes and pull requests targeting `main`.
