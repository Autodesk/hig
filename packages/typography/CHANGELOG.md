# [@hig/typography-v2.2.0](https://github.com/Autodesk/hig/compare/@hig/typography@2.1.0...@hig/typography@2.2.0) (2022-08-26)


### Features

* use latest theme-data ([ca88bb6](https://github.com/Autodesk/hig/commit/ca88bb6))

# [@hig/typography-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/typography@2.0.0...@hig/typography@2.1.0) (2022-01-24)


### Features

* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))

# [@hig/typography-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/typography@1.2.2...@hig/typography@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/typography-v1.2.2](https://github.com/Autodesk/hig/compare/@hig/typography@1.2.1...@hig/typography@1.2.2) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/typography-v1.2.1](https://github.com/Autodesk/hig/compare/@hig/typography@1.2.0...@hig/typography@1.2.1) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))

# [@hig/typography-v1.2.0](https://github.com/Autodesk/hig/compare/@hig/typography@1.1.0...@hig/typography@1.2.0) (2021-01-15)


### Features

* pass down a callback ref to root element ([1746795](https://github.com/Autodesk/hig/commit/1746795))

# [@hig/typography-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/typography@1.0.4...@hig/typography@1.1.0) (2020-10-13)


### Features

* Add stylesheet prop ([85dfd86](https://github.com/Autodesk/hig/commit/85dfd86))

# [@hig/typography-v1.0.4](https://github.com/Autodesk/hig/compare/@hig/typography@1.0.3...@hig/typography@1.0.4) (2019-06-06)


### Bug Fixes

* break out className from otherProps ([7a38584](https://github.com/Autodesk/hig/commit/7a38584))
* enable passing className prop ([25cd959](https://github.com/Autodesk/hig/commit/25cd959))

# [@hig/typography-v1.0.3](https://github.com/Autodesk/hig/compare/@hig/typography@1.0.2...@hig/typography@1.0.3) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([966edc1](https://github.com/Autodesk/hig/commit/966edc1))

# [@hig/typography-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/typography@1.0.1...@hig/typography@1.0.2) (2019-02-08)


### Bug Fixes

* bump up theme-context dependency ([b068dab](https://github.com/Autodesk/hig/commit/b068dab))

# [@hig/typography-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/typography@1.0.0...@hig/typography@1.0.1) (2019-01-23)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/theme-context to version 2.0.0 ([3057713](https://github.com/Autodesk/hig/commit/3057713))

# [@hig/typography-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/typography@0.1.4...@hig/typography@1.0.0) (2019-01-09)


### Bug Fixes

* add 600 to valid typography font weights ([5552838](https://github.com/Autodesk/hig/commit/5552838))


### Features

* a new API for Typography ([a589155](https://github.com/Autodesk/hig/commit/a589155)), closes [#222934](https://github.com/Autodesk/hig/issues/222934)
* allow Typography to accept arbitrary props ([0b5617a](https://github.com/Autodesk/hig/commit/0b5617a))
* enable passing elementType to Typography ([6025d97](https://github.com/Autodesk/hig/commit/6025d97))


### BREAKING CHANGES

* Typography 0.1.4 to 1.0.0 Migration

This update contains significant breaking changes to the Typography API.
Most notably, the helper Typography components `Bold`, `Body`,
`Caption`, `Disabled`, `H1`, `H2`, `H3`, `Sub1`, `Sub2`, or `Text` no
longer exist. You can achieve the same behavior with...

* `<Bold text="hi" />`
  ->
  `<Typography fontWeight="bold">hi</Typography>`

* `<Body text="hi" />`
   ->
  `<Typography>hi</Typography>` or
  `<Typography variant="body">hi</Typography>`

* `<Caption text="hi" />`
  ->
  `<Typography variant="caption">hi</Typography>`

* `<Disabled text="hi" />`
  ->
  `<Typography disabled={true}>hi</Typography>`

* `<H1 text="hi" />`
  ->
  `<Typography variant="h1">hi</Typography>`

* `<H2 text="hi" />`
  ->
  `<Typography variant="h2">hi</Typography>`

* `<H3 text="hi" />`
  ->
  `<Typography variant="h3">hi</Typography>`

* `<Text text="hi"/>`
  ->
  `<Typography>hi</Typography>` or
  `<Typography variant="body">hi</Typography>`

`<Sub1 />` and `<Sub2 />` can be achieved by using the style prop with
any styles needed. For instance to get the old `<Sub1 />` look, use...
```

# [@hig/typography-v0.1.4](https://github.com/Autodesk/hig/compare/@hig/typography@0.1.3...@hig/typography@0.1.4) (2018-08-23)


### Bug Fixes

* headers can have colors ([f49276f](https://github.com/Autodesk/hig/commit/f49276f))

<a name="@hig/typography-v0.1.3"></a>
# [@hig/typography-v0.1.3](https://github.com/Autodesk/hig/compare/@hig/typography@0.1.2...@hig/typography@0.1.3) (2018-07-06)


### Bug Fixes

* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))

<a name="@hig/typography-v0.1.2"></a>
# [@hig/typography-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/typography@0.1.1...@hig/typography@0.1.2) (2018-06-20)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
