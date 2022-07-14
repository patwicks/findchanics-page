import React from "react";

const Statistics = () => {
  return (
    <div className="container mx-auto my-[3.75rem] flex flex-col items-center justify-center bg-whitey-200 p-10 md:flex-row md:rounded-md">
      <div className="my-5 mx-10 flex h-20 flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-brand">100k+</h1>
        <p className="mt-2 text-sm text-darkBlack/80">Total downloads</p>
      </div>
      <div className="my-5 mx-10 flex h-20 flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-brand">50k+</h1>
        <p className="mt-2 text-sm text-darkBlack/80">Positive reviews</p>
      </div>
      <div className="my-5 mx-10 flex h-20 flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-brand">15k+</h1>
        <p className="mt-2 text-sm text-darkBlack/80">Active users</p>
      </div>
    </div>
  );
};

export default Statistics;
