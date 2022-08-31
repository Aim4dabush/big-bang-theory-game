import { createSlice } from "@reduxjs/toolkit";

const selectionSlice = createSlice({
  name: "selection",
  initialState: {
    player: {
      borderColor: null,
      shadowColor: null,
      image: null,
      id: null,
    },
    computer: {
      borderColor: null,
      shadowColor: null,
      image: null,
      id: null,
    },
    isSelected: false,
  },
  reducers: {
    playerSelection(state, action) {
      state.player = {
        borderColor: action.payload.borderColor,
        shadowColor: action.payload.shadowColor,
        image: action.payload.image,
        id: action.payload.id,
      };

      state.isSelected = action.payload.isSelected;
    },
    computerSelection(state, action) {
      state.computer = {
        borderColor: action.payload.borderColor,
        shadowColor: action.payload.shadowColor,
        image: action.payload.image,
        id: action.payload.id,
      };
    },
  },
});

export const selectionActions = selectionSlice.actions;

export default selectionSlice.reducer;
