import { createSlice } from "@reduxjs/toolkit";

const initialFilterState = {
  locked_fliter: false,
};

const filterSlice = createSlice({
  name: "user",
  initialState: initialFilterState,

  reducers: {
    changeLocked: (state, action) => {
      state.locked_fliter = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
