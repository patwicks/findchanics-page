import React from "react";

const BottomHeader = () => {
  return (
    <div className="my-44 flex w-full flex-col items-center justify-center bg-whitey-200 py-20">
      <h1 className="pb-10 text-center text-2xl font-extrabold md:text-4xl">
        Live on the next level by joining the Community
      </h1>
      <button className="rounded-sm border-none bg-brand py-2 px-5 font-bold text-whitey-100 outline-none hover:opacity-80">
        Join now
      </button>
    </div>
  );
};

export default BottomHeader;
