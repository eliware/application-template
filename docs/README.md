# Application guide

Use this guide to create and run an application from this template.

> After you create a repository from this template, replace this document with end-user documentation for your repository.

## Create an application

1. Create a repository from this template.
2. Set the package name, description, URLs, and keywords.
3. Replace the sample lifecycle with the application lifecycle.
4. Keep each source module focused on one task.
5. Add one test file for each source module.

## Install and start

Install Node.js 26 or later and npm 12 or later. Run `npm ci` from the repository root.

Run `node bin/application-template.mjs` to start the sample. It loads `.env`, creates the logger, and registers process error handlers and shutdown signal handlers. It does not open a network listener.

## Settings and shutdown

The sample has no required settings. Set `LOG_LEVEL` to `error`, `warn`, `info`, `http`, `verbose`, `debug`, or `silly`. The default is `info`.

The application checks `LOG_LEVEL` before it creates the logger. If the value is not listed, startup throws a `TypeError` and does not add process handlers.

Copy `.env.example` to `.env` only when local settings are needed. Keep `.env` out of Git.

The application adds process error handlers and shutdown signal handlers. The shutdown function logs the stop message once. Later calls do not write the message again. Keep shutdown behavior in `src/shutdown.mjs` and test repeated calls.

## Build and deploy

Build a local image with `docker build -t application-template .`.

> **Template setup — update these values after you create an application repository.**
>
> This template has no published image. Set the image visibility, pull access, and supported architectures. The workflow builds `linux/amd64`. Name the owner for build inputs and architecture decisions. Update the README and publication workflow before you publish an image.

Use a released version tag and its recorded SHA-256 digest for deployment. Image publication does not deploy the application. Use the approved deployment process for each derived application.

## Validate

Run `npm test` before handoff. It runs tests, lint, formatting, audit, package checks, and profile checks.
