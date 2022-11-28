import React, { useEffect, useState } from "react";
import MainserviecsCard from "./MainserviecsCard";

const MainSarvice = () => {
  const [catogory, setCatogory] = useState([]);

  useEffect(() => {
    fetch("https://mobil-sarver-rahul-sarker18.vercel.app/allCatagory")
      .then((res) => res.json())
      .then((data) => setCatogory(data));
  }, []);

 

  return <div className="grid md:grid-cols-3 lg:grid-cols-3 my-16 gap-6 shadow-xl mx-auto justify-center ">
    {
       catogory.map(p => <MainserviecsCard key={p._id} pr ={p}></MainserviecsCard>) 
    }
  </div>;
};

export default MainSarvice;
