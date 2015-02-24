"use strict";

var curry2 = require("fj-curry").curry2;


var map = function (fn, list) {
    var index = -1,
        listLen = list.length,
        result = new Array(listLen);

    while (++index < listLen) {
        result[index] = fn(list[index]);
    }

    return result;
};

module.exports = curry2(map);