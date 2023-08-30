# [@weave-design/input-v1.0.1](https://github.com/Autodesk/hig/compare/@weave-design/input@1.0.0...@weave-design/input@1.0.1) (2023-08-30)


### Bug Fixes

* focus styles take precedent over hover styles ([4943f79](https://github.com/Autodesk/hig/commit/4943f79))

# @weave-design/input-v1.0.0 (2023-02-25)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))
* allow className to be passed down in Input ([bb8e040](https://github.com/Autodesk/hig/commit/bb8e040))
* apply focus colour over hover ([abad5ed](https://github.com/Autodesk/hig/commit/abad5ed))
* apply updated theme-data roles for input ([ef361c4](https://github.com/Autodesk/hig/commit/ef361c4))
* bump up theme-context dependency ([b068dab](https://github.com/Autodesk/hig/commit/b068dab))
* combined greenkeeper prs for version updates see pr 1392 ([d0a017a](https://github.com/Autodesk/hig/commit/d0a017a))
* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))
* halo top position ([9ab6941](https://github.com/Autodesk/hig/commit/9ab6941))
* hover styles take precedent over focus ([16e15a4](https://github.com/Autodesk/hig/commit/16e15a4))
* input design tweak ([b741e6a](https://github.com/Autodesk/hig/commit/b741e6a))
* **input:** fix styles for input ([ccdc7e5](https://github.com/Autodesk/hig/commit/ccdc7e5))
* **package:** update [@hig](https://github.com/hig)/behaviors to version 1.1.1 ([b535a9c](https://github.com/Autodesk/hig/commit/b535a9c))
* **package:** update [@hig](https://github.com/hig)/theme-context to version 2.0.0 ([2377dec](https://github.com/Autodesk/hig/commit/2377dec))
* **package:** update emotion to version 10.0.0 ([b829036](https://github.com/Autodesk/hig/commit/b829036))
* should take up rest of space in flex container ([9dd7f74](https://github.com/Autodesk/hig/commit/9dd7f74))
* skip unit testing ([e33c1e3](https://github.com/Autodesk/hig/commit/e33c1e3))
* stop using deprecated theme-data roles ([98cde66](https://github.com/Autodesk/hig/commit/98cde66))
* theme-context and theme-data as peer dependencies ([ff141ec](https://github.com/Autodesk/hig/commit/ff141ec))
* Update theme data package ([dc5178a](https://github.com/Autodesk/hig/commit/dc5178a))


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### Features

* Add `INPUT.BOX_TYPE.HORIZONTAL_PADDING` ([92a5820](https://github.com/Autodesk/hig/commit/92a5820))
* Add box type ([44bb5d3](https://github.com/Autodesk/hig/commit/44bb5d3))
* add error state for Input ([10b7875](https://github.com/Autodesk/hig/commit/10b7875))
* add inputRef callback ref prop to pass to input ([926a97e](https://github.com/Autodesk/hig/commit/926a97e))
* add roles for input, text area, form field, checkbox, and icon ([ec2ed75](https://github.com/Autodesk/hig/commit/ec2ed75))
* add shared behaviors package ([c0e755e](https://github.com/Autodesk/hig/commit/c0e755e))
* add tagname prop to input ([3b91917](https://github.com/Autodesk/hig/commit/3b91917))
* Change theme data keys to non capitalized camel case ([4693f7d](https://github.com/Autodesk/hig/commit/4693f7d))
* Migrate all abbreviation tokens to uppercase ([6a30ba5](https://github.com/Autodesk/hig/commit/6a30ba5))
* Pass arbitrary props through to input ([8317dee](https://github.com/Autodesk/hig/commit/8317dee))
* Pass optional HTML id prop to Input ([0277aec](https://github.com/Autodesk/hig/commit/0277aec))
* passes all expected props for an input ([721f74c](https://github.com/Autodesk/hig/commit/721f74c))
* publish input without border and halo ([90a3539](https://github.com/Autodesk/hig/commit/90a3539))
* refactors account and project filters, refines render behavior depending on what combination of accounts and projects is passed to component ([d25e5ad](https://github.com/Autodesk/hig/commit/d25e5ad))
* rename type prop to variant ([7b56805](https://github.com/Autodesk/hig/commit/7b56805))
* **themability:** add exploratory themable components ([7e3d70b](https://github.com/Autodesk/hig/commit/7e3d70b))
* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))
* use latest theme-data ([475437c](https://github.com/Autodesk/hig/commit/475437c))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/input-v2.2.0](https://github.com/Autodesk/hig/compare/@hig/input@2.1.0...@hig/input@2.2.0) (2022-08-28)


### Features

* use latest theme-data ([475437c](https://github.com/Autodesk/hig/commit/475437c))

# [@hig/input-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/input@2.0.0...@hig/input@2.1.0) (2022-01-24)


### Features

* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))

# [@hig/input-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/input@1.3.2...@hig/input@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/input-v1.3.2](https://github.com/Autodesk/hig/compare/@hig/input@1.3.1...@hig/input@1.3.2) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/input-v1.3.1](https://github.com/Autodesk/hig/compare/@hig/input@1.3.0...@hig/input@1.3.1) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))
* skip unit testing ([e33c1e3](https://github.com/Autodesk/hig/commit/e33c1e3))

# [@hig/input-v1.3.0](https://github.com/Autodesk/hig/compare/@hig/input@1.2.2...@hig/input@1.3.0) (2020-08-06)


### Features

* add inputRef callback ref prop to pass to input ([926a97e](https://github.com/Autodesk/hig/commit/926a97e))

# [@hig/input-v1.2.2](https://github.com/Autodesk/hig/compare/@hig/input@1.2.1...@hig/input@1.2.2) (2020-07-28)


### Bug Fixes

* hover styles take precedent over focus ([16e15a4](https://github.com/Autodesk/hig/commit/16e15a4))

# [@hig/input-v1.2.1](https://github.com/Autodesk/hig/compare/@hig/input@1.2.0...@hig/input@1.2.1) (2020-05-12)


### Bug Fixes

* stop using deprecated theme-data roles ([98cde66](https://github.com/Autodesk/hig/commit/98cde66))

# [@hig/input-v1.2.0](https://github.com/Autodesk/hig/compare/@hig/input@1.1.6...@hig/input@1.2.0) (2019-09-05)


### Features

* add error state for Input ([10b7875](https://github.com/Autodesk/hig/commit/10b7875))

# [@hig/input-v1.1.6](https://github.com/Autodesk/hig/compare/@hig/input@1.1.5...@hig/input@1.1.6) (2019-08-07)


### Bug Fixes

* apply focus colour over hover ([abad5ed](https://github.com/Autodesk/hig/commit/abad5ed))

# [@hig/input-v1.1.5](https://github.com/Autodesk/hig/compare/@hig/input@1.1.4...@hig/input@1.1.5) (2019-07-01)


### Bug Fixes

* allow className to be passed down in Input ([bb8e040](https://github.com/Autodesk/hig/commit/bb8e040))

# [@hig/input-v1.1.4](https://github.com/Autodesk/hig/compare/@hig/input@1.1.3...@hig/input@1.1.4) (2019-05-17)


### Bug Fixes

* should take up rest of space in flex container ([9dd7f74](https://github.com/Autodesk/hig/commit/9dd7f74))

# [@hig/input-v1.1.3](https://github.com/Autodesk/hig/compare/@hig/input@1.1.2...@hig/input@1.1.3) (2019-03-27)


### Bug Fixes

* halo top position ([9ab6941](https://github.com/Autodesk/hig/commit/9ab6941))

# [@hig/input-v1.1.2](https://github.com/Autodesk/hig/compare/@hig/input@1.1.1...@hig/input@1.1.2) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([ff141ec](https://github.com/Autodesk/hig/commit/ff141ec))

# [@hig/input-v1.1.1](https://github.com/Autodesk/hig/compare/@hig/input@1.1.0...@hig/input@1.1.1) (2019-03-05)


### Bug Fixes

* input design tweak ([b741e6a](https://github.com/Autodesk/hig/commit/b741e6a))

# [@hig/input-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/input@1.0.4...@hig/input@1.1.0) (2019-02-08)


### Bug Fixes

* bump up theme-context dependency ([b068dab](https://github.com/Autodesk/hig/commit/b068dab))


### Features

* add tagname prop to input ([3b91917](https://github.com/Autodesk/hig/commit/3b91917))

# [@hig/input-v1.0.4](https://github.com/Autodesk/hig/compare/@hig/input@1.0.3...@hig/input@1.0.4) (2019-01-29)


### Bug Fixes

* **input:** fix styles for input ([ccdc7e5](https://github.com/Autodesk/hig/commit/ccdc7e5))

# [@hig/input-v1.0.3](https://github.com/Autodesk/hig/compare/@hig/input@1.0.2...@hig/input@1.0.3) (2019-01-23)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/theme-context to version 2.0.0 ([2377dec](https://github.com/Autodesk/hig/commit/2377dec))

# [@hig/input-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/input@1.0.1...@hig/input@1.0.2) (2019-01-08)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/behaviors to version 1.1.1 ([b535a9c](https://github.com/Autodesk/hig/commit/b535a9c))

# [@hig/input-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/input@1.0.0...@hig/input@1.0.1) (2019-01-04)


### Bug Fixes

* apply updated theme-data roles for input ([ef361c4](https://github.com/Autodesk/hig/commit/ef361c4))

# @hig/input-v1.0.0 (2018-12-11)


### Bug Fixes

* **package:** update emotion to version 10.0.0 ([b829036](https://github.com/Autodesk/hig/commit/b829036))
* combined greenkeeper prs for version updates see pr 1392 ([d0a017a](https://github.com/Autodesk/hig/commit/d0a017a))
* Update theme data package ([dc5178a](https://github.com/Autodesk/hig/commit/dc5178a))


### Features

* rename type prop to variant ([7b56805](https://github.com/Autodesk/hig/commit/7b56805))
* **themability:** add exploratory themable components ([7e3d70b](https://github.com/Autodesk/hig/commit/7e3d70b))
* Add `INPUT.BOX_TYPE.HORIZONTAL_PADDING` ([92a5820](https://github.com/Autodesk/hig/commit/92a5820))
* Add box type ([44bb5d3](https://github.com/Autodesk/hig/commit/44bb5d3))
* add roles for input, text area, form field, checkbox, and icon ([ec2ed75](https://github.com/Autodesk/hig/commit/ec2ed75))
* add shared behaviors package ([c0e755e](https://github.com/Autodesk/hig/commit/c0e755e))
* Change theme data keys to non capitalized camel case ([4693f7d](https://github.com/Autodesk/hig/commit/4693f7d))
* Migrate all abbreviation tokens to uppercase ([6a30ba5](https://github.com/Autodesk/hig/commit/6a30ba5))
* Pass arbitrary props through to input ([8317dee](https://github.com/Autodesk/hig/commit/8317dee))
* Pass optional HTML id prop to Input ([0277aec](https://github.com/Autodesk/hig/commit/0277aec))
* passes all expected props for an input ([721f74c](https://github.com/Autodesk/hig/commit/721f74c))
* publish input without border and halo ([90a3539](https://github.com/Autodesk/hig/commit/90a3539))
* refactors account and project filters, refines render behavior depending on what combination of accounts and projects is passed to component ([d25e5ad](https://github.com/Autodesk/hig/commit/d25e5ad))
