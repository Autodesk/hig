# [@hig/multi-downshift-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/multi-downshift@1.0.1...@hig/multi-downshift@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([96a3214](https://github.com/Autodesk/hig/commit/96a3214))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/multi-downshift-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/multi-downshift@1.0.0...@hig/multi-downshift@1.0.1) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))

# [@hig/multi-downshift-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/multi-downshift@0.1.2...@hig/multi-downshift@1.0.0) (2020-10-30)


### Bug Fixes

* defaultSelectedItems prop not working ([831aa33](https://github.com/Autodesk/hig/commit/831aa33))


### BREAKING CHANGES

* initialSelectedItems was returning the correct default items but was not being used, using this instead of defaultSelectedItems which was always returning empty and now is a redundancy and therefore has been remove.

# [@hig/multi-downshift-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/multi-downshift@0.1.1...@hig/multi-downshift@0.1.2) (2019-08-02)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/utils to version 0.4.0 ([c62b949](https://github.com/Autodesk/hig/commit/c62b949))

# [@hig/multi-downshift-v0.1.1](https://github.com/Autodesk/hig/compare/@hig/multi-downshift@0.1.0...@hig/multi-downshift@0.1.1) (2018-08-24)


### Bug Fixes

* **behavior:** bump [@hig](https://github.com/hig)/utils dependents to v0.2.1 ([48b74d0](https://github.com/Autodesk/hig/commit/48b74d0))

<a name="@hig/multi-downshift-v0.1.0"></a>
# [@hig/multi-downshift-v0.1.0](https://github.com/Autodesk/hig/compare/@hig/multi-downshift@0.0.1...@hig/multi-downshift@0.1.0) (2018-07-26)


### Bug Fixes

* **behavior:** allow falsy controlled values ([afa7ffe](https://github.com/Autodesk/hig/commit/afa7ffe))


### Features

* **behavior:** add support to be used as a controlled component ([5e02989](https://github.com/Autodesk/hig/commit/5e02989))

<a name="@hig/multi-downshift-v0.0.1"></a>
# [@hig/multi-downshift-v0.0.1](https://github.com/Autodesk/hig/compare/@hig/multi-downshift@0.0.0...@hig/multi-downshift@0.0.1) (2018-07-18)


### Bug Fixes

* **behavior:** correct multiple selection logic ([3249f5f](https://github.com/Autodesk/hig/commit/3249f5f))
