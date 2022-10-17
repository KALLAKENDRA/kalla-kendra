import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Navbar2 from "../Shared/Navbar/Navbar2";

import Card from "../Card/Card";

const cardList = [
  { id: 1, name: "Modern art", img: 'https://i.ibb.co/Rj2zX19/modern3.jpg', button: "View" },
  { id: 2, name: "Traditional art", img: 'https://i.ibb.co/3T6YWqk/traditional2.jpg', button: "View" },
  { id: 3, name: "Graphic Designer", img: 'https://i.ibb.co/Ns7y173/graphic.jpg', button: "Follow" },
  { id: 4, name: "UI/UX Designer", img: 'https://i.ibb.co/xfQKmZ7/ui-ux.jpg', button: "Follow" },
  { id: 5, name: "Singing", img: 'https://i.ibb.co/kK70BBV/singing.jpg', button: "Follow" },
  { id: 6, name: "Dancing", img: 'https://i.ibb.co/RzQJLcv/danching2.jpg', button: "Follow" },
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
          {cardList.map((card) => <Card
          card={card}
          key={card.id}
          ></Card>)}
        </div>
      </div>
    </>
  );
};

export default Discover;
