# CLAUDE.md - Project Reference Guide

## Project Overview
TanStack Start test application - a full-stack React framework demo showcasing the TanStack ecosystem.

## Tech Stack

### Core Framework
- **TanStack Start** v1.134.13 - Full-stack React framework
- **TanStack Router** v1.134.13 - File-based routing with SSR
- **React** v19.2.0 - Latest React version
- **TypeScript** v5.9.3 - Strict mode enabled

### State Management & Data Fetching
- **TanStack Query** v5.90.7 - Server state management
- **TanStack Form** v1.23.8 - Form handling with validation

### Styling & UI
- **Tailwind CSS** v4.1.17 - Utility-first CSS
- **Radix UI** - Accessible primitives (Label, Select, Slider, Switch, Slot)
- **Lucide React** v0.552.0 - Icon library
- **Shadcn UI** - Pre-configured component system
- **class-variance-authority** - Component variants
- **clsx** + **tailwind-merge** - Class name utilities

### Deployment & Build
- **Vite** v7.2.1 - Build tool and dev server
- **Cloudflare Workers** - Deployment target (via Wrangler v4.46.0)
- **@cloudflare/vite-plugin** - Cloudflare integration

### Developer Experience
- **Biome** v2.3.4 - Linting and formatting
- **Vitest** v4.0.7 - Testing framework
- **TanStack Router Devtools** - Route debugging
- **TanStack Query Devtools** - Query debugging
- **TanStack React Devtools** - Unified devtools panel

### Monitoring
- **Sentry** v10.23.0 - Error tracking (client & server)

### Validation
- **Zod** v4.1.12 - Schema validation

## Project Structure

```
tanstack-test-app/
├── src/
│   ├── components/
│   │   ├── ui/               # Shadcn UI components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── select.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── switch.tsx
│   │   │   └── textarea.tsx
│   │   ├── Header.tsx        # Navigation sidebar component
│   │   └── demo.FormComponents.tsx
│   ├── routes/
│   │   ├── __root.tsx        # Root layout with devtools
│   │   ├── index.tsx         # Landing page
│   │   └── demo/             # Demo routes (see below)
│   ├── integrations/
│   │   └── tanstack-query/
│   │       ├── root-provider.tsx  # QueryClient setup
│   │       └── devtools.tsx       # Query devtools config
│   ├── hooks/
│   │   ├── demo.form-context.ts
│   │   └── demo.form.ts
│   ├── data/
│   │   └── demo.punk-songs.ts
│   ├── lib/
│   │   └── utils.ts          # cn() and other utilities
│   ├── router.tsx            # Router setup with Sentry
│   ├── routeTree.gen.ts      # Auto-generated route tree
│   ├── styles.css            # Global styles
│   └── logo.svg
├── public/                   # Static assets
├── dist/                     # Build output
├── instrument.server.mjs     # Sentry server instrumentation
├── vite.config.ts           # Vite configuration
├── wrangler.jsonc           # Cloudflare Workers config
├── tsconfig.json            # TypeScript configuration
├── biome.json               # Biome linting/formatting
├── components.json          # Shadcn configuration
└── package.json

Total source files: 31 TypeScript/TSX files
```

## Demo Routes (12 routes, ~1,285 lines)

### Server-Side Features
- **`/demo/start/server-funcs`** - Server function examples
- **`/demo/start/api-request`** - API request handling
- **`api.names.ts`** - API route example
- **`api.tq-todos.ts`** - TanStack Query + API route

### SSR Modes
- **`/demo/start/ssr`** - SSR demos index
- **`/demo/start/ssr/spa-mode`** - SPA mode rendering
- **`/demo/start/ssr/full-ssr`** - Full server-side rendering
- **`/demo/start/ssr/data-only`** - Data-only SSR

### Forms
- **`/demo/form/simple`** - Simple form example (1,749 lines)
- **`/demo/form/address`** - Complex address form (6,017 lines)

### Integrations
- **`/demo/tanstack-query`** - TanStack Query examples (2,668 lines)
- **`/demo/sentry/testing`** - Sentry error tracking demo (25,316 lines)

## Key Configuration Files

### TypeScript (`tsconfig.json`)
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "jsx": "react-jsx",
    "module": "ESNext",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "baseUrl": ".",
    "paths": { "@/*": ["./src/*"] }
  }
}
```

### Vite (`vite.config.ts`)
```typescript
plugins: [
  viteTsConfigPaths({ projects: ['./tsconfig.json'] }),
  cloudflare({ viteEnvironment: { name: 'ssr' } }),
  tailwindcss(),
  tanstackStart(),
  viteReact(),
]
```

### Wrangler (`wrangler.jsonc`)
```json
{
  "name": "tanstack-test-app",
  "compatibility_date": "2025-09-02",
  "compatibility_flags": ["nodejs_compat"],
  "main": "@tanstack/react-start/server-entry",
  "observability": { "enabled": true }
}
```

### Sentry (`instrument.server.mjs`)
- Initializes Sentry with `VITE_SENTRY_DSN` environment variable
- Sends default PII (request headers and IP)
- Client-side init in `router.tsx`

## Development Workflow

### Scripts
```bash
# Development
bun run dev              # Start dev server on port 3000 (with Sentry)
bun run build            # Production build
bun run serve            # Preview production build

# Testing
bun run test             # Run Vitest tests

# Code Quality
bun run format           # Format with Biome
bun run lint             # Lint with Biome
bun run check            # Check with Biome (lint + format)

