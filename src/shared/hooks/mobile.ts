import { useDebounceCallback } from '@react-hook/debounce';
import React from 'react';

export const useMediaLayout = () => {
  const windowDefined = typeof window !== 'undefined';
  const [width, setWidth] = React.useState<number>(0);

  const debouncedSizeChange = useDebounceCallback(
    () => setWidth(windowDefined ? window.innerWidth : 0),
    1000,
  );

  React.useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  React.useEffect(() => {
    if (windowDefined) window.addEventListener('resize', debouncedSizeChange);
    return () => {
      if (windowDefined) window.removeEventListener('resize', debouncedSizeChange);
    };
  }, [debouncedSizeChange, windowDefined]);

  return width <= 768;
};
