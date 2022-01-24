# [@hig/progress-bar-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/progress-bar@2.0.0...@hig/progress-bar@2.1.0) (2022-01-24)


### Features

* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))

# [@hig/progress-bar-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/progress-bar@1.1.3...@hig/progress-bar@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/progress-bar-v1.1.3](https://github.com/Autodesk/hig/compare/@hig/progress-bar@1.1.2...@hig/progress-bar@1.1.3) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/progress-bar-v1.1.2](https://github.com/Autodesk/hig/compare/@hig/progress-bar@1.1.1...@hig/progress-bar@1.1.2) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))

# [@hig/progress-bar-v1.1.1](https://github.com/Autodesk/hig/compare/@hig/progress-bar@1.1.0...@hig/progress-bar@1.1.1) (2020-05-12)


### Bug Fixes

* stop using deprecated theme-data roles ([e5b22db](https://github.com/Autodesk/hig/commit/e5b22db))

# [@hig/progress-bar-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/progress-bar@1.0.3...@hig/progress-bar@1.1.0) (2019-09-25)


### Features

* add stylesheet prop for ProgressBar ([2ab671f](https://github.com/Autodesk/hig/commit/2ab671f))
* allow className to be passed down to ProgressBar ([f79ed07](https://github.com/Autodesk/hig/commit/f79ed07))

# [@hig/progress-bar-v1.0.3](https://github.com/Autodesk/hig/compare/@hig/progress-bar@1.0.2...@hig/progress-bar@1.0.3) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([ce3c3c3](https://github.com/Autodesk/hig/commit/ce3c3c3))

# [@hig/progress-bar-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/progress-bar@1.0.1...@hig/progress-bar@1.0.2) (2019-02-08)


### Bug Fixes

* bump up theme-context dependency ([b068dab](https://github.com/Autodesk/hig/commit/b068dab))

# [@hig/progress-bar-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/progress-bar@1.0.0...@hig/progress-bar@1.0.1) (2019-01-23)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/theme-context to version 2.0.0 ([60f71af](https://github.com/Autodesk/hig/commit/60f71af))

# [@hig/progress-bar-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/progress-bar@0.1.0...@hig/progress-bar@1.0.0) (2019-01-17)


### BREAKING

* make progress bar themeable ([1c144cd](https://github.com/Autodesk/hig/commit/1c144cd))


### Bug Fixes

* blend end of gradient into background ([f953e13](https://github.com/Autodesk/hig/commit/f953e13))


### BREAKING CHANGES

* With the addition of theme-data, all css classes in the elements have been removed.

# [@hig/progress-bar-v0.1.0](https://github.com/Autodesk/hig/compare/@hig/progress-bar@0.0.0...@hig/progress-bar@0.1.0) (2018-09-11)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))


### Features

* **progress-bar:** Add ProgressBar placeholders ([2fc2572](https://github.com/Autodesk/hig/commit/2fc2572))
* **progress-bar:** Rewrite ProgressBar component ([#971](https://github.com/Autodesk/hig/issues/971)) ([8ccba0c](https://github.com/Autodesk/hig/commit/8ccba0c))
