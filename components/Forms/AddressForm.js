import React from "react";

const AddressForm = () => {
  return (
    <div class="">
      <div class=" sm:mt-5">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Home address
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          The exact home address will not be made public.
        </p>
        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            for="street_address"
            class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
          >
            Street address
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input
                id="street_address"
                class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
        </div>
        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            for="street_address"
            class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
          >
            Apartment number
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg rounded-md shadow-sm">
              <input
                id="street_address"
                class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
        </div>
        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            for="city"
            class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
          >
            City
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-xs rounded-md shadow-sm">
              <input
                id="city"
                class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            for="state"
            class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
          >
            State / Province
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-xs rounded-md shadow-sm">
              <input
                id="state"
                class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
        </div>

        <div class="mt-6 sm:mt-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            for="zip"
            class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2"
          >
            ZIP / Postal
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-xs rounded-md shadow-sm">
              <input
                id="zip"
                class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddressForm;
