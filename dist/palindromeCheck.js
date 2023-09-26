"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.palindromeCheck = void 0;
const palindromeCheck = (str) => {
    str = str.trim().toLowerCase();
    const strToCompare = str.split("").join("");
    return str === strToCompare;
};
exports.palindromeCheck = palindromeCheck;
