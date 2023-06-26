import {createSlice} from "@reduxjs/toolkit";

export const testReducer = createSlice({
  name: "test",
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    }
  }
});

export const { increment } = testReducer.actions;

export default testReducer.reducer;