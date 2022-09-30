import {createSlice} from '@reduxjs/toolkit';



const appSlice = createSlice({
  name: "app",
  initialState:{
    channelId:null,
    channelName: null,
  },
  reducers: {
    setChannelInfo: (state, action)=>{
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  }
})

export const {setChannelInfo} = appSlice.actions;
export const selectchannelid = (state)=> state.appdata.channelId;
export const selectchannelname = (state)=> state.appdata.channelName;

export default appSlice.reducer;

