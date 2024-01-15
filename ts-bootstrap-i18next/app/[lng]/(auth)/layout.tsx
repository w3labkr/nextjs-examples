// Custom components
import { Content, Area, Main } from '@/components/layout';

export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div id="page" className="site">
      <Content>
        <Area id="primary" className="content-area vw-100 vh-100 d-flex align-items-center">
          <Main className="site-main mx-auto">{children}</Main>
        </Area>
      </Content>
    </div>
  );
}
