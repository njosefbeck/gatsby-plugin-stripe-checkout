"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, options) {
  var setPostBodyComponents = _ref.setPostBodyComponents;

  var script = null;
  if (options.async) {
    script = _react2.default.createElement("script", { key: "gatsby-plugin-stripe-checkout", src: "https://checkout.stripe.com/checkout.js", async: true });
  } else {
    script = _react2.default.createElement("script", { key: "gatsby-plugin-stripe-checkout", src: "https://checkout.stripe.com/checkout.js" });
  }
  return setPostBodyComponents([script]);
};