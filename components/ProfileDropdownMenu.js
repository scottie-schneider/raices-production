import React, { useState, useEffect } from "react";
import Img from "react-image";
const ProfileDropdownMenu = ({ user, className = "" }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setNavOpen((p) => setNavOpen(false));
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <div className={`${className} relative`}>
      <div className="flex flex-grow justify-between px-2 shadow py-2 items-center rounded-full">
        <div
          onClick={() => setNavOpen((p) => !navOpen)}
          className="ml-3 font-semibold text-sm text-gray-700"
        >
          {!user
            ? "You"
            : user.displayName.substr(0, user.displayName.indexOf(" "))}
        </div>
        <div className="ml-4 z-20 relative block rounded-full h-8 w-8 overflow-hidden focus:outline-none border-2 border-gray-600 focus:border-white">
          {user && (
            <Img
              src={user.profilePic}
              loader={<div className="h-full w-full bg-gray-600"></div>}
              unloader={<div className="h-full w-full bg-gray-600"></div>}
            />
          )}
          {!user && <div className="h-full w-full bg-gray-500"></div>}
        </div>
      </div>
      <button
        tabindex="-1"
        onClick={() => setNavOpen((p) => false)}
        className={`${
          navOpen ? "fixed" : "hidden"
        } z-10 w-full h-full inset-0 bg-black opacity-0 cursor-default`}
      ></button>
      <div
        className={`${
          navOpen ? "block" : "hidden"
        } z-20 mt-2 py-2 bg-white w-48 rounded-lg shadow-xl absolute right-0`}
      >
        <a
          className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          href="#"
        >
          Account settings
        </a>
        <a
          className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          href="#"
        >
          Support
        </a>
        <a
          className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
          href="#"
        >
          Sign out
        </a>
      </div>
    </div>
  );
};

export default ProfileDropdownMenu;
