import React, { useEffect, useState } from "react";
import Extrapage from "../../Extrapage/Extrapage";
import Advitisment from "./Advitisment/Advitisment";
import Slidecards from "./Slidecards";
import { BsArrow90DegDown, BsArrow90DegLeft } from "react-icons/bs";
import MainSarvice from "../../Sheaired/Service/MainSarvice";

const Home = () => {
  const [add, setadd] = useState([]);

  useEffect(() => {
    fetch("https://mobil-sarver.vercel.app/advatise")
      .then((res) => res.json())
      .then((data) => {
        setadd(data);
      }, []);
  });
 

  return (
    <div>
      <Slidecards />

      {add.length > 0 && (
        <div>
          <div className="flex mx-auto justify-center items-center gap-4 my-3">
            <BsArrow90DegDown className="text-3xl" />

            <h1 className="text-2xl font-semibold mb-3 mt-5">
              Advertised items
            </h1>
            <BsArrow90DegLeft className="text-3xl" />
          </div>
          <div className="grid  grid-cols-1 lg:grid-cols-2 gap-6 my-10 ">
            {add.map((p) => (
              <Advitisment pr={p} key={p._d} />
            ))}
          </div>
        </div>
      )}

      <div>
        <div className="flex mx-auto justify-center items-center gap-4 my-3">
          <BsArrow90DegDown className="text-3xl" />

          <h1 className="text-2xl font-semibold mb-3 mt-5">Sirvice Catogore</h1>
          <BsArrow90DegLeft className="text-3xl" />
        </div>
      </div>
      <div>
        <MainSarvice />
      </div>

      <div className="text-center my-10">
        <div className="flex mx-auto justify-center items-center gap-4 my-3">
          <BsArrow90DegDown className="text-3xl" />

          <h1 className="text-2xl font-semibold mb-3"> My Progres</h1>
          <BsArrow90DegLeft className="text-3xl" />
        </div>
        <Extrapage />
      </div>
    </div>
  );
};

export default Home;
