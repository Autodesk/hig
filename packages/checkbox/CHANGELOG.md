# [@hig/checkbox-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/checkbox@0.1.5...@hig/checkbox@1.0.0) (2018-12-04)


### BREAKING

* **icon/icon-button:** Removes [@hig](https://github.com/hig)/icon and refactor [@hig](https://github.com/hig)/icon-button to use [@hig](https://github.com/hig)/icons ([49d78f4](https://github.com/Autodesk/hig/commit/49d78f4))


### Bug Fixes

* **storybook:** Add back Icon stories ([f38f2d4](https://github.com/Autodesk/hig/commit/f38f2d4))
* adds icons as a dependency of checkbox ([891607d](https://github.com/Autodesk/hig/commit/891607d))


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

# [@hig/checkbox-v0.1.5](https://github.com/Autodesk/hig/compare/@hig/checkbox@0.1.4...@hig/checkbox@0.1.5) (2018-10-08)


### Bug Fixes

* update checkbox and sidenav styles for new icons ([d0d661b](https://github.com/Autodesk/hig/commit/d0d661b))

# [@hig/checkbox-v0.1.4](https://github.com/Autodesk/hig/compare/@hig/checkbox@0.1.3...@hig/checkbox@0.1.4) (2018-10-02)


### Bug Fixes

* **behavior:**  remove unnecessary click handler ([539c746](https://github.com/Autodesk/hig/commit/539c746))

# [@hig/checkbox-v0.1.3](https://github.com/Autodesk/hig/compare/@hig/checkbox@0.1.2...@hig/checkbox@0.1.3) (2018-09-19)


### Bug Fixes

* **behavior:** call `onChange` handlers when controlled ([af9c176](https://github.com/Autodesk/hig/commit/af9c176))

# [@hig/checkbox-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/checkbox@0.1.1...@hig/checkbox@0.1.2) (2018-08-24)


### Bug Fixes

* **behavior:** bump [@hig](https://github.com/hig)/utils dependents to v0.2.1 ([48b74d0](https://github.com/Autodesk/hig/commit/48b74d0))

# [@hig/checkbox-v0.1.1](https://github.com/Autodesk/hig/compare/@hig/checkbox@0.1.0...@hig/checkbox@0.1.1) (2018-08-06)


### Bug Fixes

* **behavior:** add handler to respond to `change` events ([9c4b14f](https://github.com/Autodesk/hig/commit/9c4b14f))

<a name="@hig/checkbox-v0.1.0"></a>
# [@hig/checkbox-v0.1.0](https://github.com/Autodesk/hig/compare/@hig/checkbox@0.0.0...@hig/checkbox@0.1.0) (2018-07-26)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))
* generate one ID per component instance instead of upon render ([0fbc554](https://github.com/Autodesk/hig/commit/0fbc554))


### Features

* **checkbox:** Add checkbox placeholders ([e8a223a](https://github.com/Autodesk/hig/commit/e8a223a))
