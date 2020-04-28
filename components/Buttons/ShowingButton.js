import React from "react";

const ShowingButton = () => {
  return (
    <div className="mt-4 md:px-0 w-full">
      {" "}
      <div className="flex items-center px-6 py-4 sm:px-6">
        <div className="min-w-0 flex-1 flex items-center">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              className="h-12 w-12 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          {/* Agent Name */}
          <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
            <div>
              <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
                Ricardo Cooper
              </div>
              <div className="mt-2 flex items-center text-sm leading-5 text-gray-500">
                <span className="truncate">Casacol Realty</span>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <button className="block w-full sm:w-auto sm:inline-block bg-indigo-500 text-white hover:bg-indigo-400 font-semibold px-4 py-2 rounded-lg xl:block xl:w-full">
            See House
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowingButton;
