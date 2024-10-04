import { configureStore } from "@reduxjs/toolkit";
import mentorSlice from "./mentorSlice";
import detailSlice from "./detailSlice";
import motivationSlice from "./motivationSlice";

const store = configureStore({
  reducer: {
    mentor: mentorSlice,
    detail: detailSlice,
    motivation: motivationSlice,
  },
});

export default store;
