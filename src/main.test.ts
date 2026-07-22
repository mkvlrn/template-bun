import { expect, spyOn, test } from "bun:test";

test("should output to console twice", async () => {
  const logSpy = spyOn(console, "log").mockImplementation(() => ({}));

  await import("./main");

  expect(logSpy).toHaveBeenCalledTimes(2);
  expect(logSpy.mock.calls).toEqual([["1 + 2 = 3"], ["10 / 2 = 5"]]);

  logSpy.mockRestore();
});
