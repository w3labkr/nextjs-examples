# i18n with Next.js 13/14 and app directory / App Router

i18next is a very popular internationalization framework for browser or any other javascript environment (eg. Node.js, Deno).

- [Next.js 13/14 app directory feature in combination with i18next](https://github.com/i18next/next-app-dir-i18next-example-ts)
- [an i18next guide](https://locize.com/blog/next-app-dir-i18n/)

## Use Server

Installation

```shell
npm install i18next react-i18next i18next-resources-to-backend
npm install accept-language
```

Usage

```javascript
import { useTranslation } from '@/app/i18n';

export default async function Page({ params: { lng } }: { params: { lng: string } }): JSX.Element {
  const { t } = await useTranslation(lng)

  return <h1>{t('h1')}</h1>;
}
```

## Use Client

Installation

```shell
npm install react-cookie i18next-browser-languagedetector
```

Usage

```javascript
import { useTranslation } from '@/app/i18n/client';

export default function Page({ params: { lng } }: { params: { lng: string } }): JSX.Element {
  const { t } = useTranslation(lng)

  return <h1>{t('h1')}</h1>;
}
```
