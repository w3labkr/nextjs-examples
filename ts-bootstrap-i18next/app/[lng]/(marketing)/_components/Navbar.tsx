'use client';

// The React Framework.
import Link from 'next/link';

// Bootstrap components built with React.
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// Internationalization
import { useTranslation } from '@/app/i18n/client';

type Props = {
  // Navbar
  id?: string;
  className?: string;
  role?: string;
  style?: React.CSSProperties;
  fixed?: 'top' | 'bottom';
  // Nav.Link
  lng: string;
};

export default function MyNavbar(props: Props): JSX.Element {
  const { lng, ...rest } = props;
  const { t } = useTranslation(lng);

  return (
    <Navbar id="site-navigation" className="primary-navigation" role="navigation" {...rest}>
      <Container fluid>
        <Navbar.Brand>NextJS</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} href={`/${lng}`}>
            {t('Home')}
          </Nav.Link>
          <Nav.Link as={Link} href={`/${lng}/about`}>
            {t('About')}
          </Nav.Link>
          <Nav.Link as={Link} href={`/${lng}/signin`}>
            {t('Sign In')}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
