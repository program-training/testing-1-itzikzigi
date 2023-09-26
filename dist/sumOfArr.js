"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumOfArr = void 0;
const sumOfArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};
exports.sumOfArr = sumOfArr;
