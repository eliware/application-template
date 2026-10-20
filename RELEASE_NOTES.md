# Release Notes

## 14.0.0 — 2026-10-20

### Changed

- Align package metadata, repository specifications, and workflows with the 14.0.0 conventions.
- Update `@eliware/common` to version 13.0.0.
- Replace the legacy GHCR workflow with the canonical tag-only publication workflow.
- Validate release tags, create image attestations, and verify published image digests.
- Update CI to use current GitHub Actions and fetch complete Git history.
- Align the deployment workflow with the shared command sequence.
- Move shutdown handling into a focused module and make repeated shutdown calls safe.
- Validate `LOG_LEVEL` before the application creates its logger.
- Add focused tests for application startup, shutdown, and log-level settings.
- Document application setup, configuration, startup, shutdown, and image deployment.
- Mark template guidance for replacement after users create an application repository.
- Complete the README troubleshooting section and the AGENTS.md changes section.
- Update package metadata and dependency locks for this release.

## 12.0.0 — 2026-10-12

### Changed

- Align package metadata, documentation, and validation with v12 conventions.
- Use current shared packages and workflows for container publication and validation.
- Document application setup, runtime settings, shutdown, and image deployment.
- Keep image publication separate from deployment.

## 11.0.0 — 2026-10-03

### Changed

- Align repository metadata, documentation, specifications, and workflows with the v11 conventions.
