# Project Instructions for edidiongkalu

## Architecture Overview

This is a **Next.js 16 portfolio website** that translates a Figma design into a fully responsive, animated single-page application. The architecture follows a **component-container pattern** with strict separation of concerns:

- **`app/`**: Next.js App Router pages (home, about, work detail pages with dynamic `[id]` routing)
- **`components/container/`**: Layout components that organize page structure (Header, Footer, PageWrapper)
- **`components/container/*-container/`**: Feature-specific containers that group related sections (hero, services, work showcase)
- **`components/ui/`**: Reusable primitive components
- **`components/data/`**: Centralized typed data objects for cards, testimonials, and project information
- **`components/style/`**: Shared CSS class constants and transition definitions

## Key Patterns & Conventions

### Component Structure

- **UI Composition Components**: Export compound components like `H_Tag`, `P_Tag`, `LG`, `SMALL` from [components/container/smaller_container.tsx](components/container/smaller_container.tsx) to maintain consistent typography throughout
- **"use client" directives**: Interactive components (Header with menu state, carousels) require `"use client"` at the top
- **Props pattern**: Use destructured props with explicit types; optional `className` prop is common for styling overrides (see [components/container/smaller_container.tsx#L12](components/container/smaller_container.tsx#L12))

### Styling & Layout

- **Tailwind + Framer Motion**: All responsive design uses Tailwind breakpoints (`sm:`, `lg:`, `xl:`, `1xl:`, `3xl:`) with custom breakpoints defined in [app/globals.css](app/globals.css)
- **Custom theme colors**: Access via CSS variables (`--color-background`, `--color-text-color`, `--color-selections`, etc.) imported into Tailwind config
- **Shared transition variable**: Use `import { transition } from "../style/style"` for consistent `ease-in-out duration-400` animations
- **Image optimization**: Use Next.js `<Image>` for optimized loading, or `<img>` with `loading="lazy"` attribute when needed

### Data Management

- **Typed data objects**: Store list data in [components/data/](components/data/) as typed TypeScript arrays (e.g., `Project_Card`, `Testimonial_Card`)
- **No API/database**: All content is statically typed and imported (portfolio-focused, no backend queries)
- **Dynamic routing**: Work detail pages use Next.js `[id]` segments to fetch from `projects_card` array by ID

### Typography & Fonts

- Three custom fonts configured in [app/layout.tsx](app/layout.tsx#L7-L18):
  - `ClashGrotesk` (display/bold headings)
  - `Barned` (body font, default)
  - `Karla` (Google Font fallback)
- Use font families via CSS variable tokens: `font-clashGrotesk`, `font-barned`, `font-karl`

## Developer Workflows

### Build & Development

```bash
pnpm dev       # Start Next.js dev server (http://localhost:3000)
pnpm build     # Production build (outputs to .next/)
pnpm start     # Serve production build locally
pnpm lint      # Run ESLint with Next.js rules
```

### Adding New Sections

1. Create component folder in [components/container/](components/container/) (e.g., `new-feature-container/`)
2. Export section component from that folder
3. Import and use in appropriate page from [app/](app/)
4. Use shared style constants and typography components from [components/container/smaller_container.tsx](components/container/smaller_container.tsx)

### Adding New Content (Projects, Testimonials)

1. Update typed object in [components/data/](components/data/) (e.g., add item to `projects_card` array)
2. Components automatically pick up new data via imports—no re-initialization needed
3. For new dynamic pages, implement `[id]` route in [app/work/[id]/](app/work/[id]/)

## Critical Dependencies & Versions

- **Next.js**: 16.0.1 (latest, React 19 compatible)
- **React**: 19.2.0 (latest with concurrent features)
- **Tailwind CSS**: 4.x (via `@tailwindcss/postcss`)
- **Framer Motion**: 12.23.24 (for `<motion>` animations)
- **Icon libraries**: `lucide-react`, `react-icons` (use for SVG icons)
- **TypeScript**: Strict mode enabled

## Important Notes

- **No external API calls**: This is a static portfolio—all data is local
- **Responsive-first design**: Always consider mobile, tablet, and desktop viewports during development
- **Path alias**: Use `@/` prefix for absolute imports (configured in [tsconfig.json](tsconfig.json#L23))
- **Linting**: ESLint + Next.js recommended rules—check before committing
- **No tests**: No testing framework configured (aspirational only)
