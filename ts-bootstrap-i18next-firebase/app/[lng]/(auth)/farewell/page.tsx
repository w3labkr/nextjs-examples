'use client';

// The React Framework.
import Link from 'next/link';

// Bootstrap components built with React.
import Container from 'react-bootstrap/Container';

// Custom components
import { Area, Footer } from '@/components/layout';

// Internationalization
import { useTranslation } from '@/app/i18n/client';

export default function Page({ params: { lng } }: { params: { lng: string } }): JSX.Element {
  const { t } = useTranslation(lng, 'authentication');

  return (
    <>
      <Area className="main-area">
        <Container>
          <h1 className="mb-4 text-center display-1">{t('Farewell')}</h1>
          <div className="mb-4 text-center">
            <p>
              {t('Your are one of the best people.')} <br />
              {t('I will never forget you!')} <br />
              {t('Until we meet again!')}
            </p>
            <Link href={`/${lng}`}>{t('Home')}</Link>
          </div>
        </Container>
      </Area>
      <Footer />
    </>
  );
}
