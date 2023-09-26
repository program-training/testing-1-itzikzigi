import { describe, expect, test } from "vitest";
import { sqrt } from "../src/sqrt";

describe("is number has squire root", () => {
  test("if the number has root", () => {
    const res = sqrt(64);
    expect(res).toBeLessThanOrEqual(8);
  });
  test("if gets error while number lower than 0", () => {
    expect(sqrt(-89)).instanceOf(Error);
  });
});
