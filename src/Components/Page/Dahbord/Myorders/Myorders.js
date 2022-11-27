import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Authcontext } from "../../../Context/Usercontext";
import Modal from "../../pmantModal/Modal/Modal";
import MyorderCard from "./MyorderCard";

const Myorders = () => {
  const { roll } = useContext(Authcontext);
  const [modal, setModal] = useState(null);
  const stripePromise = loadStripe(process.env.REACT_APP_pk);

  const { data = [], isLoading  , refetch} = useQuery({
    queryKey: ["myorders", roll.email],
    queryFn: async () => {
      const res = await fetch(
        `https://mobil-sarver-rahul-sarker18.vercel.app/myorders?email=${roll.email}`
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


  const handelpment = (id) => {
    setModal(id);
    refetch()
  };



  return (
    <div>
      <h2 className="text-2xl  text-black p-6 font-bold">My Buyers</h2>

      <div>
        <div className="overflow-x-auto bg-black w-full shadow-lg shadow-indigo-500/50">
          <table className="table w-full">
            <tbody>
              {data.map((p) => (
                <MyorderCard
                  key={p._id}
                  pr={p}
                  handelpment={handelpment}
                ></MyorderCard>
              ))}
            </tbody>
          </table>
        </div>

        <div>
          {modal && (
            <Elements stripe={stripePromise}>
              <Modal refetch={refetch} modalId={modal._id} cprice={modal.Price} setModal={setModal} ></Modal>
            </Elements>
          )}
        </div>
      </div>
    </div>
  );
};

export default Myorders;
