import classNames from 'classnames';
import React from 'react';
import { v4 as uuid } from 'uuid';

import { useAppDispatch } from 'shared';
import { PlusIcon } from 'shared/ui/icons';
import { notify } from 'shared/ui/theme';

import { questsModel } from '../..';
import { ObjectiveType } from '../../model';

import { Objective } from './objective';

export type DraftObject = ObjectiveType & { isDraft?: boolean };

type Objectives = {
  questId: string;
  objectives: ObjectiveType[];
  onSave: (objective: ObjectiveType) => void;
};

export const Objectives: React.FC<Objectives> = ({ questId, objectives = [], onSave }) => {
  const [curQuestId, setCurQuestId] = React.useState<string | null>(questId);
  const [draft, setDraft] = React.useState<DraftObject[]>(objectives);

  React.useEffect(() => {
    if (questId !== curQuestId) {
      setCurQuestId(questId);
      setDraft(objectives);
    }
    const prevDraft = draft.slice(objectives.length);
    const newDraft = [...objectives, ...prevDraft];
    if (JSON.stringify(newDraft) !== JSON.stringify(draft) && questId === curQuestId)
      setDraft(newDraft);
  }, [objectives, draft, questId, curQuestId]);

  const handleInsertDraftObjective = () => {
    setDraft([
      ...draft,
      {
        id: uuid(),
        title: '',
        isDone: false,
        isOptional: false,
        isDraft: true,
      },
    ]);
  };

  const handleRemoveDraftObjective = (id: string) => {
    setDraft(draft.filter((o) => o.id !== id));
  };

  return (
    <ul className="group/list space-y-2">
      {draft.map((obj, index) => (
        <Objective
          key={obj.id}
          onSaveObjective={onSave}
          onRemoveObjective={handleRemoveDraftObjective}
          {...obj}
        />
      ))}
      <li
        className={classNames('transition flex items-center justify-center hover:opacity-100', {
          'md:opacity-0': !!draft.length,
          'pt-8': !!draft.length,
        })}
      >
        <button
          className="relative rounded-full p-1 text-center align-baseline text-xs font-bold leading-none border group hover:border-gold"
          onClick={handleInsertDraftObjective}
        >
          <PlusIcon className="h-6 w-6 group-hover:fill-gold" />
        </button>
      </li>
    </ul>
  );
};
