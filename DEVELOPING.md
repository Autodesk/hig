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
    - [How to update snapshots](#how-to-update-snapshots)
  - [Visual regression testing](#visual-regression-testing)
    - [How it works](#how-it-works-1)
    - [How to run manually](#how-to-run-manually-1)
- [Git commits](#git-commits)
- [Package versioning](#package-versioning)
  - [New package version](#new-package-version)
  - [Creating pre-releases](#creating-pre-releases)
    - [For controlling release of breaking changes](#for-controlling-release-of-breaking-changes)
    - [Other uses](#other-uses)
- [Deployment](#deployment)
  - [Storybook](#storybook)
  - [Packages](#packages)
    - [New packages](#new-packages)
    - [Pre-releases](#pre-releases)
  - [How to deploy](#how-to-deploy)
  - [Configuring Semantic Release to deploy a package](#configuring-semantic-release-to-deploy-a-package)
- [Documentation](#documentation)
  - [Updating table of contents](#updating-table-of-contents)
- [How to fix an old release](#how-to-fix-an-old-release)
  - [Steps](#steps)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Prerequisites

The following dependencies must be available to be begin project development.

* [Unix-like][] operating system _— [Windows Subsystem for Linux][] also works_
* [Git][]
* [Node][] `^12` (higher versions are not yet supported)
* [Yarn][] `>=1.5.1`
* [Python][] `^2.7` _— Some dependencies require `node-gyp` which uses Python_
* [Additional instruction for Windows](WindowsSetup.md)

[Git]: https://git-scm.com/
[Node]: https://nodejs.org
[Python]: https://www.python.org
[Unix-like]: https://en.wikipedia.org/wiki/Unix-like
[Yarn]: https://yarnpkg.com
[Windows Subsystem for Linux]: https://docs.microsoft.com/en-us/windows/wsl/about

## Getting Started

For internal Autodesk folks, make sure to be _off_ the company VPN while setting up and developing.

To get set up, run the following commands:

```bash
git clone https://github.com/Autodesk/hig
cd hig
yarn
yarn build
```

If you see an error about `#!/usr/bin/env: No such file or directory`, there is likely an issue with conflicting `LF` and `CF/LF` line endings. Do a search for `/usr/bin/env` and convert any found files to use `LF` line endings.

## Project structure

### Monorepo

This project is structured as a [monorepo][], with each package residing within its own directory.

The monorepo uses [Yarn workspaces][] and [Lerna][] to manage the interdependencies between packages.

[Lerna]: https://lerna.js.org/
[monorepo]: https://github.com/babel/babel/blob/master/doc/design/monorepo.md
[Yarn workspaces]: https://yarnpkg.com/lang/en/docs/workspaces/

### Private packages

Private packages are used to organize development tools and dependencies. For example, the [`@hig/scripts`][hig-scripts] package contains the build script that's used to build every component package.

[hig-scripts]: ./packages/scripts

## Code style

We use [ESLint][] and [Prettier][] to ensure consistency throughout the source code. Please view our [ESLint configuration][] for details on style rules.

Use the [JSDoc style guide](https://github.com/shri/JSDoc-Style-Guide) for documentation comments.

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

#### How to update snapshots

```bash
yarn test -u
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

### New package version

In general you don't have to worry about maintaining the version number of the package because Semantic Release will automate the process for you. However there may be situations where you are developing a package and don't want its changes to be pushed to other dependent packages (either for local development or via [Greenkeeper](https://github.com/greenkeeperio/greenkeeper)). In such cases you may want to assign an explicit version and append an `"-alpha"` tag to indicate that the package is still in development.

Using the [sample component documentation][sample-component] as a reference, create a new package with the version `1.0.0-alpha`.

Per [Semantic Versioning 2.0.0][semver], the `"-alpha"` portion of the version labels the package as pre-release. Packages labeled as pre-release are ignored during deployment and when building dependent packages while in development. In other words, using "-alpha" on your package version will allow you to merge changes into the git development branch without impacting deployment or developers working on their local machines.

In concordance with this, you should make any inter-package dependencies explicit in each package's `package.json` file. If you wish to include a pre-release package dependency, you will need to specify that pre-release version exactly.

Combined with Semantic Release and Greenkeeper, this ensures that non-breaking (minor and patch versions) updates get cascaded to dependent packages and that breaking updates trigger Greenkeeper notifications.

### Creating pre-releases

#### For controlling release of breaking changes
* In the commit that contains the breaking changes for a package–and any commit should only contain changes for one package–manually change the package version in `package.json` to the next major version and append "-alpha". For example, if the `package.json` looked like this
    ```json
    {
      "name": "@hig/sample-component",
      "version": "1.0.0",
      "description": "",
      "author": "Autodesk Inc.",
      "license": "Apache-2.0"
    }
    ```
    
    Manually change the version to `2.0.0-alpha`.
    
* `yarn && yarn build` at the project root. You should expect that `yarn.lock` will be unchanged, indicating that none of your dependent packages pulled in the breaking pre-release changes.
* Proceed with posting a PR and merging your work into the development branch.
* When you're ready to release your package, manually remove "-alpha" from the version. For example, if the `package.json` looked like this
    ```json
    {
      "name": "@hig/sample-component",
      "version": "2.0.0-alpha",
      "description": "",
      "author": "Autodesk Inc.",
      "license": "Apache-2.0"
    }
    ```
    Manually change the version to `2.0.0`.
    
* `yarn && yarn build` at the project root. Expect that `yarn.lock` will be unchanged, indicating that none of your dependent packages pulled in the breaking, major-version-bump changes. If a dependent package did pull in the breaking change, this might indicate that your package is not explicitly listed as a dependency or that the version compatibility listed in the dependent's `package.json` is not pinned to restrict updates to only minor and patch levels (e.g. `^1.0.0`). Our convention is to list dependencies allowing only minor and patch updates with `^`. 
* On your development branch locally, run `yarn release:dry-run`. Assuming your breaking change commit message follows [Angular Git Commit Guidelines][], expect that Semantic Release will output something like `Create tag @hig/sample-component@2.0.0`. This indicates that it would bump the version to `2.0.0` and publish it to NPM if this were not a dry run. If you don't see that, double check your previous steps.
* Proceed with posting a PR and merging your work into the development branch.
* Your breaking changes under the new major version should not impact other packages without explicitly updating their `package.json` files.
* Once your changes make it to master and CI, Semantic Release should properly bump the version to `2.0.0` and publish to NPM.

#### Other uses

Packages that have already been published can have pre-releases as well.

For example, `@hig/button@1.0.0` can have a pre-release package by changing the version to `@hig/button@1.1.0-alpha`.
Subsequent pre-releases can be made by further changing the package version, e.g. `@hig/button@1.1.0-alpha.2`.

> A larger set of pre-release fields has a higher precedence than a smaller set, if all of the preceding identifiers are equal. Example: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0.
> - https://semver.org/#spec-item-11

[sample-component]: ./docs/sample-component
[npm-publish]: https://docs.npmjs.com/cli/publish
[semver]: https://semver.org/
[Angular Git Commit Guidelines][]

## Deployment

### Storybook

[Storybook][] is deployed when changes are merged into the `master` branch. [Storybook Staging][] is deployed when changes are merged into the `development` branch.

[Storybook]: http://storybook.hig.autodesk.com/
[Storybook Staging]: http://storybook-staging.hig.autodesk.com/

### Packages

Packages are published via [Semantic Release][].

#### New packages

New packages should be labeled as pre-release and are ignored during deployment.
For the deployment workflow to recognize them, the pre-release version must be changed to a stable version. For example, `1.0.0-alpha` should be changed to `1.0.0`.

#### Pre-releases

Packages labeled as pre-release are ignored during deployment, and must be published manually via the appropriate [CLI tools][npm-publish].

### How to deploy

1. Create a pull request (PR) to merge `development` into `master`.
   * Begin the PR title with `Release:` for consistency.
   * Add the `release` issue label for discovery.
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

### Configuring Semantic Release to deploy a package
A package must have the following properties defined in its `package.json` file in order to be published by Semantic Release

```json
  "devDependencies": {
    "@hig/scripts": "^x.x.x",
    "@weave-design/semantic-release-config": "^x.x.x",
  },
  "release": {
    "extends": "@weave-design/semantic-release-config"
  },
  "scripts": {
    "release": "weave-scripts-release"
  },
```

## Documentation

### Updating table of contents

Every table of contents is generated using [`doctoc`][doctoc].

[doctoc]: https://www.npmjs.com/package/doctoc

To update each document's table of contents run:

```bash
yarn docs
```

## How to fix an old release

Scenario: a consumer reports a critical bug for `@hig/button@0.1.0`, but the current package version is `@hig/button@1.0.0`. Additionally, upgrading to `@hig/button@1.0.0` isn't an option for the consumer.

We need to patch `@hig/button@0.1.0`, by releasing `@hig/button@0.1.1` with the fix.

### Steps

1. Checkout a new branch based on the tag for the respective version

```bash
git checkout @hig/button@0.1.0
git checkout -b fix/button
```

2. Update the working directory

```bash
yarn install
yarn run build
```

3. Make the necessary changes for the fix
4. Commit changes following the [Git commit guidelines](#git-commits)
5. Bump the package version

_`packages/button/package.json`_

```diff
{
  "name": "@hig/button",
- "version": "0.1.0",
+ "version": "0.1.1"
}
```

6. Update the `CHANGELOG.md`
    * Adhere to the existing format
7. Commit changes

```bash
git add packages/button/package.json
git add packages/button/CHANGELOG.md
git commit -m "chore(release): bump version to `@hig/button@0.1.1`"
```
8. Merge development branch and resolve conflicts

```bash
git merge development --no-ff
```

9. Follow standard pull request procedure
    * Wait for CI to successfully complete
    * Wait for pull request approval
    * Merge PR with merge commit
8. Publish package

```bash
cd ./packages/button
npm publish
```

9. Create a Git tag and release entry via GitHub
    * The tag should point to the commit with the `chore(release)` message
