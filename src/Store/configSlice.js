import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice= createSlice({
name:"Config",
initialState:{
    lang:"en"
},
reducers:{
    addSelectedLanguage:(state, action)=>{
        state.lang=action.payload;
    }
}

});

export default ConfigSlice.reducer;
export const {addSelectedLanguage} = ConfigSlice.actions;