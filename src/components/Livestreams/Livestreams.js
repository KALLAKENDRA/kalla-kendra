import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import Livestrimcover from "../../Assets/Livestrimcover.jpg";
import cardImg1 from "../../Assets/Rectangle3467593.png";
import cardImg2 from "../../Assets/Rectangle3467598.png";
import cardImg3 from "../../Assets/Rectangle3467599.png";
import Navbar3 from "../Shared/Navbar/Navbar3";

const LivestreamData = [
  {
    id: 1,
    title: "Teaching Filmotography",
    detials:
      "Watch Gharshana Video Songs (720p) Starring Venkatesh, Asin, Music Composed by Harris Jayaraj, Direction Gautham Menon.",
  },
  {
    id: 2,
    title: "Teaching Filmotography",
    detials:
      "Watch Gharshana Video Songs (720p) Starring Venkatesh, Asin, Music Composed by Harris Jayaraj, Direction Gautham Menon.",
  },
];

const Livestreams = () => {
  return (
    <div className="bg-gradient-to-r from-[#8D0301] to-[#640000] h-screen w-full fixed flex-1 overflow-y-scroll">
      <Navbar3 />
      <div className="flex flex-wrap flex-col">
        <div className="w-full md:flex mx-auto w-10/12 justify-between flex-wrap  h-5/6">
          <div className="flex flex-col md:w-3/6">
            <h3 className="text-end text-white text-2xl font-semibold">LIVE</h3>
            <img src={Livestrimcover} alt="" className="w-full md:w-11/12" />
          </div>
          <div
            className="flex flex-col  justify-between h-5/6 flex-wrap w-full md:w-5/12"
            // style={{ backgroundColor: "yellowgreen" }}
          >
            <div className="h-2/6  mt-3 w-full md:w-1/11 ">
              <h1 className="text-left text-4xl text-white">
                Teaching Filmotography
              </h1>
              <p className="text-white text-left text-xl mt-1">
                Watch Gharshana Video Songs (720p) Starring Venkatesh, Asin,
                Music Composed by Harris Jayaraj, Direction Gautham Menon.Watch
                Gharshana Video Songs (720p) Starring Venkatesh, Asin, Music
                Composed by Harris Jayaraj, Direction Gautham Menon.
              </p>
            </div>
            <div className="flex mt-10 flex-row justify-between text-white w-full md:w-1/2 ">
              <div className="flex items-center flex-col text-xl">
                <FaUserFriends />
                <p>15K</p>
              </div>
              <div className="flex items-center flex-col text-xl">
                <BiLike />
                <p>5K</p>
              </div>
              <div className="flex items-center flex-col text-xl">
                <BiDislike />
                <p>2</p>
              </div>
            </div>
            <div className="flex flex-wrap w-full justify-between mt-3">
              <div className="flex items-center gap-6">
                <div>
                  <img
                    class="inline-block border-none rounded-full"
                    src="https://s3-alpha-sig.figma.com/img/151c/b8cb/bcb8e52194cafc83e3b9316663abba2d?Expires=1666569600&Signature=NoCXlnJcCgfcDr7JNai1xHiGEF90YqAqVyrbIrgMoBgJlf7~KbWnV7RnAuQsaG2q2r4p4h0mMOYRm9siyChEV-h0ctww577G~incnN1RuNgKFbbnkWfAmtXOAq~XUJhpCNIL~jrieKXs3yl8mGuZr-Q-woOBIcOhXcHFBn90D2tMlEu3Mkmms-zSW8hyLm1SD1ZpOJQnAlUAAthgSs7SLIA4Iq36xIWxQUPPPp8E5CqEDGy5-ACZVKDfuNjdXuwcw3Ng4QWsexklukv7DfUFRZ500C-rR3Xb5x9zI37cfA1RUVlVvg-xguBOtdZakKzNAQI7GGYsvK3kqY8nlmkulw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                    alt="{user.handle}"
                  />
                </div>
                <div>
                  <Link to="/profile">
                    <h2 className="font-semibold text-white text-lg">
                      Rajeev Barma
                    </h2>
                  </Link>
                </div>
              </div>
              <div>
                <Link to="/profile">
                  <button className="bg-[#FFC7C7] py-2 px-10 rounded-3xl font-semibold">
                    Follow
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:flex mx-auto w-11/12 justify-between flex-wrap  h-5/6">
          <h1 className="text-2xl font-medium text-white text-center md:text-left">
            More Livestreams
          </h1>

          <div className="flex flex-col flex justify-between gap-1 md:flex-row flex justify-between">
            <div className="flex flex-wrap mt-2 w-2/3 flex-row mx-auto xl:flex-nowrap flex gap-2">
              <img src={cardImg1} alt="" className="" />

              <div>
                <h2 className="text-left text-white text-lg">
                  Teaching Filmotography
                </h2>
                <p className="text-left text-white text-[12px] mt-5 w-7/12">
                  Watch Gharshana Video Songs (720p) Starring Venkatesh, Asin,
                  Music Composed by Harris Jayaraj, Direction Gautham Menon.
                </p>
                <div className="flex text-xs mt-5">
                  <Link className="bg-[#FFC7C7] py-2 px-8 rounded-lg" to="/">
                    Watch
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mt-2 w-2/3  flex-row m-auto xl:flex-nowrap flex gap-2">
              <img src={cardImg2} alt="" className="" />

              <div>
                <h2 className="text-left text-white text-lg">
                  Teaching Filmotography
                </h2>
                <p className="text-left text-white text-[12px] mt-5 w-7/12">
                  Watch Gharshana Video Songs (720p) Starring Venkatesh, Asin,
                  Music Composed by Harris Jayaraj, Direction Gautham Menon.
                </p>
                <div className="flex text-xs mt-5">
                  <Link className="bg-[#FFC7C7] py-2 px-8 rounded-lg" to="/">
                    Watch
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap mt-2 w-2/3  flex-row m-auto xl:flex-nowrap flex gap-2">
              <img src={cardImg3} alt="" className="" />

              <div>
                <h2 className="text-left text-white text-lg">
                  Teaching Filmotography
                </h2>
                <p className="text-left text-white text-[12px] mt-5 w-7/12">
                  Watch Gharshana Video Songs (720p) Starring Venkatesh, Asin,
                  Music Composed by Harris Jayaraj, Direction Gautham Menon.
                </p>
                <div className="flex text-xs mt-5">
                  <Link className="bg-[#FFC7C7] py-2 px-8 rounded-lg" to="/">
                    Watch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default Livestreams;
