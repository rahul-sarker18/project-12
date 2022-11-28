import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { Authcontext } from "../Context/Usercontext";

const BuyerRoute = ({ children }) => {
  const { loder, roll, user } = useContext(Authcontext);
  const location = useLocation();

  if (loder) {
    return (
      <div className="w-16 mx-auto h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-400"></div>
    );
  }
  if (roll?.roll === "Buyers account" && user?.uid) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
