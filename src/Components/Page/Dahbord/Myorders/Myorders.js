import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Authcontext } from "../../../Context/Usercontext";
import MyorderCard from "./MyorderCard";

const Myorders = () => {
  const { roll } = useContext(Authcontext);
  console.log(roll?.email);

  const { data = [], isLoading } = useQuery({
    queryKey: ["myorders", roll.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:8000/myorders?email=${roll.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="w-16 mx-auto h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-400"></div>
    );
  }


// update pay sinste 

const handelpment=(id)=>{



  
  console.log('okkkkk' , id);

}



  console.log(data);

  return (
    <div>
      <h2 className="text-2xl  text-black p-6 font-bold">My Buyers</h2>

      <div>

      <div className="overflow-x-auto bg-black w-full shadow-lg shadow-indigo-500/50">
      <table className="table w-full">
        
        <tbody >
        {data.map(p => <MyorderCard key={p._id} pr ={p} handelpment={handelpment}></MyorderCard>)}
          
        </tbody>
      </table>
    </div>











      </div>
    </div>
  );
};

export default Myorders;
