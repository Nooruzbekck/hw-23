import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./reducers/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
export default store;
