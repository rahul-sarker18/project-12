import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { Authcontext } from '../../Context/Usercontext';


const DasbordNave = () => {
  const {roll} = useContext(Authcontext)

  const manue = (
    <>
      {roll?.roll === "Buyers account" && (
        <li>
          <NavLink to="/dasbord/Myorders">My orders</NavLink>
        </li>
      )}

      {/* buyers */}
      {roll?.roll === "Seller account" && (
        <>
          <li>
            <NavLink to="/dasbord/AddAproduct">Add A product</NavLink>
          </li>
          <li>
            <NavLink to="/dasbord/MyProducts">My Products</NavLink>
          </li>
          <li>
            <NavLink to="/dasbord/Mybuyers">My buyers</NavLink>
          </li>
        </>
      )}

      {/* admine */}
      {roll?.roll === "admin" && (
        <>
          <li>
            <NavLink to="/dasbord/AllSellers"> All Sellers</NavLink>
          </li>
          <li>
            <NavLink to="/dasbord/AllBuyers">All Buyers</NavLink>
          </li>
          <li>
            <NavLink to="/dasbord/ReportedItems">Reported Items</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div>
      <div className="drawer-side hidden lg:block ">
        <ul className="menu p-4 lg:w-64 w-[100vw] h-[100vh] lg:block flex  text-black  bg-slate-400">
          {/* simple usere */}

          {manue}
        </ul>
      </div>

      <div className="navbar bg-base-100 block lg:hidden">
        <div className="dropdown dropdown-star">
          <label tabIndex={0} className="btn btn-ghost">
            <div className="w-32 font-bold">dasbord manue</div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {manue}
          </ul>
        </div>
      </div>
      
    </div>
  );
};

export default DasbordNave;