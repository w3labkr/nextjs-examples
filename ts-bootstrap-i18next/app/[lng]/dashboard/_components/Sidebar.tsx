'use client';

// The React Framework.
import Link from 'next/link';

// Bootstrap components built with React.
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';

// Internationalization
import { useTranslation } from '@/app/i18n/client';

type Props = {
  lng: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function Sidebar(props: Props): JSX.Element {
  const { lng, ...rest } = props;
  const { t } = useTranslation(lng);

  return (
    <aside className="site-sidebar sidebar-1 sidebar-left" {...rest}>
      <ListGroup as="ul" className="sidebar-list">
        <ListGroup.Item as="li" className="sidebar-item">
          <Nav.Link as={Link} href={`/${lng}/dashboard`}>
            {t('Dashboard')}
          </Nav.Link>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="sidebar-item">
          <Nav.Link as={Link} href={`/${lng}/dashboard`}>
            {t('Dashboard')}
          </Nav.Link>
        </ListGroup.Item>
        <ListGroup.Item as="li" className="sidebar-item">
          <Nav.Link as={Link} href={`/${lng}/dashboard`}>
            {t('Dashboard')}
          </Nav.Link>
        </ListGroup.Item>
      </ListGroup>
    </aside>
  );
}
