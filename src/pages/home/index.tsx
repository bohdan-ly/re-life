import { useRouter } from 'next/router';
import React from 'react';

import { useAppDispatch, useMediaLayout } from 'shared';

import { Character } from 'entities/profile/character';
import { Hero } from 'entities/profile/hero';
import { questsModel } from 'entities/quests/board';

import { Board } from 'widgets/quests/board';

import { ColorPicker } from './color-picker';

export const Home = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isMobile = useMediaLayout();

  const onRouteChangeDone = React.useCallback(() => {
    if (isMobile) dispatch(questsModel.selectQuest(null));
  }, [isMobile, dispatch]);

  React.useEffect(() => {
    router.events.on('routeChangeComplete', onRouteChangeDone);
    return () => {
      router.events.off('routeChangeComplete', onRouteChangeDone);
    };
  }, [onRouteChangeDone, router.events]);

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
