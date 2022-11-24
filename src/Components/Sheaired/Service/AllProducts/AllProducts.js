import React from 'react';
import { useLoaderData } from "react-router-dom";
import AllProductsCard from "./AllProductsCard";

const AllProducts = () => {
  const products = useLoaderData();

  return (
    <div>
      <div className="grid  grid-cols-1 lg:grid-cols-2 gap-6 my-10 ">
        {products.map((pr) => (
          <AllProductsCard key={pr._id} pro={pr}></AllProductsCard>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;