import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Authencations } from "../Context/Usercontext";

const NaveBar = () => {
  const { user, auth } = useContext(Authencations);

  console.log(user);
  const handelsignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((e) => {
        console.log(e);
      });
  };

  const naveitems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/">Product</Link>
      </li>
      <li>
        <Link to="/">Blog</Link>
      </li>
      <li>
        <Link to="/dasbord">DasBord</Link>
      </li>

      {user?.uid ? (
        <li onClick={handelsignout}>
          <Link>Sign Out</Link>
        </li>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}

      <li>
        <div className="drawer-content flex flex-col ">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            daisyUI
          </Link>
        </div>

        <div className="navbar-end">
          {/* lg divise */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{naveitems}</ul>
          </div>

          {/* hambarger manue */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {naveitems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NaveBar;
