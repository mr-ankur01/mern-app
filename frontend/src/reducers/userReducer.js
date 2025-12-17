import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    },
    setUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { addUser, setUser } = userSlice.actions;

export default userSlice.reducer;
