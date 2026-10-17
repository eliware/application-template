import { expect, jest, test } from "@jest/globals";
import { createShutdownHook } from "../src/shutdown.mjs";

test("logs shutdown once", () => {
  const log = { info: jest.fn() };
  const shutdown = createShutdownHook(log);

  shutdown();
  shutdown();

  expect(log.info).toHaveBeenCalledTimes(1);
  expect(log.info).toHaveBeenCalledWith("Application stopped");
});
