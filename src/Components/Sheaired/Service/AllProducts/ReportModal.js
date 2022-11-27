import React from "react";
import toast from "react-hot-toast";
import PrivateRout from "../../../Router/PrivateRout";

const ReportModal = ({ setreportModa, id }) => {
  const handel = (e) => {
    e.preventDefault();
    const reportmases = e.target.rep.value;

    fetch(
      `https://mobil-sarver-rahul-sarker18.vercel.app/reportmessage/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ reportmases }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Report send !!!");
          setreportModa("");
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form onSubmit={handel}>
            <textarea
              name="rep"
              className="textarea w-full mt-7 textarea-primary"
              placeholder="report "
            ></textarea>

            <PrivateRout>
              <button className="btn btn-secondary mx-auto text-center">
                Add Report
              </button>
            </PrivateRout>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReportModal;
