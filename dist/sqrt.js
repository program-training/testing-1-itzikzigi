"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqrt = void 0;
const sqrt = (num) => {
    if (num <= 0)
        return new Error("num must be greater then 0");
    return Math.sqrt(num);
};
exports.sqrt = sqrt;
