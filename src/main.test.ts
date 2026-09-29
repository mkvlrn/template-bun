import { describe, expect, spyOn, test } from "bun:test";
import { main } from "#/main";

describe("main", () => {
  test("should output the calculation result", () => {
    const logSpy = spyOn(console, "log").mockImplementation(() => ({}));

    main(["bun", "src/main.ts", "2 + 2"]);

    expect(logSpy.mock.calls).toEqual([["Calculating: 2 + 2"], ["Result: 4"]]);

    logSpy.mockRestore();
  });

  test("should output an error for an invalid expression", () => {
    const errorSpy = spyOn(console, "error").mockImplementation(() => ({}));

    main(["bun", "src/main.ts", "2 +"]);

    expect(errorSpy).toHaveBeenCalledWith("Error: Invalid expression: 2 +");

    errorSpy.mockRestore();
  });
});
