import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Navbar2 from "../Shared/Navbar/Navbar2";

import modern_art1 from "../../Assets/modernArt/modernArt1.jpg";
import modern_art2 from "../../Assets/modernArt/modernArt2.jpg";
import modern_art3 from "../../Assets/modernArt/modernArt3.jpg";
import modern_art4 from "../../Assets/modernArt/modernArt4.jpg";
import modern_art5 from "../../Assets/modernArt/modernArt5.jpg";
import modern_art6 from "../../Assets/modernArt/modernArt6.jpg";
import ModernArt from "../ModernArt/ModernArt";

const artList = [
  { id: 1, like: 57, inspect: 65, personName: "Rajeev Barma", name: "Modern art", img: modern_art1, button: "Follow" },
  { id: 2, like: 57, inspect: 65, personName: "Simran kher", name: "Modern art", img: modern_art2, button: "Follow" },
  { id: 3, like: 57, inspect: 65, personName: "Sanjukta", name: "Modern art", img: modern_art3, button: "Follow" },
  { id: 4, like: 57, inspect: 65, personName: "Ravi kishan", name: "Modern art", img: modern_art4, button: "Follow" },
  { id: 5, like: 57, inspect: 65, personName: "Aish khan", name: "Modern art", img: modern_art5, button: "Follow" },
  { id: 6, like: 57, inspect: 65, personName: "Adyasha pani", name: "Modern art", img: modern_art6, button: "Follow" },
];

const Discover = () => {
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
          {artList.map((art) => <ModernArt
          art={art}
          key={art.id}
          ></ModernArt>)}
        </div>
      </div>
    </>
  );
};

export default Discover;
