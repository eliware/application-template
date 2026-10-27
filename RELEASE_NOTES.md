# Release Notes

## 15.0.1 — 2026-10-26

### Changed

- Update the application version to 15.0.1.
- Upgrade `@eliware/common` and `@eliware/test` to 15.0.1.
- Update npm dependencies and refresh the lockfile.
- Update the GHCR pull command to v15.0.1.
- Document the published starter image and its scaffolding purpose in the README and user guide. Direct derived applications to publish their own images.
- Document public image visibility, runner-selected `linux/amd64`, template build ownership, and derived-only deployment guidance.

## 15.0.0 — 2026-10-24

### Added

- Add a focused module and mirrored tests for log-level validation.
- Add a focused shutdown module and mirrored tests for repeatable shutdown.
- Document startup, configuration validation, shutdown behavior, and deployment steps.

### Changed

- Align package metadata, repository directives, documentation, and workflows with the 15.0 conventions.
- Upgrade `@eliware/common` and `@eliware/test` to 15.0.0 and update all npm dependencies.
- Replace the legacy container publication workflow with the canonical GHCR workflow.
- Update CI to use the current checkout action and full Git history.
- Align deployment automation with the shared pull, install, and test commands.
- Document focused test commands and mark template documentation for replacement.
- Clarify that the GHCR workflow does not set a target architecture.
- Run application startup tests faster.

### Fixed

- Reject unsupported `LOG_LEVEL` values before logger creation and document this startup failure.
- Make repeated shutdown calls log the stop message only once.

## 12.0.0 — 2026-10-12

### Changed

- Align package metadata, documentation, and validation with v12 conventions.
- Use current shared packages and workflows for container publication and validation.
- Document application setup, runtime settings, shutdown, and image deployment.
- Keep image publication separate from deployment.

## 11.0.0 — 2026-10-03

### Changed

- Align repository metadata, documentation, specifications, and workflows with the v11 conventions.
