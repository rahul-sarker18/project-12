import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../../../Context/Usercontext";

const CheckoutForm = ({ p }) => {
  const { user } = useContext(Authcontext);
 
  const dat = new Date();
  const date = format(dat, "PP");
  const { Price, name, image, emali } = p;
  const navegate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const number = form.number.value;
    const location = form.location.value;
    const update = {
      useremail: user?.email,
      username: user?.displayName,
      userPhotoUrl: user?.photoURL,
      productemail: emali,
      Price,
      name,
      image,
      date,
      location,
      number,
    };
    fetch("https://mobil-sarver.vercel.app/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("successFuly paent !!");
        navegate("/");
      });
  };

  return (
    <div className="w-full mx-auto my-5 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold text-center">Bookin</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-400">
            Product Name
          </label>
          <input
            disabled
            id="email"
            value={name}
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-400">
            Price
          </label>
          <input
            id="email"
            disabled
            value={Price}
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-400">
            Email
          </label>
          <input
            id="email"
            value={user?.email}
            disabled
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="phone number" className="block dark:text-gray-400">
            phone number
          </label>
          <input
            type="number"
            name="number"
            id="phone number"
            placeholder="phone number"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="location" className="block dark:text-gray-400">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="location"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
        </div>
      

        <button
          className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-blue-400"
          type="submit"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
