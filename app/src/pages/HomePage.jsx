import React from "react";
// local components
import Header from "./components/Header";
import Main from "./components/Main";
import Statistics from "./components/Statistics";

const HomePage = () => {
  return (
    <div className="h-full w-full">
      <Header />
      <Main />
      <Statistics />
    </div>
  );
};

export default HomePage;
