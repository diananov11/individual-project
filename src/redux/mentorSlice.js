import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const mentorSlice = createSlice({
  name: "mentor",
  initialState: {
    isLoading: false,
    mentors: [],
  },
  reducers: {
    startFetch: (state) => {
      state.isLoading = true;
    },
    successGetData: (state, action) => {
      state.isLoading = false;
      state.mentors = action.payload;
    },
  },
});

export function getAllMentors() {
  return async function (dispatch) {
    try {
      dispatch(startFetch());
      const { data } = await axios.get(
        "https://shelled-aeolian-raisin.glitch.me/Mentor"
      );
      dispatch(successGetData(data));
    } catch (e) {
      console.log(e);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `Something went wrong! ${e}`,
      });
    }
  };
}

const { startFetch, successGetData } = mentorSlice.actions;
export default mentorSlice.reducer;
