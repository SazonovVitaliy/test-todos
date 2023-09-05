import { ITodos } from "./../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ITodos = {
  list: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.list.push({
        id: Math.random(),
        title: action.payload,
        completed: false,
      });
    },
    completeTodo(state, action: PayloadAction<number>) {
      const completedTodo = state.list.find(
        (todo) => todo.id === action.payload
      );
      if (completedTodo) {
        completedTodo.completed = !completedTodo.completed;
      }
    },
    removeTodo(state, action: PayloadAction<number>) {
      state.list = state.list.filter((todo) => todo.id !== action.payload);
    },
    removeCompletedTodo(state) {
      state.list = state.list.filter((todo) => todo.completed === false);
    },
  },
});

export const { addTodo, completeTodo, removeTodo, removeCompletedTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
