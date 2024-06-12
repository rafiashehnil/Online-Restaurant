import React from "react";
import DishesCard from "../layouts/DishesCard";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";


const Dishes = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 ">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10 ">
        Our Dishes</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Yummy Feast" price="Tk 300" />
        <DishesCard img={img2} title="Spicy Delight" price="Tk 450" />
        <DishesCard img={img3} title="Crispy Crunch" price="Tk 275" />
        <DishesCard img={img4} title="Red Sauce Pasta" price="Tk 395" />
        <DishesCard img={img5} title="Delicious Treat" price="Tk 411" />
        <DishesCard img={img6} title="Chef's Special" price="Tk 512" />
      </div>
    </div>
  );
};

export default Dishes;
