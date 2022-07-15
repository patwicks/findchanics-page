import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
// local
import HEADER_LOGO from "../../assets/images/find-logo.png";
const Header = () => {
  let navigateTo = useNavigate();
  const [show, setShow] = React.useState(false);
  const handleShowNav = () => {
    setShow(!show);
  };
  return (
    <div className="fixed z-20 flex h-16 w-full items-center justify-between  bg-darkBlack/95 px-5 md:px-24">
      <div
        className="h-[2rem] w-[10rem]  cursor-pointer overflow-hidden md:w-[12rem]"
        onClick={() => navigateTo("/")}
      >
        <img
          className="h-full w-full object-contain object-center"
          src={HEADER_LOGO}
          alt="Logo"
        />
      </div>
      <div
        className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full transition duration-300 ease-in-out hover:bg-white/30"
        onClick={handleShowNav}
      >
        <HiMenuAlt3 className="block text-xl text-whitey-100 md:hidden " />
      </div>
      <div className="hidden flex-row md:flex">
        <button
          className="m-2 w-20 rounded-full border border-brand py-1 text-sm text-whitey-100 hover:bg-brand focus:outline-none"
          onClick={() => navigateTo("/signin")}
        >
          Signin
        </button>
        <button
          className="m-2 w-20 rounded-full border border-brand bg-brand py-1 text-sm text-whitey-100 transition-all hover:bg-darkBlack focus:outline-none"
          onClick={() => navigateTo("/signup")}
        >
          Signup
        </button>
      </div>
      {/* mobile nav */}
      <div
        className={`absolute right-0 top-0 bottom-0 h-screen w-[50vw] bg-white p-3 transition duration-500 ease-in-out md:hidden ${
          show ? `` : `translate-x-[100vh] transform`
        }`}
      >
        <IoClose className="mb-5 text-2xl text-black" onClick={handleShowNav} />
        <div className="flex flex-col gap-2">
          <Link
            className="flex h-10 w-full items-center justify-center rounded-md bg-darkBlack/10 text-sm hover:bg-whitey-300"
            to="/"
            onClick={handleShowNav}
          >
            Home
          </Link>
          <Link
            className="flex h-10 w-full items-center justify-center rounded-md bg-darkBlack/10 text-sm hover:bg-whitey-300"
            to="/signin"
            onClick={handleShowNav}
          >
            Signin
          </Link>
          <Link
            className="flex h-10 w-full items-center justify-center rounded-md bg-darkBlack/10 text-sm hover:bg-whitey-300"
            to="/signup"
            onClick={handleShowNav}
          >
            Signup
          </Link>
        </div>
        <div className="absolute right-0 left-0 bottom-5 flex w-full flex-col items-center justify-center">
          <p className="text-[0.6rem] font-light">v1.0.12</p>
          <p className="text-[0.6rem] font-light">Developed by:Dev Pat</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
