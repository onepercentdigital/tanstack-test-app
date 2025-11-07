# CLAUDE.md - Project Reference Guide

## Project Overview

**One Percent SEO** - TanStack Start application showcasing a modern SEO services website with full SSR, theme switching, MDX blog, and server-side form handling.

**Status:** Baseline/testing project - ready for customization and production deployment.

## Tech Stack

### Core Framework
- **TanStack Start** v1.134.13 - Full-stack React framework
- **TanStack Router** v1.134.13 - File-based routing with SSR
- **React** v19.2.0 - Latest React version
- **TypeScript** v5.9.3 - Strict mode enabled

### State Management & Data Fetching
- **TanStack Query** v5.90.7 - Server state management
- **TanStack Form** v1.23.8 - Form handling with validation

### Content & Blogging
- **next-mdx-remote** v5.0.0 - MDX rendering
- **@mdx-js/react** v3.1.1 - MDX React integration  
- **gray-matter** v4.0.3 - Frontmatter parsing

### Email & Communication
- **Resend** v6.4.1 - Email delivery API
- **@tanstack/zod-form-adapter** v0.42.1 - Form validation bridge

### Styling & UI
- **Tailwind CSS** v4.1.17 - Utility-first CSS
- **@tailwindcss/vite** v4.1.17 - Vite integration
- **Radix UI** - Accessible primitives (Label, Select, Slider, Switch, Slot)
- **Lucide React** v0.552.0 - Icon library
- **Shadcn UI** - Pre-configured component system
- **class-variance-authority** v0.7.1 - Component variants
- **clsx** v2.1.1 + **tailwind-merge** v3.3.1 - Class utilities

### Deployment & Build
- **Vite** v7.2.1 - Build tool and dev server
- **Cloudflare Workers** - Deployment target
- **@cloudflare/vite-plugin** v1.14.0 - Cloudflare integration
- **Wrangler** v4.46.0 - Cloudflare CLI

### Developer Experience
- **Biome** v2.3.4 - Linting and formatting
- **Vitest** v4.0.7 - Testing framework
- **@testing-library/react** v16.3.0 - React testing utilities
- **TanStack Router Devtools** - Route debugging
- **TanStack Query Devtools** - Query debugging
- **TanStack React Devtools** v0.8.0 - Unified devtools panel

### Monitoring & Error Tracking
- **Sentry** v10.23.0 - Error tracking (client & server, optional)

### Validation
- **Zod** v4.1.12 - Schema validation

## Project Structure

```
tanstack-test-app/
├── src/
│   ├── components/
│   │   ├── home/              # Home page sections
│   │   │   ├── hero.tsx
│   │   │   ├── stats.tsx
│   │   │   ├── testimonial.tsx
│   │   │   ├── case-study-feature.tsx
│   │   │   ├── services-grid.tsx
│   │   │   ├── client-logos.tsx
│   │   │   └── final-cta.tsx
│   │   ├── layout/            # Layout components
│   │   │   ├── header.tsx
│   │   │   └── footer.tsx
│   │   ├── ui/                # Shadcn UI components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── select.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── switch.tsx
│   │   │   └── textarea.tsx
│   │   └── theme-toggle.tsx
│   ├── content/
│   │   └── blog/              # MDX blog posts
│   │       ├── getting-started-with-seo.mdx
│   │       ├── local-seo-strategies.mdx
│   │       └── ai-search-optimization.mdx
│   ├── data/                  # Static data
│   │   ├── stats.ts
│   │   ├── services.ts
│   │   ├── testimonial.ts
│   │   ├── case-study.ts
│   │   └── clients.ts
│   ├── lib/
│   │   ├── blog.ts            # Blog utilities
│   │   ├── theme-provider.tsx # Theme context
│   │   └── utils.ts           # cn() utility
│   ├── routes/                # File-based routing
│   │   ├── __root.tsx         # Root layout with theme
│   │   ├── index.tsx          # Home page
│   │   ├── about.tsx          # About page
│   │   ├── consultation.tsx   # Form page
│   │   ├── search-seo.tsx     # Service template
│   │   └── blog/
│   │       ├── index.tsx      # Blog listing
│   │       └── $slug.tsx      # Blog post detail
│   ├── server/
│   │   └── send-consultation-email.ts  # Email server function
│   ├── integrations/
│   │   └── tanstack-query/
│   │       ├── root-provider.tsx
│   │       └── devtools.tsx
│   ├── router.tsx             # Router setup with Sentry
│   ├── routeTree.gen.ts       # Auto-generated routes
│   └── styles.css             # Global styles + theme
├── public/                    # Static assets
├── dist/                      # Build output
├── instrument.server.mjs      # Sentry server init
├── vite.config.ts            # Vite configuration
├── wrangler.jsonc            # Cloudflare config
├── tsconfig.json             # TypeScript config
├── biome.json                # Biome config
├── components.json           # Shadcn config
├── .env.local                # Local env vars (gitignored)
├── .env.example              # Env template
├── CLAUDE.md                 # This file (AI reference)
└── README.md                 # Main documentation (human-facing)
```

