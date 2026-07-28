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
      let found = state.find((item) => item.id === action.payload.id);

      if (found) {
        found.count += 1;
      } else {
        let newItem = { ...action.payload, count: 1 };
        state.push(newItem);
      }
    },
    delState(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export let { increaseCount, addState, delState } = stock.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
  },
});
