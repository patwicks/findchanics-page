import React from "react";
import { useNavigate } from "react-router-dom";
const BottomHeader = () => {
  let navigateTo = useNavigate();

  return (
    <div
      className="my-44 flex w-full flex-col items-center justify-center bg-whitey-200 py-20 px-10"
      data-aos="fade-up"
    >
      <h1 className="pb-10 text-center text-3xl font-extrabold  leading-normal md:text-4xl">
        Live on the <span className="text-brand">Next level</span> by joining
        the Community
      </h1>
      <button
        className="rounded-sm border-none bg-brand py-2 px-5 font-bold text-whitey-100 outline-none hover:opacity-80"
        onClick={() => navigateTo("/signup")}
      >
        Join now
      </button>
    </div>
  );
};

export default BottomHeader;
