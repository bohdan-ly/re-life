import { QuestApi, ObjectiveApi } from './api';
import { ObjectiveType, QuestDetails } from './types';

export const normalizeObjective = (objective: ObjectiveApi): ObjectiveType => {
  const normalizedObjective = {
    id: objective._id,
    title: objective.objective,
    isDone: objective.completed,
    isOptional: objective.optional,
  };

  return normalizedObjective;
};

export const normalizeQuest = (quest: QuestApi): QuestDetails => {
  const normalizedQuest = {
    id: quest._id,
    title: quest.quest,
    type: quest.type,
    impact: quest.impact,
    difficulty: quest.difficulty,
    active: quest.active,
    completed: quest.completed,
    description: decodeURIComponent(quest.description || ''),
    createdBy: quest.createdBy,
    updatedAt: quest.updatedAt,
    createdAt: quest.createdAt,
    objectives: quest.objectives.map((o: ObjectiveApi) => normalizeObjective(o)),
    rewards: quest.rewards,
  };

  return normalizedQuest;
};
