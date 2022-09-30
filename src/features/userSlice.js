import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  userdata: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action)=>{
      state.userdata = action.payload;
    },
    logout: (state,action)=>{
      state.userdata = null;
    }

  }
})

export const {login , logout} = userSlice.actions;
export const selectUser = (state)=> state.userstore.userdata;
export default userSlice.reducer;
