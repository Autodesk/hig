# [@hig/progress-ring-v3.0.0](https://github.com/Autodesk/hig/compare/@hig/progress-ring@2.2.2...@hig/progress-ring@3.0.0) (2023-01-11)


### Bug Fixes

* update svgs ([af6e7e9](https://github.com/Autodesk/hig/commit/af6e7e9))


### BREAKING CHANGES

* all svgs no longer have a mask
- surface prop is no longer used since the background is now transparent
- mask prop is no longer used since the background is now transparent
- classNames are no longer used for the SVG children elements

# [@hig/progress-ring-v2.2.2](https://github.com/Autodesk/hig/compare/@hig/progress-ring@2.2.1...@hig/progress-ring@2.2.2) (2022-11-23)


### Bug Fixes

* utilize cancelAnimationFrame API properly remove requestAnimationFrame listener on Determinate behavior ([8cdb6e0](https://github.com/Autodesk/hig/commit/8cdb6e0))
* utilize cancelAnimationFrame API properly remove requestAnimationFrame listener on Indeterminate behavior ([a5790bd](https://github.com/Autodesk/hig/commit/a5790bd))

# [@hig/progress-ring-v2.2.1](https://github.com/Autodesk/hig/compare/@hig/progress-ring@2.2.0...@hig/progress-ring@2.2.1) (2022-08-23)


### Bug Fixes

* use nodeRef for CSSTransition ([9d1e8b5](https://github.com/Autodesk/hig/commit/9d1e8b5)), closes [/github.com/reactjs/react-transition-group/issues/668#issuecomment-695162879](https://github.com//github.com/reactjs/react-transition-group/issues/668/issues/issuecomment-695162879)

# [@hig/progress-ring-v2.2.0](https://github.com/Autodesk/hig/compare/@hig/progress-ring@2.1.0...@hig/progress-ring@2.2.0) (2022-06-15)


### Features

* update react-transition-group ([56b4f6c](https://github.com/Autodesk/hig/commit/56b4f6c))

# [@hig/progress-ring-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/progress-ring@2.0.0...@hig/progress-ring@2.1.0) (2022-01-24)


### Features

* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))

# [@hig/progress-ring-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/progress-ring@1.2.2...@hig/progress-ring@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/progress-ring-v1.2.2](https://github.com/Autodesk/hig/compare/@hig/progress-ring@1.2.1...@hig/progress-ring@1.2.2) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/progress-ring-v1.2.1](https://github.com/Autodesk/hig/compare/@hig/progress-ring@1.2.0...@hig/progress-ring@1.2.1) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))
* improve proptypes surface ([534a96b](https://github.com/Autodesk/hig/commit/534a96b))
* Modification of the condition associated with the final state of the animation ([670aa99](https://github.com/Autodesk/hig/commit/670aa99))

# [@hig/progress-ring-v1.2.0](https://github.com/Autodesk/hig/compare/@hig/progress-ring@1.1.1...@hig/progress-ring@1.2.0) (2021-02-02)


### Features

* add stylesheet prop, pass down className ([8ddc296](https://github.com/Autodesk/hig/commit/8ddc296))

# [@hig/progress-ring-v1.1.1](https://github.com/Autodesk/hig/compare/@hig/progress-ring@1.1.0...@hig/progress-ring@1.1.1) (2020-05-12)


### Bug Fixes

* stop using deprecated theme-data roles ([a4de3fb](https://github.com/Autodesk/hig/commit/a4de3fb))

# [@hig/progress-ring-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/progress-ring@1.0.2...@hig/progress-ring@1.1.0) (2019-07-08)


### Features

* add props to customize ProgressRing background ([208c523](https://github.com/Autodesk/hig/commit/208c523))

# [@hig/progress-ring-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/progress-ring@1.0.1...@hig/progress-ring@1.0.2) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([8e082ec](https://github.com/Autodesk/hig/commit/8e082ec))

# [@hig/progress-ring-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/progress-ring@1.0.0...@hig/progress-ring@1.0.1) (2019-02-08)


### Bug Fixes

* bump up theme-context dependency ([b068dab](https://github.com/Autodesk/hig/commit/b068dab))

# [@hig/progress-ring-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/progress-ring@0.1.1...@hig/progress-ring@1.0.0) (2019-01-28)


### Features

* **progress-ring:** implement themable progress ring ([cf7ebe4](https://github.com/Autodesk/hig/commit/cf7ebe4))


### BREAKING CHANGES

* **progress-ring:** This implements the new themable API for progress ring.
Some CSS class names were dropped but otherwise usage remains the same.

# [@hig/progress-ring-v0.1.1](https://github.com/Autodesk/hig/compare/@hig/progress-ring@0.1.0...@hig/progress-ring@0.1.1) (2018-10-08)


### Bug Fixes

* console error on progress ring default props ([f37f493](https://github.com/Autodesk/hig/commit/f37f493))

# [@hig/progress-ring-v0.1.0](https://github.com/Autodesk/hig/compare/@hig/progress-ring@0.0.0...@hig/progress-ring@0.1.0) (2018-09-11)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))


### Features

* **progress-ring:** Add ProgressRing placeholders ([d315571](https://github.com/Autodesk/hig/commit/d315571))
* remove vanilla from progress-ring ([8eca8fa](https://github.com/Autodesk/hig/commit/8eca8fa))
