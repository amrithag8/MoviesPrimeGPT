import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./moviesSlice";
import ConfigReducer from "./configSlice";
import gptReducer from "./gptSlice";


const AppStore=configureStore({
    reducer:{
user: userReducer, 
movie:movieReducer,
Config:ConfigReducer,
gpt:gptReducer
    }
})

export default AppStore;