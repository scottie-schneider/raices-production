import React from "react";
import ShowAllPhotos from "../Buttons/ShowAllPhotos";
const MediumImageHeader = ({ setShowImageModal }) => {
  return (
    <div className="relative grid grid-cols-6 grid-rows-2 gap-0">
      <div className="overflow-hidden col-span-4 row-span-2 border-r-2 border-gray-500">
        <img
          className="object-cover h-full w-full transition duration-700 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-105"
          src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1987&q=80"
        />
      </div>
      <div className="row-span-1 col-span-2 border-b-2 border-gray-500 overflow-hidden">
        <img
          className="object-cover h-full w-full transition duration-700 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-105"
          src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1987&q=80"
        />
      </div>
      <div className="row-span-1 col-span-2 overflow-hidden">
        <img
          className="object-cover h-full w-full transition duration-700 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-105"
          src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1987&q=80"
        />
      </div>
      <ShowAllPhotos setShowImageModal={setShowImageModal} />
    </div>
  );
};

export default MediumImageHeader;
