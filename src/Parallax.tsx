import React, { PropsWithChildren } from 'react';

const Parallax: React.FC = (props: PropsWithChildren) => {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const style: React.CSSProperties = {
    position: 'relative',
    transform: `translateY(${Math.max(0, scrollY - 3000)}px)`,
  };

  return (
    <div id="waterHolder" style={style}>
      {props.children}
    </div>
  );
};

export default Parallax;
