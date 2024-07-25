import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    learnerInfo: localStorage.getItem('learnerInfo')  
      ? JSON.parse(localStorage.getItem('learnerInfo')) 
      : null,
  };
  


const authSlice= createSlice({
    name: 'learnerAuth',
    initialState,
    reducers: {
        setLearnerCredentials : (state,action)=>{
            state.learnerInfo=action.payload;
            localStorage.setItem('learnerInfo',JSON.stringify(action.payload))
        },
        learnerLogout: (state)=>{
            state.learnerInfo=null;
            localStorage.removeItem('learnerInfo')
            localStorage.removeItem('learnerToken')
        }
    }
})


export const {setLearnerCredentials,learnerLogout} = authSlice.actions;

export default authSlice.reducer;