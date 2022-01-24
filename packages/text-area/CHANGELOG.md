# [@hig/text-area-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/text-area@2.0.0...@hig/text-area@2.1.0) (2022-01-24)


### Features

* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))

# [@hig/text-area-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/text-area@1.3.2...@hig/text-area@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/text-area-v1.3.2](https://github.com/Autodesk/hig/compare/@hig/text-area@1.3.1...@hig/text-area@1.3.2) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/text-area-v1.3.1](https://github.com/Autodesk/hig/compare/@hig/text-area@1.3.0...@hig/text-area@1.3.1) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))

# [@hig/text-area-v1.3.0](https://github.com/Autodesk/hig/compare/@hig/text-area@1.2.1...@hig/text-area@1.3.0) (2021-01-15)


### Features

* allow ref forwarding to HTML textarea ([635c19f](https://github.com/Autodesk/hig/commit/635c19f))

# [@hig/text-area-v1.2.1](https://github.com/Autodesk/hig/compare/@hig/text-area@1.2.0...@hig/text-area@1.2.1) (2020-05-13)


### Bug Fixes

* stop using deprecated theme-data roles ([099946d](https://github.com/Autodesk/hig/commit/099946d))

# [@hig/text-area-v1.2.0](https://github.com/Autodesk/hig/compare/@hig/text-area@1.1.4...@hig/text-area@1.2.0) (2019-07-09)


### Features

* add stylesheet prop to TextArea ([0f14579](https://github.com/Autodesk/hig/commit/0f14579))

# [@hig/text-area-v1.1.4](https://github.com/Autodesk/hig/compare/@hig/text-area@1.1.3...@hig/text-area@1.1.4) (2019-07-01)


### Bug Fixes

* allow className to be passed down in TextArea ([fc8928a](https://github.com/Autodesk/hig/commit/fc8928a))

# [@hig/text-area-v1.1.3](https://github.com/Autodesk/hig/compare/@hig/text-area@1.1.2...@hig/text-area@1.1.3) (2019-05-22)


### Bug Fixes

* remove gap between halo and textarea ([190cf36](https://github.com/Autodesk/hig/commit/190cf36))

# [@hig/text-area-v1.1.2](https://github.com/Autodesk/hig/compare/@hig/text-area@1.1.1...@hig/text-area@1.1.2) (2019-03-20)


### Bug Fixes

* restore focus/hover halos ([fcf06a2](https://github.com/Autodesk/hig/commit/fcf06a2))

# [@hig/text-area-v1.1.1](https://github.com/Autodesk/hig/compare/@hig/text-area@1.1.0...@hig/text-area@1.1.1) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([fe9267f](https://github.com/Autodesk/hig/commit/fe9267f))

# [@hig/text-area-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/text-area@1.0.0...@hig/text-area@1.1.0) (2019-03-08)


### Features

* resizeable text-area ([a1f406f](https://github.com/Autodesk/hig/commit/a1f406f))

# [@hig/text-area-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/text-area@0.2.0...@hig/text-area@1.0.0) (2019-02-08)


### Features

* make text-area themeable ([65ea3bb](https://github.com/Autodesk/hig/commit/65ea3bb))


### BREAKING CHANGES

* * Removed the following props: instructions, label, defaultValue
* Allow all native text-area html attributes to pass down
* The web light default look now looks like the updated designs but with the legacy colors
* The text-area component is now composed from an input component

# [@hig/text-area-v0.2.0](https://github.com/Autodesk/hig/compare/@hig/text-area@0.1.2...@hig/text-area@0.2.0) (2018-10-31)


### Features

* add `maxLength`, `minLenght`, and `readOnly` props to text inputs ([084ca94](https://github.com/Autodesk/hig/commit/084ca94))

# [@hig/text-area-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/text-area@0.1.1...@hig/text-area@0.1.2) (2018-10-08)


### Bug Fixes

* **presentation:** add missing colors mixin ([895a3b5](https://github.com/Autodesk/hig/commit/895a3b5))

# [@hig/text-area-v0.1.1](https://github.com/Autodesk/hig/compare/@hig/text-area@0.1.0...@hig/text-area@0.1.1) (2018-08-24)


### Bug Fixes

* **behavior:** bump [@hig](https://github.com/hig)/utils dependents to v0.2.1 ([48b74d0](https://github.com/Autodesk/hig/commit/48b74d0))

<a name="@hig/text-area-v0.1.0"></a>
# [@hig/text-area-v0.1.0](https://github.com/Autodesk/hig/compare/@hig/text-area@0.0.0...@hig/text-area@0.1.0) (2018-07-26)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))
* generate one ID per component instance instead of upon render ([0fbc554](https://github.com/Autodesk/hig/commit/0fbc554))
* margins around textarea addressed for Chrome ([4c89e09](https://github.com/Autodesk/hig/commit/4c89e09))


### Features

* adds markup and styles to TextAreaPresenter ([8174d84](https://github.com/Autodesk/hig/commit/8174d84))
* introduces state for accurate behavior around instructions, label, required, and value ([c42bd91](https://github.com/Autodesk/hig/commit/c42bd91))
* scaffolds TextArea and TextAreaPresenter component ([c513a5c](https://github.com/Autodesk/hig/commit/c513a5c))
