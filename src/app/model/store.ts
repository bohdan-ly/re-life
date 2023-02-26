import { configureStore } from '@reduxjs/toolkit';

import { userModel } from 'shared/model';

import { questsModel } from 'entities/quests/board';

questsModel;
export const store = configureStore({
  reducer: {
    quests: questsModel.questReducer,
    user: userModel.userReducer,
  },
});
