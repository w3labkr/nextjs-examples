type Props = {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function Header(props: Props): JSX.Element {
  const { children, ...rest } = props;

  return (
    <header id="masthead" className="site-header" role="banner" {...rest}>
      {children}
    </header>
  );
}
