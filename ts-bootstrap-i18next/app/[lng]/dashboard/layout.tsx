// Bootstrap components built with React.
import { Header, Content, Area, Main, Footer } from '@/components/layout';

// Custom components
import { Navbar, Sidebar } from './_components';

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
        <Navbar lng={lng} />
      </Header>
      <Content className="site-content px-3">
        <Area id="primary" className="content-area d-flex">
          <Sidebar lng={lng} style={{ width: 200 }} />
          <Main style={{ width: 'calc(100% - 200px)' }}>{children}</Main>
        </Area>
      </Content>
      <Footer />
    </div>
  );
}
