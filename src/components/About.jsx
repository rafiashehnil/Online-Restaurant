import React from "react";
import img from "../assets/img/about.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img
        src={img}
        alt="img"
        className="w-full lg:w-1/2 h-auto object-cover lg:object-contain"
      />
      <div className="space-y-4 lg:pt-14 lg:pl-10">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          Our Story
        </h1>
        <p>
          At FoodHeaven, we believe in the magic of good food. Our journey
          started with a passion for culinary excellence and a dream to bring
          gourmet flavors to everyone. We are committed to using the freshest
          ingredients and traditional cooking methods to create dishes that
          delight your senses.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
