import React from 'react';

exports.onRenderBody = ({ setPostBodyComponents }, options) => {
  let script = null;
  if (options.async) {
    script = <script key="gatsby-plugin-stripe-checkout" src="https://checkout.stripe.com/checkout.js" async />;
  } else {
    script = <script key="gatsby-plugin-stripe-checkout" src="https://checkout.stripe.com/checkout.js" />;
  }
  return setPostBodyComponents([script]);
};
