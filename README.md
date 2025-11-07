# One Percent SEO - TanStack Start Application

A modern, full-stack React application built with TanStack Start, showcasing a complete SEO services website with server-side rendering, theme switching, and MDX-based blog.

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun run dev
```

Open http://localhost:3000

## 📋 Features

### Implemented Pages
- ✅ **Home Page** - Hero, Stats, Testimonials, Case Studies, Services Grid, Client Logos
- ✅ **Search SEO** - Service page template
- ✅ **About** - Company information and values
- ✅ **Blog** - MDX-based blog with listing and detail pages
- ✅ **Free Consultation** - Contact form with server-side email handling

### Design & UX
- ✅ **Vercel-inspired Theme** - Clean, minimal aesthetic
- ✅ **Dark/Light Mode** - Persistent theme toggle with SSR support
- ✅ **Cyan Accent (#00CCCC)** - Brand color for CTAs and highlights
- ✅ **Inter Variable Font** - Modern typography via Google Fonts
- ✅ **Fully Responsive** - Mobile-first design
- ✅ **Accessible** - Shadcn UI + Radix primitives

### Technical Features
- ✅ **Full SSR** - Server-side rendering on all pages
- ✅ **MDX Blog** - File-based blog system (no database)
- ✅ **Form Validation** - TanStack Form + Zod schemas
- ✅ **Email Integration** - Resend API (ready for configuration)
- ✅ **Error Tracking** - Sentry integration (optional)
- ✅ **Type Safety** - End-to-end TypeScript

## 🛠️ Tech Stack

- **Framework:** TanStack Start v1.134.13
- **React:** v19.2.0
- **Styling:** Tailwind CSS v4.1.17
- **UI Components:** Shadcn UI + Radix UI
- **Forms:** TanStack Form + Zod
- **Data Fetching:** TanStack Query
- **Email:** Resend
- **Blog:** MDX (file-based)
- **Deployment:** Cloudflare Workers
- **Error Tracking:** Sentry (optional)

## 📦 Environment Setup

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Add your API keys (optional for development):
   ```env
   RESEND_API_KEY=re_xxxxx  # For email functionality
   VITE_SENTRY_DSN=https://xxxxx  # For error tracking
   ```

### Email Configuration (Optional)

The consultation form uses [Resend](https://resend.com) for email delivery:

1. Sign up at https://resend.com (free tier available)
2. Get your API key from https://resend.com/api-keys
3. Add to `.env.local`: `RESEND_API_KEY=re_xxxxx`
4. Restart dev server

**Note:** The form works without the API key - it just won't send emails.

For production, you'll need to:
- Verify your sending domain in Resend
- Update the `from` email in `src/server/send-consultation-email.ts`

## 🎨 Customization

### Theme Colors

Edit `src/styles.css` to customize the color palette:

```css
:root {
  --primary: 0 204 204; /* #00CCCC - Cyan accent */
  --background: 255 255 255; /* White */
  --foreground: 0 0 0; /* Black */
}

.dark {
  --background: 0 0 0; /* Black */
  --foreground: 255 255 255; /* White */
}
```

### Adding Blog Posts

Create `.mdx` files in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "Brief description"
author: "Your Name"
category: "SEO Tips"
readingTime: "5 min read"
---

# Your Content Here

Write your post content using Markdown/MDX syntax.
```

Posts automatically appear in the blog listing.

### Adding Service Pages

Copy `src/routes/search-seo.tsx` as a template:

```bash
cp src/routes/search-seo.tsx src/routes/my-service.tsx
```

Then customize the content and add a link in the Header component.

## 📜 Available Scripts

```bash
# Development
bun run dev              # Start dev server (port 3000)
bun run build            # Production build
bun run preview          # Preview production build

# Testing
bun run test             # Run Vitest tests

# Code Quality
bun run check            # Lint and format check
bun run lint             # Lint code (Biome)
bun run format           # Format code (Biome)

# Deployment
bun run deploy           # Deploy to Cloudflare Workers
bun run cf-typegen       # Generate Cloudflare types

# UI Components
pnpx shadcn@latest add <component>  # Add Shadcn components
```

## 🚀 Deployment

### Cloudflare Workers

1. Login to Wrangler:
   ```bash
   wrangler login
   ```

2. Deploy:
   ```bash
   bun run deploy
   ```

3. Your site will be live at `https://tanstack-test-app.your-account.workers.dev`

### Delete Deployment

```bash
wrangler delete tanstack-test-app
```

## 📁 Project Structure

```
src/
├── components/
│   ├── home/          # Home page sections
│   ├── layout/        # Header, Footer
│   ├── ui/            # Shadcn UI components
│   └── theme-toggle.tsx
├── content/
│   └── blog/          # MDX blog posts
├── data/              # Static data (services, stats, etc.)
├── lib/
│   ├── blog.ts        # Blog utilities
│   ├── theme-provider.tsx
│   └── utils.ts
├── routes/            # File-based routing
│   ├── __root.tsx     # Root layout
│   ├── index.tsx      # Home page
│   ├── about.tsx
│   ├── consultation.tsx
│   ├── search-seo.tsx
│   └── blog/
├── server/
│   └── send-consultation-email.ts
└── integrations/
    └── tanstack-query/
```

## 🔗 Documentation

- **CLAUDE.md** - Comprehensive technical reference and project guide
- **.env.example** - Environment variable template

## 📚 Resources

- [TanStack Start Docs](https://tanstack.com/start)
- [TanStack Router Docs](https://tanstack.com/router)
- [TanStack Query Docs](https://tanstack.com/query)
- [TanStack Form Docs](https://tanstack.com/form)
- [Shadcn UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Resend Docs](https://resend.com/docs)

## 🐛 Troubleshooting

### Port 3000 Already in Use

Check what's using the port:
```bash
lsof -i :3000
```

Kill the process:
```bash
lsof -ti:3000 | xargs kill -9
```

Or use a different port:
```bash
bun run dev -- --port 3001
```

### Server Function Errors

Ensure you're using the correct TanStack Start API:
- ✅ Use `.inputValidator()` (correct)
- ❌ NOT `.validator()` (doesn't exist)
- Pass data as `{ data: value }` when calling server functions

Example:
```typescript
export const myServerFn = createServerFn({ method: 'POST' })
  .inputValidator(zodSchema)  // Correct API
  .handler(async ({ data }) => {
    // Your code
  })
```

### MDX Rendering Issues

Ensure `next-mdx-remote` is properly installed:
```bash
bun install next-mdx-remote @mdx-js/react
```

## 📝 License

This is a baseline/testing project. Customize as needed for production use.

## 🎯 Next Steps for Production

1. Add Resend API key for email functionality
2. Replace placeholder images with real assets
3. Add more service pages (Local Maps SEO, etc.)
4. Implement Privacy Policy, Terms, and legal pages
5. Configure Sentry for error tracking
6. Consider adding Strapi/Convex for CMS
7. Add Clerk for authentication if needed

---

Built with [TanStack Start](https://tanstack.com/start) 🚀
