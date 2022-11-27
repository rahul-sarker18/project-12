import React, { useEffect, useState } from "react";
import Advitisment from "./Advitisment/Advitisment";
import Slidecards from "./Slidecards";

const Home = () => {
  const [add, setadd] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/advatise")
      .then((res) => res.json())
      .then((data) => {
        setadd(data);
      }, []);
  });
  console.log(add);

  return (
    <div>
      <Slidecards />
      {add.length > 0 && (
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-6 my-10 ">
          {add.map((p) => (
            <Advitisment pr={p} key={p._d} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