# Deployment
bun run deploy           # Build and deploy to Cloudflare
bun run cf-typegen       # Generate Cloudflare types

# Shadcn
pnpx shadcn@latest add <component>  # Add Shadcn components
```

### Package Manager
Uses **Bun** (based on `bun.lock` and README instructions)

## Routing System

### File-Based Routing
- Routes defined in `src/routes/` directory
- Auto-generated route tree in `routeTree.gen.ts`
- Root layout: `src/routes/__root.tsx`
- Home page: `src/routes/index.tsx`

### Router Configuration (`src/router.tsx`)
```typescript
export const getRouter = () => {
  const rqContext = TanstackQuery.getContext()
  
  const router = createRouter({
    routeTree,
    context: { ...rqContext },
    defaultPreload: 'intent',
    Wrap: (props) => (
      <TanstackQuery.Provider {...rqContext}>
        {props.children}
      </TanstackQuery.Provider>
    ),
  })
  
  setupRouterSsrQueryIntegration({ router, queryClient: rqContext.queryClient })
  
  // Client-side Sentry initialization
  if (!router.isServer) {
    Sentry.init({ dsn: import.meta.env.VITE_SENTRY_DSN })
  }
  
  return router
}
```

### Navigation
- Use `<Link>` component from `@tanstack/react-router`
- Example: `<Link to="/about">About</Link>`
- Active link styling with `activeProps`

## Data Fetching Patterns

### TanStack Router Loaders
```typescript
const route = createRoute({
  path: "/people",
  loader: async () => {
    const response = await fetch("https://api.example.com/people")
    return response.json()
  },
  component: () => {
    const data = route.useLoaderData()
    return <div>{/* render data */}</div>
  },
})
```

### TanStack Query
```typescript
const { data } = useQuery({
  queryKey: ["people"],
  queryFn: () => fetch("/api/people").then(res => res.json()),
  initialData: [],
})
```

### Server Functions
- Write server-side code that integrates with client components
- Type-safe and secure
- Examples in `src/routes/demo/start.server-funcs.tsx`

## Styling Approach

### Tailwind CSS v4
- Vite plugin integration
- Global styles in `src/styles.css`
- Utility-first approach

### Shadcn UI
- Pre-configured in `components.json`
- Components in `src/components/ui/`
- Uses Radix UI primitives
- Customizable with Tailwind

### Utility Function
```typescript
// src/lib/utils.ts
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

## Environment Variables

### Required
- `VITE_SENTRY_DSN` - Sentry DSN for error tracking

### Files
- `.env.local` - Local environment variables (gitignored)

## Testing

### Setup
- **Vitest** v4.0.7 configured
- **@testing-library/react** v16.3.0
- **@testing-library/dom** v10.4.1
- **jsdom** v27.1.0 for DOM simulation

### Running Tests
```bash
bun run test
```

### Current Status
- Testing infrastructure set up
- No tests currently written
- Ready for test implementation

## Deployment

### Cloudflare Workers
1. Build: `bun run build`
2. Deploy: `bun run deploy` (or `wrangler deploy`)
3. Output in `.wrangler/` and `dist/`

### Build Output
- `dist/client/` - Client-side assets
- `dist/server/` - Server-side code
- Sentry instrumentation copied to `.output/server/`

## Important Patterns

### Path Aliases
Use `@/` for imports from `src/`:
```typescript
import { cn } from "@/lib/utils"
import Header from "@/components/Header"
```

### Devtools
Integrated in root layout (`__root.tsx`):
- TanStack Router Devtools
- TanStack Query Devtools  
- Unified devtools panel (bottom-right)

### Type Safety
- End-to-end TypeScript
- Strict mode enabled
- Router context typed with QueryClient
- API routes fully typed

## Git Status
- **Current branch:** main
- **Status:** Clean working directory
- **Recent commits:**
  - `5f595fa` - refactor(package.json): updates and cf depen
  - `2f0773d` - refactor(start): first commit

## Notes for Development

### Demo Files
Files prefixed with `demo.*` can be safely deleted for production use. They exist to demonstrate features.

### Adding Components
```bash
pnpx shadcn@latest add button
```

### Adding Routes
1. Create file in `src/routes/`
2. TanStack will auto-generate route configuration
3. Import and use `<Link>` for navigation

### Monitoring
- Sentry initialized on both client and server
- Observability enabled in Cloudflare Workers
- Error boundaries recommended for production

### Code Quality
Biome handles both linting and formatting:
- Configuration in `biome.json`
- Replaces ESLint + Prettier
- Fast and modern tooling

## Common Tasks

### Add a new page
1. Create `src/routes/my-page.tsx`
2. Export route with `createFileRoute('/my-page')`
3. Add link in `Header.tsx`

### Add a new API endpoint
1. Create `src/routes/api.my-endpoint.ts`
2. Export handler function
3. Call from client with `/api/my-endpoint`

### Add form validation
1. Use TanStack Form hooks
2. Define Zod schema
3. See examples in `src/routes/demo/form.*`

### Update styling
1. Modify Tailwind classes inline
2. Or update `src/styles.css` for global styles
3. Use `cn()` utility for conditional classes

## Resources

- [TanStack Start Docs](https://tanstack.com/start)
- [TanStack Router Docs](https://tanstack.com/router)
- [TanStack Query Docs](https://tanstack.com/query)
- [TanStack Form Docs](https://tanstack.com/form)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
