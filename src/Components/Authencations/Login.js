import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { Authencations } from '../Context/Usercontext';

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const {user} = useContext(Authencations)

  return (
    <div className="w-full mx-auto my-5 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold text-center">Log in</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-400">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            required
            id="email"
            placeholder="email"
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
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
          Sign up
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
          aria-label="Log in with Google"
          className="p-3 text-3xl font-bold rounded-sm"
        >
          <FcGoogle />
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 dark:text-gray-400">
        Don't have an account?
        <Link
          to="/signup"
          rel="noopener noreferrer"
          href="#"
          className="underline dark:text-gray-100"
        >
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default Login;