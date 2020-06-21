import React from "react";

import StripeCheckOut from "react-stripe-checkout";

const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51GwY0pF2Xs8BKFbkjsYU2Tejvn8k6yu0gqwGFALExniWiQc26lAAVVXtGMGZKeAPAVPLZuEUly9dWndRTasg8ZKs00dePK5aMv";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckOut
      label="Pay Now"
      name="React Store"
      billingAddress
      shippingAddress
      image="https://www.flaticon.com/premium-icon/icons/svg/1183/1183672.svg"
      description={`Your total is ${price}$`}
      amoount={priceForStripe}
      panelLabel={`Pay Now ${price}`}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckOutButton;
