import React, { useEffect } from 'react';

import { useMantineTheme } from '@mantine/core';

const useWindowSize = () => {
  const theme = useMantineTheme();
  const isSSR = typeof window !== 'undefined';
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
    isDesktop: isSSR ? false : window.innerWidth > theme.breakpoints.sm,
  });

  useEffect(() => {
    const changeWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
        isDesktop: window.innerWidth > theme.breakpoints.sm,
      });
    };

    changeWindowSize();

    window.addEventListener('resize', changeWindowSize);

    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
