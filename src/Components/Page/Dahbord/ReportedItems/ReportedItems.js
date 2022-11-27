import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";

const ReportedItems = () => {
  const {
    data = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(
        "https://mobil-sarver-rahul-sarker18.vercel.app/reportedites"
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

  const handeldelet = (id) => {
    const confirmation = window.confirm("are you soure");

    if (confirmation) {
      fetch(`https://mobil-sarver-rahul-sarker18.vercel.app/mypro/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Delete successfull !!!");
            refetch();
          }
        });
      refetch();
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
              <th>img</th>
              <th>Products Name</th>
              <th>Reported</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map((p, i) => (
              <tr key={p._id}>
                <th>{i + 1}</th>
                <td>
                  <img src={p.image} alt="" width={"50px"} />
                </td>
                <td>{p.name}</td>
                <td>Reported items</td>

                <td>
                  <button
                    onClick={() => handeldelet(p._id)}
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

export default ReportedItems;
