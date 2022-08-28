# [@hig/tooltip-v2.2.0](https://github.com/Autodesk/hig/compare/@hig/tooltip@2.1.0...@hig/tooltip@2.2.0) (2022-08-28)


### Features

* use latest theme-data ([5ed7a40](https://github.com/Autodesk/hig/commit/5ed7a40))

# [@hig/tooltip-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/tooltip@2.0.0...@hig/tooltip@2.1.0) (2022-01-24)


### Features

* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))

# [@hig/tooltip-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/tooltip@1.1.2...@hig/tooltip@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/tooltip-v1.1.2](https://github.com/Autodesk/hig/compare/@hig/tooltip@1.1.1...@hig/tooltip@1.1.2) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/tooltip-v1.1.1](https://github.com/Autodesk/hig/compare/@hig/tooltip@1.1.0...@hig/tooltip@1.1.1) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))

# [@hig/tooltip-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/tooltip@1.0.6...@hig/tooltip@1.1.0) (2021-02-24)


### Features

* add stylesheet prop ([a5326c8](https://github.com/Autodesk/hig/commit/a5326c8))

# [@hig/tooltip-v1.0.6](https://github.com/Autodesk/hig/compare/@hig/tooltip@1.0.5...@hig/tooltip@1.0.6) (2020-05-13)


### Bug Fixes

* stop using deprecated theme-data roles ([48539e6](https://github.com/Autodesk/hig/commit/48539e6))

# [@hig/tooltip-v1.0.5](https://github.com/Autodesk/hig/compare/@hig/tooltip@1.0.4...@hig/tooltip@1.0.5) (2020-02-21)


### Bug Fixes

* allow className to be passed down ([94eb3b4](https://github.com/Autodesk/hig/commit/94eb3b4))

# [@hig/tooltip-v1.0.4](https://github.com/Autodesk/hig/compare/@hig/tooltip@1.0.3...@hig/tooltip@1.0.4) (2019-03-20)


### Bug Fixes

* make density agnostic ([aa6169e](https://github.com/Autodesk/hig/commit/aa6169e))

# [@hig/tooltip-v1.0.3](https://github.com/Autodesk/hig/compare/@hig/tooltip@1.0.2...@hig/tooltip@1.0.3) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([90cd401](https://github.com/Autodesk/hig/commit/90cd401))

# [@hig/tooltip-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/tooltip@1.0.1...@hig/tooltip@1.0.2) (2019-03-08)


### Bug Fixes

* tooltip design tweak ([ad68abd](https://github.com/Autodesk/hig/commit/ad68abd))

# [@hig/tooltip-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/tooltip@1.0.0...@hig/tooltip@1.0.1) (2019-02-08)


### Bug Fixes

* bump up theme-context dependency ([b068dab](https://github.com/Autodesk/hig/commit/b068dab))

# [@hig/tooltip-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/tooltip@0.4.2...@hig/tooltip@1.0.0) (2019-01-28)


### Features

* upgrade to themeable Typography ([0bacfb8](https://github.com/Autodesk/hig/commit/0bacfb8))


### BREAKING CHANGES

* tooltip is now styled through theme-data, all css classnames have been removed
it also now uses the themeable version of typography

# [@hig/tooltip-v0.4.2](https://github.com/Autodesk/hig/compare/@hig/tooltip@0.4.1...@hig/tooltip@0.4.2) (2019-01-23)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/flyout to version 1.0.0 ([bacdb5d](https://github.com/Autodesk/hig/commit/bacdb5d))

# [@hig/tooltip-v0.4.1](https://github.com/Autodesk/hig/compare/@hig/tooltip@0.4.0...@hig/tooltip@0.4.1) (2019-01-08)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/flyout to version 0.8.0 ([37ab319](https://github.com/Autodesk/hig/commit/37ab319))

# [@hig/tooltip-v0.4.0](https://github.com/Autodesk/hig/compare/@hig/tooltip@0.3.0...@hig/tooltip@0.4.0) (2019-01-04)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/flyout to version 0.7.0 ([d6f3436](https://github.com/Autodesk/hig/commit/d6f3436))
* declare typography dependency in tooltip ([bd2affb](https://github.com/Autodesk/hig/commit/bd2affb))


### Features

* gives buttons intended height ([9358562](https://github.com/Autodesk/hig/commit/9358562))

# [@hig/tooltip-v0.3.0](https://github.com/Autodesk/hig/compare/@hig/tooltip@0.2.0...@hig/tooltip@0.3.0) (2018-12-11)


### Features

* add stylesheet override for flyout pointer ([947651f](https://github.com/Autodesk/hig/commit/947651f))

# [@hig/tooltip-v0.2.0](https://github.com/Autodesk/hig/compare/@hig/tooltip@0.1.1...@hig/tooltip@0.2.0) (2018-09-26)


### Features

* Add openOnHoverDelay prop ([1844bab](https://github.com/Autodesk/hig/commit/1844bab))
* Adds openOnHover prop to Tooltip. This enables the Tooltip to display when a user hovers over the target ([c5717d6](https://github.com/Autodesk/hig/commit/c5717d6))

# [@hig/tooltip-v0.1.1](https://github.com/Autodesk/hig/compare/@hig/tooltip@0.1.0...@hig/tooltip@0.1.1) (2018-09-11)


### Bug Fixes

* import missing dependency styles ([0f4cd53](https://github.com/Autodesk/hig/commit/0f4cd53))

# [@hig/tooltip-v0.1.0](https://github.com/Autodesk/hig/compare/@hig/tooltip@0.0.0...@hig/tooltip@0.1.0) (2018-09-11)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))
* upgrade flyout in dependants ([ea3bedd](https://github.com/Autodesk/hig/commit/ea3bedd))


### Features

* rewrite tooltip ([d14dab1](https://github.com/Autodesk/hig/commit/d14dab1))
* **behavior:** add `defaultOpen` prop to support uncontrolled flyout's that are open by default ([7a4e91c](https://github.com/Autodesk/hig/commit/7a4e91c))
* **tooltip:** Add Tooltip placeholders ([93754d2](https://github.com/Autodesk/hig/commit/93754d2))
