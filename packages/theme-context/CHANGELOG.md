# @weave-design/theme-context-v1.0.0 (2023-02-22)


### Bug Fixes

* **behavior:** refactor context to eliminate `childContextTypes` errors ([fcffd31](https://github.com/Autodesk/hig/commit/fcffd31))
* change default theme LightGray -> WebLight ([7d50a68](https://github.com/Autodesk/hig/commit/7d50a68))
* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))
* manually bump version ([169213d](https://github.com/Autodesk/hig/commit/169213d))
* move theme-data to peer dependency ([151e178](https://github.com/Autodesk/hig/commit/151e178))
* security update for create-react-context ([6bb8edf](https://github.com/Autodesk/hig/commit/6bb8edf))
* throws role missing warning when getting roles only ([2c4bbf6](https://github.com/Autodesk/hig/commit/2c4bbf6))
* unit testing ([29a1a1b](https://github.com/Autodesk/hig/commit/29a1a1b))
* Update README usage ([b1db70d](https://github.com/Autodesk/hig/commit/b1db70d))


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### Features

* add React18 support move namespace ([53a8785](https://github.com/Autodesk/hig/commit/53a8785))
* console warn about use of deprecated roles ([5b85653](https://github.com/Autodesk/hig/commit/5b85653))
* make light gray the default theme ([21b9da2](https://github.com/Autodesk/hig/commit/21b9da2))
* update theme-data peerDep ([f35fce7](https://github.com/Autodesk/hig/commit/f35fce7))
* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))
* use createContext from React ([8a283ef](https://github.com/Autodesk/hig/commit/8a283ef))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.
* web light replaced as the default theme, to get that theme back pass that theme from theme-data as via the value prop with ThemeContext.Provider
* If you would like to continue using the HIG Light Gray theme now that
it's no longer the default, you will need to specify that theme when you
initialize the `ThemeContext.Provider`. For instance

```
import HIGLightTheme from "@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json";

// ...

<ThemeContext.Provider value={HIGLightTheme}>
  <ThemeContext.Consumer>
    // ...
  </ThemeContext.Consumer>
</ThemeContext.Provider>
```

# [@hig/theme-context-v4.3.0](https://github.com/Autodesk/hig/compare/@hig/theme-context@4.2.0...@hig/theme-context@4.3.0) (2022-07-19)


### Features

* update theme-data peerDep ([f35fce7](https://github.com/Autodesk/hig/commit/f35fce7))

# [@hig/theme-context-v4.2.0](https://github.com/Autodesk/hig/compare/@hig/theme-context@4.1.0...@hig/theme-context@4.2.0) (2022-06-27)


### Features

* use createContext from React ([8a283ef](https://github.com/Autodesk/hig/commit/8a283ef))

# [@hig/theme-context-v4.1.0](https://github.com/Autodesk/hig/compare/@hig/theme-context@4.0.0...@hig/theme-context@4.1.0) (2022-01-24)


### Features

* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))

# [@hig/theme-context-v4.0.0](https://github.com/Autodesk/hig/compare/@hig/theme-context@3.0.3...@hig/theme-context@4.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/theme-context-v3.0.3](https://github.com/Autodesk/hig/compare/@hig/theme-context@3.0.2...@hig/theme-context@3.0.3) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/theme-context-v3.0.2](https://github.com/Autodesk/hig/compare/@hig/theme-context@3.0.1...@hig/theme-context@3.0.2) (2022-01-12)


### Bug Fixes

* unit testing ([29a1a1b](https://github.com/Autodesk/hig/commit/29a1a1b))

# [@hig/theme-context-v3.0.1](https://github.com/Autodesk/hig/compare/@hig/theme-context@3.0.0...@hig/theme-context@3.0.1) (2020-10-14)


### Bug Fixes

* security update for create-react-context ([6bb8edf](https://github.com/Autodesk/hig/commit/6bb8edf))

# [@hig/theme-context-v3.0.0](https://github.com/Autodesk/hig/compare/@hig/theme-context@2.1.3...@hig/theme-context@3.0.0) (2019-04-04)


### Features

* make light gray the default theme ([21b9da2](https://github.com/Autodesk/hig/commit/21b9da2))


### BREAKING CHANGES

* web light replaced as the default theme, to get that theme back pass that theme from theme-data as via the value prop with ThemeContext.Provider

# [@hig/theme-context-v2.1.3](https://github.com/Autodesk/hig/compare/@hig/theme-context@2.1.2...@hig/theme-context@2.1.3) (2019-03-13)


### Bug Fixes

* move theme-data to peer dependency ([151e178](https://github.com/Autodesk/hig/commit/151e178))

# [@hig/theme-context-v2.1.2](https://github.com/Autodesk/hig/compare/@hig/theme-context@2.1.1...@hig/theme-context@2.1.2) (2019-03-08)


### Bug Fixes

* throws role missing warning when getting roles only ([2c4bbf6](https://github.com/Autodesk/hig/commit/2c4bbf6))

# [@hig/theme-context-v2.1.1](https://github.com/Autodesk/hig/compare/@hig/theme-context@2.1.0...@hig/theme-context@2.1.1) (2019-03-05)


### Bug Fixes

* manually bump version ([169213d](https://github.com/Autodesk/hig/commit/169213d))

# [@hig/theme-context-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/theme-context@2.0.0...@hig/theme-context@2.1.0) (2019-02-05)


### Features

* console warn about use of deprecated roles ([5b85653](https://github.com/Autodesk/hig/commit/5b85653))

# [@hig/theme-context-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/theme-context@1.0.1...@hig/theme-context@2.0.0) (2019-01-17)


### Bug Fixes

* change default theme LightGray -> WebLight ([7d50a68](https://github.com/Autodesk/hig/commit/7d50a68))


### BREAKING CHANGES

* If you would like to continue using the HIG Light Gray theme now that
it's no longer the default, you will need to specify that theme when you
initialize the `ThemeContext.Provider`. For instance

```
import HIGLightTheme from "@hig/theme-data/build/json/lightGrayMediumDensityTheme/theme.json";

// ...

<ThemeContext.Provider value={HIGLightTheme}>
  <ThemeContext.Consumer>
    // ...
  </ThemeContext.Consumer>
</ThemeContext.Provider>
```

# [@hig/theme-context-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/theme-context@1.0.0...@hig/theme-context@1.0.1) (2018-11-27)


### Bug Fixes

* Update README usage ([b1db70d](https://github.com/Autodesk/hig/commit/b1db70d))

# @hig/theme-context-v1.0.0 (2018-10-30)


### Bug Fixes

* **behavior:** refactor context to eliminate `childContextTypes` errors ([fcffd31](https://github.com/Autodesk/hig/commit/fcffd31))

# [@hig/themes-v0.4.0](https://github.com/Autodesk/hig/compare/@hig/themes@0.3.0...@hig/themes@0.4.0) (2018-09-26)


### Features

* Change theme data keys to non capitalized camel case ([4693f7d](https://github.com/Autodesk/hig/commit/4693f7d))
* Migrate all abbreviation tokens to uppercase ([6a30ba5](https://github.com/Autodesk/hig/commit/6a30ba5))

<a name="@hig/themes-v0.3.0"></a>
# [@hig/themes-v0.3.0](https://github.com/Autodesk/hig/compare/@hig/themes@0.2.1...@hig/themes@0.3.0) (2018-07-26)


### Features

* publish low and high density themes ([ebe4b71](https://github.com/Autodesk/hig/commit/ebe4b71))

<a name="@hig/themes-v0.2.1"></a>
# [@hig/themes-v0.2.1](https://github.com/Autodesk/hig/compare/@hig/themes@0.2.0...@hig/themes@0.2.1) (2018-07-19)


### Bug Fixes

* **package:** upgrade [@hig](https://github.com/hig)/theme-data-poc to fix failed imports ([0afb8f8](https://github.com/Autodesk/hig/commit/0afb8f8))

<a name="@hig/themes-v0.2.0"></a>
# [@hig/themes-v0.2.0](https://github.com/Autodesk/hig/compare/@hig/themes@0.1.3...@hig/themes@0.2.0) (2018-07-18)


### Features

* **themability:** add exploratory themable components ([7e3d70b](https://github.com/Autodesk/hig/commit/7e3d70b))
* **themability:** ThemeContext provides theme data ([4778ea5](https://github.com/Autodesk/hig/commit/4778ea5))

<a name="@hig/themes-v0.1.3"></a>
# [@hig/themes-v0.1.3](https://github.com/Autodesk/hig/compare/@hig/themes@0.1.2...@hig/themes@0.1.3) (2018-07-06)


### Bug Fixes

* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))

<a name="@hig/themes-v0.1.2"></a>
# [@hig/themes-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/themes@0.1.1...@hig/themes@0.1.2) (2018-06-20)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
