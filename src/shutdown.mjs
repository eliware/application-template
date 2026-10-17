export function createShutdownHook(log) {
  let stopped = false;

  return () => {
    if (stopped) return;
    stopped = true;
    log.info("Application stopped");
  };
}
