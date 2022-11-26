import React from "react";

const MyorderCard = ({ pr , handelpment }) => {

  const { image, name, date, useremail, Price, productemail, pmant } = pr;

  return (
    <tr className="text-white border-b-2">
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm ">{date}</div>
          </div>
        </div>
      </td>
      <td>
        {useremail}
        <br />
        <span className="">Price: {Price}</span>
      </td>
      <td>
        Seller email:
        <br />
        {productemail}
      </td>
      <th>
        {pmant ? (
          <label className="text-red-300">PAYED</label>
        ) : (
          <label
            htmlFor="my-modal-3"
            onClick={() => handelpment(pr)}
            className="btn  btn-accent btn-sm"
          >
            PAY
          </label>
        )}
      </th>
    </tr>
  );
};

export default MyorderCard;
