# [@hig/label-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/label@1.2.2...@hig/label@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/label-v1.2.2](https://github.com/Autodesk/hig/compare/@hig/label@1.2.1...@hig/label@1.2.2) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/label-v1.2.1](https://github.com/Autodesk/hig/compare/@hig/label@1.2.0...@hig/label@1.2.1) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))

# [@hig/label-v1.2.0](https://github.com/Autodesk/hig/compare/@hig/label@1.1.1...@hig/label@1.2.0) (2021-01-25)


### Features

* add stylesheet prop and pass down className ([7737636](https://github.com/Autodesk/hig/commit/7737636))

# [@hig/label-v1.1.1](https://github.com/Autodesk/hig/compare/@hig/label@1.1.0...@hig/label@1.1.1) (2020-05-13)


### Bug Fixes

* stop using deprecated theme-data-roles ([07524b9](https://github.com/Autodesk/hig/commit/07524b9))

# [@hig/label-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/label@1.0.3...@hig/label@1.1.0) (2019-05-17)


### Features

* add variant prop ([49f35de](https://github.com/Autodesk/hig/commit/49f35de))

# [@hig/label-v1.0.3](https://github.com/Autodesk/hig/compare/@hig/label@1.0.2...@hig/label@1.0.3) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([47e6905](https://github.com/Autodesk/hig/commit/47e6905))

# [@hig/label-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/label@1.0.1...@hig/label@1.0.2) (2019-02-08)


### Bug Fixes

* bump up theme-context dependency ([b068dab](https://github.com/Autodesk/hig/commit/b068dab))

# [@hig/label-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/label@1.0.0...@hig/label@1.0.1) (2019-01-23)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/theme-context to version 2.0.0 ([5bf10aa](https://github.com/Autodesk/hig/commit/5bf10aa))

# @hig/label-v1.0.0 (2019-01-09)


### Bug Fixes

* combined greenkeeper prs for version updates see pr 1392 ([d0a017a](https://github.com/Autodesk/hig/commit/d0a017a))
* Update theme data package ([dc5178a](https://github.com/Autodesk/hig/commit/dc5178a))


### Features

* add roles for input, text area, form field, checkbox, and icon ([ec2ed75](https://github.com/Autodesk/hig/commit/ec2ed75))
* allow label to accept arbitrary props ([bdfdb4f](https://github.com/Autodesk/hig/commit/bdfdb4f))
* Change theme data keys to non capitalized camel case ([4693f7d](https://github.com/Autodesk/hig/commit/4693f7d))
* **label:** disabled styling should use opacity instead of colors ([556b4c3](https://github.com/Autodesk/hig/commit/556b4c3))
* **themability:** add exploratory themable components ([7e3d70b](https://github.com/Autodesk/hig/commit/7e3d70b))
* draws font color from theme data ([df7cd15](https://github.com/Autodesk/hig/commit/df7cd15))
