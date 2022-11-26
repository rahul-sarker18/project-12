import { format } from "date-fns";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../../../Context/Usercontext";

const AddaProducts = () => {
  const { user } = useContext(Authcontext);
  const dat = new Date();
  const date = format(dat, "PP");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const productname = data.productname;
    const catocory = data.catocory;
    const price = data.price;
    const originalprice = data.originalprice;
    const yearsof = data.yearsof;
    const location = data.location;
    const img = data.img;

    const image = img[0];
    let cotogory;
    if (catocory === "iphone") {
      cotogory = "111";
    }
    if (catocory === "oppo") {
      cotogory = "222";
    }
    if (catocory === "sumsung") {
      cotogory = "333";
    }

    const formData = new FormData();
    formData.append("image", image);
    const url =
      "https://api.imgbb.com/1/upload?key=2269f2e7a41759857a085f581d8f873e";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          const ued = {
            name: productname,
            catocory,
            Price: price,
            originalprice,
            yearsof,
            location,
            date,
            id: cotogory,
            emali: user?.email,
            image: imageData.data.url,
          };

          fetch("http://localhost:8000/allProduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(ued),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("successfult add products");
                navigate("/services");
              }
            });
        }
      });
  };

  return (
    <div className="w-full max-w-md p-8 mx-auto my-5 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold text-center">Add a Product</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="productname" className="block dark:text-gray-400">
            product name
          </label>
          <input
            type="text"
            required
            name="productname"
            {...register("productname")}
            id="productname"
            placeholder="productname"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
        </div>

        {/* 22222 */}
        <div className="space-y-1 text-sm">
          <label htmlFor="catocory" className="block dark:text-gray-400">
            catocory
          </label>
          <select
          
            {...register("catocory")}
            name="catocory"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          >
            <option>iphone</option>
            <option>oppo</option>
            <option>sumsung</option>
          </select>
        </div>
        {/* 333 */}
        <div className="flex gap-4">
          <div className="space-y-1 text-sm">
            <label htmlFor="price" className="block dark:text-gray-400">
              Price
            </label>
            <input
              required
              type="number"
              {...register("price")}
              name="price"
              id="price"
              placeholder="price"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
            />
          </div>
          {/* 44 */}
          <div className="space-y-1 text-sm">
            <label htmlFor="originalprice" className="block dark:text-gray-400">
              Original price
            </label>
            <input
              required
              type="number"
              {...register("originalprice")}
              name="originalprice"
              id="originalprice"
              placeholder="originalprice"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
            />
          </div>
        </div>
        {/* 5555 */}
        <div className="flex gap-4">
          <div className="space-y-1 text-sm">
            <label htmlFor="yearsof" className="block dark:text-gray-400">
              Years of usd
            </label>
            <input
              required
              type="text"
              {...register("yearsof")}
              name="yearsof"
              id="yearsof"
              placeholder="yearsof"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="location" className="block dark:text-gray-400">
              Location
            </label>
            <input
              required
              type="text"
              {...register("location")}
              name="location"
              id="location"
              placeholder="location"
              className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
            />
          </div>
          {/* 66 */}
        </div>
        {/* 77777 */}

        <div className="space-y-1 text-sm">
          <label htmlFor="img" className="block dark:text-gray-400">
            Image
          </label>
          <input
            required
            {...register("img")}
            type="file"
            name="img"
            id="img"
            placeholder="img"
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>

        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-blue-400">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default AddaProducts;
