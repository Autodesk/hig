# Developing

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project structure](#project-structure)
  - [Monorepo](#monorepo)
  - [Private packages](#private-packages)
- [Code style](#code-style)
- [Testing](#testing)
  - [Unit testing](#unit-testing)
    - [How it works](#how-it-works)
    - [How to run manually](#how-to-run-manually)
  - [Visual regression testing](#visual-regression-testing)
    - [How it works](#how-it-works-1)
    - [How to run manually](#how-to-run-manually-1)
- [Git commits](#git-commits)
- [Package versioning](#package-versioning)
- [Deployment](#deployment)
  - [How to deploy](#how-to-deploy)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Prerequisites

The following dependencies must be available to be begin project development.

* [Unix-like][] operating system _— Windows Subsystem for Linux _should_ also work_
* [Git][]
* [Node][] `>=9.7.1`
* [Yarn][] `>=1.5.1`
* [Python][] `^2.7` _— Some dependencies require `node-gyp` which uses Python_

[Git]: https://git-scm.com/
[Node]: https://nodejs.org
[Python]: https://www.python.org
[Unix-like]: https://en.wikipedia.org/wiki/Unix-like
[Yarn]: https://yarnpkg.com

## Getting Started

To get set up, run the following commands:

```bash
git clone https://github.com/Autodesk/hig
cd hig
yarn
yarn build
```

## Project structure

### Monorepo

This project is structured as a [monorepo][], with each package residing within its own directory.

The monorepo uses [Yarn workspaces][] and [Lerna][] to manage the interdependencies between packages.

[Lerna]: https://lernajs.io/
[monorepo]: https://github.com/babel/babel/blob/master/doc/design/monorepo.md
[Yarn workspaces]: https://yarnpkg.com/lang/en/docs/workspaces/

### Private packages

Private packages are used to organize development tools and dependencies. For example, the [`@hig/scripts`][hig-scripts] package contains the build script that's used to build every component package.

[hig-scripts]: ./packages/scripts

## Code style

We use [ESLint][] and [Prettier][] to ensure consistency throughout the source code. Please view our [ESLint configuration][] for details on style rules.

[ESLint]: https://eslint.org/
[ESLint configuration]: ./packages/eslint-config
[Prettier]: https://prettier.io/

## Testing

### Unit testing

[Jest][] along with [Enzyme][] is used to run our unit testing suite. While we aim for the highest possible code coverage, every component should be covered with a [snapshot test][] at the very least.

[Enzyme]: http://airbnb.io/enzyme/
[Jest]: http://jestjs.io/
[snapshot test]: http://jestjs.io/docs/en/snapshot-testing.html

#### How it works

Unit tests reside within module specifications (`moduleName.test.js`), which are placed next to their respective modules. Jest runs all of the project's unit tests together, and evaluates code coverage on the project as a whole.

#### How to run manually

```bash
yarn test
```

### Visual regression testing

To ensure that changes do not break the visual presentation of components, we run a suite of visual regression tests via [Gemini][].

[Gemini]: https://gemini-testing.github.io/

#### How it works

The tests are run upon a Storybook developed specifically for automated testing. Screenshots of each test are stored within the repository similar to unit test snapshots.

#### How to run manually

```bash
cd packages/storybook
yarn gemini-update  # Update snapshots
yarn gemini         # Check components against committed snapshots
```

## Git commits

Commit messages should adhere to the [Angular Git Commit Guidelines][].

## Package versioning

Package versioning is automated via [Semantic Release][] and determined by commit messages. Commit messages should adhere to [Angular Git Commit Guidelines][].

[Angular Git Commit Guidelines]: https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines
[Semantic Release]: https://github.com/semantic-release/semantic-release

## Deployment

Packages are published via [Semantic Release][].

### How to deploy

1. Create a pull request (PR) to merge `development` into `master`.
1. Wait for the PR to receive approval and all automation to finish.
1. Merge the PR with a **merge commit**
    * Merging with a merge commit ensures there's no loss of commit information.

_Semantic Release will then:_

1. Create new Git tags
1. Create/update changelogs
1. Publish new package versions to NPM
1. Update the `master` branch
1. Create GitHub releases
1. Merge all changes into the `development` branch