# ShineU — Creator & Advertiser Collaboration Planner

ShineU is a **free creator collaboration and influence marketing planner** for influencers, creators, advertisers, agencies and small brands.

The core idea is simple: **discover people, publish services, create campaigns, contact each other, and organize the work.** ShineU is not a payment processor and does not require users to install an `.exe` file.

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

ShineU is intentionally **web-first**. It uses Next.js and React and can run locally with Node.js. There is no Tauri shell, desktop installer requirement or mandatory Vercel deployment.

The application is designed so that an optional cloud backend can be introduced later for account synchronization, real-time messaging, social OAuth/API connections, file storage, notifications and multi-device workspaces.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

For a production build:

```bash
npm run build
npm start
```

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

The next production layers should focus on the product itself rather than packaging:

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

GitHub Actions verifies the Next.js production build on pushes and pull requests targeting `main`.

## Product direction

ShineU is being built as a **free, useful marketplace-planner and collaboration network**, not as a payment processor. The product should make it easier for creators and advertisers to find each other and turn a conversation into an organized collaboration.
