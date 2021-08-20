"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var even_1 = require("./even");
console.log('hogehoge' + even_1.Value);
var fs_1 = __importDefault(require("fs"));
//readstreamを作成
var rs = fs_1.default.createReadStream('./input.csv');
//writestreamを作成
var ws = fs_1.default.createWriteStream('./output.csv');
