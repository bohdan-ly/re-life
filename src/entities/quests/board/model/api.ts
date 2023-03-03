import { Api } from 'shared/model';

import { normalizeObjective, normalizeQuest } from './helpers';
import { ObjectiveType, Quest, QuestDetails, QuestResponse, RewardsType } from './types';

export type ObjectiveApi = {
  objective: string;
  completed: boolean;
  optional: boolean;
  description: string;
  updatedAt?: Date;
  quest?: string;
  _id: string;
};

export type QuestApi = {
  _id: string;
  quest: string;
  description: string;
  impact: number;
  difficulty: number;
  active: boolean;
  completed: boolean;
  updatedAt: Date;
  createdAt: Date;
  createdBy: string;
  type: 'mixed' | 'study' | 'labor';
  imageCover: string;
  objectives: ObjectiveApi[];
  rewards: RewardsType;
};

export const getQuestById = async (id: string): Promise<{ quest: QuestDetails | null }> => {
  if (!id) return { quest: null };

  const { data } = await Api.fetch({
    url: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/quests/${id}`,
    withCredentials: true,
  });

  const { data: questData } = data as any;

  if (!questData || !questData._id) throw new Error('Failed to fetch quest details');

  const quest = normalizeQuest(questData);

  return { quest };
};

export const getQuests = async (): Promise<{
  quests: QuestDetails[];
  questDetails: QuestDetails | null;
}> => {
  const { data } = await Api.fetch({
    url: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/quests`,
    withCredentials: true,
  });

  const { data: questsRes, results } = data as QuestResponse;

  if (!Array.isArray(questsRes)) throw new Error('Quests is not array');

  const quests = questsRes.map((questData) => normalizeQuest(questData));

  // const { quest } = await getQuestById(quests[0]?.id ?? null);

  return { quests, questDetails: quests[0] || null };
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

  const { data: questsRes } = (data || {}) as any;

  if (!questsRes || !questsRes._id) {
    // throw new Error('Failed to fetch quest details');
    return { quest: null };
  }

  const quest = normalizeQuest(questsRes);

  return { quest };
};

export const createObjective = async (
  objectiveTitle: string,
  questId: string,
): Promise<{
  objective: ObjectiveType | null;
}> => {
  const { data } =
    (await Api.fetch({
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/objectives`,
      withCredentials: true,
      data: {
        questId: questId,
        objective: objectiveTitle,
        completed: false,
        optional: false,
        description: '',
      },
    })) || {};

  const { data: objRes } = (data || {}) as any;

  if (!objRes || !objRes.id) {
    // throw new Error('Failed to fetch quest details');
    return { objective: null };
  }

  const objective = normalizeObjective(objRes);

  return { objective };
};
export const patchQuest = async (
  quest: QuestDetails,
): Promise<{ newQuest: QuestDetails | null }> => {
  if (!quest.id) return { newQuest: null };

  const { data } = await Api.fetch({
    method: 'PATCH',
    url: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/quests/${quest.id}`,
    data: {
      quest: quest.title,
      description: quest.description,
      impact: quest.impact,
      difficulty: quest.difficulty,
      completed: quest.completed,
      active: quest.active,
      updatedAt: new Date(),
      imageCover: '',
      objectives: quest.objectives.map((o) => ({ _id: o.id })),
    },
    withCredentials: true,
  });

  const { data: questData } = data as any;

  if (!questData || !questData.id) throw new Error('Failed to fetch quest details');

  const newQuest = normalizeQuest(questData);

  return { newQuest };
};

export const deleteQuest = async (questId: string): Promise<{ success: boolean }> => {
  if (!questId) return { success: false };

  await Api.fetch({
    method: 'DELETE',
    url: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/quests/${questId}`,
    withCredentials: true,
  });

  return { success: true };
};
