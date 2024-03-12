import { configureStore } from "@reduxjs/toolkit";
import { myTodoDataSlice } from "./slice/todoSlice";
const store = configureStore({
  reducer: { todo: myTodoDataSlice.reducer },
});
export default store;
