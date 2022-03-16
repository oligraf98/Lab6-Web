"use strict";

require("core-js/modules/es.error.cause.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChangeMode = void 0;

require("core-js/modules/es.object.define-property.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var ChangeMode = /*#__PURE__*/function () {
  function ChangeMode() {
    _classCallCheck(this, ChangeMode);

    this.changeButton = document.getElementById("boton");
  }

  _createClass(ChangeMode, [{
    key: "getMode",
    value: function getMode() {
      return this.changeButton.value;
    }
  }, {
    key: "setMode",
    value: function setMode(str) {
      this.changeButton.value = str;
    }
  }, {
    key: "onClick",
    value: function onClick(cb) {
      this.changeButton.addEventListener("click", cb);
    }
  }]);

  return ChangeMode;
}();

exports.ChangeMode = ChangeMode;
