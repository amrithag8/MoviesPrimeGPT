import React from "react";
import Header from "../Components/Header";
import { BG_IMG, options, TMDB_IMG_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { LanguageChange } from "../utils/languageConstants";
import { addAIsearchArray, addGptsearchResult, addSearchValue } from "../Store/gptSlice";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Footer from "../Components/Footer";
import ShimmerGPTResults from "../Components/ShimmerGPTResults";

const SearchWithgpt = () => {
  const dispatch = useDispatch();

  const searchVal = useSelector((store) => store.gpt.searchInputValue);
  const selectedLanguage = useSelector((store) => store.Config.lang);
  const gptSearchMovies=useSelector((store)=>store.gpt.gptSearchResult);
  const AIArray=useSelector((store)=>store.gpt.aiSearchArray);

  console.log("gptSearchMovies", gptSearchMovies);

  const movieDetailsFromTMDB = async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        options
      );
      const data = await response.json();
      console.log("data", data?.results[0]);
      // const result = data.results[0];
      return data?.results[0];
    } catch (err) {
      console.log("err", err);
    }
  };

  const handleAISearch = async () => {

    // if(!searchVal){
    //   return dispatch(addGptsearchResult(null));
    // }
    
    const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Act as a movie recommendation system and suggest some movies for the query ${searchVal} only give me names of 8 to 15 movies, comma separated like the example result given ahead. Example result: Don, Koi mil gaya, krish, punjabi house, kilukkam`;

    const result = await model.generateContent(prompt);
    const values = result.response.text();
    const arrayVal = values.split(",");
    console.log("arrayVal", arrayVal);
    dispatch(addAIsearchArray(arrayVal));
    

    const PromiseArray = arrayVal.map((movie) => {
      const movies= movieDetailsFromTMDB(movie);
      return movies;
    });

    

    const AllMovies=await Promise.all(PromiseArray);
    dispatch(addGptsearchResult(AllMovies));
    

  
  };

  return (
    <div className="w-screen h-screen relative">
      <div className=" w-screen">
        <Header />
      </div>

      <img
        src={BG_IMG}
        className="blur-md backdrop-blur-xl min-h-screen w-screen fixed object-cover"
      />

<div className="w-screen h-screen absolute inset-0 px-14">
      <div
        className="md:w-6/12 h-20 sm:w-full  xl:mt-32 sm:mt-64 mt-64 mx-auto bg-black flex px-4 py-2 items-center justify-around rounded-md"
        // style={{ top: "100px", transform: "translateX(-50%)" }}
      >
        <input
          type="text"
          placeholder={LanguageChange[selectedLanguage]?.placeHolderText}
          className="md:w-3/4 sm:w-full w-full h-2/3 px-4 py-2 text-lg rounded-md"
          value={searchVal}
          onChange={(e) => {if(e.target.value===""){
            dispatch(addGptsearchResult(null));
            dispatch(addAIsearchArray(null));
            dispatch(addSearchValue(e.target.value));
          }
          else{
            dispatch(addSearchValue(e.target.value))
          }
            }}
        />
        <button
          className="bg-red-700 w-1/5 p-2.5 rounded-md hidden sm:block"
          onClick={handleAISearch}
        >
          {LanguageChange[selectedLanguage]?.search}
        </button>
        <button
          className="bg-red-700 w-1/5 p-2.5 rounded-md sm:hidden block"
          onClick={handleAISearch}
        >
         <i class="fa-solid fa-magnifying-glass"></i>
        </button>

      </div>
{
(searchVal&&AIArray)&&
(gptSearchMovies?(<div className=" w-6/12 min-h-64 mx-auto p-4 m-8 flex flex-wrap bg-black rounded-md opacity-70">
    {
      gptSearchMovies?.map((movie)=>{
        return(
    <img className="w-40 h-40 m-1 rounded-md object-contain" alt={`${movie?.title}`} src={`${TMDB_IMG_URL}/${movie?.poster_path}`}/>
        )
      })
    }
           </div> ):(<ShimmerGPTResults/>))
}
      
      </div>
      
    </div>
  );
};

export default SearchWithgpt;
