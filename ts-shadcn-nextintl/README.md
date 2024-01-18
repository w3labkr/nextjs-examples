# NextJS Ninja

NextJS Ninja is a starter template for the [NextJS](https://nextjs.org/) 14 app router based on [shadcn/ui](https://ui.shadcn.com/).

## Folder and file Structure

The folder and file structure is based on nextjs app router [Next.js Project Structur](https://nextjs.org/docs/getting-started/project-structure).

```txt
.
├── app/                        # App Router
│   ├── [locale]/               # Dynamic route segment
│   │   ├── <page>/             # Route segment
│   │   ├── layout.ts           # Layout
│   │   └── page.ts             # Page
│   ├── icon.ts                 # Generated App Icon
│   ├── apple-icon.ts           # Generated Apple App Icon
│   ├── opengraph-image.ts      # Generated Open Graph image
│   ├── twitter-image.ts        # Generated Twitter image
│   ├── robots.ts               # Generated Robots file
│   └── sitemap.ts              # Generated Sitemap
├── components/                 # React components for filters, headers
├── config/
├── content/                    # Content Layer
├── hooks/
├── lib/                        # Utility functions that aren't necessarily bound to React or Next.js
├── locales/
├── public/                     # Static assets to be served
├── styles/
├── .env                        # Environment variables
├── package.json                # Project dependencies and scripts
├── middleware.ts               # Next.js request middleware
└── next.config.js              # Configuration file for Next.js
```

## Installation

Prompts:

- Would you like to use TypeScript? `Yes`
- Would you like to use ESLint? `Yes`
- Would you like to use Tailwind CSS? `Yes`
- Would you like to use `src/` directory? `No`
- Would you like to use App Router? (recommended) `Yes`
- Would you like to customize the default import alias (@/*)? `No`
- What import alias would you like configured? `@/*`

```shell
npx create-next-app@latest . --typescript
```

React Hooks for Data Fetching

```shell
npm install swr
```

Keeping Server-only Code out of the Client Environment

```shell
npm install server-only
```

Dependency packages in production

```shell
npm install @vercel/analytics @vercel/speed-insights
```

Set the current Node.js version.

```shell
node -v > .nvmrc
```

Start the development server.

```shell
npm run dev
```

Deploy app to Vercel

```shell
vercel deploy
```

## Configuration

Edit `next.config.js`:

```javascript
module.exports = {
  reactStrictMode: true,
  swcMinify: true,
}
```

Edit `packages.json`:

```json
{
    "scripts": {
        "clean:dir": "rm -rf node_modules",
        "clean:cache": "npm cache clean --force",
        "clean": "npm run clean:dir && npm run clean:cache",
        "reinstall": "npm run clean && npm install"
    },
}
```

After cleaning the directories and cache, install the dependency packages.

```shell
npm run --force reinstall
```

## Shadcn UI

Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.

```shell
npx shadcn-ui@latest init
```

A crisp set of 15×15 icons designed by the @workos team.

```shell
npm install @radix-ui/react-icons
```

A lightweight carousel library with fluid motion and great swipe precision.

```shell
npm install embla-carousel-react
```

Use the add command to add components and dependencies to your project.

```shell
npx shadcn-ui@latest add
npx shadcn-ui@latest add [component]
```

Adding dark mode

```shell
npm install next-themes
```

## Tailwind CSS

Install Tailwind CSS

```shell
npm install --save-dev tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Then add it to the very end of your plugin list in your PostCSS configuration:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

A tiny (239B) utility for constructing `className` strings conditionally.

```shell
npm install clsx
```

Merge Tailwind CSS classes without style conflicts

```shell
npm install tailwind-merge
```

Using 'clsx' or 'classnames' with 'tailwind-merge'

```typescript
import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));
```

## Internationalization

Internationalization (i18n) for Next.js that gets out of your way.

```shell
npm install next-intl rtl-detect @types/rtl-detect
```

Getting started

- `next.config.js`: Set up the plugin which creates an alias to import your i18n configuration into Server Components.
- `i18n.ts`: Creates a configuration once per request.
- `middleware.ts`: The middleware matches a locale for the request and handles redirects and rewrites accordingly.
- `next-intl.config.ts`
- `navigation.ts`

## Schema Validation

React Hooks for form state management and validation (Web + React Native).

```shell
npm install react-hook-form 
npm install zod @hookform/resolvers
```

## Utils

Svg react icons of popular icon packs

```shell
npm install react-icons
```

A modern JavaScript utility library delivering modularity, performance, & extras.

```shell
npm install lodash @types/lodash
```

Generate RFC-compliant UUIDs in JavaScript

```shell
npm install uuid @types/uuid
```

## ESLint

ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

Installation:

```shell
npm install --save-dev eslint @next/eslint-plugin-next
npm install --save-dev eslint-plugin-import eslint-import-resolver-typescript
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin 
npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier
```

Edit `next.config.js`:

```javascript
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}
```

Find and fix problems in your JavaScript code.

```shell
npx eslint ./app
npx eslint --fix ./components
npx eslint --fix ./{app,components,hooks,lib}
```

## Troubleshooting

- `./components/icons.tsx`  
Type error: '"lucide-react"' has no exported member named 'Icon'. Did you mean 'XIcon'?

```typescript
// import { LucideProps, Moon, SunMedium, type Icon as LucideIcon } from 'lucide-react';
import { LucideProps, Moon, SunMedium, type LucideIcon } from 'lucide-react';
```

- `./components/ui/carousel.tsx`  
Type error: '"embla-carousel-react"' has no exported member named 'EmblaCarouselType'. Did you mean 'UseEmblaCarouselType'?

```typescript

```
