// eslint-disable-next-line no-unused-vars
import React from 'react';

exports.onRenderBody = ({ setPostBodyComponents }, options) => {
  return setPostBodyComponents([
    <script
      key="gatsby-plugin-stripe-checkout"
      src="https://checkout.stripe.com/checkout.js"
      async={options.async}
    />
  ]);

};
