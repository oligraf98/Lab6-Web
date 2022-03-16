"use strict";

require("core-js/modules/es.object.define-property.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.run = void 0;

var run = function run(changeMode) {
  changeMode.onClick(function () {
    var element = document.body;
    element.classList.toggle("dark-mode");
  });
};

exports.run = run;
