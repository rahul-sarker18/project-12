import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllBuyers = () => {
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/allbuyers");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="w-16 mx-auto h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-400"></div>
    );
  }
  // delete
  const handeldelete = (id) => {
    const confrim = window.confirm("Are you soure");
    if (confrim) {
      fetch(`http://localhost:8000/seler/${id}`, {
        method: "DELETE",
        headers:{
            'content-type':'application/json'
        }
      }).then(res => res.json())
      .then(daatinfo => {
      
        toast.success('Delete successfull !!')
          refetch()
      })
    }
   
  };



  return (
    <div>
      {" "}
      <div>
        <h2 className="text-2xl  text-black p-6 font-bold">My Buyers</h2>

        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>NO</th>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((p, i) => (
                <tr key={p._id}>
                  <th>{i + 1}</th>
                  <td>{p.username}</td>
                  <td>{p.email}</td>
                  <td>
                    <button
                      onClick={() => handeldelete(p._id)}
                      className="btn btn-outline btn-secondary btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllBuyers;
