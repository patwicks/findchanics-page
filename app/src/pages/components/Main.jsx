import React from "react";

const Main = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-darkBlack py-16 px-8 md:px-14">
      <div className="mt-14 flex h-screen w-full flex-col items-center py-10 md:w-[80%]">
        <h1 className="text-center text-[2rem] font-extrabold text-whitey-100 md:text-[3.75rem]">
          A new way of finding an expert to fix your vehicle
        </h1>
        <p className="mt-5 text-center text-base tracking-wide text-whitey-300">
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
    </div>
  );
};

export default Main;
