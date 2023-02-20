import { configureStore } from '@reduxjs/toolkit';

import { questsModel } from 'entities/quests/board';

questsModel;
export const store = configureStore({
  reducer: {
    quests: questsModel.questReducer,
  },
});
