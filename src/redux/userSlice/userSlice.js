import { createSlice } from "@reduxjs/toolkit";

//configuring the initial state
const initialState = {
  userName: null,
  userEmail: null,
  userType: null,
  collegeId: null,
};

//creating the userSlice
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userName = action.userName;
      state.userEmail = action.userEmail;
      state.userType = action.userType;
      state.collegeId = action.collegeId;
    },
    setSignout: (state, action) => {
      state.userName = null;
      state.userEmail = null;
      state.userType = null;
      state.collegeId = null;
    },
  },
});

//export selectUser method
export const selectUser = (state) => state.user;

export const { setUser, setSignout } = userSlice.actions;
export default userSlice.reducer;
