import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// local components
import Header from "./components/Header";
import Main from "./components/Main";
import Services from "./components/Services";
import Statistics from "./components/Statistics";
import Steps from "./components/Steps";
import BottomHeader from "./components/BottomHeader";
import Footer from "./components/Footer";

const HomePage = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="h-full w-full">
      <Header />
      <Main />
      <Statistics />
      <Services />
      <Steps />
      <BottomHeader />
      <Footer />
    </div>
  );
};

export default HomePage;
