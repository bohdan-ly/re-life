import { QuestDetails, Quests } from 'entities/quests/board';

import { Hud } from './hud';

export const Board = () => {
  return (
    <section className="relative w-full flex flex-col">
      <Hud>
        <div className="gap-5 grid h-full md:grid-cols-12">
          <Quests className="hidden md:flex md:col-span-4 overflow-y-auto" />
          <QuestDetails className="col-span-12 md:col-span-8 overflow-y-auto" />
        </div>
      </Hud>
    </section>
  );
};
