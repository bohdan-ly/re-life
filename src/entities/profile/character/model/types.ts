export type CharacterStatsType = {
  level: number;
  levelStage: number;
  experience: number;
  experienceMax: number;
  experienceStageMax: number;
  manapool: number;
  stamina: number;
  rating: number;
  ratingStatus?: String;
};

export type CharacterType = {
  id: string;
  name: string;
  class: string;
  photo: string;
  createdAt: Date;
  ownedBy: string;
  stats: CharacterStatsType;
  effects?: Object;
  inventory: {
    gold: number;
  };
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type CharacterSliceState = {
  character: CharacterType | null;
  status: Status;
};
