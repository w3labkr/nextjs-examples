// The React Framework.
import type { Metadata } from 'next';

// Internationalization
import { dir } from 'i18next';
import { languages } from '../i18n/settings';

// Misc
import packageJSON from '@/package.json';
import '@/styles/globals.scss';

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: packageJSON.name,
  description: packageJSON.description,
  keywords: packageJSON.keywords,
};

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}): JSX.Element {
  return (
    <html lang={lng} dir={dir(lng)}>
      <body>{children}</body>
    </html>
  );
}
