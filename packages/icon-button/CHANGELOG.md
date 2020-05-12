# [@hig/icon-button-v2.4.1](https://github.com/Autodesk/hig/compare/@hig/icon-button@2.4.0...@hig/icon-button@2.4.1) (2020-05-12)


### Bug Fixes

* stop using deprecated theme-data roles ([1409974](https://github.com/Autodesk/hig/commit/1409974))

# [@hig/icon-button-v2.4.0](https://github.com/Autodesk/hig/compare/@hig/icon-button@2.3.2...@hig/icon-button@2.4.0) (2020-04-27)


### Features

* title prop is no longer required ([e3240eb](https://github.com/Autodesk/hig/commit/e3240eb))

# [@hig/icon-button-v2.3.2](https://github.com/Autodesk/hig/compare/@hig/icon-button@2.3.1...@hig/icon-button@2.3.2) (2020-01-29)


### Bug Fixes

* export surfaces, AVAILABLE_SURFACES, variants, AVAILABLE_VARIANTS ([b81c7cb](https://github.com/Autodesk/hig/commit/b81c7cb))

# [@hig/icon-button-v2.3.1](https://github.com/Autodesk/hig/compare/@hig/icon-button@2.3.0...@hig/icon-button@2.3.1) (2019-09-05)


### Bug Fixes

* remove non-existant theme-data role from stylesheet ([ee42999](https://github.com/Autodesk/hig/commit/ee42999))

# [@hig/icon-button-v2.3.0](https://github.com/Autodesk/hig/compare/@hig/icon-button@2.2.1...@hig/icon-button@2.3.0) (2019-08-07)


### Features

* allow passing down of css className ([ef3d19d](https://github.com/Autodesk/hig/commit/ef3d19d))

# [@hig/icon-button-v2.2.1](https://github.com/Autodesk/hig/compare/@hig/icon-button@2.2.0...@hig/icon-button@2.2.1) (2019-08-02)


### Bug Fixes

* remove static variant's fill color ([8c71b7a](https://github.com/Autodesk/hig/commit/8c71b7a))

# [@hig/icon-button-v2.2.0](https://github.com/Autodesk/hig/compare/@hig/icon-button@2.1.3...@hig/icon-button@2.2.0) (2019-08-01)


### Features

* add static variant ([d8ace9d](https://github.com/Autodesk/hig/commit/d8ace9d))

# [@hig/icon-button-v2.1.3](https://github.com/Autodesk/hig/compare/@hig/icon-button@2.1.2...@hig/icon-button@2.1.3) (2019-07-26)


### Bug Fixes

* pass down disabled attribute to root element ([3f57c24](https://github.com/Autodesk/hig/commit/3f57c24))
* prevent disabled IconButton gaining tab focus ([f548f9c](https://github.com/Autodesk/hig/commit/f548f9c))

# [@hig/icon-button-v2.1.2](https://github.com/Autodesk/hig/compare/@hig/icon-button@2.1.1...@hig/icon-button@2.1.2) (2019-07-24)


### Bug Fixes

* halo transitions ([66b1301](https://github.com/Autodesk/hig/commit/66b1301))

# [@hig/icon-button-v2.1.1](https://github.com/Autodesk/hig/compare/@hig/icon-button@2.1.0...@hig/icon-button@2.1.1) (2019-05-07)


### Bug Fixes

* need correct surface level values ([500dffc](https://github.com/Autodesk/hig/commit/500dffc))

# [@hig/icon-button-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/icon-button@2.0.1...@hig/icon-button@2.1.0) (2019-05-03)


### Features

* add on prop and styles for it ([89be8db](https://github.com/Autodesk/hig/commit/89be8db))
* add surface prop and styles for it ([db4ae52](https://github.com/Autodesk/hig/commit/db4ae52))

# [@hig/icon-button-v2.0.1](https://github.com/Autodesk/hig/compare/@hig/icon-button@2.0.0...@hig/icon-button@2.0.1) (2019-04-23)


### Bug Fixes

* console errors for invalid props ([608c207](https://github.com/Autodesk/hig/commit/608c207))

# [@hig/icon-button-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/icon-button@1.0.2...@hig/icon-button@2.0.0) (2019-04-19)


### Features

* make icon-button themable ([9f829d2](https://github.com/Autodesk/hig/commit/9f829d2))


### BREAKING CHANGES

* * deprecated props are now removed (name, svg)
* also removed and deprecated type prop - there are no longer different types with the new design
* removed all css classnames
* removed css stylesheets

# [@hig/icon-button-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/icon-button@1.0.1...@hig/icon-button@1.0.2) (2019-04-01)


### Bug Fixes

* don't show icon tooltip ([d8d3a3f](https://github.com/Autodesk/hig/commit/d8d3a3f))

# [@hig/icon-button-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/icon-button@1.0.0...@hig/icon-button@1.0.1) (2018-12-06)


### Bug Fixes

* combined greenkeeper prs for version updates see pr 1392 ([d0a017a](https://github.com/Autodesk/hig/commit/d0a017a))

# [@hig/icon-button-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/icon-button@0.2.2...@hig/icon-button@1.0.0) (2018-12-04)


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

# [@hig/icon-button-v0.2.2](https://github.com/Autodesk/hig/compare/@hig/icon-button@0.2.1...@hig/icon-button@0.2.2) (2018-10-16)


### Bug Fixes

* add icon css to icon-button ([89810fc](https://github.com/Autodesk/hig/commit/89810fc))

# [@hig/icon-button-v0.2.1](https://github.com/Autodesk/hig/compare/@hig/icon-button@0.2.0...@hig/icon-button@0.2.1) (2018-10-08)


### Bug Fixes

* update dependencies ([70fb27c](https://github.com/Autodesk/hig/commit/70fb27c))

# [@hig/icon-button-v0.2.0](https://github.com/Autodesk/hig/compare/@hig/icon-button@0.1.3...@hig/icon-button@0.2.0) (2018-08-07)


### Features

* update icon set ([80bf8c6](https://github.com/Autodesk/hig/commit/80bf8c6))

<a name="@hig/icon-button-v0.1.3"></a>
# [@hig/icon-button-v0.1.3](https://github.com/Autodesk/hig/compare/@hig/icon-button@0.1.2...@hig/icon-button@0.1.3) (2018-07-06)


### Bug Fixes

* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))

<a name="@hig/icon-button-v0.1.2"></a>
# [@hig/icon-button-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/icon-button@0.1.1...@hig/icon-button@0.1.2) (2018-06-20)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
