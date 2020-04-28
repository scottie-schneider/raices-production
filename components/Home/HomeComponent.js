import Reat, { useState, Fragment } from "react";
import LargeImageHeader from "../Gallery/LargeImageHeader";
import SmallImageHeader from "../Gallery/SmallImageHeader";
import MediumImageHeader from "../Gallery/MediumImageHeader";
import BottomNav from "../Navigation/BottomNav";
import ShowingButton from "../Buttons/ShowingButton";
import HomeDetails from "../Home/HomeDetails";
import HomeStats from "../Home/HomeStats";
import BottomFloatingSeeButton from "../Buttons/BottomFloatingSeeButton";
import TopNav from "../Navigation/TopNav";
import ImageGalleryModal from "../Gallery/ImageGalleryModal";

const images = [
  "https://images.unsplash.com/photo-1503174971373-b1f69850bded?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1987&q=8",
  "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
  "https://images.unsplash.com/photo-1574739782812-9b064e1efeaf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80",
];
const HomeComponent = () => {
  const [showImageModal, setShowImageModal] = useState(false);
  return (
    <div className="relative flex flex-col h-full overflow-hidden bg-white mb-12 sm:mb-0">
      <div className="hidden md:block">
        <TopNav />
      </div>
      {showImageModal && (
        <ImageGalleryModal
          setShowImageModal={setShowImageModal}
          images={images}
        />
      )}
      <div className="font-sans antialiased h-full mt-0 mb-2 sm:mb-0 bg-white overflow-scroll flex flex-col">
        {/* Large Gallery Image Grid for images 1-5 */}
        <div className="hidden lg:block ">
          <LargeImageHeader setShowImageModal={setShowImageModal} />
        </div>
        {/* Medium Image Header*/}
        <div className="hidden md:flex lg:hidden h-294px">
          <MediumImageHeader setShowImageModal={setShowImageModal} />
        </div>
        {/* Small Image Header*/}
        <div className="sm:flex md:hidden">
          <SmallImageHeader setShowImageModal={setShowImageModal} />
        </div>
        <div className="max-w-3xl grid grid-cols-1 gap-4 px-4 lg:grid-cols-2 h-full lg:max-w-screen-xl lg:px-24 md:pb-20 lg:pb-4">
          <div className="">
            <h2 className="px-6 md:px-0 text-gray-700 font-bold text-3xl mt-4 leading-tight">
              Fashionable Studio Loft in Bohemian Neighborhood
            </h2>

            <h4 className="px-6 md:px-0 text-gray-500 font-semibold">
              4 bedroom · 2 Bath
            </h4>
            <div className="flex w-full md:hidden">
              <ShowingButton />
            </div>

            <HomeStats />
            {/* House Details */}
            <HomeDetails />
            {/* Showing/Agent Button */}
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="">
              {" "}
              <div class="sticky top-20 mt-10 w-400px max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div class=" top-0 z-10 rounded-lg shadow-xl mt-8">
                  <div class=" pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"></div>
                  <div class="absolute inset-x-0 top-0 transform translate-y-px">
                    <div class="flex justify-center transform -translate-y-1/2">
                      <span class="inline-flex rounded-full bg-indigo-600 px-4 py-1 text-sm leading-5 font-semibold tracking-wider uppercase text-white">
                        Showing Agent
                      </span>
                    </div>
                  </div>
                  <div class="bg-white rounded-t-lg px-6 pt-12 pb-10 flex flex-col justify-center content-center">
                    <div className=" flex justify-center">
                      <img
                        className="h-32 w-32 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div>
                    <div class="mt-4 flex items-center justify-center">
                      <span class="text-3xl leading-8 font-semibold text-gray-500">
                        Hi, I'm Filipe
                      </span>
                    </div>
                  </div>
                  <div class="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                    <ul>
                      <li class="flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-green-500"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                          Lives in Medellin
                        </p>
                      </li>
                      <li class="mt-4 flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-green-500"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                          Speaks English, Español
                        </p>
                      </li>
                      <li class="mt-4 flex items-start">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-green-500"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p class="ml-3 text-base leading-6 font-medium text-gray-500">
                          Will pick you up if you'd like
                        </p>
                      </li>
                    </ul>
                    <div class="mt-10">
                      <div class="rounded-lg shadow-md">
                        <a
                          href="#"
                          data-gumroad-single-product="true"
                          class="block w-full text-center rounded-lg border border-transparent bg-indigo-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition ease-in-out duration-150"
                        >
                          Schedule a showing
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full md:hidden">
            <ShowingButton />
          </div>
        </div>
        <div className="hidden md:flex lg:hidden w-full content-center">
          <BottomFloatingSeeButton />
        </div>
      </div>
      <div className="flex w-full md:hidden">
        <BottomNav />
      </div>
    </div>
  );
};
export default HomeComponent;
