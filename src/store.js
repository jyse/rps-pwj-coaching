import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import gameReducer from "./slices/gameSlice";
import userReducer from "./slices/userSlice";

export default configureStore({
  reducer: {
    game: gameReducer,
    user: userReducer,
  },
});
