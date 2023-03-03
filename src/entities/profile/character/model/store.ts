import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getCharacter } from './api';
import { CharacterType, CharacterSliceState, Status } from './types';

export const fetchCharacter = createAsyncThunk<CharacterType>(
  'character/fetchCharacter',
  async () => await getCharacter(),
);

const initialState: CharacterSliceState = {
  character: null,
  status: Status.LOADING, // loading | success | error
};

export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setCharacter: (state, action: PayloadAction<CharacterType>) => {
      state.character = action.payload;
    },
  },
  extraReducers: (builder) => {
    // <---- Get all recipes ---->
    builder.addCase(fetchCharacter.pending, (state, action) => {
      // @ts-ignore
      state.character = {};
      state.status = Status.LOADING;
    });
    builder.addCase(fetchCharacter.fulfilled, (state, action) => {
      state.character = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchCharacter.rejected, (state, action) => {
      state.character = null;
      state.status = Status.ERROR;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setCharacter } = characterSlice.actions;

export const characterReducer = characterSlice.reducer;
