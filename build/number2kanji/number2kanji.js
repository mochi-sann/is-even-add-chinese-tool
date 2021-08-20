"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 数値を漢数字表記に変換
 * @param  {String|Number} num - 半角数字
 * @return {String} 漢数字表記
 * @throws {TypeError} 半角数字以外の文字が含まれている場合
 * @throws {RangeError} 数値が Number.MIN_SAFE_INTEGER ～ Number.MAX_SAFE_INTEGER の範囲外の場合
 */
var NumbersToKanji = function (num) {
    if (num === undefined || num === null || num === "") {
        return "";
    }
    num = Number(num);
    if (!Number.isSafeInteger(num)) {
        throw new RangeError("数値が " +
            Number.MIN_SAFE_INTEGER +
            " ～ " +
            Number.MAX_SAFE_INTEGER +
            " の範囲外です。漢数字に変換できませんでした。-> " +
            num);
    }
    if (num === 0) {
        return "零";
    }
    var ret = "";
    if (num < 0) {
        ret += "マイナス";
        num *= -1;
    }
    var numStr = num + "";
    var kanjiNums = ["", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    var kanjiNames = [
        "十",
        "百",
        "千",
        "万",
        "億",
        "兆",
        "京",
        "垓",
        "𥝱",
        "穣",
        "溝",
        "澗",
        "正",
        "載",
        "極",
        "恒河沙",
        "阿僧祇",
        "那由他",
        "不可思議",
        "無量大数",
    ];
    var exponents = [
        1, 2, 3, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 68,
    ];
    var exponentsLen = exponents.length;
    for (var i = exponentsLen; i >= 0; --i) {
        var bias = Math.pow(10, exponents[i]);
        if (num >= bias) {
            var top = Math.floor(num / bias);
            if (top >= 10) {
                ret += NumbersToKanji(top);
            }
            else {
                if (top == 1 && exponents[i] <= 3) {
                    // ※先頭の数字が1、かつ指数が3 (千の位) 以下の場合のみ『一』をつけない
                }
                else {
                    ret += kanjiNums[top];
                }
            }
            ret += kanjiNames[i];
            num -= top * bias;
        }
    }
    ret += kanjiNums[num];
    return ret;
};
exports.default = NumbersToKanji;
