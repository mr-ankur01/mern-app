import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blogs",
  initialState: [],
  reducers: {
    setBlog: (state, action) => {
      return action.payload;
    },
    addBlog: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { setBlog, addBlog } = blogSlice.actions;

export default blogSlice.reducer;
