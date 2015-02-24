"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var assert = _interopRequire(require("assert"));

var map = _interopRequire(require("./"));

var double = function (x) {
  return x * 2;
};

it("fj-map", function () {
  assert.deepEqual(map(double, [1, 2, 3]), [2, 4, 6]);
  var doubler = map(double);
  assert.deepEqual(doubler([1, 2, 3]), [2, 4, 6]);
});