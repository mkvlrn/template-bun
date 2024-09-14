import { describe, expect, spyOn, test } from "bun:test";

describe("main", () => {
  test("should log the result to stdout", async () => {
    const consoleLogSpy = spyOn(console, "log").mockImplementation(() => ({}));

    await import("~/main");

    expect(consoleLogSpy).toHaveBeenCalledWith(4);
  });
});
