import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice= createSlice({
name:"Config",
initialState:{
    lang:"en",
    dropDown:false,
},
reducers:{
    addSelectedLanguage:(state, action)=>{
        state.lang=action.payload;
    },
    addDropDown:(state)=>{
        state.dropDown=!state.dropDown;
    }
}

});

export default ConfigSlice.reducer;
export const {addSelectedLanguage, addDropDown} = ConfigSlice.actions;