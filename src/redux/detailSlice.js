import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    isLoading: false,
    details: [],
  },
  reducers: {
    startFetch: (state) => {
      state.isLoading = true;
    },
    successGetData: (state, action) => {
      state.isLoading = false;
      state.details = action.payload;
    },
  },
});

export function getDetailMentors(id) {
  return async function (dispatch) {
    try {
      dispatch(startFetch());
      const { data } = await axios.get(
        `https://shelled-aeolian-raisin.glitch.me/Mentor/${id}`
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

const { startFetch, successGetData } = detailSlice.actions;
export default detailSlice.reducer;
