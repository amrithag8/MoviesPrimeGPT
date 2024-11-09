import React from "react";

const MovieBanner = () => {
  return (
    <div className="text-white w-screen bg-black">
      <iframe
        className="w-screen aspect-video"
        src="https://www.youtube.com/embed/hXzcyx9V0xw?si=4JTsouED272Pq2U&autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default MovieBanner;
