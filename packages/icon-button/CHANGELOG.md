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
