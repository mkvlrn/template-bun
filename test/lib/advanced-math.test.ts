import { describe, expect, it } from "bun:test";
import { divide, multiply } from "~/lib/advanced-math";

describe("advanced math", () => {
  describe("multiply", () => {
    it("should multiply two numbers", () => {
      const twoTimesTwo = multiply(2, 2);
      const twoTimesThree = multiply(2, 3);

      expect(twoTimesTwo).toBe(4);
      expect(twoTimesThree).not.toBe(4);
    });
  });

  describe("divide", () => {
    it("should divide two numbers", () => {
      const twoDividedByTwo = divide(2, 2);
      const twoDividedByThree = divide(2, 3);
      const divideByZero = () => divide(10, 0);

      expect(twoDividedByTwo).toBe(1);
      expect(twoDividedByThree).not.toBe(1);
      expect(divideByZero).toThrow("Division by zero");
    });

    it("should throw on divide by zero", () => {
      const divideByZero = () => divide(10, 0);

      expect(divideByZero).toThrow("Division by zero");
    });
  });
});
