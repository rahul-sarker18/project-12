import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BuyCart from './BuyCart';

const Byu = () => {
const data =useLoaderData();
    return (
        <div>
            {data.map(p => <BuyCart key={p._id} p={p}></BuyCart>)}
        </div>
    );
};

export default Byu;