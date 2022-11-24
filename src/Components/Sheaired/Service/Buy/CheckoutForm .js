import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Authcontext } from "../../../Context/Usercontext";

const CheckoutForm = ({ p }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useContext(Authcontext);
  const [error, seterror] = useState("");
  const dat = new Date();
  const date = format(dat, "PP");

  const navegate = useNavigate()

  const [clientSecret, setClientSecret] = useState("");
  const { Price, name, image } = p;

  const update = {
    email: user?.email,
    Price,
    name,
    image,
    date,
  };

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:8000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [Price]);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      seterror(error.message);
    } else {
      seterror("");
    }
    const { paymentIntent, error: errors } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
          },
        },
      }
    );

    if (errors) {
      console.log("errors", errors);
      seterror(error.message);
    }

    if (paymentIntent.status === "succeeded") {
      seterror("");
      fetch("http://localhost:8000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(update),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          navegate('/')
        });
        toast.success("successFuly paent !!");
    }
  };

  return (
    <div className="w-full mx-auto my-5 max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-2xl font-bold text-center">Log in</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-400">
            Product Name
          </label>
          <input
            disabled
            id="email"
            value={name}
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-400">
            Price
          </label>
          <input
            id="email"
            disabled
            value={Price}
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="block dark:text-gray-400">
            Email
          </label>
          <input
            id="email"
            value={user?.email}
            disabled
            className="w-full px-4 py-3 rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900 focus:dark:border-blue-400"
          />
        </div>
        <div className="space-y-1 text-sm text-white">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#e6efff",
                  "::placeholder": {
                    color: "#e6efff",
                  },
                },
                invalid: {
                  color: "#e6efff",
                },
              },
            }}
          />
        </div>

        <p className="text-red-600">{error}</p>

        <button
          className="block w-full p-3 text-center rounded-sm dark:text-gray-900 dark:bg-blue-400"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
