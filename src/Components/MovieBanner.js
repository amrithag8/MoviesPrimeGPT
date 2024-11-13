import React, { useEffect, useState } from "react";
import { options, TMDB_TRAILER_URL } from "../utils/constant";
import { useSelector } from "react-redux";
import { LanguageChange } from "../utils/languageConstants";

const MovieBanner = ({ movieSelected }) => {
  const [trailerKey, setTrailerKey] = useState("");
  const [title, setTitle] = useState();
  const [overview, setOverview] = useState();
  const selectedLanguage = useSelector((store) => store.Config.lang);

  useEffect(() => {
    if (movieSelected) {
      BannerVideo();
      
      setTitle(movieSelected[0].title);
      setOverview(movieSelected[0].overview);
    }
  }, [movieSelected]);

  const BannerVideo = async () => {
    const resp = await fetch(
      `${TMDB_TRAILER_URL}/${movieSelected[0]?.id}/videos?language=en-US`,
      options
    );
    const data = await resp.json();
    
    const result = data?.results;
    const filteredRes = result.filter((item) => {
      return item.type === "Trailer";
    });
    
    setTrailerKey(filteredRes[0].key);
  };

  return (
    <div className="text-white w-screen bg-black">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerKey}?si=4JTsouED272Pq2U&autoplay=1&mute=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>

      <div className="absolute inset-0 bg-gradient-to-r from-black w-screen aspect-video pt-96">
        <div className=" w-3/5 flex flex-col px-4">
          <h2 className="text-white text-3xl font-bold w-1/2">{title}</h2>
          <p className=" w-1/2 text-md mt-4 ">{overview}</p>
          <div className="flex gap-2 px-12 mt-4">
            <button className="bg-white text-black py-2 px-8 rounded-lg hover:opacity-50">
              <i className="fa-solid fa-play"></i>{" "}
              {LanguageChange[selectedLanguage].play}
            </button>
            <button className=" bg-gray-500 bg-opacity-30 text-white px-4 rounded-lg hover:bg-opacity-100">
              <i class="fa-solid fa-circle-info"></i>{" "}
              {LanguageChange[selectedLanguage].more_info}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieBanner;
