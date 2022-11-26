import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../../Context/Usercontext";

const Myorders = () => {
    const [api, setapi] = useState([]);
  const { user } = useContext(Authcontext);
  const email = user?.email;
  console.log("8", email);
  if(email){


    // return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-400"></div>
  }


    

//   const { data: api = [], isLoading } = useQuery({
//     queryKey: ["booking", email],
//     queryFn: async () => {
//       const res = await fetch(`http://localhost:8000/booking?email=${email}`);
//       const data = await res.json();
//       return data;
//     },
//   });

//   if (isLoading) {
//     return <h1>lodeing.....</h1>;
//   }

  console.log(api);

  return <div>my orders</div>;
};

export default Myorders;
