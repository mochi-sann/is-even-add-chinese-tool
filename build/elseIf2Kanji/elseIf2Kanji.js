"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var elseIfNumberPickup_1 = __importDefault(require("../elseIfNumberPickup/elseIfNumberPickup"));
var number2kanji_1 = __importDefault(require("../number2kanji/number2kanji"));
var ElseIf2Kanji = function (value) {
    return number2kanji_1.default(elseIfNumberPickup_1.default(value));
};
exports.default = ElseIf2Kanji;
