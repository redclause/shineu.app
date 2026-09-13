# ShineU — Creator & Advertiser Collaboration Planner

ShineU is a **free creator collaboration and influence marketing planner** for influencers, creators, advertisers, agencies and small brands.

The core idea is simple: **discover people, publish services, create campaigns, contact each other, and organize the work.** ShineU is not a payment processor. The primary experience is web-based, with an optional Windows desktop `.exe` installer for users who prefer an installed app.

## Core product

- Creator and advertiser profiles
- Creator discovery and search
- Public creator services with prices and deliverables
- Free campaign publishing for advertisers
- Campaign briefs, budgets, platforms and deadlines
- Direct collaboration messaging
- Saved creators and services
- Collaboration planner
- Payment-route profiles for Meta/Instagram/Facebook or external payment links
- Local browser persistence for the current product layer
- Responsive desktop and mobile web interface
- Optional Windows desktop application packaged as a normal `.exe` installer

## How collaboration works

1. A creator builds a profile and publishes services.
2. An advertiser searches creators or services.
3. An advertiser can publish a free campaign with a brief, budget and deadline.
4. A creator or advertiser contacts the other person through ShineU.
5. Both sides discuss deliverables, timing and price.
6. They arrange payment directly through the payment route they choose.
7. ShineU remains the planning and collaboration layer around the relationship.

## Payments

ShineU can display a user's chosen payment route, including an Instagram/Facebook/Meta payment profile or an external payment link. **ShineU does not hold funds, store card details, or process payments itself.** Users should only publish public payment information and keep passwords, security codes and financial credentials outside ShineU.

## Architecture

ShineU uses **Next.js + React** for the web application. The optional Windows desktop package uses Tauri 2 internally to package the same application as a Windows executable installer. Users do not need to interact with Tauri directly.

The Windows package targets the **NSIS `.exe` installer**. The generated installer is placed under:

```text
src-tauri/target/release/bundle/nsis/
```

The desktop package does not replace the future backend. Authentication, database persistence, real-time messaging and social API integrations will remain application/backend concerns.

## Run locally on the web

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production web build:

```bash
npm run build
npm start
```

## Windows `.exe` installer

The normal user-facing deliverable is a Windows setup executable. The repository is configured to build an NSIS installer through GitHub Actions on `windows-latest`.

The build command is:

```bash
npm install
npm run tauri:build
```

The resulting installer is generated under:

```text
src-tauri/target/release/bundle/nsis/
```

The filename will normally resemble:

```text
ShineU_0.3.0_x64-setup.exe
```

The exact filename can vary with the application version and Tauri packaging configuration.

The GitHub Actions workflow uploads the generated `.exe` as the artifact:

```text
ShineU-Windows-x64-Setup
```

The end user only needs the resulting `.exe`: download it, double-click it, and install ShineU like a normal Windows desktop application.

## Current data model

The application currently models:

- creators
- services
- campaigns
- messages
- saved items
- payment methods
- planner items
- user role: Creator, Advertiser or Both

The first product layer persists these records in browser localStorage so the application remains simple and free to use.

## Next engineering layers

The next production layers should focus on the product itself rather than expanding desktop packaging:

1. Real authentication and public profiles
2. Database persistence and multi-device sync
3. Real-time messaging
4. Campaign applications and invitations
5. Creator/advertiser matching and filters
6. Deliverables, milestones and approvals
7. Calendar and task management
8. Optional Meta/Instagram/Facebook OAuth integrations
9. Optional external payment-link integrations
10. Notifications, moderation, reporting and trust features

## CI

GitHub Actions verifies the Next.js production build on pushes and pull requests targeting `main`. A separate Windows workflow builds the `.exe` installer on `windows-latest` and uploads the generated installer as a downloadable workflow artifact.

## Product direction

ShineU is being built as a **free, useful marketplace-planner and collaboration network**, not as a payment processor. The product should make it easier for creators and advertisers to find each other and turn a conversation into an organized collaboration.
