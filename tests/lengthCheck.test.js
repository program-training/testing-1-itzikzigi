"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lengthCheck_1 = require("../src/lengthCheck");
const vitest_1 = require("vitest");
(0, vitest_1.describe)("func to check the length of string", () => {
    (0, vitest_1.test)("len", () => {
        const str = "Hello world";
        const res = (0, lengthCheck_1.lenCheck)(str);
        (0, vitest_1.expect)(res).toBe(10);
    });
});
