interface Props {
  children: React.ReactNode;
  team: React.ReactNode;
  analytics: React.ReactNode;
}

const defaultProps = {};

/**
 * Parallel Routes
 *
 * @param props
 *
 * @link https://nextjs.org/docs/app/building-your-application/routing/parallel-routes
 *
 * @returns
 */
function Layout(propsIn: Props) {
  const props = { ...defaultProps, ...propsIn };

  return (
    <>
      {props.children}
      {props.team}
      {props.analytics}
    </>
  );
}

export default Layout;
