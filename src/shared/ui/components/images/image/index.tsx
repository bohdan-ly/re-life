import Image, { ImageProps } from 'next/image';
import React from 'react';

type PropsType = ImageProps & {
  alt: string;
  fallback?: string | JSX.Element;
};

export const RLImage: React.FC<PropsType> = (props) => {
  return <Image {...props} alt={props.alt || 'rl-image'} />;
};
