"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var elseIf2Kanji_1 = __importDefault(require("../elseIf2Kanji/elseIf2Kanji"));
var Elseif2withKanji = function (value) {
    var splitValue = value.trim().split(" ");
    var KanjiNumber = elseIf2Kanji_1.default(value);
    var ReturnValue = splitValue.map(function (value, key) {
        if (key === 8) {
            return value + (" number === \"" + KanjiNumber + "\" ||");
        }
        else {
            return value;
        }
    });
    return ReturnValue.join(" ");
};
exports.default = Elseif2withKanji;
