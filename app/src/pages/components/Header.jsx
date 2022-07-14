import React from "react";
// local
import HEADER_LOGO from "../../assets/images/find-logo.png";
const Header = () => {
  return (
    <div className="fixed flex h-16 w-full items-center justify-between bg-darkBlack/95  px-5 md:px-24 z-20">
      <div className="h-[2rem] w-[10rem]  overflow-hidden md:w-[12rem]">
        <img
          className="h-full w-full object-contain object-center"
          src={HEADER_LOGO}
          alt="Logo"
        />
      </div>
      <div className="hidden flex-row md:flex">
        <button className="m-2 w-20 rounded-full border border-brand py-1 text-sm text-whitey-100 hover:bg-brand focus:outline-none">
          Signin
        </button>
        <button className="m-2 w-20 rounded-full border border-brand bg-brand py-1 text-sm text-whitey-100 transition-all hover:bg-darkBlack focus:outline-none">
          Signup
        </button>
      </div>
    </div>
  );
};

export default Header;
