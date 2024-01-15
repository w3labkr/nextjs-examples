type Props = {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function Content(props: Props): JSX.Element {
  const { children, ...rest } = props;

  return (
    <div id="content" className="site-content" {...rest}>
      {children}
    </div>
  );
}
