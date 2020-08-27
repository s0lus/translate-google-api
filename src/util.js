"use strict";
const JOIN_WITH = "[]";
Object.defineProperty(exports, "__esModule", { value: true });
function arrayStringify(data) {
    return data.join(`${JOIN_WITH}\n`);
}

exports.arrayStringify = arrayStringify;
function parseMultiple(list) {
    const size = list.length;
    var translateMap = list.map(function (item, index) {
        var text = item[0];
        return text.trim();
    });
    return translateMap.join('').split(JOIN_WITH);
}
exports.parseMultiple = parseMultiple;
