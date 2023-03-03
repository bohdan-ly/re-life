import { useAppSelector, useMediaLayout } from 'shared';

import { QuestDetails, Quests, questsModel } from 'entities/quests/board';

import { Hud } from './hud';

export const Board = () => {
  const isMobile = useMediaLayout();
  const quest = useAppSelector((state) => questsModel.selectQuestDetails(state));

  return (
    <section className="relative w-full flex flex-col">
      <Hud>
        <div className="gap-5 grid h-full w-full md:grid-cols-12">
          {(!isMobile || !quest) && (
            <Quests className="col-span-12 md:flex md:col-span-4 overflow-y-auto overflow-x-hidden" />
          )}
          {(!isMobile || quest) && (
            <QuestDetails className="col-span-12 md:col-span-8 overflow-y-auto" />
          )}
        </div>
      </Hud>
    </section>
  );
};
