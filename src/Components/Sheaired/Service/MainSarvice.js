import React, { useEffect, useState } from "react";
import MainserviecsCard from "./MainserviecsCard";

const MainSarvice = () => {
  const [catogory, setCatogory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/allCatagory")
      .then((res) => res.json())
      .then((data) => setCatogory(data));
  }, []);

 

  return <div className="grid md:grid-cols-3 lg:grid-cols-3 my-16 gap-6">
    {
       catogory.map(p => <MainserviecsCard key={p._id} pr ={p}></MainserviecsCard>) 
    }
  </div>;
};

export default MainSarvice;
