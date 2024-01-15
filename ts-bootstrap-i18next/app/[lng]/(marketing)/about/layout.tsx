// Custom components
import { Header, Content, Area, Main, Footer } from '@/components/layout';
import { Navbar } from '../_components';

export default function Layout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}): JSX.Element {
  return (
    <div id="page" className="site">
      <Header>
        <Navbar fixed="top" lng={lng} />
      </Header>
      <Content>
        <Area id="primary" className="content-area vw-100 vh-100 d-flex align-items-center justify-content-center">
          <Main>{children}</Main>
        </Area>
      </Content>
      <Footer style={{ position: 'fixed', right: 0, bottom: 0, left: 0, zIndex: 1030 }} />
    </div>
  );
}
