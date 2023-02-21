import React from 'react';

import { useAppDispatch, useAppSelector } from 'shared';
import { Moebius } from 'shared/ui/icons';

import * as model from '../model';

export const Quests: React.FC<{ className: string }> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { quests, selectedId } = useAppSelector((state) => ({
    quests: model.selectQuests(state),
    selectedId: model.selectQuestDetailsId(state),
  }));

  const handleSelectQuest = async (qId: string) => {
    const { quest } = await model.getQuestById(qId);
    dispatch(model.setQuest(quest));
  };

  const getTextSize = (impact: number) => {
    switch (impact) {
      case 5:
        return 'text-4xl';
      case 4:
        return 'text-4xl';
      case 3:
        return 'text-3xl';
      case 2:
        return 'text-2xl';
      default:
        return 'text-xl';
    }
  };

  return (
    <ul className={`flex flex-col w-full h-full py-6 pl-6 ${className}`}>
      {quests.map((q, idx) => (
        <li
          key={`${q.id}_${idx}`}
          onClick={() => handleSelectQuest(q.id)}
          className="relative inline-block py-4 pl-2 pr-8 gap-4 cursor-pointer"
        >
          <span
            className={`mt-1 inline-block align-middle overflow-hidden whitespace-nowrap w-full text-ellipsis ${getTextSize(
              q.impact,
            )}`}
          >
            {q.title}
          </span>
          {selectedId === q.id && (
            <Moebius className="absolute top-[50%] right-0 -translate-y-[50%] rotate-45" />
          )}
        </li>
      ))}
    </ul>
  );
};
