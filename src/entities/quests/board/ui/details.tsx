import React from 'react';

import { useAppDispatch, useAppSelector } from 'shared';
import { ChapterTitle } from 'shared/ui/components';
import { CloseIcon, Hades, MoebiusStar, Rank } from 'shared/ui/icons';

import * as model from '../model';

import styles from './details.module.scss';

export const QuestDetails: React.FC<{ className: string }> = ({ className }) => {
  const [reRender, setReRender] = React.useState(0);
  const dispatch = useAppDispatch();
  const quest = useAppSelector((state) => model.selectQuestDetails(state));

  const handleObjectiveDone = (objId: string) => {
    // if (quest) {
    //   quest.objectives[0].isDone = !quest.objectives[0].isDone;
    //   setReRender((count) => count + 1);
    // }
  };

  const handleCloseQuest = () => {
    dispatch(model.setQuest(null));
  };

  return (
    <article
      className={`flex flex-col pb-6 mt-8 px-6 md:px-12 gap-6 ${styles.details} ${className}`}
    >
      <div className={styles.triangle} />
      <CloseIcon
        width={36}
        height={36}
        className="absolute top-5 right-5 md:hidden focus:opacity-40 active:opacity-40"
        onClick={handleCloseQuest}
      />
      {quest && (
        <>
          <ChapterTitle title={quest.title} icon={<Hades />} />
          <div className="flex flex-col items-center">
            <p className="m-auto">Rank</p>
            <div className="flex gap-1">
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
        </>
      )}
    </article>
  );
};
