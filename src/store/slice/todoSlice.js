import { createSlice } from "@reduxjs/toolkit";

const initialTodoState = {
  myTodo: [],
};

export const myTodoDataSlice = createSlice({
  name: "myTodo",
  initialState: initialTodoState,
  reducers: {
    AddTodo: (state, action) => {
      state.myTodo.push(action.payload);
    },
  },
});

export const { AddTodo } = myTodoDataSlice.actions;
export default myTodoDataSlice.reducer;
