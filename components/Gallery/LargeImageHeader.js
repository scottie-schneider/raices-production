import React, { Fragment } from "react";
import ShowAllPhotos from "../Buttons/ShowAllPhotos";

const LargeImageHeader = ({ homes, setShowImageModal }) => {
  return (
    <Fragment>
      <div className="relative grid grid-cols-4 grid-rows-2 gap-2">
        <div className="overflow-hidden col-span-2 row-span-2">
          <img
            className="object-cover h-full w-full transition duration-700 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-105"
            src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1987&q=80"
          />
        </div>
        <div className="overflow-hidden">
          <img
            className="object-cover h-full w-full transition duration-700 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-105"
            src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          />
        </div>
        <div className="overflow-hidden">
          <img
            className="object-cover h-full w-full transition duration-700 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-105"
            src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          />
        </div>
        <div className="overflow-hidden">
          <img
            className="object-cover h-full w-full transition duration-700 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-105"
            src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          />
        </div>
        <div className="overflow-hidden">
          <img
            className="object-cover h-full w-full transition duration-700 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-105"
            src="https://images.unsplash.com/photo-1574739782812-9b064e1efeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          />
        </div>
        <ShowAllPhotos setShowImageModal={setShowImageModal} />
      </div>
    </Fragment>
  );
};

export default LargeImageHeader;
