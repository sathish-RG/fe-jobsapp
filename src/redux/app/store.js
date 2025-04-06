import { configureStore } from "@reduxjs/toolkit";
import registerReducer from "../features/auth/registerSlice"
import loginReduc from "../features/auth/loginSlice";

const store=configureStore({
  reducer:{
    register:registerReducer,
    login:loginReduc,
  }
});
export default store;