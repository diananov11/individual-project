import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";

const motivationSlice = createSlice({
  name: "motivation",
  initialState: {
    isLoading: false,
    isFill: false,
    motivations: "",
  },
  reducers: {
    startFetch: (state) => {
      state.isLoading = true;
      state.isFill = true;
    },
    successGetData: (state, action) => {
      state.isLoading = false;
      state.isFill = true;
      state.motivations = action.payload;
    },
  },
});

export function getMotivationAI(input) {
  return async function (dispatch) {
    try {
      dispatch(startFetch());
      let apiKey = "4434cea8d38c7e36af4b007d12352t0o";
      let prompt =
        "You are a generator motivation expert for education. Your mission is to increase confidence 3T marginal women to achieve scholarship and never give up to education by her name and her city, and  and use <blockquote> around the motivation with quotation mark and give emoji at the end. Make sure to follow the user instructions and indonesia language.";
      let context = `User instructions: Generate a motivation about ${input}`;
      const { data } = await axios.get(
        `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`
      );
      dispatch(successGetData(data.answer));
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

const { startFetch, successGetData } = motivationSlice.actions;
export default motivationSlice.reducer;
