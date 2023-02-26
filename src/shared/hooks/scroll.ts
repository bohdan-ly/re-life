import { useScroll } from '@react-hooks-library/core';
import React from 'react';

export const useDocumentScroll = (
  event = (coords: { scrollX: number; scrollY: number }) => {},
): HTMLElement | null => {
  const [doc, setDoc] = React.useState<HTMLElement | null>(null);

  useScroll(doc, event);

  React.useEffect(() => {
    setDoc(document.body);
  }, []);

  return doc;
};
