import React from "react";
import ShowAllPhotos from "../Buttons/ShowAllPhotos";
const SmallMediumImageHeader = ({ setShowImageModal }) => {
  return (
    <div className="relative">
      <img src="https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1987&q=80" />
      <ShowAllPhotos setShowImageModal={setShowImageModal} />
    </div>
  );
};

export default SmallMediumImageHeader;
