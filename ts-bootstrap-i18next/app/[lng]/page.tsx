// Bootstrap components built with React.
import Container from 'react-bootstrap/Container';

// Custom components
import { Header, Content, Area, Main, Footer } from '@/components/layout';
import { Navbar } from './(marketing)/_components';

// Internationalization
import { useTranslation } from '@/app/i18n';

export default async function RootPage({ params: { lng } }: { params: { lng: string } }): Promise<JSX.Element> {
  const { t } = await useTranslation(lng);

  return (
    <div id="page" className="site">
      <Header>
        <Navbar fixed="top" lng={lng} />
      </Header>
      <Content>
        <Area id="primary" className="content-area vw-100 vh-100 d-flex align-items-center justify-content-center">
          <Main>
            <Container>
              <h1 className="mb-0">{t('Hello, World!')}</h1>
            </Container>
          </Main>
        </Area>
      </Content>
      <Footer style={{ position: 'fixed', right: 0, bottom: 0, left: 0, zIndex: 1030 }} />
    </div>
  );
}
