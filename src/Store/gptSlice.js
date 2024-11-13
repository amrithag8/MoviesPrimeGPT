import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt", 
    initialState:{
        toggleButton:false,
        searchInputValue:"",
        gptSearchResult:null,
        aiSearchArray:null,
    },
    reducers:{
        toggleGptButton:(state)=>{
            state.toggleButton=!state.toggleButton;
        },
        addSearchValue:(state, action)=>{
state.searchInputValue=action.payload;
        },
        addGptsearchResult:(state, action)=>{
state.gptSearchResult=action.payload;
        },
        addAIsearchArray:(state, action)=>{
         state.aiSearchArray=action.payload;   
        }
    }
})


export default gptSlice.reducer;
export const {toggleGptButton, addSearchValue, addGptsearchResult, addAIsearchArray}=gptSlice.actions;