## Implemented Pages

### Production Pages (5)
1. **/** (index.tsx) - Home with Hero, Stats, Testimonial, Case Study, Services, Clients, CTA
2. **/search-seo** - Service page template (reusable pattern)
3. **/about** - Company info, values, stats
4. **/consultation** - Contact form with email integration
5. **/blog** + **/blog/[slug]** - MDX blog system with 3 sample posts

### Legal Pages (TODO)
- /privacy-policy - Privacy policy
- /terms - Terms & conditions
- /accessibility - Accessibility statement
- /local-maps-seo - Second service page

## Key Configuration

### Theme System (`src/styles.css`)

**Vercel-inspired design with cyan accent:**

```css
:root {
  --primary: 0 204 204;        /* #00CCCC - Cyan */
  --background: 255 255 255;   /* White */
  --foreground: 0 0 0;         /* Black */
  --secondary: 250 250 250;    /* #FAFAFA */
  --border: 229 229 229;       /* Light gray */
}

.dark {
  --background: 0 0 0;         /* Black */
  --foreground: 255 255 255;   /* White */
  --card: 10 10 10;            /* #0A0A0A */
  --border: 38 38 38;          /* Dark gray */
}
```

**Font:** Inter Variable from Google Fonts

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
export default defineConfig({
  plugins: [
    viteTsConfigPaths({ projects: ['./tsconfig.json'] }),
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
})
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

### Environment Variables

Required in `.env.local`:

```env
# Email functionality (optional for dev)
RESEND_API_KEY=re_xxxxx

# Error tracking (optional)
VITE_SENTRY_DSN=https://xxxxx@sentry.io/xxxxx
VITE_SENTRY_ORG=your-org
VITE_SENTRY_PROJECT=your-project
SENTRY_AUTH_TOKEN=xxxxx
```

## Development Workflow

### Scripts

```bash
# Development
bun run dev              # Port 3000, with Sentry
bun run build            # Production build
bun run preview          # Preview production build

# Testing
bun run test             # Run Vitest

# Code Quality
bun run format           # Format with Biome
bun run lint             # Lint with Biome
bun run check            # Both lint + format

# Deployment
bun run deploy           # Build + deploy to Cloudflare
bun run cf-typegen       # Generate Cloudflare types

# Components
pnpx shadcn@latest add <component>
```

### Package Manager

**Bun** - Fast JavaScript runtime and package manager

## Server Functions

### Creating Server Functions (Correct API)

```typescript
import { createServerFn } from '@tanstack/react-start'
import { z } from 'zod'

const InputSchema = z.object({
  name: z.string(),
  email: z.string().email(),
})

export const myServerFn = createServerFn({ method: 'POST' })
  .inputValidator(InputSchema)  // Use .inputValidator(), NOT .validator()
  .handler(async ({ data }) => {
    // Server-only code here
    return { success: true }
  })
```

### Calling Server Functions

```typescript
// In components or loaders
const result = await myServerFn({ data: { name: 'John', email: 'john@example.com' } })
```

### Email Server Function

Located in `src/server/send-consultation-email.ts`:
- Uses Resend API
- Validates with Zod schema
- Sends to austin@onepercentseo.com
- Gracefully handles missing API key for development

## Blog System (MDX)

### Blog Utilities (`src/lib/blog.ts`)

```typescript
export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  category: string
  content: string
  readingTime?: string
}

getAllPosts(): BlogPost[]      // Get all posts, sorted by date
getPostBySlug(slug): BlogPost  // Get single post
```

### MDX File Format

```mdx
---
title: "Post Title"
date: "2024-01-15"
excerpt: "Brief description"
author: "Author Name"
category: "Category"
readingTime: "5 min read"
---

# Your Content

Markdown content here...
```

### Blog Routes

- `/blog` - Lists all posts from `src/content/blog/*.mdx`
- `/blog/[slug]` - Renders individual post with MDX

## Routing Patterns

### File-Based Routing

Routes auto-generated from `src/routes/`:

```
src/routes/
├── __root.tsx           → Layout wrapper (all pages)
├── index.tsx            → /
├── about.tsx            → /about
├── consultation.tsx     → /consultation
├── search-seo.tsx       → /search-seo
└── blog/
    ├── index.tsx        → /blog
    └── $slug.tsx        → /blog/:slug
```

### Navigation

```typescript
import { Link } from '@tanstack/react-router'

<Link to="/about">About</Link>

// Active styling
<Link 
  to="/about"
  activeProps={{ className: 'text-primary' }}
>
  About
</Link>
```

### Route Loaders

```typescript
export const Route = createFileRoute('/posts')({
  loader: async () => {
    const posts = await getPosts()
    return { posts }
  },
  component: PostsPage,
})

function PostsPage() {
  const { posts } = Route.useLoaderData()
  return <div>{/* render posts */}</div>
}
```

## Data Patterns

### Static Data Files

Located in `src/data/`:
- `stats.ts` - Homepage statistics
- `services.ts` - Service offerings with icons
- `testimonial.ts` - Client testimonial
- `case-study.ts` - Featured case study
- `clients.ts` - Client logos (placeholders)

### Form Handling

Using TanStack Form + Zod:

```typescript
import { useForm } from '@tanstack/react-form'
import { zodValidator } from '@tanstack/zod-form-adapter'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
})

const form = useForm({
  defaultValues: { name: '', email: '' },
  validatorAdapter: zodValidator(),
  validators: { onChange: schema },
  onSubmit: async ({ value }) => {
    await myServerFn({ data: value })
  },
})
```

## Styling System

### Theme Provider

Located in `src/lib/theme-provider.tsx`:
- Manages light/dark/system theme
- Persists to localStorage
- SSR-safe initialization

### Theme Toggle

Component in `src/components/theme-toggle.tsx`:
- Cycles through light → dark → system
- Uses shadcn Button
- Animated icon transitions

### Utility Function

```typescript
// src/lib/utils.ts
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

Usage:
```typescript
<div className={cn('base-class', isActive && 'active-class')} />
```

## Deployment

### Cloudflare Workers

1. **Login:**
   ```bash
   wrangler login
   ```

2. **Deploy:**
   ```bash
   bun run deploy
   ```

3. **URL:** `https://tanstack-test-app.your-account.workers.dev`

4. **Delete:**
   ```bash
   wrangler delete tanstack-test-app
   ```

### Build Output

- `dist/client/` - Static assets
- `dist/server/` - Server bundle
- Instrument file copied to dist

## Monitoring & Error Tracking

### Sentry Integration

**Server:** `instrument.server.mjs`
- Gracefully handles missing DSN
- Only initializes if `VITE_SENTRY_DSN` set

**Client:** `src/router.tsx`
- Initializes on client-side only
- Uses same DSN from env

### Adding Sentry

1. Sign up at https://sentry.io
2. Get DSN
3. Add to `.env.local`: `VITE_SENTRY_DSN=https://...`
4. Restart server

## Path Aliases

All imports use `@/` prefix:

```typescript
import { Button } from '@/components/ui/button'
import { sendEmail } from '@/server/send-consultation-email'
import { cn } from '@/lib/utils'
```

Configured in `tsconfig.json` and `vite.config.ts`

## Important Notes

### Demo Content Removed

All `demo.*` files have been deleted. This is a production-ready baseline.

### Placeholder Content

- Client logos are placeholders
- Hero images are gradient placeholders
- Blog posts are examples (replace with real content)

### Email Configuration

Form works without Resend API key - just doesn't send emails. Add key for production.

### Sentry Optional

Application works fine without Sentry configured. Add for error tracking in production.

## Common Tasks

### Add a Blog Post

1. Create `src/content/blog/my-post.mdx`
2. Add frontmatter (see format above)
3. Write content in Markdown
4. Appears automatically in `/blog`

### Add a Service Page

1. Copy `src/routes/search-seo.tsx`
2. Rename to `src/routes/my-service.tsx`
3. Update content
4. Add link in Header

### Customize Theme

Edit `src/styles.css`:
- Change `--primary` for accent color
- Adjust `--background`/`--foreground` for base colors
- Update dark mode separately

### Add Shadcn Component

```bash
pnpx shadcn@latest add dialog
```

Component added to `src/components/ui/`

## Known Issues & Solutions

### Port 3000 Already in Use

**Check:**
```bash
lsof -i :3000
```

**Kill:**
```bash
lsof -ti:3000 | xargs kill -9
```

**Or use different port:**
```bash
bun run dev -- --port 3001
```

### Server Function Errors

Ensure using correct API:
- ✅ `.inputValidator()` 
- ❌ `.validator()` (doesn't exist)

### MDX Rendering Issues

Ensure `next-mdx-remote` is installed and imported correctly in blog routes.

## Resources

- [TanStack Start Docs](https://tanstack.com/start/latest)
- [TanStack Router Docs](https://tanstack.com/router/latest)
- [TanStack Query Docs](https://tanstack.com/query/latest)
- [TanStack Form Docs](https://tanstack.com/form/latest)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Resend API Docs](https://resend.com/docs)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Sentry Docs](https://docs.sentry.io/)

## Project Status

**Version:** Baseline/Testing  
**Status:** ✅ Production-ready foundation  
**Last Updated:** 2025-01-06  

**Ready for:**
- Customization
- Real content addition
- Production deployment
- Further feature development

**Next Steps:**
1. Add Resend API key
2. Replace placeholder content
3. Add more service pages
4. Implement legal pages
5. Configure Sentry
6. Consider CMS integration (Strapi/Convex)
7. Add authentication if needed (Clerk)
