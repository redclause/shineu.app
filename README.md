# ShineU — Influence Marketing OS

ShineU is a **free, local-first creator and influence marketing application** for desktop and mobile. It is designed as a complete workspace for creator discovery, relationships, campaigns, content approvals, scheduling, payments, analytics and reporting.

The application itself is **not deployed on Vercel**. The future ShineU marketing/landing website can be hosted separately; the application repository remains focused on the installable product.

## Product modules

- Overview dashboard with campaign performance, attention queue, creator opportunities, campaign progress and creator funnel
- Creator discovery with search, category filtering, fit scoring, shortlists and creator creation
- Creator CRM with local records and relationship management
- Relationship pipeline for discovery, outreach, negotiation, contracting and active relationships
- Campaign management with budgets, creator counts, progress, revenue and status
- Content approval workflow with pending, approved and changes-requested states
- Weekly campaign calendar for deliverables, deadlines, launches and payments
- Payment tracking with pending, scheduled and paid states
- Analytics for ROAS, revenue, spend, creator quality and campaign performance
- Report center with executive snapshots and CSV export
- Workspace settings and integration configuration surface
- Responsive desktop/tablet/mobile interface
- Local-first persistence so core records survive restarts without requiring a hosted database

## Application architecture

ShineU uses Next.js/React for the shared interface and **Tauri 2** as the native application shell. Tauri supports Windows, macOS, Linux, Android and iOS from the same application codebase, while keeping the frontend static and locally bundled. The Next.js build is configured with `output: 'export'` and Tauri embeds the generated `out/` directory.

The current data layer is intentionally local-first. This keeps ShineU free to use and useful offline. The application does not require Vercel, a hosted API or a mandatory cloud account for its core workflows.

## Run the web interface locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Run the desktop application locally

After installing the Rust/Tauri prerequisites for your operating system:

```bash
npm install
npm run tauri dev
```

Create production desktop bundles with:

```bash
npm run tauri build
```

Tauri produces platform-specific application bundles/installers from the same repository.

## Mobile targets

Tauri 2 also supports Android and iOS. The native project directories are generated on a development machine with the Tauri CLI after the required Android SDK or Xcode tooling is installed:

```bash
npm run tauri android init
npm run tauri android dev
```

For iOS on macOS:

```bash
npm run tauri ios init
npm run tauri ios dev
```

Mobile signing, store metadata and release credentials should be added only when the first public mobile release is ready.

## Data architecture

The first complete product build intentionally uses local-first browser/app storage. The domain models are explicit entities: creators, campaigns, content, payments, relationships and workspace settings. This gives ShineU a usable foundation without making a cloud account mandatory.

Future optional cloud capabilities can be added without changing the core product model:

1. Optional account synchronization
2. Encrypted multi-device workspace sync
3. Optional team/workspace membership and RBAC
4. Social platform OAuth/API connections
5. Content/object storage
6. Email and outreach delivery
7. Attribution and affiliate conversion ingestion
8. Audit logs and immutable payment records
9. Background import/sync/reporting jobs
10. Automated tests and production observability

## CI

GitHub Actions verifies the static frontend build and attempts Tauri desktop builds for Windows, macOS and Linux on pushes and pull requests targeting `main`.

## Product direction

ShineU is being built as a **real free application**, not a Vercel-hosted demo. The priority is a reliable, polished, local-first experience first; optional online integrations can be layered on afterward.
