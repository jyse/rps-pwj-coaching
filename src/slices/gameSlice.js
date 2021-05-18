import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userHand: "",
  computerHand: "",
  score: 0,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setUserHand: (state, action) => {
      state.userHand = action.payload;
    },
    setComputerHand: (state, action) => {
      state.computerHand = action.payload;
    },
    setScore: (state, action) => {
      state.score += action.payload;
    },
  },
});

export const { setUserHand, setComputerHand, setScore } = gameSlice.actions;

export const selectUserHand = (state) => state.game.userHand;
export const selectComputerHand = (state) => state.game.computerHand;
export const selectScore = (state) => state.game.score;

export default gameSlice.reducer;
