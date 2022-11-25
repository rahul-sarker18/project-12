import React from 'react';
import { Link } from 'react-router-dom';

const DasbordNave = () => {
    return (
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side  ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64  text-black  bg-slate-400">
            {/* simple usere */}
            <li>
              <Link to='/dasbord/Myorders'>My orders</Link>
            </li>
            {/* buyers */}
            <li>
              <Link to='/dasbord/AddAproduct'>Add A product</Link>
            </li>
            <li>
              <Link to='/dasbord/MyProducts'>My Products</Link>
            </li>
            <li>
              <Link to='/dasbord/Mybuyers'>My buyers</Link>
            </li>
            {/* admine */}
            <li>
              <Link to='/dasbord/AllSellers'> All Sellers</Link>
            </li>
            <li>
              <Link to='/dasbord/AllBuyers'>All Buyers</Link>
            </li>
            <li>
              <Link to='/dasbord/ReportedItems'>Reported Items</Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default DasbordNave;