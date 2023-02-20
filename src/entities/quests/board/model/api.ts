import { Api } from 'shared/api';

import { QUESTS_DETAILS_MOCK, QUESTS_MOCK } from './mocks';
import { Quest, QuestDetails } from './types';

export const getQuestById = async (id: string): Promise<{ quest: QuestDetails }> => {
  const quest = QUESTS_DETAILS_MOCK.find((q) => q.id === id);
  if (!quest) throw new Error('Failed to fetch quest details');

  return new Promise((resolve, reject) => resolve({ quest }));
};

export const getQuests = async (): Promise<{ quests: Quest[]; questDetails: QuestDetails }> => {
  const { quest } = await getQuestById('1');
  return new Promise((resolve, reject) => resolve({ quests: QUESTS_MOCK, questDetails: quest }));
};
