import xss from 'xss';

import { useAppDispatch, useAppSelector, useMediaLayout } from 'shared';
import { notify } from 'shared/ui/theme';

import { questsModel } from '..';

import { patchQuest, deleteQuest } from './api';
import { ObjectiveType, Quest, QuestDetails } from './types';

export const useQuestDetailsActions = (quest: QuestDetails | null) => {
  const dispatch = useAppDispatch();
  const quests = useAppSelector(questsModel.selectQuests);
  const isMobile = useMediaLayout();

  return {
    saveTitle: async (title: string) => {
      try {
        const trimmed = title?.trim() || '';
        if (!trimmed || !quest || trimmed === quest.title) return null;

        const { newQuest } = await patchQuest({
          ...quest,
          title: encodeURIComponent(trimmed),
        });

        if (newQuest) {
          dispatch(
            questsModel.updateQuest({
              ...newQuest,
              title: decodeURIComponent(newQuest.title || ''),
            }),
          );
        }

        return newQuest;
      } catch (err) {
        console.error(err);
        return null;
      }
    },
    saveDescription: async (description: string) => {
      try {
        if (!description || !quest || description === quest.description) return null;

        const { newQuest } = await patchQuest({
          ...quest,
          description: encodeURIComponent(description),
        });

        if (newQuest) {
          dispatch(
            questsModel.updateQuest({
              ...newQuest,
              description: decodeURIComponent(newQuest.description || ''),
            }),
          );
        }

        return newQuest;
      } catch (err) {
        console.error(err);
        return null;
      }
    },
    saveObjective: async (objective: ObjectiveType) => {
      try {
        if (!objective?.title || !quest?.objectives) return null;

        const oldObjectiveIdx = quest.objectives.findIndex((o) => o.id === objective.id);
        const newObjectives = [...(quest.objectives || [])];

        if (oldObjectiveIdx === -1) {
          const { objective: newObjective } = await questsModel.api.createObjective(
            objective.title,
            quest.id,
          );
          if (newObjective) newObjectives.push(newObjective);
        }
        //  else {
        //   newObjectives[]
        // }

        if (JSON.stringify(newObjectives) !== JSON.stringify(quest.objectives)) {
          const { newQuest } = await patchQuest({ ...quest, objectives: newObjectives });
          if (newQuest) {
            dispatch(questsModel.updateQuest(newQuest));
          }
          return newQuest;
        }

        return quest;
      } catch (err) {
        notify({ message: 'Failed to save objectives' });
        console.error(err);
        return null;
      }
    },
    saveRank: async (rank: number) => {
      try {
        if (typeof rank !== 'number' || rank < 0 || rank > 5 || !quest) return null;

        const { newQuest } = await patchQuest({ ...quest, difficulty: rank });

        if (newQuest) {
          dispatch(questsModel.updateQuest(newQuest));
        }

        return newQuest;
      } catch (err) {
        console.error(err);
        return null;
      }
    },
    completeQuest: async () => {
      try {
        if (!quest) return null;

        const { newQuest } = await patchQuest({ ...quest, active: false, completed: true });

        if (newQuest) {
          dispatch(questsModel.updateQuest(newQuest));
        }

        return newQuest;
      } catch (err) {
        console.error(err);
        return null;
      }
    },
    toggleActivateQuest: async (active: boolean) => {
      try {
        if (!quest) return null;

        const { newQuest } = await patchQuest({ ...quest, active });

        if (newQuest) {
          dispatch(questsModel.updateQuest(newQuest));
        }

        return newQuest;
      } catch (err) {
        console.error(err);
        return null;
      }
    },
    deleteQuest: async () => {
      try {
        if (!quest) return null;

        const { success } = await deleteQuest(quest.id);

        if (success) {
          dispatch(questsModel.deleteQuest({ id: quest.id, select: !isMobile }));
        }

        return success;
      } catch (err) {
        console.error(err);
        return null;
      }
    },
  };
};
