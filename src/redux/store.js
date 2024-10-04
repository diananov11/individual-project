import { configureStore } from "@reduxjs/toolkit";
import mentorSlice from "./mentorSlice";
import detailSlice from "./detailSlice";

const store = configureStore({
  reducer: {
    mentor: mentorSlice,
    detail: detailSlice,
  },
});

export default store;
