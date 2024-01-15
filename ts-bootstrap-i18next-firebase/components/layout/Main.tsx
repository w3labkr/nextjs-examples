type Props = {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function Main(props: Props): JSX.Element {
  const { children, ...rest } = props;

  return (
    <main id="main" className="site-main" role="main" {...rest}>
      {children}
    </main>
  );
}
