import { useTranslation } from 'next-i18next';
import React from 'react';

import { ObjectiveType } from '../../model';

import { DraftObjectiveInput } from './draft-objective-input';
import { DraftObject } from './objectives';

export const Objective: React.FC<DraftObject & { onSaveObjective: (e: ObjectiveType) => void }> = ({
  id,
  title,
  isDone,
  isOptional,
  isDraft,
  onSaveObjective,
}) => {
  const { t } = useTranslation('character');

  const handleSaveDraft = (newTitle: string) => {
    onSaveObjective({
      id,
      title: newTitle,
      isDone,
      isOptional,
    });
  };

  return (
    <li className="flex items-center w-full cursor-pointer">
      <label className={`pr-4 cursor-pointer`} onClick={() => {}}>
        <div className="relative flex items-center justify-center w-4 h-4 overflow-hidden border-2 border-borderPrimary rotate-45">
          <span
            className={`position-center w-4 h-4 ${isDone ? 'bg-borderPrimary' : 'bg-transparent'}`}
          />
        </div>
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => {}}
          className="absolute w-0 h-0 opacity-0"
        />
      </label>
      <span className="overflow-hidden text-ellipsis whitespace-nowrap mt-1 text-lg font-mono w-full">
        {isOptional && <span className="capitalize">{`(${t('character:optional')}) `}</span>}
        {isDraft ? <DraftObjectiveInput initText={title} onSave={handleSaveDraft} /> : title}
      </span>
    </li>
  );
};
