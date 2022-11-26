import React from "react";

const MyorderCard = ({ pr , handelpment }) => {
  console.log(pr);
  const {image , name , date , useremail ,Price, productemail , _id}= pr

  return (

    <tr className="text-white border-b-2">
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src={image}
                      alt="Avatar Tailwind CSS Component"
                    />
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
              <span className="">
               Price:  {Price}
              </span>
            </td>
            <td>
                Seller email:
                <br />
                {productemail}
                </td>
            <th>
            <button onClick={()=>handelpment(_id)} className="btn  btn-accent btn-sm">Pay</button>
          
            </th>
          </tr>
  );
};

export default MyorderCard;
