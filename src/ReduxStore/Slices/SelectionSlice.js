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
    house: {
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
    },
    houseSelection(state, action) {
      state.house = {
        borderColor: action.payload.borderColor,
        shadowColor: action.payload.shadowColor,
        image: action.payload.image,
        id: action.payload.id,
      };
    },
    pieceIsSelected(state, action) {
      state.isSelected = action.payload;
    },
  },
});

export const selectionActions = selectionSlice.actions;

export default selectionSlice.reducer;
