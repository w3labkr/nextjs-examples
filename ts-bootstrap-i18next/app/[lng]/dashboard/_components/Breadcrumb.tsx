'use client';

// Bootstrap components built with React.
import Breadcrumb from 'react-bootstrap/Breadcrumb';

type Props = {
  lng: string;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function MyBreadcrumb(props: Props): JSX.Element {
  const { lng, ...rest } = props;

  return (
    <Breadcrumb {...rest}>
      <Breadcrumb.Item href={`/${lng}/#`}>Home</Breadcrumb.Item>
      <Breadcrumb.Item active>Data</Breadcrumb.Item>
    </Breadcrumb>
  );
}
