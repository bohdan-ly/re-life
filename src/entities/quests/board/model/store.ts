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

export const fetchQuestDetails = createAsyncThunk<QuestDetails | null, Record<string, string>>(
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
    updateQuest: (state, action) => {
      state.quests = state.quests.map((q) => (q.id === action.payload.id ? action.payload : q));
      state.selectedQuest = action.payload;
    },
    setQuests: (state, action) => {
      state.quests = action.payload;
    },
    setQuestDetailsStatus: (state, action: PayloadAction<Status>) => {
      state.questStatus = action.payload;
    },
    setQuestDetails: (state, action: PayloadAction<QuestDetails>) => {
      state.quests = state.quests.map((q) => (q.id === action.payload.id ? action.payload : q));
      state.selectedQuest = action.payload;
    },
    selectQuest: (state, action: PayloadAction<QuestDetails | null>) => {
      state.selectedQuest = action.payload;
    },
    addQuest: (state, action) => {
      state.quests = [action.payload, ...state.quests];
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

// Action creators are generated for each case reducer function
export const { setQuests, selectQuest, addQuest, setQuestDetails, updateQuest } =
  questSlice.actions;

export const questReducer = questSlice.reducer;
