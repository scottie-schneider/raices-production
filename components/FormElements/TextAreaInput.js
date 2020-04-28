import React from "react";

const TextAreaInput = ({ title, subtitle, last }) => {
  return (
    <div class={`mt-4 ${last && "mb-4"} sm:col-span-6`}>
      <label
        for="about"
        class="block text-sm font-medium leading-5 text-gray-700"
      >
        {title}
      </label>
      <div class="mt-1 rounded-md shadow-sm">
        <textarea
          id="about"
          rows="3"
          class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        ></textarea>
      </div>
      <p class="mt-2 text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};

export default TextAreaInput;
