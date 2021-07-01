import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  email: "",
  token: "",
  refreshToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,

  reducers: {
    getAccessToken: (state, action) => {
      state.token = action.payload;
      return state;
    },

    login: (state, action) => {
      state = { ...action.payload };
      return state;
    },
    logout: (state) => {
      state.email = "";
      state.token = "";
      state.refreshToken = "";
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const userActions = userSlice.actions;

export default userSlice.reducer;
