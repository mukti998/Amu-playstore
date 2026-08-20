# Overview

This is an e-commerce platform for Amu Furnishings, a furniture retail business in Ethiopia specializing in beds, majlis (traditional Arabic seating), sofas, storage solutions, and traditional Ethiopian furniture pieces. The application provides a catalog browsing experience with shopping cart functionality and WhatsApp-based checkout. It includes an admin mode for product management with in-place editing capabilities.

The platform is built as a full-stack TypeScript application using React for the frontend and Express for the backend, with PostgreSQL as the database. The application is optimized for mobile-first usage and includes PWA (Progressive Web App) capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for the UI layer
- **Vite** as the build tool and development server with custom plugins for meta image injection and Replit-specific integrations
- **Wouter** for client-side routing (lightweight alternative to React Router)
- **TanStack Query** for server state management and API data fetching

**UI Component Library**
- **Radix UI** primitives for accessible, unstyled components
- **shadcn/ui** design system (New York variant) built on top of Radix
- **Tailwind CSS v4** for styling with custom design tokens
- **Framer Motion** for animations and transitions
- **Lucide** for iconography

**Design Decisions**
- Uses a monolithic App.tsx that manages routing and global state (cart, admin mode, products)
- State is managed locally with React hooks rather than external state management libraries
- Component structure follows shadcn/ui patterns with composition-based architecture
- Custom color scheme based on emerald/green primary colors and amber accents to reflect Ethiopian brand identity

## Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for the REST API
- **HTTP server** created via Node's `createServer` for potential WebSocket support
- Custom middleware for request logging and JSON body capture

**API Design**
- RESTful endpoints under `/api` namespace
- Authentication routes for signup/login (planned but not fully implemented)
- Product CRUD operations (planned routes visible in routes.ts)
- Static file serving for the built client application

**Authentication Strategy**
- **bcrypt** for password hashing
- Session-based authentication intended (packages present: express-session, connect-pg-simple)
- Email/phone verification system with time-limited codes
- User identifier supports both email and phone number formats

## Data Storage Solutions

**Database**
- **PostgreSQL** as the primary database
- **Drizzle ORM** for type-safe database queries and schema definition
- **Drizzle Kit** for migrations management

**Schema Design**
- `users` table: Stores user accounts with flexible identifier field (email or phone), password hashes, email verification status, and verification codes with expiry
- `products` table: Furniture catalog with name, category, pricing, descriptions, image URLs, optional video/attachment URLs, and timestamps

**Data Access Pattern**
- Storage abstraction layer (`DatabaseStorage` class implementing `IStorage` interface)
- All database operations go through the storage interface for testability and potential future migration
- Uses Drizzle's query builder rather than raw SQL

## External Dependencies

**Third-Party Services**
- **WhatsApp Business API** (client-side integration via `wa.me` links) for order checkout and customer communication
- **Unsplash** for placeholder product images (hardcoded URLs in seed data)
- **Google Fonts** for Playfair Display (serif) and Inter (sans-serif) typography
- **Replit** deployment platform with custom Vite plugins for domain detection and meta tag updates

**Asset Management**
- Assets stored in `attached_assets` directory and imported via Vite aliases
- Public assets (favicon, PWA icons, manifest) served from `client/public`
- Images reference external URLs (Unsplash) rather than local storage

**Build & Deployment**
- **esbuild** for server-side bundling with selective dependency bundling (allowlist approach)
- Custom build script that bundles both client (Vite) and server (esbuild) separately
- Server dependencies are partially bundled to reduce cold start times
- Production mode uses compiled JavaScript output in `dist` directory

**Development Tools**
- **tsx** for running TypeScript files directly in development
- **Vite HMR** over custom WebSocket path (`/vite-hmr`)
- Replit-specific plugins for cartographer and dev banner (development only)
- Custom Vite plugin for updating OpenGraph image URLs based on deployment domain

**Notable Architectural Choices**
- Monorepo structure with shared schema definitions between client and server
- Type safety enforced across the stack with Zod schemas for runtime validation
- Progressive Web App capabilities with manifest and service worker support
- Mobile-first responsive design with specific breakpoints and touch-optimized interactions
- Admin mode toggle for product management without separate admin panel
- Internationalization structure present (TRANSLATIONS object) but currently English-only