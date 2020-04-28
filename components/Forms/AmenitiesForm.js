import React from "react";

const AmenitiesForm = () => {
  return (
    <div class="mt-8 border-t border-gray-200 pt-8 sm:mt-5 sm:pt-10">
      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">Amenities</h3>
        <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          You can update this information later.
        </p>
      </div>
      <div class="mt-6 sm:mt-5">
        <div class="sm:border-t mb-10 sm:border-gray-200 sm:pt-5">
          <fieldset>
            <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
              <div class="mt-4 sm:mt-0 sm:col-span-2">
                <div class="max-w-lg">
                  <div class="relative flex items-start">
                    <div class="absolute flex items-center h-5">
                      <input
                        id="comments"
                        type="checkbox"
                        class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                      />
                    </div>
                    <div class="pl-7 text-sm leading-5">
                      <label for="comments" class="font-medium text-gray-700">
                        Private yard
                      </label>
                      <p class="text-gray-500">
                        This home has a PRIVATE yard. Shared communal yards do
                        not count.
                      </p>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="relative flex items-start">
                      <div class="absolute flex items-center h-5">
                        <input
                          id="candidates"
                          type="checkbox"
                          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div class="pl-7 text-sm leading-5">
                        <label
                          for="candidates"
                          class="font-medium text-gray-700"
                        >
                          Swimming pool
                        </label>
                        <p class="text-gray-500">
                          This home has a swimming pool available.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="relative flex items-start">
                      <div class="absolute flex items-center h-5">
                        <input
                          id="offers"
                          type="checkbox"
                          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div class="pl-7 text-sm leading-5">
                        <label for="offers" class="font-medium text-gray-700">
                          Terrace
                        </label>
                        <p class="text-gray-500">
                          This home has one or more terraces.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="relative flex items-start">
                      <div class="absolute flex items-center h-5">
                        <input
                          id="offers"
                          type="checkbox"
                          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div class="pl-7 text-sm leading-5">
                        <label for="offers" class="font-medium text-gray-700">
                          Air conditioning
                        </label>
                        <p class="text-gray-500">
                          This home has air conditioning.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="relative flex items-start">
                      <div class="absolute flex items-center h-5">
                        <input
                          id="offers"
                          type="checkbox"
                          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div class="pl-7 text-sm leading-5">
                        <label for="offers" class="font-medium text-gray-700">
                          Gym
                        </label>
                        <p class="text-gray-500">This home has a gym.</p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="relative flex items-start">
                      <div class="absolute flex items-center h-5">
                        <input
                          id="offers"
                          type="checkbox"
                          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div class="pl-7 text-sm leading-5">
                        <label for="offers" class="font-medium text-gray-700">
                          Sauna
                        </label>
                        <p class="text-gray-500">This home has a sauna.</p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-4">
                    <div class="relative flex items-start">
                      <div class="absolute flex items-center h-5">
                        <input
                          id="offers"
                          type="checkbox"
                          class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                        />
                      </div>
                      <div class="pl-7 text-sm leading-5">
                        <label for="offers" class="font-medium text-gray-700">
                          Furnished
                        </label>
                        <p class="text-gray-500">
                          This home is fully furnished and ready to move in.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesForm;
