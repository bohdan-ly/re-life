import { Api } from 'shared/model';

import { ObjectiveType, Quest, QuestDetails, QuestResponse } from './types';

type ObjectiveApi = {
  objective: String;
  completed: Boolean;
  optional: Boolean;
  description: String;
  updatedAt?: Date;
  quest?: string;
  _id?: string;
};

type QuestApi = {
  quest: String;
  description: String;
  impact: Number;
  difficulty: Number;
  completed: Boolean;
  updatedAt: Date;
  imageCover: String;
  objectives: { _id: string }[];
};

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
    description: decodeURIComponent(questData.description || ''),
    createdBy: questData.createdBy,
    objectives: questData.objectives.map((o: ObjectiveApi) => ({
      id: o._id,
      title: o.objective,
      isDone: o.completed,
      isOptional: o.optional,
    })),
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

  const { data: questsRes } = (data || {}) as any;

  if (!questsRes || !questsRes.id) {
    // throw new Error('Failed to fetch quest details');
    return { quest: null };
  }

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

export const createObjective = async (
  objectiveTitle: string,
): Promise<{
  objective: ObjectiveType | null;
}> => {
  const newObjective: ObjectiveApi = {
    objective: objectiveTitle,
    completed: false,
    optional: false,
    description: '',
  };

  const { data } =
    (await Api.fetch({
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/objectives`,
      withCredentials: true,
      data: newObjective,
    })) || {};

  const { data: objRes } = (data || {}) as any;

  if (!objRes || !objRes.id) {
    // throw new Error('Failed to fetch quest details');
    return { objective: null };
  }

  const objective = {
    id: objRes.id,
    title: objRes.objective,
    isDone: objRes.completed,
    isOptional: objRes.optional,
  };

  return { objective };
};
export const patchQuest = async (
  quest: QuestDetails,
): Promise<{ newQuest: QuestDetails | null }> => {
  if (!quest.id) return { newQuest: null };

  const delta: QuestApi = {
    quest: quest.title,
    description: quest.description,
    impact: quest.impact,
    difficulty: quest.difficulty,
    completed: quest.completed,
    updatedAt: new Date(),
    imageCover: '',
    objectives: quest.objectives.map((o) => ({ _id: o.id })),
  };

  const { data } = await Api.fetch({
    method: 'PATCH',
    url: `${process.env.NEXT_PUBLIC_SERVER_ENDPOINT}/quests/${quest.id}`,
    data: delta,
    withCredentials: true,
  });

  const { data: questData } = data as any;

  if (!questData || !questData.id) throw new Error('Failed to fetch quest details');

  const newQuest = {
    id: questData.id,
    title: questData.quest,
    impact: questData.impact,
    difficulty: questData.difficulty,
    completed: questData.completed,
    description: questData.description || '',
    createdBy: questData.createdBy,
    objectives: [],
  };

  return { newQuest };
};
