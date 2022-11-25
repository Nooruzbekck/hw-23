import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todo.push({
        id: action.payload.id,
        text: action.payload.value,
        isChecked: false,
      });
      // state.isDone = false;
    },
    deleteTodo(state, action) {
      const { id, isChecked } = action.payload;
      if (isChecked) {
        state.todo = state.todo.filter((item) => item.id !== id);
      }
    },
    toggleStatus(state, action) {
      state.todo = state.todo.map((item) => {
        if (item.id === action.payload) {
          item.isChecked = !state.isChecked;
        }
        return item;
      });
    },
  },
});
export const todoActions = todoSlice.actions;
export default todoSlice;
