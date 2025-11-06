# One Percent SEO - Setup Guide

This is a TanStack Start application built as a baseline for the One Percent SEO website.

## Quick Start

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Configure environment variables:**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your API keys:
   - `RESEND_API_KEY` - For email functionality (optional for development)
   - `VITE_SENTRY_DSN` - For error tracking (optional)

3. **Run development server:**
   ```bash
   bun run dev
   ```
   
   Open http://localhost:3000

## Email Setup (Optional)

The consultation form uses Resend for email delivery:

1. Sign up at https://resend.com (free tier available)
2. Get your API key from https://resend.com/api-keys
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxx
   ```

**Note:** The form will work without this key - it just won't send emails.

For production, you'll need to:
- Verify your sending domain in Resend
- Update the `from` email in `src/server/send-consultation-email.ts`

## Features Implemented

### Pages
- ✅ Home page (Hero, Stats, Testimonial, Case Study, Services, Clients, CTA)
- ✅ Search SEO service page (template for other services)
- ✅ Free Consultation form with server-side email handling
- ✅ About page
- ✅ Blog listing and detail pages (MDX-based)

### Components
- ✅ Header with mobile menu and theme toggle
- ✅ Footer with contact info and links
- ✅ Vercel-inspired dark/light theme system
- ✅ Shadcn UI components

### Technical
- ✅ Full SSR (Server-Side Rendering)
- ✅ Inter Variable font from Google Fonts
- ✅ Cyan (#00CCCC) accent color
- ✅ MDX blog system (file-based, no database)
- ✅ TanStack Form with validation
- ✅ Sentry error tracking (optional)

## Available Scripts

```bash
bun run dev       # Development server (port 3000)
bun run build     # Production build
bun run preview   # Preview production build
bun run deploy    # Deploy to Cloudflare Workers
bun run test      # Run tests
bun run check     # Lint and format check
bun run lint      # Lint code
bun run format    # Format code
```

## Project Structure

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
│       ├── index.tsx  # Blog listing
│       └── $slug.tsx  # Blog post detail
├── server/
│   └── send-consultation-email.ts
└── integrations/
    └── tanstack-query/
```

## Adding Content

### Add a Blog Post

1. Create a new `.mdx` file in `src/content/blog/`:
   ```mdx
   ---
   title: "Your Post Title"
   date: "2024-01-15"
   excerpt: "A brief summary"
   author: "Your Name"
   category: "SEO Tips"
   readingTime: "5 min read"
   ---
   
   # Your content here
   
   Regular markdown and MDX syntax supported.
   ```

2. The post will automatically appear in the blog listing

### Add a Service Page

Copy `src/routes/search-seo.tsx` and customize for your service.

## Theme Customization

Theme colors are defined in `src/styles.css`:

```css
:root {
  --primary: 0 204 204; /* #00CCCC */
  --background: 255 255 255;
  --foreground: 0 0 0;
  /* ... */
}

.dark {
  --background: 0 0 0;
  --foreground: 255 255 255;
  /* ... */
}
```

## Deployment

### Cloudflare Workers

1. Ensure you're logged in to Wrangler:
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

## Next Steps

This is a baseline/testing project. For production:

1. Add real content and images
2. Configure Resend with your domain
3. Set up Sentry for error tracking
4. Add more service pages (Local Maps SEO, etc.)
5. Implement additional legal pages (Privacy Policy, Terms, etc.)
6. Consider adding Strapi/Convex for CMS functionality
7. Add Clerk for authentication if needed

## Tech Stack

- **Framework:** TanStack Start v1.134.13
- **React:** v19.2.0
- **Styling:** Tailwind CSS v4.1.17
- **UI Components:** Shadcn UI + Radix UI
- **Forms:** TanStack Form + Zod validation
- **Data Fetching:** TanStack Query
- **Email:** Resend
- **Deployment:** Cloudflare Workers
- **Error Tracking:** Sentry (optional)
- **Blog:** MDX (file-based)

## Support

For TanStack documentation:
- https://tanstack.com/start
- https://tanstack.com/router
- https://tanstack.com/query
- https://tanstack.com/form

For issues with this baseline, refer to `CLAUDE.md`.
