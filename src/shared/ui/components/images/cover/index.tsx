import Image from 'next/image';
import React from 'react';

import { RLImage } from '../image';

export const CoverImage = () => {
  return (
    <div style={{ width: '100%', height: '30vh', position: 'relative' }}>
      <RLImage
        src="https://images.unsplash.com/photo-1491466424936-e304919aada7?ixlib=rb-4.0.3&amp;q=80&amp;fm=jpg"
        alt="cover"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};
