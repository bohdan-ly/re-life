export type Quest = {
  id: string;
  title: string;
  impact: number;
  difficulty: number;
  completed: boolean;
};

export type QuestDetails = {
  id: string;
  title: string;
  impact: number;
  difficulty: number;
  completed: boolean;
  description: string;
  objectives: Array<{ id: string; title: string; isDone: boolean; isOptional: boolean }>;
};

export type QuestSliceState = {
  quests: Quest[];
  selectedQuest: QuestDetails | null;
  questStatus: Status;
  status: Status;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}