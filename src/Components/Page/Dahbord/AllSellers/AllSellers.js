import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSellers = () => {
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch("https://mobil-sarver.vercel.app/allseler");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="w-16 mx-auto h-16 border-4 border-dashed rounded-full animate-spin dark:border-blue-400"></div>
    );
  }

  //delete

  const handeldelete = (id) => {
    const confrim = window.confirm("Are you soure");
    if (confrim) {
      fetch(`https://mobil-sarver.vercel.app/seler/${id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((daatinfo) => {
          toast.success("Delete successfull !!");

          refetch();
        });
    }
  };

  const handelvaryfid = (email) => {
  
    const confrim = window.confirm("Are you soure");
    if (confrim) {
      fetch(`https://mobil-sarver.vercel.app/allseler?email=${email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((daatinfo) => {
          toast.success("VARYFID successfull !!");

          refetch();
        });
    }
  };

  return (
    <div>
      <h2 className="text-2xl  text-black p-6 font-bold">My saller</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>NO</th>
              <th>Name</th>
              <th>Email</th>
              <th>Varefy</th>
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
                  {
                    p?.varefy ? <h1>varyfid</h1> :<button
                    onClick={() => handelvaryfid(p.email)}
                    className="btn btn-outline btn-secondary btn-sm"
                  >
                    varyfi
                  </button>
                  }
                  
                </td>
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
  );
};

export default AllSellers;
