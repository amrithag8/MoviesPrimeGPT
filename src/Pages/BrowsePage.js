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
import Footer from "../Components/Footer";
import { LanguageChange } from "../utils/languageConstants";

const BrowsePage = () => {
  const dispatch = useDispatch();
  const selectedLanguage = useSelector((store) => store.Config.lang);
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlaying);
  const popularMovies = useSelector((store) => store.movie.popular);
  const upcomingMovies = useSelector((store) => store.movie.upcoming);

  const { data } = UseFetchData(TMDB_NOWPLAYING_API, options);
  dispatch(addMovies(data?.results));

  const popularMoviesList = UseFetchData(TMDB_POPULAR_API, options);
  dispatch(addPopularMovies(popularMoviesList.data.results));

  const upcomingmovieList = UseFetchData(TMDB_UPCOMING_API, options);
  dispatch(addUpcomingMovies(upcomingmovieList.data.results));

  return (
    <div className=" w-screen bg-black min-h-screen">
      <div className="flex w-screen justify-between ">
        <Header />
      </div>

      <MovieBanner movieSelected={nowPlayingMovies} />

      <div className="-mt-48">
        <MoviesCard
          id={"Container1"}
          title={LanguageChange[selectedLanguage]?.now_playing}
          movies={nowPlayingMovies}
        />
        <MoviesCard
          id={"Container2"}
          title={LanguageChange[selectedLanguage]?.popular_movies}
          movies={popularMovies}
        />
        <MoviesCard
          id={"Container3"}
          title={LanguageChange[selectedLanguage]?.upcoming_movies}
          movies={upcomingMovies}
        />
      </div>
      <Footer />
    </div>
  );
};

export default BrowsePage;
