import React from "react";
import { Link } from "react-router-dom";

const MainserviecsCard = ({ pr }) => {

  const { catacoruId, image, name } = pr;
  return (
    <div className="max-w-lg p-2 gap-4  shadow-md dark:bg-gray-900 rounded-lg dark:text-gray-100">
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={image}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="flex items-center text-xs">
            <span>6 min ago</span>
          </div>
        </div>
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-semibold text-white">{name}</h3>

          <Link to={`/services/${catacoruId}`}>
            <button className="btn mt-4  btn-primary bg-blue-900 w-full">
              All products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainserviecsCard;
