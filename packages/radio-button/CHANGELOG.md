# [@hig/radio-button-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/radio-button@2.0.0...@hig/radio-button@2.1.0) (2022-01-24)


### Features

* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))

# [@hig/radio-button-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/radio-button@1.1.2...@hig/radio-button@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/radio-button-v1.1.2](https://github.com/Autodesk/hig/compare/@hig/radio-button@1.1.1...@hig/radio-button@1.1.2) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/radio-button-v1.1.1](https://github.com/Autodesk/hig/compare/@hig/radio-button@1.1.0...@hig/radio-button@1.1.1) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))

# [@hig/radio-button-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/radio-button@1.0.9...@hig/radio-button@1.1.0) (2020-12-07)


### Features

* add stylesheet and className props ([3ce7888](https://github.com/Autodesk/hig/commit/3ce7888))

# [@hig/radio-button-v1.0.9](https://github.com/Autodesk/hig/compare/@hig/radio-button@1.0.8...@hig/radio-button@1.0.9) (2020-05-12)


### Bug Fixes

* stop using deprecated theme-data roles ([d33e9f4](https://github.com/Autodesk/hig/commit/d33e9f4))

# [@hig/radio-button-v1.0.8](https://github.com/Autodesk/hig/compare/@hig/radio-button@1.0.7...@hig/radio-button@1.0.8) (2019-07-24)


### Bug Fixes

* halo transitions ([1e433a0](https://github.com/Autodesk/hig/commit/1e433a0))

# [@hig/radio-button-v1.0.7](https://github.com/Autodesk/hig/compare/@hig/radio-button@1.0.6...@hig/radio-button@1.0.7) (2019-06-07)


### Bug Fixes

* use correct border color for focused unselected state ([b3d9d7d](https://github.com/Autodesk/hig/commit/b3d9d7d))
* use proper border color in focus state ([c539639](https://github.com/Autodesk/hig/commit/c539639))

# [@hig/radio-button-v1.0.6](https://github.com/Autodesk/hig/compare/@hig/radio-button@1.0.5...@hig/radio-button@1.0.6) (2019-05-22)


### Bug Fixes

* use proper theme-data role for hover halo ([77a5e3d](https://github.com/Autodesk/hig/commit/77a5e3d))

# [@hig/radio-button-v1.0.5](https://github.com/Autodesk/hig/compare/@hig/radio-button@1.0.4...@hig/radio-button@1.0.5) (2019-04-02)


### Bug Fixes

* remove defaultChecked and other unused default props ([de364d1](https://github.com/Autodesk/hig/commit/de364d1))

# [@hig/radio-button-v1.0.4](https://github.com/Autodesk/hig/compare/@hig/radio-button@1.0.3...@hig/radio-button@1.0.4) (2019-03-20)


### Bug Fixes

* update hover/focus halo hierarchy ([89a3fb9](https://github.com/Autodesk/hig/commit/89a3fb9))

# [@hig/radio-button-v1.0.3](https://github.com/Autodesk/hig/compare/@hig/radio-button@1.0.2...@hig/radio-button@1.0.3) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([9586aad](https://github.com/Autodesk/hig/commit/9586aad))

# [@hig/radio-button-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/radio-button@1.0.1...@hig/radio-button@1.0.2) (2019-02-05)


### Bug Fixes

* **radio-button:** design fixes ([d95c7ed](https://github.com/Autodesk/hig/commit/d95c7ed))

# [@hig/radio-button-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/radio-button@1.0.0...@hig/radio-button@1.0.1) (2019-01-23)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/theme-context to version 2.0.0 ([92febc9](https://github.com/Autodesk/hig/commit/92febc9))

# [@hig/radio-button-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/radio-button@0.1.2...@hig/radio-button@1.0.0) (2019-01-17)


### Bug Fixes

* **radio-button:** support web light theme ([6355840](https://github.com/Autodesk/hig/commit/6355840))


### Features

* **radio-button:** Themable radio button ([fcc1b0e](https://github.com/Autodesk/hig/commit/fcc1b0e))


### BREAKING CHANGES

* **radio-button:** Radio button has a new API.
Radio button no longer includes a label. Use the @hig/label component instead.

# [@hig/radio-button-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/radio-button@0.1.1...@hig/radio-button@0.1.2) (2018-08-24)


### Bug Fixes

* **behavior:** bump [@hig](https://github.com/hig)/utils dependents to v0.2.1 ([48b74d0](https://github.com/Autodesk/hig/commit/48b74d0))

# [@hig/radio-button-v0.1.1](https://github.com/Autodesk/hig/compare/@hig/radio-button@0.1.0...@hig/radio-button@0.1.1) (2018-08-13)


### Bug Fixes

* **behavior:** remove checkbox behavior add change event handler ([5f705d8](https://github.com/Autodesk/hig/commit/5f705d8))

<a name="@hig/radio-button-v0.1.0"></a>
# [@hig/radio-button-v0.1.0](https://github.com/Autodesk/hig/compare/@hig/radio-button@0.0.0...@hig/radio-button@0.1.0) (2018-07-26)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))
* generate one ID per component instance instead of upon render ([0fbc554](https://github.com/Autodesk/hig/commit/0fbc554))


### Features

* **radio-button:** Add RadioButton placeholders ([b15d45e](https://github.com/Autodesk/hig/commit/b15d45e))
