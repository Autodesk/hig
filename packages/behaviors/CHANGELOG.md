# [@hig/behaviors-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/behaviors@1.1.2...@hig/behaviors@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/behaviors-v1.1.2](https://github.com/Autodesk/hig/compare/@hig/behaviors@1.1.1...@hig/behaviors@1.1.2) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/behaviors-v1.1.1](https://github.com/Autodesk/hig/compare/@hig/behaviors@1.1.0...@hig/behaviors@1.1.1) (2019-01-03)


### Bug Fixes

* isPressed state should be off on blur ([e754fd4](https://github.com/Autodesk/hig/commit/e754fd4))

# [@hig/behaviors-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/behaviors@1.0.0...@hig/behaviors@1.1.0) (2018-12-11)


### Features

* **behaviors:** add pressed behaviors to package ([45c6802](https://github.com/Autodesk/hig/commit/45c6802))

# @hig/behaviors-v1.0.0 (2018-10-31)


### Features

* add shared behaviors package ([c0e755e](https://github.com/Autodesk/hig/commit/c0e755e))
