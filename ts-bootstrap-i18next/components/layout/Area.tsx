type Props = {
  children?: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function Area(props: Props): JSX.Element {
  const { children, ...rest } = props;

  return <div {...rest}>{children}</div>;
}
