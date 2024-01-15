// Bootstrap components built with React.
import Container from 'react-bootstrap/Container';

type Props = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function Footer(props: Props): JSX.Element {
  const { ...rest } = props;

  // &copy; 2023. CORP. All rights reserved.
  // &copy; 2023-2024.
  return (
    <footer id="colophon" className="site-footer" role="contentinfo" {...rest}>
      <div className="copyright text-center text-secondary">
        <Container fluid>&copy; 2023-2024.</Container>
      </div>
    </footer>
  );
}
