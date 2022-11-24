import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm ';

const BuyCart = ({p}) => {
    console.log(p);
    const {Price , image , _id} = p;

    const stripePromise= loadStripe('pk_test_51M6ApoSDopG0Dh4gf9tyWGWUSrHW4VZMIeCx3LvZozfvdc0xQMcVHBTw5TfRZNhZUWXUoPasRs5dqDOcmyiuQ8be00AXVxSisJ');

    return (
        <Elements stripe={stripePromise}>
        <CheckoutForm p={p} />
      </Elements>
    );
};

export default BuyCart;