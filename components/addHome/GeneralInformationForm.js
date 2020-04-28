import React, { useState, Fragment } from "react";
import AddressForm from "../Forms/AddressForm";
import AmenitiesForm from "../Forms/AmenitiesForm";
import RoomsForm from "../Forms/RoomsForm";
const GeneralInformationForm = () => {
  return (
    <form className="pt-4 bg-white flex flex-col flex-grow px-4 pb-0 h-full overflow-y-scroll">
      <div className="flex flex-col flex-grow">
        <AddressForm />
        <RoomsForm rooms={2} baths={2.5} parking={1} />
        <AmenitiesForm />
      </div>
    </form>
  );
};

export default GeneralInformationForm;
