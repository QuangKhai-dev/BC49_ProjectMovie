import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    get_loading_started: (state) => {
      state.isActive = true;
    },
    get_loading_ended: (state) => {
      state.isActive = false;
    },
  },
});

export const { get_loading_started, get_loading_ended } = loadingSlice.actions;

export default loadingSlice.reducer;
