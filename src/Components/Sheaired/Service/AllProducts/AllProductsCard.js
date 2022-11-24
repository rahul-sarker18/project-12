import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BiRupee } from "react-icons/bi";

const AllProductsCard = ({ pro }) => {
  console.log(pro);
  const { name, Price, image, location, originalprice, yearsof } = pro;
  return (
    <div >
      <div className="flex mx-auto flex-col max-w-xl p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex space-x-4">
          <img
            alt=""
            src="https://source.unsplash.com/100x100/?portrait"
            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <span className="text-sm font-semibold">Leroy Jenkins</span>
            <span className="text-xs dark:text-gray-400">4 hours ago</span>
          </div>
        </div>

        <div>
          
          <img
            src={image}
            alt=""
            className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
          />

          <div className="flex justify-between ">
            <h2 className="mb-1 text-xl font-semibold">{name}</h2>
            <p className="text-sm flex text-white">
              <CiLocationOn className="text-white text-2xl" />
              {location}
            </p>
          </div>
          <div className="flex justify-between my-3 ">
            <h2 className="mb-1 flex items-center gap-1 font-semibold">
              <span className="font-bold">Price:</span> {Price} <BiRupee />
            </h2>
            <h2 className="mb-1 flex items-center gap-1 font-semibold">
              <span className="font-bold">Originalprice:</span> {originalprice}{" "}
              <BiRupee />
            </h2>
            <p className="text-sm  text-white">
              {" "}
              <span className="font-bold">Yearsofus:</span> {yearsof}
            </p>
          </div>
          <div>
            <button className="btn btn-secondary gap-2 w-1/2">
              Add to Card
            </button>
            <button className="btn btn-accent w-1/2 gap-2  bg-blue-800">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsCard;
