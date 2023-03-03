import { configureStore } from '@reduxjs/toolkit';

import { userModel } from 'shared/model';

import { characterModel } from 'entities/profile/character';
import { questsModel } from 'entities/quests/board';

export const store = configureStore({
  reducer: {
    quests: questsModel.questReducer,
    user: userModel.userReducer,
    character: characterModel.characterReducer,
  },
});
