import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/home.jpg')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-white font-semibold text-6xl">
          Your culinary paradise awaits!
        </h1>
        <p className="text-white">
          Discover the best dishes crafted with love and passion. Experience a
          world of flavors right at your fingertips.
        </p>
        <div className="lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
