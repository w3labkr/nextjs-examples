'use client';

// The React Framework.
import { useEffect } from 'react';
import Link from 'next/link';

// Bootstrap components built with React.
import Container from 'react-bootstrap/Container';

// Custom components
import { Area, Footer } from '@/components/layout';

// Firebase provides the tools and infrastructure you need to develop, grow, and earn money from your app.
import { signOut, AuthError } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';

// Internationalization
import { useTranslation } from '@/app/i18n/client';

export default function Page({ params: { lng } }: { params: { lng: string } }): JSX.Element {
  const { t } = useTranslation(lng, 'authentication');

  useEffect(() => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error: AuthError) => {
        // An error happened.
        console.log(error.code);
      });
  }, []);

  return (
    <>
      <Area className="main-area">
        <Container>
          <h1 className="mb-4 text-center display-1">{t('Sign Out')}</h1>
          <div className="mb-4 text-center">
            <p>
              {t('You have been signed out.')}
              <br />
              {t('Thank you.')}
            </p>
            <Link href={`/${lng}/signin`}>{t('Sign in again')}</Link>
          </div>
        </Container>
      </Area>
      <Footer />
    </>
  );
}
