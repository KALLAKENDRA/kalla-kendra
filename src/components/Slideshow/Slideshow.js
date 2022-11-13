import React, { useState } from "react";
import ModernArt from "../../Assets/ViewDesignPage/ModernArt.png";
import MoreImg1 from "../../Assets/ViewDesignPage/MoreImg1.png";
import MoreImg3 from "../../Assets/ViewDesignPage/MoreImg3.png";
import startjourneyp2 from "../../Assets/startjourneyp2.png";
import bgCorner1 from "../../Assets/bgCorner1.png";
import bghome from "../../Assets/bghome.png";

// Shivam Bhagwat
 
const images = [
  {
    id: 1,
    url: ModernArt,
  },
  {
    id: 2,
    url: MoreImg1,
  },
  {
    id: 3,
    url: MoreImg3,
  },
];
const Slideshow = () => {
  const [isImgm, setIsimg] = useState(0);
  const [translate, setTranslate] = useState(""); // No use

  return (
    <div className="flex h-screen w-screen flex-col justify-between overflow-hidden bg-repeat-y">
      <img src={bghome} alt="" className="flex fixed  w-full h-full" />
      <div className="flex relative w-full h-10 z-10">
        <img src={startjourneyp2} alt="" className="ml-auto w-28 h-52 " />
      </div>

      <div className="flex justify-between w-full flex-wrap z-50">
        <img
          src={isImgm === 0 ? images[isImgm + 2].url : images[isImgm - 1].url}
          alt="shazam"
          className="w-0 xl:w-56 h-40 my-auto "
        />
        <div className="w-full flex md:flex w-7/12 gap-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3.5}
            stroke="currentColor"
            className="w-3 md:w-10 h-10 my-auto bg-white rounded-full cursor-pointer"
            onClick={() => {
              setIsimg(isImgm + 1);
              if (isImgm + 1 === images.length) {
                return setIsimg(isImgm + 1 - images.length);
              }
              setTranslate("right");
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
            />
          </svg>

          <img
            src={images[isImgm].url}
            alt="shazam"
            className="shadow-2xl w-full md: mx-auto w-9/12"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3.5}
            stroke="currentColor"
            className="w-3 md:w-10 h-10 my-auto bg-white rounded-full cursor-pointer"
            onClick={() => {
              setIsimg(isImgm - 1);
              if (isImgm === 0) {
                return setIsimg(isImgm + images.length - 1);
              }
              setTranslate("left");
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
            />
          </svg>
        </div>

        <img
          src={
            isImgm === images.length - 1
              ? images[isImgm - 2].url
              : images[isImgm + 1].url
          }
          alt="shazam"
          className="w-0 xl:w-56 h-40 my-auto "
        />
      </div>
      <div className="flex relative w-full">
        <img src={bgCorner1} alt="" className="w-28 rotate-90 mr-auto" />
      </div>
    </div>
  );
};

export default Slideshow;
