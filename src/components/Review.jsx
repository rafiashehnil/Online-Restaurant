import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img7 from "../assets/img/img7.jpeg";
import img8 from "../assets/img/img8.jpg";
import img9 from "../assets/img/img9.jpg";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">What Our Customers Say</h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img7} name="Alice Johnson" />
        <ReviewCard img={img8} name="Cathy White" />
        <ReviewCard img={img9} name="Bob Brown" />
      </div>
    </div>
  );
};

export default Review;
