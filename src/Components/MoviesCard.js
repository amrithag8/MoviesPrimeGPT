import React, { useRef } from "react";
import { TMDB_IMG_URL } from "../utils/constant";

const MoviesCard = ({ id, title, movies }) => {
  //   const ref = useRef(null);

  const scrollHandler = () => {
    document.getElementById(`${id}`).scrollLeft += 200;
  };

  const scrollRighthandler = () => {
    document.getElementById(`${id}`).scrollLeft -= 200;
  };

  return (
    <div className="mt-8 relative z-10">
      <h1 className="text-white text-3xl mb-2 pl-16">{title}</h1>
      <div className="flex items-center px-8 w-screen">
        <div
          className="w-8 pl-2 h-20 bg-gray-700  rounded-2xl hover:bg-zinc-600 hover:opacity-30 flex items-center mx-1 hover:transition-opacity hover:ease-in hover:duration-200"
          onClick={scrollRighthandler}
        >
          <a className="prev text-white  cursor-pointer">&#10094;</a>
        </div>
        <div
          className="flex overflow-x-scroll w-screen mt-2 gap-2 "
          id={id}
          style={{
            scrollBehavior: "smooth",

            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {movies?.map((movieItem) => {
            return (
              <div className="text-white ml-1 h-36 max-w-36 flex-col cursor-pointer">
                <img
                  className=" hover:scale-x-150 hover:contain hover:transition-all hover:ease-in hover:duration-200 max-w-28 h-32 object-cover rounded-sm "
                  src={`${TMDB_IMG_URL}/${movieItem?.poster_path}`}
                />
              </div>
            );
          })}
        </div>

        <div
          className="w-8 pl-2 h-20 bg-gray-700  rounded-2xl hover:bg-zinc-600 hover:opacity-50 flex items-center mx-1 hover:transition-opacity hover:ease-in hover:duration-200"
          onClick={scrollHandler}
        >
          <a className="next text-white  cursor-pointer">&#10095;</a>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
