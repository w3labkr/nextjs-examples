import Link from "next/link";

interface Props {
  children?: React.ReactNode;
}

const defaultProps = {};

function MyLink(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };

  return <Link href="/dashboard">Dashboard</Link>;
}

export default MyLink;
