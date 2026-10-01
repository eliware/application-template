import { expect, jest, test } from "@jest/globals";
import { startApplication } from "../src/main.mjs";

function dependencies() {
  let shutdownHook;
  const log = { info: jest.fn() };
  const createLogger = jest.fn(() => log);
  const registerHandlers = jest.fn();
  const registerSignals = jest.fn((options) => {
    shutdownHook = options.shutdownHook;
  });
  const loadEnvironment = jest.fn();
  return {
    services: { createLogger, registerHandlers, registerSignals, loadEnvironment },
    log,
    shutdownHook: () => shutdownHook,
  };
}

test("loads environment, creates logger, registers handlers and signals, and starts", () => {
  const { services, log, shutdownHook } = dependencies();
  const previousLevel = process.env.LOG_LEVEL;
  delete process.env.LOG_LEVEL;
  const result = startApplication(services);

  expect(services.createLogger).toHaveBeenCalledWith({ level: "info" });
  expect(services.loadEnvironment).toHaveBeenCalledWith({ quiet: true });
  expect(services.registerHandlers).toHaveBeenCalledWith({ log });
  expect(services.registerSignals).toHaveBeenCalledWith({
    log,
    shutdownHook: shutdownHook(),
  });
  expect(log.info).toHaveBeenCalledWith("Application started");
  expect(result.shutdown).toBe(shutdownHook());
  if (previousLevel === undefined) delete process.env.LOG_LEVEL;
  else process.env.LOG_LEVEL = previousLevel;
});

test("uses the configured log level", () => {
  const { services } = dependencies();
  const previousLevel = process.env.LOG_LEVEL;
  process.env.LOG_LEVEL = "debug";

  startApplication(services);

  expect(services.createLogger).toHaveBeenCalledWith({ level: "debug" });
  if (previousLevel === undefined) delete process.env.LOG_LEVEL;
  else process.env.LOG_LEVEL = previousLevel;
});

test("logs shutdown once", () => {
  const { services, log } = dependencies();
  const { shutdown } = startApplication(services);

  shutdown();
  shutdown();

  expect(log.info).toHaveBeenCalledTimes(2);
  expect(log.info).toHaveBeenLastCalledWith("Application stopped");
});
