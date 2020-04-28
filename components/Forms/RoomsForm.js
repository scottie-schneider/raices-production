import React from "react";

const RoomsForm = ({ rooms, baths, parking }) => {
  return (
    <div class="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">Spaces</h3>
        <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          You can update this information later.
        </p>
      </div>
      <div class="mt-6 sm:mt-5">
        <div class="sm:border-t sm:border-gray-200 sm:pt-5">
          <fieldset class="mt-6">
            <legend class="text-base font-medium text-gray-900">
              Home type
            </legend>
            <div class="mt-4">
              <div class="flex items-center">
                <input
                  id="push_everything"
                  name="form-input push_notifications"
                  type="radio"
                  class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label for="push_everything" class="ml-3">
                  <span class="block text-sm leading-5 font-medium text-gray-700">
                    House
                  </span>
                </label>
              </div>
              <div class="mt-4 flex items-center">
                <input
                  id="push_email"
                  name="form-input push_notifications"
                  type="radio"
                  class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label for="push_email" class="ml-3">
                  <span class="block text-sm leading-5 font-medium text-gray-700">
                    Apartment
                  </span>
                </label>
              </div>
              <div class="mt-4 flex items-center">
                <input
                  id="push_nothing"
                  name="form-input push_notifications"
                  type="radio"
                  class="form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label for="push_nothing" class="ml-3">
                  <span class="block text-sm leading-5 font-medium text-gray-700">
                    Other
                  </span>
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="mt-6 sm:mt-5">
        <div class="sm:border-t sm:border-gray-200 sm:pt-5">
          <fieldset class="mt-6">
            <div className="flex flex-col flex-grow justify-start items-start">
              <legend class="text-base font-medium text-gray-900">
                Bedrooms
              </legend>
              <p class="text-gray-500">Number of bedrooms in the home.</p>
              <div class="mt-4 w-32 flex justify-between items-center">
                <button className="rounded-full h-8 w-8 bg-white border border-indigo-600">
                  <span className="leading-normal text-xl text-indigo-500">
                    -
                  </span>
                </button>
                <span>{rooms}</span>
                <button className="rounded-full h-8 w-8 bg-white border border-indigo-600">
                  <span className="leading-normal text-xl text-indigo-500">
                    +
                  </span>
                </button>
              </div>
            </div>
          </fieldset>
          <fieldset class="mt-6">
            <div className="flex flex-col flex-grow justify-start items-start">
              <legend class="text-base font-medium text-gray-900">
                Bathrooms
              </legend>
              <p class="text-gray-500">
                Count bathrooms that don't have a shower or bathtub as a half
                bathroom
              </p>
              <div class="mt-4 w-32 flex justify-between items-center">
                <button className="rounded-full h-8 w-8 bg-white border border-indigo-600">
                  <span className="leading-normal text-xl text-indigo-500">
                    -
                  </span>
                </button>
                <span>{baths}</span>
                <button className="rounded-full h-8 w-8 bg-white border border-indigo-600">
                  <span className="leading-normal text-xl text-indigo-500">
                    +
                  </span>
                </button>
              </div>
            </div>
          </fieldset>
          <fieldset class="mt-6">
            <div className="flex flex-col flex-grow justify-start items-start">
              <legend class="text-base font-medium text-gray-900">
                Parking spots
              </legend>
              <p class="text-gray-500">
                Number of dedicated parking spots available to this unit.
              </p>
              <div class="mt-4 w-32 flex justify-between items-center">
                <button className="rounded-full h-8 w-8 bg-white border border-indigo-600">
                  <span className="leading-normal text-xl text-indigo-500">
                    -
                  </span>
                </button>
                <span>{parking}</span>
                <button className="rounded-full h-8 w-8 bg-white border border-indigo-600">
                  <span className="leading-normal text-xl text-indigo-500">
                    +
                  </span>
                </button>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default RoomsForm;
