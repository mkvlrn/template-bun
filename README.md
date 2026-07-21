# template-bun

![build](https://img.shields.io/github/actions/workflow/status/mkvlrn/template-bun/checks.yml?branch=main&style=flat&logo=github)
[![template](https://img.shields.io/badge/template-use_this_template-2ea44f?style=flat&logo=github)](https://github.com/mkvlrn/template-bun/generate)
[![mise](https://mise-versions.jdx.dev/badge.svg)](https://mise.jdx.dev)
![license](https://img.shields.io/github/license/mkvlrn/template-bun?style=flat)

A sane, opinionated bun template.

> [!NOTE]
> This template provides a [mise](https://mise.jdx.dev) configuration to make it easy to keep bun versions in sync.

Uses, among other tools/packages:

- [biome](https://github.com/biomejs/biome) for code linting and formatting
- [lefthook](https://github.com/evilmartians/lefthook) for git hooks
- [commitlint](https://github.com/conventional-changelog/commitlint) for commit message linting

## requirements and dependencies

If you use [mise](https://mise.jdx.dev) and run `mise install` in the project root, you'll have the correct bun version installed.

This is _by far_ the easiest way to keep your environment consistent across different machines and team members, no matter the frequency of version updates. I'm not affiliated with mise but I wholeheartedly recommend it, so check it here: https://mise.jdx.dev.

If not using mise, make sure you have:

- bun 1.3+ installed

Then, install dependencies with:

```bash
bun install
```

> [!NOTE]
> Git hooks are in place to make sure both the tooling managed by mise and the project dependencies are synced with each checkout and merge.

## running

### `bun dev`

Runs the project in watch mode.

### `bun start`

Runs the project.

### `bun test`

Runs tests.

### `bun biome-fix`

Runs biome in fix mode to lint and format the project.

### `bun typecheck`

Runs type checking using tsc.

## ci

This repository uses GitHub Actions for CI. The workflow is defined in `.github/workflows/checks.yml`.

It automates:

- **Linting & Formatting**: Running Biome.
- **Type Checking**: Running TypeScript type checking.
- **Testing**: Running Bun test with code coverage.

## vscode

You might want to install the recommended extensions in vscode. Search for **@recommended** in the extensions tab, they'll show up as _"workspace recommendations"_.

If you have been using eslint and prettier and their extensions, you might want to disable eslint entirely and keep prettier as the formatter only for certain types of files.

This is done by the `.vscode/settings.json` file.

Debug configuration is also included for running the source directly with node.

## license

MIT
