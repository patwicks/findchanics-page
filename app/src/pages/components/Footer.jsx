import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiMail } from "react-icons/fi";
// images
import LOGO from "../../assets/images/find-logo.png";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between gap-x-10 gap-y-3 border-t-4 border-t-brand bg-darkBlack px-10 md:flex-row md:px-20">
      <div className="h-[3.75rem] w-[12.5rem]">
        <img
          className="h-full w-full object-contain object-center"
          src={LOGO}
          alt="FINDCHANICS"
        />
      </div>
      <p className="text-whitey-100">
        &copy; 2021 - Finchanics. All rights reserved.
      </p>
      <div className="flex items-center justify-center gap-5  text-whitey-100 py-5">
        <span className="h-5 w-5">
          <FiFacebook className="w-full h-full hover:text-brand transition duration-300 ease-in-out cursor-pointer" />
        </span>
        <span className="h-5 w-5">
          <FiInstagram className="w-full h-full hover:text-brand transition duration-300 ease-in-out cursor-pointer" />
        </span>
        <span className="h-5 w-5">
          <FiTwitter className="w-full h-full hover:text-brand transition duration-300 ease-in-out cursor-pointer" />
        </span>
        <span className="h-5 w-5">
          <FiMail className="w-full h-full hover:text-brand transition duration-300 ease-in-out cursor-pointer" />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
