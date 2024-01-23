'use client';

import { useTranslation } from 'react-i18next';

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.lang = lng;
  };

  return (
    <div>
      <button onClick={() => changeLanguage('ko')}>KO</button>
      {' | '}
      <button onClick={() => changeLanguage('en')}>EN</button>
    </div>
  );
}
