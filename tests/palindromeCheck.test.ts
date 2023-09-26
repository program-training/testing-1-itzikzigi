import { describe, expect, test } from "vitest";
import { palindromeCheck } from "../src/palindromeCheck";
describe("palindrome check", () => {
  test("is str palindrome test", () => {
    const str = "A man, a plan, a canal, Panama";
    const result = palindromeCheck(str);
    expect(result).toBeTruthy();
  });
});
