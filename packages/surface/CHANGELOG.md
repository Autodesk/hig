# [@hig/surface-v2.1.1](https://github.com/Autodesk/hig/compare/@hig/surface@2.1.0...@hig/surface@2.1.1) (2022-03-17)


### Bug Fixes

* typo in component displayName ([1c58da1](https://github.com/Autodesk/hig/commit/1c58da1))

# [@hig/surface-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/surface@2.0.0...@hig/surface@2.1.0) (2022-01-24)


### Features

* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))

# [@hig/surface-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/surface@1.2.2...@hig/surface@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/surface-v1.2.2](https://github.com/Autodesk/hig/compare/@hig/surface@1.2.1...@hig/surface@1.2.2) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/surface-v1.2.1](https://github.com/Autodesk/hig/compare/@hig/surface@1.2.0...@hig/surface@1.2.1) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))
* add validation render Element ([2b77595](https://github.com/Autodesk/hig/commit/2b77595))

# [@hig/surface-v1.2.0](https://github.com/Autodesk/hig/compare/@hig/surface@1.1.1...@hig/surface@1.2.0) (2021-02-24)


### Features

* add stylesheet prop ([acf4b95](https://github.com/Autodesk/hig/commit/acf4b95))

# [@hig/surface-v1.1.1](https://github.com/Autodesk/hig/compare/@hig/surface@1.1.0...@hig/surface@1.1.1) (2020-05-12)


### Bug Fixes

* stop using deprecated theme-data roles ([b4f191a](https://github.com/Autodesk/hig/commit/b4f191a))

# [@hig/surface-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/surface@1.0.1...@hig/surface@1.1.0) (2020-02-21)


### Features

* allow className to be passed down ([b671c71](https://github.com/Autodesk/hig/commit/b671c71))

# [@hig/surface-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/surface@1.0.0...@hig/surface@1.0.1) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([9620550](https://github.com/Autodesk/hig/commit/9620550))

# @hig/surface-v1.0.0 (2019-02-14)


### Features

* introduce Surface component ([10c2f34](https://github.com/Autodesk/hig/commit/10c2f34))
