"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = React.createClass({
  displayName: "pruebaReact",
  getInitialState: function getInitialState() {
    return {
      num: this.getRandomNumber()
    };
  },
  getRandomNumber: function getRandomNumber() {
    return Math.ceil(Math.random() * 6);
  },
  render: function render() {
    return /*#__PURE__*/React.createElement("div", null, "Your dice roll:", this.state.num);
  }
});

exports.default = _default;
