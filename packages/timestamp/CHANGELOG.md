# [@hig/timestamp-v2.2.0](https://github.com/Autodesk/hig/compare/@hig/timestamp@2.1.0...@hig/timestamp@2.2.0) (2022-09-05)


### Features

* update theme-data dependency ([c46edd2](https://github.com/Autodesk/hig/commit/c46edd2))

# [@hig/timestamp-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/timestamp@2.0.0...@hig/timestamp@2.1.0) (2022-01-24)


### Features

* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))

# [@hig/timestamp-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/timestamp@1.3.2...@hig/timestamp@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/timestamp-v1.3.2](https://github.com/Autodesk/hig/compare/@hig/timestamp@1.3.1...@hig/timestamp@1.3.2) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/timestamp-v1.3.1](https://github.com/Autodesk/hig/compare/@hig/timestamp@1.3.0...@hig/timestamp@1.3.1) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))

# [@hig/timestamp-v1.3.0](https://github.com/Autodesk/hig/compare/@hig/timestamp@1.2.0...@hig/timestamp@1.3.0) (2020-10-15)


### Features

* add timestampSequence prop to help with localization ([f777858](https://github.com/Autodesk/hig/commit/f777858))

# [@hig/timestamp-v1.2.0](https://github.com/Autodesk/hig/compare/@hig/timestamp@1.1.1...@hig/timestamp@1.2.0) (2020-08-18)


### Bug Fixes

* support for dates over a year old ([8dac1f6](https://github.com/Autodesk/hig/commit/8dac1f6))


### Features

* allow for localization ([b80bcf2](https://github.com/Autodesk/hig/commit/b80bcf2))

# [@hig/timestamp-v1.1.1](https://github.com/Autodesk/hig/compare/@hig/timestamp@1.1.0...@hig/timestamp@1.1.1) (2020-05-12)


### Bug Fixes

* stop using deprecated theme-data roles ([6818763](https://github.com/Autodesk/hig/commit/6818763))

# [@hig/timestamp-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/timestamp@1.0.2...@hig/timestamp@1.1.0) (2019-10-10)


### Features

* add stylesheet prop for Timestamp ([4e870c4](https://github.com/Autodesk/hig/commit/4e870c4))
* allow className to be passed down to Timestamp ([5fda22a](https://github.com/Autodesk/hig/commit/5fda22a))

# [@hig/timestamp-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/timestamp@1.0.1...@hig/timestamp@1.0.2) (2019-05-10)


### Bug Fixes

* remove unused styles dependency ([8388f8a](https://github.com/Autodesk/hig/commit/8388f8a))

# [@hig/timestamp-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/timestamp@1.0.0...@hig/timestamp@1.0.1) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([465f12b](https://github.com/Autodesk/hig/commit/465f12b))

# [@hig/timestamp-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/timestamp@0.1.4...@hig/timestamp@1.0.0) (2019-02-14)


### Features

* make timestamp themeable ([3d51d31](https://github.com/Autodesk/hig/commit/3d51d31))


### BREAKING CHANGES

* * Remove css classes
* No longer using an imported css file

# [@hig/timestamp-v0.1.4](https://github.com/Autodesk/hig/compare/@hig/timestamp@0.1.3...@hig/timestamp@0.1.4) (2018-10-08)


### Bug Fixes

* **presentation:** correct typography font ([6cadf3a](https://github.com/Autodesk/hig/commit/6cadf3a))

<a name="@hig/timestamp-v0.1.3"></a>
# [@hig/timestamp-v0.1.3](https://github.com/Autodesk/hig/compare/@hig/timestamp@0.1.2...@hig/timestamp@0.1.3) (2018-07-06)


### Bug Fixes

* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))

<a name="@hig/timestamp-v0.1.2"></a>
# [@hig/timestamp-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/timestamp@0.1.1...@hig/timestamp@0.1.2) (2018-06-20)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
