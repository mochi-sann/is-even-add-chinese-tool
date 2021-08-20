"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ElseIfNumberPickup = function (value) {
    var ReturnValue = value.trim().split(" ");
    return Number(ReturnValue[3]);
};
exports.default = ElseIfNumberPickup;
