import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "forms",
  initialState: [],
  reducers: {
    formSubmit: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { formSubmit } = formSlice.actions;
export default formSlice.reducer;
