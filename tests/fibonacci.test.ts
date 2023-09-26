import { describe, expect, test } from "vitest";
import { fibonacciFunc } from "../src/fibonacci";

describe("is array a fibonacci sequence", () => {
  test("test if array is fibonacci sequence", () => {
    const array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
    expect(fibonacciFunc(array)).toEqual(55);
  });
  test("test if error thrown while is not a fibonacci sequence", () => {
    const array = [0, 1, 1, 2, 3, 5, 8, 21, 34];

    expect(fibonacciFunc(array)).toBe("not a fibonacci sequence");
  });
});
