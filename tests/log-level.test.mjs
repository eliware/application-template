import { expect, test } from "@jest/globals";
import { resolveLogLevel } from "../src/log-level.mjs";

test("defaults to info when LOG_LEVEL is not set", () => {
  expect(resolveLogLevel(undefined)).toBe("info");
});

test.each(["error", "warn", "info", "http", "verbose", "debug", "silly"])(
  "accepts the %s log level",
  (value) => {
    expect(resolveLogLevel(value)).toBe(value);
  },
);

test("rejects unsupported log levels", () => {
  expect(() => resolveLogLevel("trace")).toThrow(
    new TypeError("LOG_LEVEL must be one of: error, warn, info, http, verbose, debug, silly"),
  );
});
