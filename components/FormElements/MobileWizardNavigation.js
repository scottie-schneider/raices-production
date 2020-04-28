import React, { Fragment } from "react";
import Filled from "../Buttons/Filled";
import MinimalIcon from "../Buttons/MinimalIcon";
import { useRouter } from "next/router";
const MobileWizardNavigation = ({ setPercentage, percentage }) => {
  const router = useRouter();
  const previous = () => {
    setPercentage((p) => percentage - 25);
  };
  const next = () => {
    if (percentage == 100) {
      router.push("/");
    }
    setPercentage((p) => percentage + 25);
  };
  return (
    <Fragment>
      <div className="fixed bottom-0 bottomNav z-20 h-15 w-full bg-white ">
        <div className="mx-4 flex flex-grow justify-between items-center h-full">
          <MinimalIcon
            text="Back"
            onClick={previous}
            disabled={percentage == 25 ? true : false}
          />
          <Filled text={percentage == 100 ? "Finish" : "Next"} onClick={next} />
        </div>
      </div>
      <style jsx>{`
        .bottomNav {
          box-shadow: 0 -5px 5px -4px #f5f5f5;
        }
      `}</style>
    </Fragment>
  );
};
export default MobileWizardNavigation;
