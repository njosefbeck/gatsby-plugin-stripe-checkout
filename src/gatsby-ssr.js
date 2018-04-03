import React from 'react';

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  return setPostBodyComponents([
    <script
      key="gatsby-plugin-stripe-checkout"
      src="https://checkout.stripe.com/checkout.js"
    />
  ]);
};
