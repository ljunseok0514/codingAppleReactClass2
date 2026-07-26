import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

let stock = createSlice({
  name: "stock",
  initialState: [
    { id: 2, name: "Grey Yordan", count: 1 },
    { id: 0, name: "White and Black", count: 2 },
  ],
  reducers: {
    increaseCount(state, action) {
      state.find((item) => item.id === action.payload).count += 1;
      //   state[action.payload].count++
    },
    addState(state, action) {
      state.push(action.payload);
    },
  },
});

export let { increaseCount, addState } = stock.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
  },
});
