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
          <h1 className="mb-4 text-center display-1">{t('Welcome')}</h1>
          <div className="mb-4 text-center">
            <p>
              {t('You can now access our content!')} <br />
              {t('We just sent you an email with your login details.')} <br />
              {t('Please check your email to see your credentials.')}
            </p>
            <Link href={`/${lng}/signin`}>{t('Sign In')}</Link>
          </div>
        </Container>
      </Area>
      <Footer />
    </>
  );
}
