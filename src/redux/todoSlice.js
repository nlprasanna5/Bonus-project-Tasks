import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    // editTodo: (state, action) => {
    //   const { id, title } = action.payload;
    //   const todo = state.find((todo) => todo.id === id);
    //   if (todo) {
    //     todo.title = title;
    //   }
    //   return state;
    // },
    editTodo: (state, action) => {
      const { id, title } = action.payload;
      const todoIndex = state.findIndex((todo) => todo.id === id);
      if (todoIndex !== -1) {
        state[todoIndex].title = title;
      }
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
  },
});

export const { addTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
