import xss from 'xss';

import { useAppDispatch, useAppSelector } from 'shared';

import { questsModel } from '..';

import { patchQuest } from './api';
import { ObjectiveType, Quest, QuestDetails } from './types';

export const useQuestDetailsActions = (quest: QuestDetails | null) => {
  const dispatch = useAppDispatch();
  const quests = useAppSelector(questsModel.selectQuests);

  return {
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
    saveObjectives: async (objectives: ObjectiveType[]) => {
      try {
        if (!objectives || !quest) return null;

        const { newQuest } = await patchQuest({ ...quest, objectives });

        if (newQuest) {
          dispatch(questsModel.updateQuest(newQuest));
        }

        return newQuest;
      } catch (err) {
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

        const { newQuest } = await patchQuest({ ...quest, completed: true });

        if (newQuest) {
          dispatch(questsModel.updateQuest(newQuest));
        }

        return newQuest;
      } catch (err) {
        console.error(err);
        return null;
      }
    },
  };
};
