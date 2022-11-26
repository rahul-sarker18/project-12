import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const Modal = ({ modalId, cprice, setModal , refetch }) => {
  const [errord, setErrord] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  // fetch
  const [clientSecret, setClientSecret] = useState("");
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:8000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: cprice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [cprice]);

  const handleSubmit = async (event) => {
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
      setErrord(error.message);
      console.log("[error]", error);
    } else {
      setErrord("");
    }

    const { paymentIntent, error: errors } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: modalId,
          },
        },
      }
    );

    if (errors) {
      console.log("errors", errors);
      setErrord(error.message);
    }


    if (paymentIntent.status) {
      fetch(`http://localhost:8000/bokingd/${modalId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setModal("");
          refetch()
          toast.success("successfull pemant !!");
        });

    }
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
          <form onSubmit={handleSubmit}>
            <CardElement
              className="border-2 mt-5 p-3 rounded-sm"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#dfe5eb",
                    "::placeholder": {
                      color: "#dfe5eb",
                    },
                  },
                  invalid: {
                    color: "#dfe5eb",
                  },
                },
              }}
            />
            <button
              className="w-full mt-3 text-center btn btn-primary"
              type="submit"
              disabled={!stripe}
            >
              Pay
            </button>
            <p className="text-red-600">{errord}</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
