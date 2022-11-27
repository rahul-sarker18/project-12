import React from 'react';
import { BiRupee } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Advitisment = ({ pr }) => {


  const {
    name,
    Price,
    location,
    originalprice,
    yearsof,
    _id,
    image,
    postimg,
    username,
    date,
  } = pr;

  return (
    <div className='my-8'>
     

      <div>
        <div className="flex mx-auto flex-col max-w-xl p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
          <div className="flex space-x-4">
            <img
              alt=""
              src={postimg}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <span className="text-sm font-semibold">{username}</span>
              <span className="text-xs dark:text-gray-400">{date}</span>
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
                <span className="font-bold">Originalprice:</span>{" "}
                {originalprice}
                <BiRupee />
              </h2>
              <p className="text-sm  text-white">
                <span className="font-bold">Yearsofus:</span> {yearsof}
              </p>
            </div>
            <div>
              <button className="btn btn-secondary gap-2 w-1/2">
                Report peoduct
              </button>
              <Link to={`/Book/${_id}`}>
                <button className="btn btn-accent w-1/2 gap-2  bg-blue-800">
                  Book now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advitisment;