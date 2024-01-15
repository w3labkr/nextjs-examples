import Script from "next/script";

interface Props {
  children?: React.ReactNode;
}

const defaultProps = {};

function MyScript(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };

  return (
    <>
      <Script src="https://example.com/script.js" />
    </>
  );
}

export default MyScript;
