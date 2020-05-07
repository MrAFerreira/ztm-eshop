import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_hOrvmmd5fhE9kFdFg0LO7nnN00Sz3gpkNH';

  const onToken = (token) => {
    console.log(token);
    alert('Payment successfull');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Samp Shop Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
