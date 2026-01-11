# Pulvent - Technology & Marketing Website

## Overview

Pulvent is a full-stack web application serving as a corporate website for a technology, marketing, and consulting company. The application features a modern landing page with multiple sections including hero, services, portfolio, contact forms, and company information. Built with React on the frontend and Express on the backend, it follows a monorepo structure with shared types between client and server.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Build Tool**: Vite with React plugin

The frontend follows a section-based component architecture where the main page (`Pulvent.tsx`) composes multiple section components (HeroSection, ContactSection, FeaturesSection, etc.) for a landing page layout.

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **HTTP Server**: Node.js native HTTP server
- **API Pattern**: RESTful API with `/api` prefix convention
- **Development Server**: Vite middleware integration for HMR during development

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` - shared between client and server
- **Validation**: Zod schemas generated from Drizzle schemas via `drizzle-zod`
- **Current Storage**: In-memory storage implementation (`MemStorage` class) with interface-based abstraction (`IStorage`) allowing easy swap to database storage

The storage layer uses an interface pattern, making it simple to transition from in-memory storage to PostgreSQL when the database is provisioned.

### Project Structure
```
├── client/           # React frontend
│   └── src/
│       ├── components/ui/  # shadcn/ui components
│       ├── pages/          # Page components
│       │   └── sections/   # Landing page sections
│       ├── hooks/          # Custom React hooks
│       └── lib/            # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage layer
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared types and schemas
│   └── schema.ts     # Drizzle schema definitions
└── migrations/       # Database migrations (Drizzle Kit)
```

### Path Aliases
- `@/*` → `./client/src/*`
- `@shared/*` → `./shared/*`
- `@assets` → `./attached_assets`

## External Dependencies

### Database
- **PostgreSQL**: Connected via `DATABASE_URL` environment variable
- **Neon Serverless**: Using `@neondatabase/serverless` driver for PostgreSQL connections
- **Session Storage**: `connect-pg-simple` for PostgreSQL session storage (available but not yet configured)

### UI Framework
- **Radix UI**: Full suite of accessible, unstyled UI primitives
- **shadcn/ui**: Pre-built component library using Radix primitives
- **Lucide React**: Icon library

### Build & Development
- **Vite**: Frontend build tool with HMR
- **esbuild**: Backend bundling for production
- **Drizzle Kit**: Database migration tooling (`db:push` command)

### Fonts
- Google Fonts: Roboto, Montserrat, DM Sans, Architects Daughter, Fira Code, Geist Mono

### Replit-Specific
- `@replit/vite-plugin-runtime-error-modal`: Error overlay in development
- `@replit/vite-plugin-cartographer`: Development tooling (dev only)
- `@replit/vite-plugin-dev-banner`: Development banner (dev only)