import React from 'react';

import { Character } from 'entities/profile/character';
import { Hero } from 'entities/profile/hero';

import { Board } from 'widgets/quests/board';

import { ColorPicker } from './color-picker';

export const Home = () => {
  return (
    <>
      <Hero />
      <main className={`w-full cursor-default`}>
        <Character />
        <Board />
        {/* <ColorPicker /> */}
      </main>
    </>
  );
};
