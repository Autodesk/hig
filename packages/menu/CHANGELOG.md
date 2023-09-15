# [@weave-design/menu-v1.1.0](https://github.com/Autodesk/hig/compare/@weave-design/menu@1.0.2...@weave-design/menu@1.1.0) (2023-09-15)


### Features

* add highlighted prop ([fb216ef](https://github.com/Autodesk/hig/commit/fb216ef))

# [@weave-design/menu-v1.0.2](https://github.com/Autodesk/hig/compare/@weave-design/menu@1.0.1...@weave-design/menu@1.0.2) (2023-08-15)


### Bug Fixes

* update to correct peer dependency ([54a7af3](https://github.com/Autodesk/hig/commit/54a7af3))

# [@weave-design/menu-v1.0.1](https://github.com/Autodesk/hig/compare/@weave-design/menu@1.0.0...@weave-design/menu@1.0.1) (2023-07-27)


### Bug Fixes

* have fallback object for React18 StrictMode ([b1f5b0a](https://github.com/Autodesk/hig/commit/b1f5b0a))

# @weave-design/menu-v1.0.0 (2023-02-25)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))
* destruct unselect prop in menu to fix menu console error ([16c60a1](https://github.com/Autodesk/hig/commit/16c60a1))
* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))
* Re-rendering with fewer Options ([46253e3](https://github.com/Autodesk/hig/commit/46253e3))
* set transform on menu header to correct value ([fd2528d](https://github.com/Autodesk/hig/commit/fd2528d))
* skip unit testing ([e33c1e3](https://github.com/Autodesk/hig/commit/e33c1e3))
* uncontrolled selection ([b0ebc60](https://github.com/Autodesk/hig/commit/b0ebc60))
* update when selected prop is changed ([5308acc](https://github.com/Autodesk/hig/commit/5308acc))


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### Features

* add new Menu component ([482a91a](https://github.com/Autodesk/hig/commit/482a91a))
* add unselect prop to control option select ability ([45b6e56](https://github.com/Autodesk/hig/commit/45b6e56))
* **avatar:** Implement new avatar BG colors (ACWB-8852) ([ec8a934](https://github.com/Autodesk/hig/commit/ec8a934))
* **menu:** Add optionRef to Option component ([bedfc97](https://github.com/Autodesk/hig/commit/bedfc97))
* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))
* use latest theme-data ([fa39347](https://github.com/Autodesk/hig/commit/fa39347))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/menu-v2.2.3](https://github.com/Autodesk/hig/compare/@hig/menu@2.2.2...@hig/menu@2.2.3) (2022-12-08)


### Bug Fixes

* Re-rendering with fewer Options ([46253e3](https://github.com/Autodesk/hig/commit/46253e3))

# [@hig/menu-v2.2.2](https://github.com/Autodesk/hig/compare/@hig/menu@2.2.1...@hig/menu@2.2.2) (2022-10-02)


### Bug Fixes

* uncontrolled selection ([b0ebc60](https://github.com/Autodesk/hig/commit/b0ebc60))

# [@hig/menu-v2.2.1](https://github.com/Autodesk/hig/compare/@hig/menu@2.2.0...@hig/menu@2.2.1) (2022-09-12)


### Bug Fixes

* update when selected prop is changed ([5308acc](https://github.com/Autodesk/hig/commit/5308acc))

# [@hig/menu-v2.2.0](https://github.com/Autodesk/hig/compare/@hig/menu@2.1.1...@hig/menu@2.2.0) (2022-08-28)


### Features

* use latest theme-data ([fa39347](https://github.com/Autodesk/hig/commit/fa39347))

# [@hig/menu-v2.1.1](https://github.com/Autodesk/hig/compare/@hig/menu@2.1.0...@hig/menu@2.1.1) (2022-02-07)


### Bug Fixes

* set transform on menu header to correct value ([fd2528d](https://github.com/Autodesk/hig/commit/fd2528d))

# [@hig/menu-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/menu@2.0.0...@hig/menu@2.1.0) (2022-01-24)


### Features

* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))

# [@hig/menu-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/menu@1.3.3...@hig/menu@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/menu-v1.3.3](https://github.com/Autodesk/hig/compare/@hig/menu@1.3.2...@hig/menu@1.3.3) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/menu-v1.3.2](https://github.com/Autodesk/hig/compare/@hig/menu@1.3.1...@hig/menu@1.3.2) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))
* skip unit testing ([e33c1e3](https://github.com/Autodesk/hig/commit/e33c1e3))

# [@hig/menu-v1.3.1](https://github.com/Autodesk/hig/compare/@hig/menu@1.3.0...@hig/menu@1.3.1) (2021-10-27)


### Bug Fixes

* destruct unselect prop in menu to fix menu console error ([16c60a1](https://github.com/Autodesk/hig/commit/16c60a1))

# [@hig/menu-v1.3.0](https://github.com/Autodesk/hig/compare/@hig/menu@1.2.0...@hig/menu@1.3.0) (2021-09-01)


### Features

* **menu:** Add optionRef to Option component ([bedfc97](https://github.com/Autodesk/hig/commit/bedfc97))

# [@hig/menu-v1.2.0](https://github.com/Autodesk/hig/compare/@hig/menu@1.1.0...@hig/menu@1.2.0) (2021-07-21)


### Features

* add unselect prop to control option select ability ([45b6e56](https://github.com/Autodesk/hig/commit/45b6e56))

# [@hig/menu-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/menu@1.0.0...@hig/menu@1.1.0) (2021-05-25)


### Features

* **avatar:** Implement new avatar BG colors (ACWB-8852) ([ec8a934](https://github.com/Autodesk/hig/commit/ec8a934))

# @hig/menu-v1.0.0 (2021-01-14)


### Features

* add new Menu component ([482a91a](https://github.com/Autodesk/hig/commit/482a91a))
