import React from "react";

const ReviewCard = (props) => {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
        <p className="text-lightText">
          The food was absolutely amazing! The red sauce pasta is a must-try.
        </p>
      </div>
      <div className="flex flex-row justify-center items-center mt-4 gap-4">
        <img
          className="rounded-full object-cover"
          src={props.img}
          alt="img"
          style={{ width: "64px", height: "64px" }}
        />
        <h3 className="font-semibold">{props.name}</h3>
      </div>
    </div>
  );
};

export default ReviewCard;

