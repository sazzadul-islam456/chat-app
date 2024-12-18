import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: localStorage.getItem("userLoginInfo") 
      ? JSON.parse(localStorage.getItem("userLoginInfo")) 
      : null, // Corrected JSON.parse usage
  },
  reducers: {
    userLoginInfo: (state, action) => {
      console.log("Previous State:", state.userInfo);
      state.userInfo = action.payload; // Updates userInfo correctly
      console.log("Updated State:", state.userInfo); // Logs new state
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLoginInfo } = userSlice.actions;

export default userSlice.reducer;
