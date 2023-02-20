import React from 'react';

import { ChapterTitle } from 'shared/ui/components';
import { CloseIcon, Hades, MoebiusStar, Rank } from 'shared/ui/icons';

import styles from './details.module.scss';

type QuestDetailsProps = {
  id: string;
  title: string;
  className: string;
  description: string;
  difficulty: number;
  objectives: Array<{ id: string; title: string; isDone: boolean; isOptional: boolean }>;
};

export const QuestDetails: React.FC<QuestDetailsProps> = (quest) => {
  const [reRender, setReRender] = React.useState(0);

  const handleObjectiveDone = (objId: string) => {
    quest.objectives[0].isDone = !quest.objectives[0].isDone;
    setReRender((count) => count + 1);
  };

  return (
    <article
      className={`flex flex-col py-6 px-6 md:px-12 gap-6 ${styles.details} ${quest.className}`}
    >
      <div className={styles.triangle} />
      <CloseIcon
        width={36}
        height={36}
        className="absolute top-5 right-5 md:hidden focus:opacity-40 active:opacity-40"
      />
      <ChapterTitle title={quest.title} icon={<Hades />} />
      <div className="flex flex-col items-center m-auto">
        <p className="m-auto">Rank</p>
        <div>
          {new Array(quest.difficulty).fill(0).map((r, idx) => (
            <Rank key={idx} />
          ))}
        </div>
      </div>
      <div className="font-mono">{quest.description}</div>
      <ChapterTitle title="Objectives" icon={<MoebiusStar />} />
      <ul>
        {(quest.objectives || []).map((obj, index) => (
          <li
            key={obj.id}
            className="flex items-center cursor-pointer"
            onClick={() => handleObjectiveDone(obj.id)}
          >
            <label className={`mr-4`}>
              <div className="relative flex items-center justify-center w-4 h-4 overflow-hidden border-2 border-borderPrimary rotate-45">
                <span
                  className={`position-center w-4 h-4 ${
                    obj.isDone ? 'bg-borderPrimary' : 'bg-transparent'
                  }`}
                />
              </div>
              <input
                type="checkbox"
                checked={obj.isDone}
                onChange={() => {}}
                className="absolute w-0 h-0 opacity-0"
              />
            </label>
            <span className="overflow-hidden text-ellipsis whitespace-nowrap mt-1 text-lg font-mono">
              {obj.isOptional && '(Optional) '}
              {obj.title}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex flex-col">
        <div className="flex items-end">
          <span className="text-2xl mr-2">Rewards:</span>
          <p className="mb-1">50XP, 10 gold</p>
        </div>
        <div className="flex items-end">
          <span className="text-2xl mr-2">Buff:</span>
          <p className="mb-1">None</p>
        </div>
        <div className="flex items-end">
          <span className="text-2xl mr-2">Debuff:</span>
          <p className="mb-1">None</p>
        </div>
        <div className="w-full p-[1px] bg-borderPrimary m-auto mt-2" />
      </div>
    </article>
  );
};
