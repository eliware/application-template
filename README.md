# [![eliware.org](https://eliware.org/logos/brand.png)](https://discord.gg/M6aTR9eTwN)

## @eliware/application-template [![License](https://img.shields.io/github/license/eliware/application-template)](https://github.com/eliware/application-template/blob/main/LICENSE) [![CI](https://github.com/eliware/application-template/actions/workflows/ci.yaml/badge.svg)](https://github.com/eliware/application-template/actions/workflows/ci.yaml)

A Node.js application starting point for Eliware projects.

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
- [Links](#links)
- [License](#license)

## Features

This template starts Node.js applications. Each derived application owns its behavior and operating decisions.

## Requirements

Use Node.js 26 or later and npm 12 or later for repository validation.

## Setup

Create a repository from this template. Replace the template name, description, URLs, keywords, and sample content.
Run `npm ci` from the repository root.

## Usage

Follow this README and the [user guide](docs/README.md). Read [release notes](RELEASE_NOTES.md) for release history.

## Development

Read [AGENTS.md](AGENTS.md) and [the specifications index](specs/README.md) before you change files.
Keep documents and records in the repository that owns them.

## Testing

Run `npm test` before handoff. It runs the repository checks through `eliware-test`.

## Troubleshooting

Install the required Node.js and npm versions. Run `npm ci` after dependency changes.
For each validation error, examine the named file and rule.

## Security

Keep credentials, secrets, private data, and runtime state out of Git.
Use only approved secret stores for secret values.

## Configuration

The sample has no required settings. `LOG_LEVEL` defaults to `info`.
Set `LOG_LEVEL` to `error`, `warn`, `info`, `http`, `verbose`, `debug`, or `silly`. Copy `.env.example` to an untracked `.env` file for local settings.

## Operations

Run `node bin/application-template.mjs` to start the sample. It loads settings and registers process handlers. It does not open a listener.
Build a local image with `docker build -t application-template .`.

> **Template setup — update these values after you create an application repository.**
>
> This template has no published image. Set the image visibility to public or private. Set who can pull it.
>
> The workflow builds `linux/amd64`. If the application uses other architectures, update the workflow. Name the owner for build inputs and architecture decisions. Update this section and the publication workflow before you publish an image.

Deploy with an approved version tag and its recorded SHA-256 digest. Publication does not deploy the application.

## Support

For help, questions, or to chat with the author and community, visit:

[![Discord](https://eliware.org/logos/discord_96.png)](https://discord.gg/M6aTR9eTwN)[![eliware.org](https://eliware.org/logos/eliware_96.png)](https://discord.gg/M6aTR9eTwN)

**[eliware.org on Discord](https://discord.gg/M6aTR9eTwN)**

## Links

- [Home Page](https://eliware.org)
- [GitHub Org](https://github.com/eliware)
- [GitHub Repo](https://github.com/eliware/application-template)
- [Bug Reports](https://github.com/eliware/application-template/issues)
- [Discord](https://discord.gg/M6aTR9eTwN)

## License

[MIT © Eliware](LICENSE)
