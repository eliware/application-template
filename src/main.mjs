import { createLogger, registerHandlers, registerSignals } from "@eliware/common";
import { config } from "dotenv";
import { resolveLogLevel } from "./log-level.mjs";
import { createShutdownHook } from "./shutdown.mjs";

export const runtimeDependencies = {
  loadEnvironment: config,
  createLogger,
  registerHandlers,
  registerSignals,
};

export function startApplication({
  loadEnvironment,
  createLogger,
  registerHandlers,
  registerSignals,
}) {
  loadEnvironment({ quiet: true });
  const log = createLogger({ level: resolveLogLevel(process.env.LOG_LEVEL) });
  registerHandlers({ log });
  const shutdown = createShutdownHook(log);
  registerSignals({ log, shutdownHook: shutdown });
  log.info("Application started");
  return { shutdown };
}
