import { createSlice } from "@reduxjs/toolkit";


const moviesSlice=createSlice({
    name:"movies",
initialState:{
    nowPlaying:null, 
    popular:null,
    upcoming:null
},
reducers:{
    addMovies:(state, action)=>{
        state.nowPlaying=action.payload;
    },

    addPopularMovies:(state, action)=>{
        state.popular=action.payload;
    },
    addUpcomingMovies:(state, action)=>{

        state.upcoming=action.payload;
    }
    // removeMovies:(state, action)=>{
    //     state.length=0;
    // }

}

})

export const{addMovies, addPopularMovies, addUpcomingMovies}=moviesSlice.actions;
export default moviesSlice.reducer;