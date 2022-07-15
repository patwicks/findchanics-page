import React from "react";
import { useNavigate } from "react-router-dom";
import UNKNOWN_SVG from "../assets/svg/404.svg";
// compoents
import Header from "./components/Header";
import Footer from "./components/Footer";

const UnknownPage = () => {
  let navigateTo = useNavigate();
  return (
    <>
      <Header />
      <div className="flex h-screen min-h-screen w-full flex-col items-center justify-center py-16">
        <h1 className="text-2xl font-bold">Page not found!</h1>
        <p className="text-sm">
          Go back to{" "}
          <span
            className="decoration cursor-pointer underline hover:text-brand"
            onClick={() => navigateTo("/")}
          >
            Home
          </span>
        </p>
        <div className="w-full max-w-[50vh]">
          <img src={UNKNOWN_SVG} alt="unknown" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UnknownPage;
