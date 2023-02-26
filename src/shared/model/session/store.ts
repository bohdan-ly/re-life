import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { getUser } from './api';
import { User, UserSliceState, Status } from './types';

export const fetchUser = createAsyncThunk<User>('user/fetchUser', async () => await getUser());

const initialState: UserSliceState = {
  user: null,
  status: Status.LOADING, // loading | success | error
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.user = null;
      state.status = Status.LOADING;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.user = null;
      state.status = Status.ERROR;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;

export const userReducer = userSlice.reducer;
