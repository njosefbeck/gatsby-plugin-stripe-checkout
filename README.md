# gatsby-plugin-stripe-checkout

A simple plugin that adds the [Stripe Checkout JavaScript file](https://stripe.com/docs/checkout#integration-custom) to every page of your Gatsby site.

**If you're using the new version of Stripe Checkout, which is recommended, use [gatsby-plugin-stripe](https://github.com/njosefbeck/gatsby-plugin-stripe) instead.**

The Stripe Team said:

> We released a new version of Checkout in April 2019 which supports card payments, Apple Pay and Dynamic 3D Secure. The legacy version of Checkout can still be used to accept payments, but is no longer in active development and does not support the upcoming European Strong Customer Authentication regulation.

Use cases include:

* Create an e-commerce store where you bring in your products and skus via [gatsby-source-stripe](https://github.com/njosefbeck/gatsby-source-stripe) and then use Stripe Checkout to handle user purchases. Note that currently when using Stripe Checkout you will need to also have a backend process for handling payments (AWS Lambda or clay.run are good options here). (This is not the case if you're using the new Stripe Checkout with gatsby-plugin-stripe.)

If you want more control over the checkout experience, it's recommended that you use [Stripe Elements](https://stripe.com/payments/elements) instead of Stripe Checkout. For integrating Stripe Elements into your Gatsby site, use [gatsby-plugin-stripe](https://github.com/njosefbeck/gatsby-plugin-stripe).

An example project using this plugin is [Unicorn Mart](https://unicorn-mart.netlify.com).

## How to use

1. Install using either npm or yarn:

```
yarn add gatsby-plugin-stripe-checkout
```

or

```
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

To load the `<script>` tag asyncronously, pass an 'async' option in `gatsby-config.js`.

```javascript
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-stripe-checkout`,
      options: {
        async: true,
      },
    },
  ],
}
```
