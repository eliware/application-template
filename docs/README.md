# Application guide

Use this guide to create and run an application from this template.

## Create an application

1. Create a repository from this template.
2. Set the package name, description, URLs, and keywords.
3. Replace the sample lifecycle with the application lifecycle.
4. Keep each source module focused on one task.
5. Add one test file for each source module.

## Install and start

Install Node.js 26 or later and npm 12 or later. Run `npm ci` from the repository root.

Run `node bin/application-template.mjs` to start the sample. It loads `.env`, creates the logger, and registers process handlers. It does not open a network listener.

## Settings and shutdown

The sample has no required settings. Set `LOG_LEVEL` to `error`, `warn`, `info`, `http`, `verbose`, `debug`, or `silly`. The default is `info`.

Copy `.env.example` to `.env` only when local settings are needed. Keep `.env` out of Git.

The process handles errors and shutdown signals. Keep shutdown behavior in `src/main.mjs`. Test repeated shutdown calls.

## Build and deploy

Build the image with `docker build -t application-template .`. The GHCR image is `ghcr.io/eliware/application-template`.

Use a released version tag and its recorded SHA-256 digest for deployment. Image publication does not deploy the application. Use the authorized deployment process for each derived service.

## Validate

Run `npm test` before handoff. It runs tests, lint, formatting, audit, package checks, and profile checks.
