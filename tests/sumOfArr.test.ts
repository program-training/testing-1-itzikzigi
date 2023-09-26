import { describe, expect, test } from "vitest";
import { sumOfArr } from "../src/sumOfArr";

describe("sumOfArray test", () => {
  test("sum calculating", () => {
    const arr = [4, 567, 9, 563, 23, 74, 21];
    const res = sumOfArr(arr);
    expect(res).toBe(1261);
  });
  test("sum greater than 10", () => {
    const arr = [4, 567, 9, 563, 23, 74, 21];
    const res = sumOfArr(arr);
    expect(res).greaterThan(10);
  });
});
