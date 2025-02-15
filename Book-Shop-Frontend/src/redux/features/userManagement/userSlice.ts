import { createSlice } from "@reduxjs/toolkit";

type TUserInitialData = {
  email: null | object;
  password: null | string;
  role: null | string;
};
type TInitialState = {
  userData: TUserInitialData[];
};

const initialState: TInitialState = {
  userData: [],
};

const userSlice = createSlice({
  name: "allUser",
  initialState,
  reducers: {
    getAllUser: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
