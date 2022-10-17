import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Navbar2 from "../Shared/Navbar/Navbar2";

import ModernArt from "../ModernArt/ModernArt";

const artList = [
  {
    id: 1,
    like: 57,
    inspect: 65,
    personName: "Rajeev Barma",
    name: "Modern art",
    img: "https://i.ibb.co/H44mqpP/modern-Art1.jpg",
    button: "Follow",
  },
  {
    id: 2,
    like: 57,
    inspect: 65,
    personName: "Simran kher",
    name: "Modern art",
    img: "https://i.ibb.co/jZCwWdk/modern-Art2.jpg",
    button: "Follow",
  },
  {
    id: 3,
    like: 57,
    inspect: 65,
    personName: "Sanjukta",
    name: "Modern art",
    img: "https://i.ibb.co/Qbv2Dwm/modern-Art3.jpg",
    button: "Follow",
  },
  {
    id: 4,
    like: 57,
    inspect: 65,
    personName: "Ravi kishan",
    name: "Modern art",
    img: "https://i.ibb.co/kJHYPCt/modern-Art4.jpg",
    button: "Follow",
  },
  {
    id: 5,
    like: 57,
    inspect: 65,
    personName: "Aish khan",
    name: "Modern art",
    img: "https://i.ibb.co/j8M5crG/modern-Art5.jpg",
    button: "Follow",
  },
  {
    id: 6,
    like: 57,
    inspect: 65,
    personName: "Adyasha pani",
    name: "Modern art",
    img: "https://i.ibb.co/hBG2q5B/modern-Art6.jpg",
    button: "Follow",
  },
];

const UploadPhoto = () => {
    return (
      <>
      <div>
        <div className="relative z-8 bg-vividAuburn">
          <Navbar />
        </div>
        <Navbar2 />
      </div>
      <div className="bg-radial container mx-auto py-8 px-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-16">
          {artList.map((art) => (
            <ModernArt art={art} key={art.id}></ModernArt>
          ))}
        </div>
      </div>
    </>
    );
};

export default UploadPhoto;