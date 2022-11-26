import React, { useContext, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Authcontext } from "../Context/Usercontext";
import DasbordNave from "../Page/Dahbord/DasbordNave";
import NaveBar from "../Sheaired/NaveBar";

const DasbordLayout = () => {
  // const {user} = useContext(Authcontext)
  // console.log(user);
  const { user } = useContext(Authcontext);
  const [users, setusers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/users?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setusers(data));
  },[user?.email]);

  console.log(users);

  return (
    <div>
      <NaveBar />
      <div className="lg:flex  gap-5 relative ">
        <div className="absolute;">
          {users.map((e) => (
            <DasbordNave key={e._id} ee={e}></DasbordNave>
          ))}
        </div>

        <div className="bg-white w-[100vw] mt-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DasbordLayout;
