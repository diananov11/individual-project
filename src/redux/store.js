import { configureStore } from "@reduxjs/toolkit";
import mentorSlice from "./mentorSlice";

const store = configureStore({
  reducer: {
    mentor: mentorSlice,
  },
});

export default store;
