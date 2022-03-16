"use strict";

var _app = require("./app.js");

var _changeDarkmode = require("./changeDarkmode.js");

require("./main.scss");

var changeMode = new _changeDarkmode.ChangeMode();
(0, _app.run)(changeMode);
