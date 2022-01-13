# [@hig/text-link-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/text-link@1.2.2...@hig/text-link@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/text-link-v1.2.2](https://github.com/Autodesk/hig/compare/@hig/text-link@1.2.1...@hig/text-link@1.2.2) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/text-link-v1.2.1](https://github.com/Autodesk/hig/compare/@hig/text-link@1.2.0...@hig/text-link@1.2.1) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))

# [@hig/text-link-v1.2.0](https://github.com/Autodesk/hig/compare/@hig/text-link@1.1.1...@hig/text-link@1.2.0) (2020-09-09)


### Features

* add stylesheet prop for TextLink ([4507a2c](https://github.com/Autodesk/hig/commit/4507a2c))

# [@hig/text-link-v1.1.1](https://github.com/Autodesk/hig/compare/@hig/text-link@1.1.0...@hig/text-link@1.1.1) (2020-05-12)


### Bug Fixes

* stop using deprecated theme-data roles ([0bc4ada](https://github.com/Autodesk/hig/commit/0bc4ada))

# [@hig/text-link-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/text-link@1.0.1...@hig/text-link@1.1.0) (2020-02-21)


### Features

* allow className to be passed down ([e0c7205](https://github.com/Autodesk/hig/commit/e0c7205))

# [@hig/text-link-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/text-link@1.0.0...@hig/text-link@1.0.1) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([c2ea6a5](https://github.com/Autodesk/hig/commit/c2ea6a5))

# [@hig/text-link-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/text-link@0.2.0...@hig/text-link@1.0.0) (2019-02-05)


### Features

* **text-link:** implement themability ([88ba434](https://github.com/Autodesk/hig/commit/88ba434))
* **text-link:** plug in behaviors ([bb91662](https://github.com/Autodesk/hig/commit/bb91662))


### BREAKING CHANGES

* **text-link:** this implements themable text links.

* CSS class names have been removed
* Type `type` property is no longer available.

# [@hig/text-link-v0.2.0](https://github.com/Autodesk/hig/compare/@hig/text-link@0.1.3...@hig/text-link@0.2.0) (2018-08-16)


### Features

* make textlink link prop optional and render a span tag if not provided ([af412b3](https://github.com/Autodesk/hig/commit/af412b3))

<a name="@hig/text-link-v0.1.3"></a>
# [@hig/text-link-v0.1.3](https://github.com/Autodesk/hig/compare/@hig/text-link@0.1.2...@hig/text-link@0.1.3) (2018-07-06)


### Bug Fixes

* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))

<a name="@hig/text-link-v0.1.2"></a>
# [@hig/text-link-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/text-link@0.1.1...@hig/text-link@0.1.2) (2018-06-20)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
