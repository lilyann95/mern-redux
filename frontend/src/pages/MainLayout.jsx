import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <div className="px-4 sm:w-[5vw] md:w-[7vw] lg:w-[9vw]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
