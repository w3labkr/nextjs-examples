type Props = {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function Asterisk(props: Props): JSX.Element {
  const { ...rest } = props;

  return (
    <span className="align-top text-danger" {...rest}>
      &#42;
    </span>
  );
}
