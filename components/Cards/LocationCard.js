import React from "react";
const LocationCard = ({ location: { name, image, subtitle } }) => {
  return (
    <div className="h-64 bg-blue-200 cursor-pointer flex flex-col rounded-lg shadow-lg">
      {/* Image */}
      <div className="relative h-70 w-full flex-grow flex flex-col  py-4 h-90">
        <img
          className="absolute object-cover inset-0 h-full w-full rounded-t-lg"
          src={image}
        />
      </div>
      {/* Bottom portion */}
      <div className=" flex flex-col flex-grow px-4 rounded-b-lg bg-white">
        {/* Name */}
        <span className={`text-xl font-semibold`}>{name}</span>
        {/* Sub title */}
        <span className="text-md text-gray-600 pb-4">{subtitle}</span>
      </div>
    </div>
  );
};

export default LocationCard;
