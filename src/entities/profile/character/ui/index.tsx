import React from 'react';

import { RLImage } from 'shared/ui/components';

import * as model from '../model';

import { Achievements } from './achievements';
import { Attributes } from './attributes';

export const Character = () => {
  const characterSrc = '/images/dark_warrior.png';
  return (
    <section className="flex flex-col justify-center relative w-full -translate-y-[30%]">
      <div className="relative m-auto">
        <Achievements />
        <RLImage
          src={characterSrc}
          className="relative shadow-btPrimary"
          alt="character"
          width={200}
          height={200}
          objectFit="cover"
        />
      </div>
      <h2 className="text-4xl text-center mt-10">Jacob</h2>
      <Attributes />
    </section>
  );
};
