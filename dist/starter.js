"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lengthCheck_1 = require("./lengthCheck");
const palindromeCheck_1 = require("./palindromeCheck");
const sortArrOfNumbs_1 = __importDefault(require("./sortArrOfNumbs"));
const fetchUserdata_1 = require("./fetchUserdata");
const fibonacci_1 = require("./fibonacci");
const sqrt_1 = require("./sqrt");
const str = "hello world";
const lengthCheck = (0, lengthCheck_1.lenCheck)(str);
// console.log(lengthCheck);
const palindromeCheckFunc = (0, palindromeCheck_1.palindromeCheck)("No lemon no melon");
// console.log(palindromeCheckFunc);
const arr = [4, 567, 9, 563, 23, 74, 21];
const sort = (0, sortArrOfNumbs_1.default)(arr);
// console.log(sort);
const squireRoot = (0, sqrt_1.sqrt)(-9);
// console.log(squireRoot);
const checkFetch = async () => {
    const user = await (0, fetchUserdata_1.fetchUserData)(1);
    return user;
};
// checkFetch()
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err.message));
const array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
const fibonacci = (0, fibonacci_1.fibonacciFunc)(array);
console.log(fibonacci);
