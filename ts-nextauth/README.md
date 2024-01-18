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

## Authentication

Authentication for the Web.

```shell
npm install next-auth
```

Generate next auth secret

```shell
openssl rand -base64 32
```

## Firebase Auth

Firebase provides the tools and infrastructure you need to develop, grow, and earn money from your app.

```shell
# npm ERR! Could not resolve dependency:
# npm ERR! peer firebase-admin@"^11.0.1" from firebase-frameworks@0.11.1
# npm ERR! peer firebase-admin@"^11.4.1" from @auth/firebase-adapter@1.0.13
npm install -g firebase-tools
npm install firebase firebase-admin@11.11.1 @auth/firebase-adapter
```

Prompts:

- Realtime Database: Configure a security rules file for Realtime Database and (optionally) provision default instance `No`
- Firestore: Configure security rules and indexes files for Firestore `Yes`
- Functions: Configure a Cloud Functions directory and its files `No`
- Hosting: Configure files for Firebase Hosting and (optionally) Set up GitHub Action deploys `No`
- Hosting: Set up GitHub Action deploys `No`
- Storage: Configure a security rules file for Cloud Storage `Yes`
- Emulators: Set up local emulators for Firebase products `Yes`
- Remote Config: Configure a template file for Remote Config `No`
- Extensions: Set up an empty Extensions manifest `No`
- Frameworks: Get started with Frameworks projects. `No`

```shell
firebase init
```

Create a new project alias.

```shell
firebase list
firebase use --add
```

Start the firebase emulator.

```shell
firebase init emulators
firebase emulators:start
```

For Mac/Linux, use the Terminal/Shell to find the Process ID (PID), then kill the process.

```shell
# Error: Could not start Hosting Emulator, port taken.
lsof -ti tcp:5000 | xargs kill -9 && firebase emulators:start
```

Set the expiration of a preview channel.

```shell
firebase init hosting
firebase hosting:channel:deploy preview --expires 1h
```

Start firebase deployment.

```shell
firebase deploy
```
