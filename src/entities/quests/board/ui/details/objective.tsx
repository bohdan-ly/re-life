import { useTranslation } from 'next-i18next';
import React from 'react';

import { CloseIcon } from 'shared/ui/icons';

import { ObjectiveType } from '../../model';

import { DraftObjectiveInput } from './draft-objective-input';
import { DraftObject } from './objectives';

export type ObjectiveProps = {
  onSaveObjective: (e: ObjectiveType) => void;
  onRemoveObjective: (id: string) => void;
};

export const Objective: React.FC<DraftObject & ObjectiveProps> = ({
  id,
  title,
  isDone,
  isOptional,
  isDraft,
  onSaveObjective,
  onRemoveObjective,
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
    <li className="flex items-center w-full cursor-pointer relative">
      {!isDraft && (
        <label className={`pr-4 cursor-pointer`} onClick={() => {}}>
          <div className="relative flex items-center justify-center w-4 h-4 overflow-hidden border-2 border-borderPrimary rotate-45">
            <span
              className={`position-center w-4 h-4 ${
                isDone ? 'bg-borderPrimary' : 'bg-transparent'
              }`}
            />
          </div>
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => {}}
            className="absolute w-0 h-0 opacity-0"
          />
        </label>
      )}
      {isDraft && (
        <CloseIcon
          onClick={() => onRemoveObjective(id)}
          className="cursor-pointer absolute -left-2 position-centerY hover:fill-gold w-8 h-8"
        />
      )}
      {isOptional && <span className="capitalize">{`(${t('character:optional')}) `}</span>}
      {isDraft && (
        <span className="w-full pl-8 text-lg font-mono">
          <DraftObjectiveInput initText={title} onSave={handleSaveDraft} />
        </span>
      )}
      {!isDraft && (
        <span className="overflow-hidden text-ellipsis whitespace-nowrap mt-1 text-lg font-mono w-full">
          {title}
        </span>
      )}
    </li>
  );
};
