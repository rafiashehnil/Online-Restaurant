import React from "react";
import DishesCard from "../layouts/DishesCard";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
      Extravagant Menu</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard img={img4} title="Red Sauce Pasta" price="Tk 395" />
        <DishesCard img={img5} title="Delicious Treat" price="Tk 411" />
        <DishesCard img={img6} title="Chef's Special" price="Tk 512" />
      </div>
    </div>
  );
};

export default Menu;
