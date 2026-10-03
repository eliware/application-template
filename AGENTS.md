# AGENTS.md

## Project

Repository: `eliware/application-template`. Purpose: provide a reusable Node.js application baseline for Eliware projects.

## Scope and boundaries

Scope: this repository owns the starter application, its tests, package metadata, container definition, and local deployment configuration. It does not own shared Eliware requirements, production credentials, or production release and deployment execution. This AGENTS.md applies repository-wide; nearer AGENTS.md instructions apply within their subdirectories.

## Layout

Required structure: `bin/application-template.mjs` is the executable entrypoint. `src/` contains application implementation and `tests/` mirrors it. `docs/` contains end-user documentation; `specs/` contains repository-specific directives. `Dockerfile` defines the GHCR image and `.knit/deploy.yaml` defines the development deployment commands.

## Development

Before changing files, read the root README.md, applicable AGENTS.md instructions, applicable documentation, and applicable specifications.

This Development guidance applies repository-wide; nearer AGENTS.md instructions apply within subdirectories. Use Node.js 26, npm, and native ESM `.mjs` modules. Read README.md, AGENTS.md, applicable specifications, implementation, and tests before changing files. Every source and test module must have a single responsibility: one cohesive purpose and one reason to change. Business-logic modules and coordinators are valid, including coordinators of coordinators, when each module does only its own responsibility. When a change introduces a distinct responsibility, create a focused submodule and mirrored test and wire it through its owner; do not add the new responsibility to an existing module. During ordinary review, refactor them when you notice mixed responsibilities. Passing the 100-line source and 200-line test maxima does not prove a module is cohesive or permit mixed responsibilities. The maxima are blocking; passing them does not prove a module has one responsibility.

Keep each `.mjs` under `src/` mirrored by exactly one `.test.mjs` under `tests/`; do not add unmatched test files. Keep application-specific tests at the lowest module level that proves their behavior.

## Validation

Use Node.js 26. Run `npm ci` after dependency changes and `npm test` before handoff. Aggregate validation runs Jest with 100% statement, branch, function, and line coverage, lint, format-check, audit, package validation, and applicable profile checks through `eliware-test`. Use `npm run lint`, `npm run format`, `npm run format:check`, `npm run audit`, or `npm run pack` for targeted stages. CI runs `npm ci` followed by `npm test`.

## Security

Keep `.env`, credentials, tokens, private keys, and machine-specific values out of version control and container images. Configure secrets through an untracked `.env` file or an authorized secret store. Do not log secrets or sensitive payloads.

## Changes

Keep changes actionable, current, and concise. Project-specific requirements may add to shared requirements but must not weaken them. No deviation waives a convention ID or validation stage. Do not publish, release, deploy, or modify external systems without explicit authorization through the applicable Operations handoff.

## Application

The executable entrypoint is `bin/application-template.mjs`; implementation is under `src/`. Startup loads `.env`, creates the logger from `LOG_LEVEL`, registers process error and signal handlers, and makes shutdown repeatable. `LOG_LEVEL` is optional, defaults to `info`, and accepts `error`, `warn`, `info`, `http`, `verbose`, `debug`, or `silly`. Safe operational boundary: the starter opens no connections, has no network listener, and performs no external operations. Runtime settings are environment variables only; `package.json` and `.knit/deploy.yaml` are metadata, not runtime configuration.

## npm publication

Package identity: @eliware/application-template. Version source: package.json.version. The exact package.json.files allowlist is src/, docs/, README.md, AGENTS.md, LICENSE, RELEASE_NOTES.md, bin/. Pack validation command: eliware-test --pack (also npm run pack). Pack validation result: require pass before release. npm provenance mechanism: npm Trusted Publishing with provenance. Exact-version public npm registry verification: verify the exact package.json version for @eliware/application-template at registry.npmjs.org. Release approval and execution ownership: Eli and the project developer run TagIt preflight; Eli decides readiness and instructs DevOps; DevOps executes the authorized release. Release authorization and handoff: publication requires explicit authorization through the Operations release handoff; this section grants no permission.

## GHCR publication

Image visibility is public after publication. The image name is `ghcr.io/eliware/application-template`, built from the repository-root `Dockerfile` and build context. `.github/workflows/publish.yaml` publishes the exact `vMAJOR.MINOR.PATCH` image tag after validation, creates a signed GitHub artifact attestation, verifies the pushed digest and attestation, and records release handoff evidence. Registry credentials use the workflow's GitHub token; no static registry credential is stored. Publication does not deploy the image; deployment requires a separate authorized GitOps handoff.
