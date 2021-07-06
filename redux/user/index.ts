import { createSlice } from "@reduxjs/toolkit";

const initialUserState = {
  avatarUrl: "",
  token: "",
  refreshToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,

  reducers: {
    login: (state, action) => {
      state = { ...action.payload };
      return state;
    },
    logout: (state) => {
      state.avatarUrl = "";
      state.token = "";
      state.refreshToken = "";
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const userActions = userSlice.actions;

export default userSlice.reducer;
