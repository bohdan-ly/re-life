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
  objectives: ObjectiveType[];
  onSave: (objective: ObjectiveType[]) => void;
};

export const Objectives: React.FC<Objectives> = ({ objectives = [], onSave }) => {
  const dispatch = useAppDispatch();
  const [draft, setDraft] = React.useState<DraftObject[]>(objectives);

  React.useEffect(() => {
    setDraft(objectives);
  }, [objectives]);

  const handleCompleteObjective = async (obj: DraftObject) => {
    try {
      const newTitle = obj.title.trim();

      if (newTitle.length > 0) {
        const { objective } = await questsModel.api.createObjective(newTitle);
        if (objective) {
          onSave([...objectives, objective]);
          return;
        }
        notify({ message: 'Failed to create new objective' });
      }
      setDraft(draft.filter((d) => d.id !== obj.id));
    } catch (e) {
      console.error(e);
      notify({ message: 'Failed to create new objective' });
    }
  };

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

  return (
    <ul className="group/list">
      {draft.map((obj, index) => (
        <Objective key={obj.id} onSaveObjective={handleCompleteObjective} {...obj} />
      ))}
      <li
        className={classNames('transition flex items-center justify-center hover:opacity-100', {
          'opacity-0': !!draft.length,
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
