# [![eliware.org](https://eliware.org/logos/brand.png)](https://discord.gg/M6aTR9eTwN)

## @eliware/application-template [![npm version](https://img.shields.io/npm/v/@eliware/application-template.svg)](https://www.npmjs.com/package/@eliware/application-template) [![license](https://img.shields.io/github/license/eliware/application-template.svg)](LICENSE) [![CI](https://github.com/eliware/application-template/actions/workflows/ci.yml/badge.svg)](https://github.com/eliware/application-template/actions/workflows/ci.yml)

## Table of Contents

- [Features](#features)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Troubleshooting](#troubleshooting)
- [Security](#security)
- [Configuration](#configuration)
- [Operations](#operations)
- [Support](#support)
- [License](#license)
- [Links](#links)

## Features

Purpose: provide a reusable Node.js application starting point with environment loading, logging, error handling, signal handling, Jest tests, and container packaging.

Package description: A reusable Node.js application baseline for Eliware projects. Author: Eli Sterling, eliware.org <eli@eliware.org>. License: MIT.

The starter has no network listener or external service behavior. Replace its lifecycle module and metadata with the derived application's behavior.

## Requirements

Use Node.js 26 and npm. Docker is required only to build and run the container image.

## Setup

Clone or create a repository from this template, then run `npm ci`. Replace the package name, description, repository URLs, keywords, and application behavior before releasing a derived project. Copy `.env.example` to an untracked `.env` only when local environment settings are needed.

## Usage

Run `node application.mjs` to load `.env`, configure the logger, register process error and signal handlers, and log that the starter has started. The starter does not listen on a port or remain active by itself.

After the first npm release, install the package with `npm install @eliware/application-template`. The package entrypoint is `application.mjs`, which runs with `node application.mjs`. `package.json.version` is the release version source; releases use matching `vMAJOR.MINOR.PATCH` Git tags. Do not treat the npm badge or install command as proof that an unreleased version is available.

## Development

Read [AGENTS.md](AGENTS.md), this README, [specs/README.md](specs/README.md), and [RELEASE_NOTES.md](RELEASE_NOTES.md) before changing the template. `application.mjs` wires runtime dependencies; `src/main.mjs` owns startup and repeatable shutdown behavior, with its mirrored test in `tests/main.test.mjs`.

## Testing

Run `npm test` for Jest with 100% statement, branch, function, and line coverage, lint, format-check, audit, package validation, and applicable profile checks through `eliware-test`. Run `npm run format:check` for read-only formatting validation. CI runs `npm ci` followed by `npm test`.

## Troubleshooting

If startup fails, check that Node.js 26 is installed and that `.env` contains only supported settings. If logs do not use the selected level, confirm `LOG_LEVEL` is a supported value. Run `npm test` to validate the checkout.

## Security

Keep `.env`, credentials, tokens, private keys, and machine-specific values out of version control and container images. Do not log secrets or sensitive payloads. Run derived applications under accounts with only the permissions they need.

## Configuration

There are no required runtime settings. `LOG_LEVEL` is optional, defaults to `info`, and accepts `error`, `warn`, `info`, `http`, `verbose`, `debug`, or `silly`. The process loads `.env` before creating the logger. `package.json` and `.knit/deploy.yaml` are package and deployment metadata, not runtime configuration.

## Operations

Run `node application.mjs` to start; it loads configuration, registers process error and signal handlers, and logs startup. Shutdown runs the repeatable lifecycle hook. Its externally observable workflow is local startup and shutdown; it opens no listener or external connection. Build the container from the repository root with `docker build -t application-template .`. After a GHCR release, pull an exact version using `docker pull ghcr.io/eliware/application-template:<release-tag>`, where `<release-tag>` is `vMAJOR.MINOR.PATCH`. The image is intended to be public after publication. Image publication does not deploy or start an application; any derived service requires its own authorized deployment configuration and handoff. These are the operational boundaries of the starter.

## Support

For help or discussion, join the Eliware community:

[![Discord](https://eliware.org/logos/discord_96.png)](https://discord.gg/M6aTR9eTwN)

**[eliware.org on Discord](https://discord.gg/M6aTR9eTwN)**

## License

[license](LICENSE)

## Links

- Documentation: [docs](docs/README.md) · [specifications](specs/README.md)
- [Canonical repository profile specifications](https://github.com/eliware/test/blob/main/specs/conventions/README.md)
- [Home Page](https://eliware.org)
- [GitHub Repo](https://github.com/eliware/application-template) (`git+https://github.com/eliware/application-template.git`)
- [npm Package](https://www.npmjs.com/package/@eliware/application-template)
- [GitHub Org](https://github.com/eliware)
- [Eli Sterling on GitHub](https://github.com/eli-sterling)
- [Discord](https://discord.gg/M6aTR9eTwN)
- [Release Notes](RELEASE_NOTES.md)
