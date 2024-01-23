'use client';

import { I18nextProvider } from 'react-i18next';
import { defaultNS } from '@/i18next.config';
import i18next from './i18n';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  return (
    <I18nextProvider i18n={i18next} defaultNS={defaultNS}>
      {children}
    </I18nextProvider>
  );
}
