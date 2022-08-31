import { configureStore } from "@reduxjs/toolkit";

//slices
import scoreReducer from "./Slices/ScoreSlice";
import selectionReducer from "./Slices/SelectionSlice";

const store = configureStore({
  reducer: {
    score: scoreReducer,
    selection: selectionReducer,
  },
});

export default store;
