import React from 'react';

import { Hero } from 'entities/profile/hero';

import { ColorPicker } from './color-picker';

export const Home = () => {
  return (
    <main className={`w-full cursor-default`}>
      <Hero />
      {/* <ColorPicker /> */}
    </main>
  );
};
