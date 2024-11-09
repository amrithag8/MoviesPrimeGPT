import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt", 
    initialState:{
        toggleButton:false
    },
    reducers:{
        toggleGptButton:(state)=>{
            state.toggleButton=!state.toggleButton;
        }
    }
})


export default gptSlice.reducer;
export const {toggleGptButton}=gptSlice.actions;