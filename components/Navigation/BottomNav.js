import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const BottomNav = () => {
  const router = useRouter();
  return (
    <div
      className={`flex px-7 fixed bottom-0 justify-center w-full h-16 z-10 bg-white border-t border-gray-200 items-center`}
    >
      <div className="max-w-lg flex justify-between w-full">
        <Link href="/">
          <div className="flex flex-col content-center items-center">
            <svg
              class={`h-5 w-5 ${
                router.pathname == "/" ? "text-indigo-500" : "text-gray-500"
              } group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150 fill-current-['≥/]`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path d="M8 20H3V10H0L10 0l10 10h-3v10h-5v-6H8v6z" />
            </svg>

            <a
              className={` ${
                router.pathname == "/" ? "text-indigo-500" : "text-gray-500"
              } text-xs font-semibold text-gray-500`}
            >
              Explore
            </a>
          </div>
        </Link>
        <Link href="/inbox">
          <div className="flex flex-col content-center items-center">
            <svg
              class={`h-5 w-5 ${
                router.pathname == "/inbox"
                  ? "text-indigo-500"
                  : "text-gray-500"
              } group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150 fill-current`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path d="M17 11v3l-3-3H8a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-1zm-3 2v2a2 2 0 0 1-2 2H6l-3 3v-3H2a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h2v3a4 4 0 0 0 4 4h6z" />
            </svg>

            <a
              className={` ${
                router.pathname == "/inbox"
                  ? "text-indigo-500"
                  : "text-gray-500"
              } text-xs font-semibold text-gray-500`}
            >
              Inbox
            </a>
          </div>
        </Link>
        <Link href="/homes/add">
          <div className="flex flex-col content-center items-center">
            <svg
              class={`h-5 w-5 ${
                router.pathname == "/homes/add"
                  ? "text-indigo-500"
                  : "text-gray-500"
              } group-hover:text-gray-500 group-focus:text-gray-600 transition ease-in-out duration-150 fill-current`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path d="M11 9V5H9v4H5v2h4v4h2v-4h4V9h-4zm-1 11a10 10 0 1 1 0-20 10 10 0 0 1 0 20z" />
            </svg>

            <a
              className={`${
                router.pathname == "/homes/add"
                  ? "text-indigo-500"
                  : "text-gray-500"
              } text-xs font-semibold text-gray-500`}
            >
              Add Home
            </a>
          </div>
        </Link>
        <Link href="/profile">
          <div className="flex flex-col content-center items-center">
            <img
              className=" object-cover block rounded-full h-5 w-5 overflow-hidden focus:outline-none border-2 border-gray-600 focus:border-white"
              src="https://res.cloudinary.com/dvqw5uhrr/image/upload/v1586384636/Raices/Scottie%27s%20Photos/Scottie.png"
            />

            <a
              className={`text-xs font-semibold ${
                router.pathname == "/profile"
                  ? "text-indigo-500"
                  : "text-gray-500"
              } `}
            >
              Profile
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default BottomNav;
