import React from "react";
import Header from "../Components/Header";
import {
  options,
  TMDB_NOWPLAYING_API,
  TMDB_POPULAR_API,
  TMDB_UPCOMING_API,
} from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  addMovies,
  addPopularMovies,
  addUpcomingMovies,
} from "../Store/moviesSlice";
import MoviesCard from "../Components/MoviesCard";
import MovieBanner from "../Components/MovieBanner";
import { UseFetchData } from "../hooks/useFetchData";

const BrowsePage = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlaying);
  const popularMovies = useSelector((store) => store.movie.popular);
  const upcomingMovies = useSelector((store) => store.movie.upcoming);
  

  

  const { data } = UseFetchData(TMDB_NOWPLAYING_API, options);
  dispatch(addMovies(data.results));

  const popularMoviesList = UseFetchData(TMDB_POPULAR_API, options);
  dispatch(addPopularMovies(popularMoviesList.data.results));

  const upcomingmovieList = UseFetchData(TMDB_UPCOMING_API, options);
  dispatch(addUpcomingMovies(upcomingmovieList.data.results));

  return (
    <div className=" w-screen bg-black min-h-screen">
      <div className="flex w-screen justify-between ">
        <Header/>
      </div>
      
      <MovieBanner />
      <div className="-mt-52 ">
        <MoviesCard
          id={"Container1"}
          title={"Now Playing"}
          movies={nowPlayingMovies}
        />
        <MoviesCard
          id={"Container2"}
          title={"Popular movies"}
          movies={popularMovies}
        />
        <MoviesCard
          id={"Container3"}
          title={"Upcoming Movies"}
          movies={upcomingMovies}
        />
      </div>
    </div>
  );
};

export default BrowsePage;
