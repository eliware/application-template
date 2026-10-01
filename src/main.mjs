import { createLogger, registerHandlers, registerSignals } from "@eliware/common";
import { config } from "dotenv";

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
  const log = createLogger({ level: process.env.LOG_LEVEL ?? "info" });
  registerHandlers({ log });
  let stopped = false;
  const shutdown = () => {
    if (stopped) return;
    stopped = true;
    log.info("Application stopped");
  };
  registerSignals({ log, shutdownHook: shutdown });
  log.info("Application started");
  return { shutdown };
}
