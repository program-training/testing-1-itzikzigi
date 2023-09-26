import { lenCheck } from "../src/lengthCheck";
import { describe, expect, test } from "vitest";

describe("func to check the length of string", () => {
  test("len", () => {
    const str = "Hello world";
    const res = lenCheck(str);
    expect(res).toBe(10);
  });
});
