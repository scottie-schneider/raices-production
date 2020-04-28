import React from "react";
import TextAreaInput from "../FormElements/TextAreaInput";
const DescriptionsTextForm = () => {
  return (
    <form className="bg-white flex flex-col flex-grow  pb-0 h-full overflow-y-scroll">
      <div>
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Descriptions
        </h3>
        <p class="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
          You can update this information later.
        </p>
      </div>
      <div className="flex flex-col flex-grow">
        <TextAreaInput title="Description" subtitle="Describe the home" />
        <TextAreaInput
          title="Nearby Schools"
          subtitle="Describe the nearby schools"
        />
        <TextAreaInput
          title="Nearby Hospitals"
          subtitle="Describe the nearby hospitals"
        />
        <TextAreaInput
          title="Nearby Restaurants"
          subtitle="Describe the nearby restaurants"
          last
        />
      </div>
    </form>
  );
};

export default DescriptionsTextForm;
