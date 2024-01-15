// Bootstrap components built with React.
import Container from 'react-bootstrap/Container';

type Props = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function Hero(props: Props): JSX.Element {
  const { ...rest } = props;

  return (
    <div id="hero" className="site-hero">
      <Container className="hero-area" {...rest}>
        Hero
      </Container>
    </div>
  );
}
