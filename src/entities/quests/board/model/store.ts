import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getQuestById, getQuests } from './api';
import { Quest, QuestDetails, QuestSliceState, Status } from './types';

export const fetchQuests = createAsyncThunk<
  { quests: Quest[]; questDetails: QuestDetails | null },
  { withQuestDetails: boolean }
>('quests/fetchQuests', async ({ withQuestDetails = true }) => {
  const res = await getQuests();
  return withQuestDetails ? res : { quests: res.quests, questDetails: null };
});

export const fetchQuestDetails = createAsyncThunk<QuestDetails, Record<string, string>>(
  'quests/fetchQuestDetails',
  async ({ questId }) => {
    const { quest } = await getQuestById(questId);
    return quest;
  },
);

const initialState: QuestSliceState = {
  quests: [],
  selectedQuest: null,
  questStatus: Status.LOADING, // loading | success | error
  status: Status.LOADING, // loading | success | error
};

export const questSlice = createSlice({
  name: 'quest',
  initialState,
  reducers: {
    setQuests: (state, action) => {
      state.quests = action.payload;
    },
    setQuestDetailsStatus: (state, action: PayloadAction<Status>) => {
      state.questStatus = action.payload;
    },
    setQuest: (state, action: PayloadAction<QuestDetails | null>) => {
      state.selectedQuest = action.payload;
    },
  },
  extraReducers: (builder) => {
    // <---- Get all recipes ---->
    builder.addCase(fetchQuests.pending, (state, action) => {
      // @ts-ignore
      state.quests = [{}, {}, {}, {}, {}, {}];
      state.status = Status.LOADING;
    });
    builder.addCase(fetchQuests.fulfilled, (state, action) => {
      state.quests = action.payload.quests;
      state.selectedQuest = action.payload.questDetails;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchQuests.rejected, (state, action) => {
      state.quests = [];
      state.status = Status.ERROR;
    });
  },
});

export const setQuestDetails = createAsyncThunk<QuestDetails, Record<string, string>>(
  'quests/setQuestDetails',
  async ({ qId }) => {
    try {
      questSlice.actions.setQuestDetailsStatus(Status.LOADING);
      const { quest } = await getQuestById(qId);
      questSlice.actions.setQuests(quest);
      questSlice.actions.setQuestDetailsStatus(Status.SUCCESS);

      return quest;
    } catch (e) {
      questSlice.actions.setQuestDetailsStatus(Status.ERROR);
      throw Error('Failed to set quest details');
    }
  },
);

// Action creators are generated for each case reducer function
export const { setQuests, setQuest } = questSlice.actions;

export const questReducer = questSlice.reducer;
