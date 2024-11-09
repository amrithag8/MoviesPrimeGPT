import { useEffect, useState } from "react";




export const UseFetchData = (url, options) => {
 

    const [data, setData]=useState([]);

    useEffect(()=>{
        const fetchNowPlayingMovies=async()=>{
            const res=await fetch(url, options);
            const data=await res.json();
           
            setData(data);
          }
      
          fetchNowPlayingMovies();
    },[url]);
       
       return {data}; // dispatch(addMovies(data.results));
      
  
    

}


