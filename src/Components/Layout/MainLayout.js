import React from "react";
import { Outlet } from "react-router-dom";
import Footre from "../Sheaired/Footre";
import NaveBar from "../Sheaired/NaveBar";

const MainLayout = () => {
  return (
    <div>
      <NaveBar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footre />
    </div>
  );
};

export default MainLayout;
