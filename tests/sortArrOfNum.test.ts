import { describe, expect, test } from "vitest";
import sort from "../src/sortArrOfNumbs";
describe("sort", () => {
  test("sort", () => {
    const arr = [567, 9, 563, 4, 23, 74, 21];
    const res = sort(arr);
    expect(res).toEqual([4, 9, 21, 23, 74, 563, 567]);
  });
});
