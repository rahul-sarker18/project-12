import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";
import { Authcontext } from "../Context/Usercontext";

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { signupEmail, auth, googlesubmite } = useContext(Authcontext);

  //submite
  const onSubmit = (data) => {
    // sign up email and password
    const { email, username, roll } = data;

    signupEmail(data.email, data.password)
      .then((res) => {
        const user = res.user;
        //update user name
        updateProfile(auth.currentUser, {
          displayName: data.username,
          photoURL: "https://i.ibb.co/ZJnwZhP/no.png",
        })
          .then(() => {
            const useinformation = { email, username, roll };
            fetch("http://localhost:8000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(useinformation),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });
          })
          .catch((e) => {});

        toast.success("successfuly sign up !!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // google sign up
  const handelgoogle = () => {
    googlesubmite()
      .then((res) => {
        const  user=res.user;
        const {displayName:username ,email} =user
        console.log(email , username);
        toast.success("successfuly sign up !!");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="w-full mx-auto my-5 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold text-center">Sign up</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block dark:text-gray-400">
            Username
          </label>
          <input
            {...register("username", { required: "plese type user name" })}
            type="text"
            id="username"
            placeholder="Username"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
          {errors.username && (
            <p className="text-red-400 "> {errors.username.message}</p>
          )}
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-400">
            Email
          </label>
          <input
            {...register("email")}
            type="text"
            id="email"
            placeholder="email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
        </div>

        <div className="space-y-1 text-sm">
          <label htmlFor="roll" className="block dark:text-gray-400">
            Roll
          </label>
          <select
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
            {...register("roll")}
          >
            <option value="Seller account">Seller account</option>
            <option value="Buyers account">Buyers account</option>
          </select>
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block dark:text-gray-400">
            Password
          </label>
          <input
            {...register("password", { required: "plese type password" })}
            type="password"
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
          {errors.password && (
            <p className="text-red-400 "> {errors.password.message}</p>
          )}
        </div>

        <button className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-blue-400">
          Log in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        <p className="px-3 text-sm dark:text-gray-400">
          Login with social accounts
        </p>
        <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={handelgoogle}
          aria-label="Log in with Google"
          className="p-3  text-3xl font-bold rounded-sm"
        >
          <FcGoogle />
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Don't have an account?
        <Link
          to="/login"
          rel="noopener noreferrer"
          href="#"
          className="underline dark:text-gray-100"
        >
          Log in
        </Link>
      </p>
    </div>
  );
};

export default Signup;
