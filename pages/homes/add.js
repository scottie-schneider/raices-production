import React, { useState } from "react";
import ImageUploader from "../../components/ImageUploader/ImageUploader.js";
import GeneralInformationForm from "../../components/addHome/GeneralInformationForm";
import DescriptionsForm from "../../components/addHome/DescriptionsForm";
import MobileWizardNavigation from "../../components/FormElements/MobileWizardNavigation";
import WizardProgressHeader from "../../components/FormElements/WizardProgressHeader";
import HomeComponent from "../../components/Home/HomeComponent.js";
const Add = () => {
  const [warningModalOpen, setWarningModalOpen] = useState(false);
  const [component, setComponent] = useState(1);
  const [percentage, setPercentage] = useState(25);
  let title = "";
  if (percentage === 25) {
    title = "General information";
  }
  if (percentage === 50) {
    title = "Photos";
  }
  if (percentage === 75) {
    title = "Descriptions";
  }
  if (percentage === 100) {
    title = "Preview";
  }
  return (
    <div className="relative flex flex-col w-screen flex-grow bg-white h-full min-h-full overflow-hidden antialiased">
      <WizardProgressHeader percentage={percentage} title={title} />
      <div className="mt-15 mb-20 flex flex-col h-full flex-grow mx-0  overflow-y-scroll flex-grow pt-2">
        {percentage == 25 && <GeneralInformationForm />}
        {percentage == 50 && <ImageUploader />}
        {percentage == 75 && <DescriptionsForm />}
        {percentage == 100 && <HomeComponent />}
      </div>
      <MobileWizardNavigation
        percentage={percentage}
        setPercentage={setPercentage}
      />
    </div>
  );
};
export default Add;
