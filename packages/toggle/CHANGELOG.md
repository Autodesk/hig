# [@hig/toggle-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/toggle@1.0.3...@hig/toggle@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/toggle-v1.0.3](https://github.com/Autodesk/hig/compare/@hig/toggle@1.0.2...@hig/toggle@1.0.3) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/toggle-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/toggle@1.0.1...@hig/toggle@1.0.2) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))

# [@hig/toggle-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/toggle@1.0.0...@hig/toggle@1.0.1) (2020-05-13)


### Bug Fixes

* stop using deprecated theme-data-roles ([59dfa4e](https://github.com/Autodesk/hig/commit/59dfa4e))

# @hig/toggle-v1.0.0 (2020-03-13)


### Features

* add toggle component ([57075b2](https://github.com/Autodesk/hig/commit/57075b2))
