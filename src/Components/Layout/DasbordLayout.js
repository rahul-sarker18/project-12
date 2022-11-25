import React from "react";
import { Outlet } from "react-router-dom";
import DasbordNave from "../Page/Dahbord/DasbordNave";
import NaveBar from "../Sheaired/NaveBar";

const DasbordLayout = () => {
  return (
    <div>
      <NaveBar />
      <div className="lg:flex  gap-5 relative ">
       <div className="absolute;">
       <DasbordNave />
       </div>

        <div className="bg-white w-[100vw] mt-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DasbordLayout;
