import React from "react";
// image
import SERVICE_IMG from "../../assets/images/service.png";
const Services = () => {
  const services = [
    "Fast and secure transaction",
    "Awesome and user-friendy design",
    "Real-time location tracking and viewing",
    "Active community forum",
    "Extensive costumer support",
    "Privacy and secure  personal information",
  ];
  return (
    <div
      className="flex h-full w-full flex-col items-center justify-center px-10 py-20 md:h-screen md:flex-row md:px-20"
      data-aos="fade-up"
    >
      <div className="w-full md:w-1/2">
        <img src={SERVICE_IMG} alt="ServiceImage" />
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="my-5 text-4xl font-bold leading-[3.5rem]">
          We provide many features that you can use
        </h1>
        {services.map((text, index) => (
          <div className="flex py-2" key={index}>
            <span>
              <svg
                className="mr-2 h-6 w-6 text-darkGreen"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <p className="text-md">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
