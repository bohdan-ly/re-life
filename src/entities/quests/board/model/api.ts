import { env } from 'process';

import { Api } from 'shared/model';

import { QUESTS_DETAILS_MOCK, QUESTS_MOCK } from './mocks';
import { Quest, QuestDetails, QuestResponse } from './types';

export const getQuestById = async (id: string): Promise<{ quest: QuestDetails | null }> => {
  if (!id) return { quest: null };

  const { data } = await Api.fetch({
    url: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/quests/${id}`,
    withCredentials: true,
  });

  const { data: questData } = data as any;

  if (!questData || !questData.id) throw new Error('Failed to fetch quest details');

  const quest = {
    id: questData.id,
    title: questData.quest,
    impact: questData.impact,
    difficulty: questData.difficulty,
    completed: questData.completed,
    description: questData.description || '',
    createdBy: questData.createdBy,
    objectives: [],
  };

  return { quest };
};

export const getQuests = async (): Promise<{
  quests: Quest[];
  questDetails: QuestDetails | null;
}> => {
  const { data } = await Api.fetch({
    url: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/quests`,
    withCredentials: true,
  });

  const { data: questsRes, results } = data as QuestResponse;

  if (!Array.isArray(questsRes)) throw new Error('Quests is not array');

  const quests = questsRes.map((q) => ({
    id: q._id,
    title: q.quest,
    impact: q.impact,
    difficulty: q.difficulty,
    completed: q.completed,
  }));

  const { quest } = await getQuestById(quests[0]?.id ?? null);

  return { quests, questDetails: quest };
};

export const createQuest = async (
  questData: Partial<QuestDetails>,
): Promise<{
  quest: QuestDetails | null;
}> => {
  const { data } = await Api.fetch({
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/quests`,
    withCredentials: true,
    data: questData,
  });

  const { data: questsRes } = data as any;

  if (!questsRes || !questsRes.id) throw new Error('Failed to fetch quest details');

  const quest = {
    id: questsRes.id,
    title: questsRes.quest,
    impact: questsRes.impact,
    difficulty: questsRes.difficulty,
    completed: questsRes.completed,
    description: questsRes.description || '',
    createdBy: questsRes.createdBy,
    objectives: [],
  };

  return { quest };
};
