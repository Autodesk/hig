# @weave-design/rich-text-v1.0.0 (2023-02-23)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))
* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))
* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))
* margin bottom of the rich-text component deleted ([9db610c](https://github.com/Autodesk/hig/commit/9db610c))
* **presentation:** correct styling ([a1c5f81](https://github.com/Autodesk/hig/commit/a1c5f81))
* **presentation:** correct typography font ([6cadf3a](https://github.com/Autodesk/hig/commit/6cadf3a))
* stop using deprecated theme-data roles ([4358da8](https://github.com/Autodesk/hig/commit/4358da8))
* theme-context and theme-data as peer dependencies ([0d268eb](https://github.com/Autodesk/hig/commit/0d268eb))


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### Features

* a new API and theming for RichText ([f9c3d16](https://github.com/Autodesk/hig/commit/f9c3d16))
* add stylesheet prop ([891ba75](https://github.com/Autodesk/hig/commit/891ba75))
* allow className to be passed down ([2b6bb16](https://github.com/Autodesk/hig/commit/2b6bb16))
* Mark package compatibility with React 16 ([6eaeb27](https://github.com/Autodesk/hig/commit/6eaeb27))
* **rich-text:** Move RichText component to its own package ([8d27c41](https://github.com/Autodesk/hig/commit/8d27c41))
* **rich-text:** Specify classnames dependency ([c99ffe5](https://github.com/Autodesk/hig/commit/c99ffe5))
* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))
* use latest theme-data ([8e24328](https://github.com/Autodesk/hig/commit/8e24328))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.
* * rm size prop for small and large sizes in favor of theme density
* use stylesheet function for RichText that generates new CSS classes,
eliminating the need for `hig__rich-text`
* consume `ThemeContext`, enabling theming with the new styles

Migration steps:

If you were previously using the `size` prop to change the sizes and
spacings rendered, you can achieve the same behavior with theme density.
For instance, if you previously used...

```
function MyApp() {
  <RichText size="large">
    <h1>Heading</h1>
    <p>This is a paragraph.</p>
  </RichText>
}
```

...

```
import MediumDensityTheme from '@hig/theme-data/build/esm/lightGrayMediumDensityTheme';
import ThemeContext from '@hig/theme-context';

function MyApp() {
  <ThemeContext.Provider value={MediumDensityTheme}>
    <RichText>
      <h1>Heading</h1>
      <p>This is a paragraph.</p>
    </RichText>
  </ThemeContext.Provider>
}
```

# [@hig/rich-text-v2.2.0](https://github.com/Autodesk/hig/compare/@hig/rich-text@2.1.1...@hig/rich-text@2.2.0) (2022-08-28)


### Features

* use latest theme-data ([8e24328](https://github.com/Autodesk/hig/commit/8e24328))

# [@hig/rich-text-v2.1.1](https://github.com/Autodesk/hig/compare/@hig/rich-text@2.1.0...@hig/rich-text@2.1.1) (2022-04-10)


### Bug Fixes

* margin bottom of the rich-text component deleted ([9db610c](https://github.com/Autodesk/hig/commit/9db610c))

# [@hig/rich-text-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/rich-text@2.0.0...@hig/rich-text@2.1.0) (2022-01-24)


### Features

* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))

# [@hig/rich-text-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/rich-text@1.2.2...@hig/rich-text@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/rich-text-v1.2.2](https://github.com/Autodesk/hig/compare/@hig/rich-text@1.2.1...@hig/rich-text@1.2.2) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/rich-text-v1.2.1](https://github.com/Autodesk/hig/compare/@hig/rich-text@1.2.0...@hig/rich-text@1.2.1) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))

# [@hig/rich-text-v1.2.0](https://github.com/Autodesk/hig/compare/@hig/rich-text@1.1.1...@hig/rich-text@1.2.0) (2021-02-24)


### Features

* add stylesheet prop ([891ba75](https://github.com/Autodesk/hig/commit/891ba75))

# [@hig/rich-text-v1.1.1](https://github.com/Autodesk/hig/compare/@hig/rich-text@1.1.0...@hig/rich-text@1.1.1) (2020-05-12)


### Bug Fixes

* stop using deprecated theme-data roles ([4358da8](https://github.com/Autodesk/hig/commit/4358da8))

# [@hig/rich-text-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/rich-text@1.0.1...@hig/rich-text@1.1.0) (2020-02-21)


### Features

* allow className to be passed down ([2b6bb16](https://github.com/Autodesk/hig/commit/2b6bb16))

# [@hig/rich-text-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/rich-text@1.0.0...@hig/rich-text@1.0.1) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([0d268eb](https://github.com/Autodesk/hig/commit/0d268eb))

# [@hig/rich-text-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/rich-text@0.1.4...@hig/rich-text@1.0.0) (2019-02-08)


### Features

* a new API and theming for RichText ([f9c3d16](https://github.com/Autodesk/hig/commit/f9c3d16))


### BREAKING CHANGES

* * rm size prop for small and large sizes in favor of theme density
* use stylesheet function for RichText that generates new CSS classes,
eliminating the need for `hig__rich-text`
* consume `ThemeContext`, enabling theming with the new styles

Migration steps:

If you were previously using the `size` prop to change the sizes and
spacings rendered, you can achieve the same behavior with theme density.
For instance, if you previously used...

```
function MyApp() {
  <RichText size="large">
    <h1>Heading</h1>
    <p>This is a paragraph.</p>
  </RichText>
}
```

...

```
import MediumDensityTheme from '@hig/theme-data/build/esm/lightGrayMediumDensityTheme';
import ThemeContext from '@hig/theme-context';

function MyApp() {
  <ThemeContext.Provider value={MediumDensityTheme}>
    <RichText>
      <h1>Heading</h1>
      <p>This is a paragraph.</p>
    </RichText>
  </ThemeContext.Provider>
}
```

# [@hig/rich-text-v0.1.4](https://github.com/Autodesk/hig/compare/@hig/rich-text@0.1.3...@hig/rich-text@0.1.4) (2018-10-08)


### Bug Fixes

* **presentation:** correct styling ([a1c5f81](https://github.com/Autodesk/hig/commit/a1c5f81))
* **presentation:** correct typography font ([6cadf3a](https://github.com/Autodesk/hig/commit/6cadf3a))

<a name="@hig/rich-text-v0.1.3"></a>
# [@hig/rich-text-v0.1.3](https://github.com/Autodesk/hig/compare/@hig/rich-text@0.1.2...@hig/rich-text@0.1.3) (2018-07-06)


### Bug Fixes

* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))

<a name="@hig/rich-text-v0.1.2"></a>
# [@hig/rich-text-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/rich-text@0.1.1...@hig/rich-text@0.1.2) (2018-06-20)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
