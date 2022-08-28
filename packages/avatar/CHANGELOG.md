# [@hig/avatar-v2.2.0](https://github.com/Autodesk/hig/compare/@hig/avatar@2.1.0...@hig/avatar@2.2.0) (2022-08-28)


### Features

* use latest theme-data ([6214278](https://github.com/Autodesk/hig/commit/6214278))

# [@hig/avatar-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/avatar@2.0.0...@hig/avatar@2.1.0) (2022-01-24)


### Features

* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))

# [@hig/avatar-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/avatar@1.4.2...@hig/avatar@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/avatar-v1.4.2](https://github.com/Autodesk/hig/compare/@hig/avatar@1.4.1...@hig/avatar@1.4.2) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/avatar-v1.4.1](https://github.com/Autodesk/hig/compare/@hig/avatar@1.4.0...@hig/avatar@1.4.1) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))
* remove key duplicated ([2683acc](https://github.com/Autodesk/hig/commit/2683acc))

# [@hig/avatar-v1.4.0](https://github.com/Autodesk/hig/compare/@hig/avatar@1.3.0...@hig/avatar@1.4.0) (2021-05-25)


### Features

* **avatar:** Implement new avatar BG colors (ACWB-8852) ([ec8a934](https://github.com/Autodesk/hig/commit/ec8a934))
* **avatar:** Remove unneeded function ([d8de162](https://github.com/Autodesk/hig/commit/d8de162))
* Small refactors to make usage by avatarBundle possible ([09d6bf9](https://github.com/Autodesk/hig/commit/09d6bf9))

# [@hig/avatar-v1.3.0](https://github.com/Autodesk/hig/compare/@hig/avatar@1.2.0...@hig/avatar@1.3.0) (2021-02-02)


### Features

* add stylesheet prop ([4465d6a](https://github.com/Autodesk/hig/commit/4465d6a))

# [@hig/avatar-v1.2.0](https://github.com/Autodesk/hig/compare/@hig/avatar@1.1.1...@hig/avatar@1.2.0) (2020-12-03)


### Features

* Update avatar props and background color calculation ([7eaf08a](https://github.com/Autodesk/hig/commit/7eaf08a))

# [@hig/avatar-v1.1.1](https://github.com/Autodesk/hig/compare/@hig/avatar@1.1.0...@hig/avatar@1.1.1) (2020-10-06)


### Bug Fixes

* function initialsFromName() can't handle some non-English names properly ([a844ede](https://github.com/Autodesk/hig/commit/a844ede))

# [@hig/avatar-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/avatar@1.0.6...@hig/avatar@1.1.0) (2019-10-10)


### Features

* allow className to be passed down to Avatar ([6b7c894](https://github.com/Autodesk/hig/commit/6b7c894))

# [@hig/avatar-v1.0.6](https://github.com/Autodesk/hig/compare/@hig/avatar@1.0.5...@hig/avatar@1.0.6) (2019-03-20)


### Bug Fixes

* backgroundId to account for lowercase name ([4c0ac9d](https://github.com/Autodesk/hig/commit/4c0ac9d))

# [@hig/avatar-v1.0.5](https://github.com/Autodesk/hig/compare/@hig/avatar@1.0.4...@hig/avatar@1.0.5) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([7c7d2db](https://github.com/Autodesk/hig/commit/7c7d2db))

# [@hig/avatar-v1.0.4](https://github.com/Autodesk/hig/compare/@hig/avatar@1.0.3...@hig/avatar@1.0.4) (2019-02-08)


### Bug Fixes

* bump up theme-context dependency ([b068dab](https://github.com/Autodesk/hig/commit/b068dab))

# [@hig/avatar-v1.0.3](https://github.com/Autodesk/hig/compare/@hig/avatar@1.0.2...@hig/avatar@1.0.3) (2019-01-23)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/theme-context to version 2.0.0 ([c3dbc64](https://github.com/Autodesk/hig/commit/c3dbc64))

# [@hig/avatar-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/avatar@1.0.1...@hig/avatar@1.0.2) (2019-01-09)


### Bug Fixes

* Shows a bg color for names starting w/ Z ([9745ec3](https://github.com/Autodesk/hig/commit/9745ec3))

# [@hig/avatar-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/avatar@1.0.0...@hig/avatar@1.0.1) (2019-01-04)


### Bug Fixes

* resolve versioning issue, Avatar 0.2.0->1.0.0 ([535d892](https://github.com/Autodesk/hig/commit/535d892))

# [@hig/avatar-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/avatar@0.2.0...@hig/avatar@1.0.0) (2019-01-03)


### Bug Fixes

* **avatar:** add theme knobs in avatar storybook, use only one letter for avatar when size is small, fix js warnings ([4057b51](https://github.com/Autodesk/hig/commit/4057b51))


### Features

* **avatar:** themable avatar ([0fbd821](https://github.com/Autodesk/hig/commit/0fbd821))


### BREAKING CHANGES

* **avatar:** The sizes.LARGE_36 size is no longer supported. You can
substitute with sizes.MEDIUM_32 or sizes.LARGE_48. The "large-48" size
is no longer supported. You can substitute it with "large" for 48 pixels
wide or "medium-32" for 32 pixels wide. The previous "large" size is now
48 pixels wide rather than 36 pixels wide.

# [@hig/avatar-v0.2.0](https://github.com/Autodesk/hig/compare/@hig/avatar@0.1.3...@hig/avatar@0.2.0) (2018-09-19)


### Features

* improve markup semantics ([df10f18](https://github.com/Autodesk/hig/commit/df10f18))

<a name="@hig/avatar-v0.1.3"></a>
# [@hig/avatar-v0.1.3](https://github.com/Autodesk/hig/compare/@hig/avatar@0.1.2...@hig/avatar@0.1.3) (2018-07-06)


### Bug Fixes

* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))

<a name="@hig/avatar-v0.1.2"></a>
# [@hig/avatar-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/avatar@0.1.1...@hig/avatar@0.1.2) (2018-06-19)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
