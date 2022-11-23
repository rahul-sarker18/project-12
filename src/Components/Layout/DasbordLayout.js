import React from "react";
import { Outlet } from "react-router-dom";
import DasbordNave from "../Page/Dahbord/DasbordNave";
import NaveBar from "../Sheaired/NaveBar";

const DasbordLayout = () => {
  return (
    <div>
      <NaveBar />
      <div>
        <DasbordNave />

        <Outlet />
      </div>
    </div>
  );
};

export default DasbordLayout;
