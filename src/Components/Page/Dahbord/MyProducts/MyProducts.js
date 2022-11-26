import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Authcontext } from "../../../Context/Usercontext";
import MyproductsCard from "./MyproductsCard";

const MyProducts = () => {
  const { roll } = useContext(Authcontext);

  const { data = [], isLoading  , refetch} = useQuery({
    queryKey: ["myallProducts", roll?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:8000/mypro?email=${roll?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="w-16 h-16 border-4 mx-auto my-auto border-dashed rounded-full animate-spin dark:border-blue-400"></div>
    );
  }
  //delet products
  const handeldelet = (id) => {

    const confirmation = window.confirm('are you soure')
    console.log(confirmation);

    if(confirmation){

      fetch(`http://localhost:8000/mypro/${id}` , {
        method:'DELETE'
      })
      .then(res => res.json())
      .then(data => {
        if(data.deletedCount){
          toast.success('Delete successfull !!!')
        }
      })
      refetch()
    }
   
    
  };

  return (
    <div>
      <h2 className="text-2xl  text-black p-6 font-bold">My products</h2>

      <div>
        {data.map((a) => (
          <MyproductsCard
            key={a._id}
            all={a}
            handeldelet={handeldelet}
          ></MyproductsCard>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
