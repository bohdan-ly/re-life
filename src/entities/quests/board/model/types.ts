export type Quest = {
  id: string;
  title: string;
  impact: number;
  difficulty: number;
  completed: boolean;
};

export type ObjectiveType = { id: string; title: string; isDone: boolean; isOptional: boolean };

export type RewardsType = { xp: number; gold: number; buffs: []; debuffs: [] };

export type QuestDetails = {
  id: string;
  title: string;
  impact: number;
  difficulty: number;
  completed: boolean;
  active: boolean;
  type: 'mixed' | 'study' | 'labor';
  description: string;
  createdBy: string;
  updatedAt: Date;
  createdAt: Date;
  objectives: Array<ObjectiveType>;
  rewards: RewardsType;
};

export type QuestSliceState = {
  quests: QuestDetails[];
  selectedQuest: QuestDetails | null;
  questStatus: Status;
  status: Status;
};

export type QuestResponse = {
  data: any;
  results: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}
