# gatsby-plugin-stripe-checkout

A simple plugin that adds the [Stripe Checkout JavaScript file](https://stripe.com/docs/checkout#integration-custom) to every page of your Gatsby site.

An example project using this plugin is [Unicorn Mart](https://unicorn-mart.netlify.com).

## How to use

1. Install using either npm or yarn:

```
yarn add gatsby-plugin-stripe-checkout
// or
npm install gatsby-plugin-stripe-checkout
```

2. Add to ```gatsby-config.js```

```javascript
module.exports = {
  plugins: [
    `gatsby-plugin-stripe-checkout`,
  ]
}
```