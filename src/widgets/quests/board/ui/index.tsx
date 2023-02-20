import { QuestDetails, Quests } from 'entities/quests/board';
// eslint-disable-next-line import/no-internal-modules
import { QUESTS_MOCK } from 'entities/quests/board/model';

import { Hud } from './hud';

export const Board = () => {
  return (
    <section className="relative w-full flex flex-col">
      <Hud>
        <div className="grid md:grid-cols-12 gap-5">
          <Quests selectedId={'3'} className="hidden md:flex md:col-span-4" />
          <QuestDetails
            {...QUESTS_MOCK[0]}
            className="col-span-12 md:col-span-8"
            description={`After successfully locating the Ragged Flagon, Brynjolf has given me a new assignment. Three business owners in Riften are proving to be a thorn in his side and I'm supposed to teach them the error of their ways. I should speak to Brynjolf about these townspeople in the event that they prove to be as stubborn as I'm expecting them to be.`}
            objectives={[{ id: '1', title: 'Find a way', isDone: false, isOptional: true }]}
          />
        </div>
      </Hud>
    </section>
  );
};
