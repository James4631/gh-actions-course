# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository purpose

This is a personal learning repository for working through a GitHub Actions course. It contains no application code — only GitHub Actions workflow YAML files used as hands-on exercises. There is no build system, package manager, linter, or test suite to run.

## Structure

- `.github/workflows/` — one YAML file per course lesson, numbered in lesson order (`01-building-blocks.yaml`, `02-workflow-events.yaml`, `03-workflow_runners.yaml`, ...). Each file is a self-contained exercise exploring one GitHub Actions concept (jobs/steps basics, trigger events, runners, using marketplace actions, etc.).
- `README.md` — placeholder, not authoritative documentation.

## Working in this repo

- Changes are made directly to the numbered workflow files under `.github/workflows/`; there's no separate source to build from.
- Workflows only take effect once pushed to GitHub (Actions runs in the cloud), so YAML syntax correctness matters more than in a repo with local test coverage — validate indentation and keys carefully (e.g. `jobs:` vs a stray `job:`) since there's no local linter to catch mistakes.
- When editing a lesson file, preserve its role as a minimal example of the specific concept it demonstrates rather than expanding it into a general-purpose pipeline.
- New lessons should follow the existing `NN-topic-name.yaml` numbering/naming convention.
