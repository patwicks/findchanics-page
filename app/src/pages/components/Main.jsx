import React from "react";
// image
import PHONE_IMG from "../../assets/images/find-big.png";
const Main = () => {
  return (
    <div className="relative z-20 flex h-full w-full items-center justify-center overflow-hidden bg-darkBlack py-16 px-8 md:px-20">
      {/* left side header */}
      <div className="flex h-full w-full flex-col items-center py-10 md:w-[60%] md:items-start">
        <h1 className="text-center text-[2.5rem] font-extrabold text-whitey-100 md:text-left md:text-[3.75rem]">
          A new way of finding an expert to fix your vehicle
        </h1>
        <p className="mt-5 text-center text-base tracking-wide text-whitey-300 md:text-left">
          It provides a fast and efficient solution to your problem.
        </p>
        <button className="mt-16 flex w-[10rem] items-center justify-center rounded-sm bg-brand py-1 text-center font-semibold text-white transition-all hover:opacity-70">
          Dowload
          <span className="ml-2">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </span>
        </button>
      </div>
      {/* right picture */}
      <div className="hidden h-[80vh] items-center justify-center transition duration-500 ease-in-out md:flex md:w-[40%]">
        <div className=" h-[80%] w-[80%] ">
          <img
            className="h-full w-full object-contain object-center"
            src={PHONE_IMG}
            alt="Phone"
          />
        </div>
      </div>
      <div className="absolute -bottom-14 -right-16 -z-10 h-[20rem] rotate-[30deg] transform text-white md:hidden">
        <img
          className="h-full w-full object-contain object-center opacity-50"
          src={PHONE_IMG}
          alt="Phone"
        />
      </div>
    </div>
  );
};

export default Main;
