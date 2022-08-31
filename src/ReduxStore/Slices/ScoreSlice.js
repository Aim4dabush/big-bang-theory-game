import { createSlice } from "@reduxjs/toolkit";

const scoreSlice = createSlice({
  name: "score",
  initialState: {
    score: 0,
    message: null,
  },
  reducers: {
    win(state, action) {
      state.score = state.score + action.payload;
      state.message = "you win";
    },
    lose(state, action) {
      state.score = state.score - action.payload;
      state.message = "you lose";
    },
    tie(state, action) {
      state.score = state.score + action.payload;
      state.message = "you tied";
    },
  },
});

export const scoreActions = scoreSlice.actions;

export default scoreSlice.reducer;
