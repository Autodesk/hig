# [@hig/banner-v2.3.2](https://github.com/Autodesk/hig/compare/@hig/banner@2.3.1...@hig/banner@2.3.2) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))
* Added animation support for visible prop ([3956cba](https://github.com/Autodesk/hig/commit/3956cba))
* change functions enzyme ([99b2ff5](https://github.com/Autodesk/hig/commit/99b2ff5))

# [@hig/banner-v2.3.1](https://github.com/Autodesk/hig/compare/@hig/banner@2.3.0...@hig/banner@2.3.1) (2021-10-11)


### Bug Fixes

* removed blue background from alert and error icons ([#2525](https://github.com/Autodesk/hig/issues/2525)) ([e85ba49](https://github.com/Autodesk/hig/commit/e85ba49))

# [@hig/banner-v2.3.0](https://github.com/Autodesk/hig/compare/@hig/banner@2.2.0...@hig/banner@2.3.0) (2021-05-03)


### Features

* update snaps ([d50a8e5](https://github.com/Autodesk/hig/commit/d50a8e5))

# [@hig/banner-v2.2.0](https://github.com/Autodesk/hig/compare/@hig/banner@2.1.2...@hig/banner@2.2.0) (2020-07-16)


### Bug Fixes

* dismissButtonTitle prop was not working ([e2e222d](https://github.com/Autodesk/hig/commit/e2e222d))


### Features

* add className to banner ([5c023f6](https://github.com/Autodesk/hig/commit/5c023f6))
* add stylesheet prop to banner ([8b813c5](https://github.com/Autodesk/hig/commit/8b813c5))

# [@hig/banner-v2.1.2](https://github.com/Autodesk/hig/compare/@hig/banner@2.1.1...@hig/banner@2.1.2) (2020-05-13)


### Bug Fixes

* stop using deprecated theme-data roles ([3de065c](https://github.com/Autodesk/hig/commit/3de065c))

# [@hig/banner-v2.1.1](https://github.com/Autodesk/hig/compare/@hig/banner@2.1.0...@hig/banner@2.1.1) (2019-08-07)


### Bug Fixes

* in verbose dividers should not be included ([5f7da9a](https://github.com/Autodesk/hig/commit/5f7da9a))

# [@hig/banner-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/banner@2.0.3...@hig/banner@2.1.0) (2019-07-26)


### Features

* dismiss button when there is no onDismiss function passed ([2371299](https://github.com/Autodesk/hig/commit/2371299))

# [@hig/banner-v2.0.3](https://github.com/Autodesk/hig/compare/@hig/banner@2.0.2...@hig/banner@2.0.3) (2019-07-11)


### Bug Fixes

* update Banner to the newest Icons version ([e91c6cd](https://github.com/Autodesk/hig/commit/e91c6cd))

# [@hig/banner-v2.0.2](https://github.com/Autodesk/hig/compare/@hig/banner@2.0.1...@hig/banner@2.0.2) (2019-06-25)


### Bug Fixes

* should use icon-button for dismiss instead of icon ([9c72ac5](https://github.com/Autodesk/hig/commit/9c72ac5))
* swap icons based on density ([0c45e4c](https://github.com/Autodesk/hig/commit/0c45e4c))

# [@hig/banner-v2.0.1](https://github.com/Autodesk/hig/compare/@hig/banner@2.0.0...@hig/banner@2.0.1) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([75d3573](https://github.com/Autodesk/hig/commit/75d3573))

# [@hig/banner-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/banner@1.0.2...@hig/banner@2.0.0) (2019-02-28)


### Features

* **banner:** themable banners ([42b6d60](https://github.com/Autodesk/hig/commit/42b6d60))
* allow children to be node ([30343a7](https://github.com/Autodesk/hig/commit/30343a7))


### BREAKING CHANGES

* **banner:** * CSS class names have been removed
* `label` and `labeledBy` props are no longer supported

# [@hig/banner-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/banner@1.0.1...@hig/banner@1.0.2) (2019-01-23)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/icons to version 2.0.0 ([8bd33c8](https://github.com/Autodesk/hig/commit/8bd33c8))

# [@hig/banner-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/banner@1.0.0...@hig/banner@1.0.1) (2018-12-06)


### Bug Fixes

* combined greenkeeper prs for version updates see pr 1392 ([d0a017a](https://github.com/Autodesk/hig/commit/d0a017a))

# [@hig/banner-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/banner@0.1.6...@hig/banner@1.0.0) (2018-12-04)


### BREAKING

* **icon/icon-button:** Removes [@hig](https://github.com/hig)/icon and refactor [@hig](https://github.com/hig)/icon-button to use [@hig](https://github.com/hig)/icons ([49d78f4](https://github.com/Autodesk/hig/commit/49d78f4))


### Bug Fixes

* **storybook:** Add back Icon stories ([f38f2d4](https://github.com/Autodesk/hig/commit/f38f2d4))


### BREAKING CHANGES

* **icon/icon-button:** Removes @hig/icon
* **icon/icon-button:** Use icon prop instead of name or svg in @hig/icon-button to render Icon/svg
* **icon/icon-button:** No longer export `names` from @hig/icon-button

Usage:
```
import { Assets24 } from "@hig/icons"

function MyComponent() {
  return (
    <IconButton
      icon={<Assets24 />}
      onClick={() => console.log('Clicked it.')}
    />
  );
}
```

# [@hig/banner-v0.1.6](https://github.com/Autodesk/hig/compare/@hig/banner@0.1.5...@hig/banner@0.1.6) (2018-10-08)


### Bug Fixes

* update dependencies ([70fb27c](https://github.com/Autodesk/hig/commit/70fb27c))

# [@hig/banner-v0.1.5](https://github.com/Autodesk/hig/compare/@hig/banner@0.1.4...@hig/banner@0.1.5) (2018-08-07)


### Bug Fixes

* update icon sets ([9281451](https://github.com/Autodesk/hig/commit/9281451))

<a name="@hig/banner-v0.1.4"></a>
# [@hig/banner-v0.1.4](https://github.com/Autodesk/hig/compare/@hig/banner@0.1.3...@hig/banner@0.1.4) (2018-07-06)


### Bug Fixes

* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))

<a name="@hig/banner-v0.1.3"></a>
# [@hig/banner-v0.1.3](https://github.com/Autodesk/hig/compare/@hig/banner@0.1.2...@hig/banner@0.1.3) (2018-06-20)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
