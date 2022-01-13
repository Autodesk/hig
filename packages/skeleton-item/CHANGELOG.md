# [@hig/skeleton-item-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/skeleton-item@1.2.2...@hig/skeleton-item@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/skeleton-item-v1.2.2](https://github.com/Autodesk/hig/compare/@hig/skeleton-item@1.2.1...@hig/skeleton-item@1.2.2) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/skeleton-item-v1.2.1](https://github.com/Autodesk/hig/compare/@hig/skeleton-item@1.2.0...@hig/skeleton-item@1.2.1) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))

# [@hig/skeleton-item-v1.2.0](https://github.com/Autodesk/hig/compare/@hig/skeleton-item@1.1.1...@hig/skeleton-item@1.2.0) (2021-02-24)


### Features

* add stylesheet prop ([1d509ae](https://github.com/Autodesk/hig/commit/1d509ae))

# [@hig/skeleton-item-v1.1.1](https://github.com/Autodesk/hig/compare/@hig/skeleton-item@1.1.0...@hig/skeleton-item@1.1.1) (2020-05-12)


### Bug Fixes

* stop using deprecated theme-data roles ([9eda515](https://github.com/Autodesk/hig/commit/9eda515))

# [@hig/skeleton-item-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/skeleton-item@1.0.1...@hig/skeleton-item@1.1.0) (2020-02-21)


### Features

* allow className to be passed down ([8237ec9](https://github.com/Autodesk/hig/commit/8237ec9))

# [@hig/skeleton-item-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/skeleton-item@1.0.0...@hig/skeleton-item@1.0.1) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([bdeaa4a](https://github.com/Autodesk/hig/commit/bdeaa4a))

# [@hig/skeleton-item-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/skeleton-item@0.3.1...@hig/skeleton-item@1.0.0) (2019-02-26)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/theme-context to version 2.0.0 ([ce34ca4](https://github.com/Autodesk/hig/commit/ce34ca4))
* **package:** update emotion to version 10.0.0 ([abecf80](https://github.com/Autodesk/hig/commit/abecf80))
* bump up theme-context dependency ([b068dab](https://github.com/Autodesk/hig/commit/b068dab))
* combined greenkeeper prs for version updates see pr 1392 ([d0a017a](https://github.com/Autodesk/hig/commit/d0a017a))
* release skeleton-item ([d4a1c78](https://github.com/Autodesk/hig/commit/d4a1c78))
* Update theme data package ([dc5178a](https://github.com/Autodesk/hig/commit/dc5178a))


### BREAKING CHANGES

* * Remove CSS classname

# [@hig/skeleton-item-v0.3.1](https://github.com/Autodesk/hig/compare/@hig/skeleton-item@0.3.0...@hig/skeleton-item@0.3.1) (2018-10-08)


### Bug Fixes

* **presentation:** correct broken css ([948cc05e26d9545f2976c154db64d46a08404f93](https://github.com/Autodesk/hig/commit/948cc05e26d9545f2976c154db64d46a08404f93))

<a name="@hig/skeleton-item-v0.3.0"></a>
# [@hig/skeleton-item-v0.3.0](https://github.com/Autodesk/hig/compare/@hig/skeleton-item@0.2.0...@hig/skeleton-item@0.3.0) (2018-08-23)


### Features

* **skeleton-item:** Add height prop to manage variable height skeleton items ([e5f6145](https://github.com/Autodesk/hig/commit/e5f6145))
* **skeleton-item:** Add height prop to manage variable height skeleton items ([c668834](https://github.com/Autodesk/hig/commit/c668834))

<a name="@hig/skeleton-item-v0.2.0"></a>
# [@hig/skeleton-item-v0.2.0](https://github.com/Autodesk/hig/compare/@hig/skeleton-item@0.1.3...@hig/skeleton-item@0.2.0) (2018-07-18)


### Features

* **themability:** add exploratory themable components ([7e3d70b](https://github.com/Autodesk/hig/commit/7e3d70b))

<a name="@hig/skeleton-item-v0.1.3"></a>
# [@hig/skeleton-item-v0.1.3](https://github.com/Autodesk/hig/compare/@hig/skeleton-item@0.1.2...@hig/skeleton-item@0.1.3) (2018-07-06)


### Bug Fixes

* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))

<a name="@hig/skeleton-item-v0.1.2"></a>
# [@hig/skeleton-item-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/skeleton-item@0.1.1...@hig/skeleton-item@0.1.2) (2018-06-20)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
