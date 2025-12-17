import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./reducers/blogReducer";
import formReducer from "./reducers/formReducer";
import userReducer from "./reducers/userReducer";
import authReducer from "./reducers/authReducer";

export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    forms: formReducer,
    users: userReducer,
    auth: authReducer,
  },
});
