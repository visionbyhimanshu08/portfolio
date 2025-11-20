# Premium UI/UX Designer Portfolio

## Overview

This is a modern, premium portfolio website for a UI/UX designer, built with React, TypeScript, and Express. The application showcases a designer's work, skills, services, and process through a sophisticated, futuristic interface inspired by Apple's minimalism, Linear's typography, and Stripe's restraint. The site features smooth animations, kinetic typography, and glassy surface treatments to create a high-end user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast HMR and optimized production builds
- **Wouter** for lightweight client-side routing (single-page application)

**UI Component System**
- **shadcn/ui** component library based on Radix UI primitives (configured in `components.json`)
- **Tailwind CSS** for utility-first styling with custom design tokens
- Theme system supports light/dark modes with custom CSS variables
- Custom color palette using HSL values for consistent theming

**State Management & Data Fetching**
- **TanStack Query (React Query)** for server state management and API communication
- **React Hook Form** with Zod validation for form handling
- Context API for theme management (ThemeProvider)

**Animation & Interactions**
- **Framer Motion** for declarative animations and page transitions
- **React Intersection Observer** for scroll-triggered animations
- Custom scroll behavior and smooth navigation between sections

**Design System**
- Typography: Inter and Space Grotesk fonts from Google Fonts CDN
- Spacing system based on Tailwind's 4px unit scale
- Premium whitespace utilization with purposeful breathing room
- Responsive breakpoints for mobile-first design

### Backend Architecture

**Server Framework**
- **Express.js** running on Node.js with ES modules
- TypeScript for type safety across the stack
- Custom middleware for request logging and JSON parsing

**API Structure**
- RESTful API endpoint for contact form submission (`/api/contact`)
- Shared schema validation using Zod between client and server
- Type-safe request/response handling with TypeScript

**Storage Layer**
- Currently using in-memory storage (`MemStorage`) for contact form submissions
- Interface-based storage abstraction (`IStorage`) allows easy switching to database implementation
- Drizzle ORM configured for PostgreSQL (ready for database integration)

**Development Tools**
- Vite middleware integration for seamless SSR development
- Hot module replacement (HMR) for rapid development
- Custom error logging and request monitoring

### Design Patterns

**Component Organization**
- Section-based components (HeroSection, AboutSection, etc.) for page composition
- Shared UI components in `client/src/components/ui/` following shadcn/ui conventions
- Separation of concerns: presentation components vs. container components

**Type Safety**
- Shared types between frontend and backend via `@shared/schema.ts`
- Zod schemas for runtime validation and TypeScript type inference
- Path aliases (`@/`, `@shared/`, `@assets/`) for clean imports

**Responsive Design**
- Mobile-first approach with progressive enhancement
- Custom hook (`use-mobile`) for responsive behavior
- Adaptive layouts using Tailwind's responsive utilities

**Performance Optimization**
- Code splitting via Vite's automatic chunking
- Image optimization through asset management
- Query result caching with TanStack Query
- Lazy loading of sections via Intersection Observer

## External Dependencies

### Core UI Framework
- **React 18** - UI component library
- **React DOM** - React renderer for web
- **TypeScript** - Type-safe JavaScript superset

### Build & Development
- **Vite** - Modern build tool and dev server
- **esbuild** - Fast JavaScript bundler for server build
- **tsx** - TypeScript execution for Node.js

### UI Components & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component primitives (30+ component packages)
- **shadcn/ui** - Pre-styled component system built on Radix UI
- **class-variance-authority** - Component variant management
- **tailwind-merge** - Utility for merging Tailwind classes

### Forms & Validation
- **React Hook Form** - Performant form management
- **Zod** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation resolver for React Hook Form

### Animation & Interactions
- **Framer Motion** - Animation library for React
- **Embla Carousel** - Lightweight carousel library
- **React Intersection Observer** - Viewport intersection detection

### Data Fetching
- **TanStack Query (React Query)** - Async state management and data fetching
- **wouter** - Minimalist routing for React

### Backend & Server
- **Express.js** - Web application framework for Node.js
- **Drizzle ORM** - TypeScript ORM for SQL databases
- **@neondatabase/serverless** - PostgreSQL driver for serverless environments
- **drizzle-kit** - Drizzle migration and schema management CLI

### Utilities
- **date-fns** - Date utility library
- **nanoid** - Unique ID generator
- **clsx** - Conditional className utility
- **lucide-react** - Icon library
- **react-icons** - Additional icon sets (Social icons)

### Database (Configured)
- **PostgreSQL** via Neon serverless driver
- Connection managed through `DATABASE_URL` environment variable
- Schema defined in `shared/schema.ts`, migrations in `./migrations`

### Development-Only Dependencies
- **@replit/vite-plugin-runtime-error-modal** - Error overlay for Replit
- **@replit/vite-plugin-cartographer** - Replit integration (development)
- **@replit/vite-plugin-dev-banner** - Development banner

### Assets & Resources
- **Google Fonts CDN** - Inter and Space Grotesk typography
- Generated images stored in `attached_assets/generated_images/`