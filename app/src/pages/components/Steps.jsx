import React from "react";
// images
import FIND from "../../assets/images/find-white.png";
import REQUEST from "../../assets/images/request-white.png";
import COMMUNICATE from "../../assets/images/communicate-white.png";
import FEEDBACK from "../../assets/images/feedback-white.png";
const Steps = () => {
  const data = [
    { image: FIND, title: "Find a shop" },
    { image: REQUEST, title: "Request services" },
    { image: COMMUNICATE, title: "Communicate" },
    { image: FEEDBACK, title: "Create feedback" },
  ];
  return (
    <div className="container mx-auto h-full overflow-auto py-20">
      <h1 className="pb-10 text-center text-4xl font-bold" data-aos="fade-up">
        How it works?
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-10 overflow-hidden">
        {data.map((item, index) => (
          <div
            className="flex flex-col items-center justify-center"
            key={index}
            data-aos="fade-up"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/20">
              <span className="text-3xl font-bold text-brand">{index + 1}</span>
            </div>
            <h2 className="py-5 text-lg font-semibold">{item.title}</h2>
            <div className="h-[15rem] w-[8rem] overflow-hidden shadow-lg md:h-[25rem]  md:w-[12.5rem]">
              <img
                className="obeject-contain h-full w-full object-center"
                src={item.image}
                alt="stepIMG"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
