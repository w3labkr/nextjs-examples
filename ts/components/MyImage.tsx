import Image from 'next/image'

interface Props {
  children?: React.ReactNode;
}

const defaultProps = {};

const imageStyle = {
  borderRadius: '50%',
  border: '1px solid #fff',
}

function MyImage(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };

  return <Image src="..." style={imageStyle} alt="" />;
}

export default MyImage;
