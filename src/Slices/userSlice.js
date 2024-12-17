import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
  },
  reducers: {
    userLoginInfo: (state, action) => {
     
     console.log(state, "state")
     state.userInfo == action.payload
    },
    
  }
})

// Action creators are generated for each case reducer function
export const { userLoginInfo } = userSlice.actions

export default userSlice.reducer