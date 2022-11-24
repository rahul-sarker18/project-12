import React from 'react';
import { Link } from 'react-router-dom';

const DasbordNave = () => {
    return (
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-side  ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-64  text-black  bg-slate-400">
            <li>
              <Link to='/dasbord/Myorders'>My orders</Link>
            </li>
            <li>
              <Link to='/dasbord/'>Sidebar Item 2</Link>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default DasbordNave;