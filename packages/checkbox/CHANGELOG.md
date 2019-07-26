# [@hig/checkbox-v2.0.8](https://github.com/Autodesk/hig/compare/@hig/checkbox@2.0.7...@hig/checkbox@2.0.8) (2019-07-24)


### Bug Fixes

* halo transition ([de130ee](https://github.com/Autodesk/hig/commit/de130ee))

# [@hig/checkbox-v2.0.7](https://github.com/Autodesk/hig/compare/@hig/checkbox@2.0.6...@hig/checkbox@2.0.7) (2019-07-11)


### Bug Fixes

* update icons package ([6df732c](https://github.com/Autodesk/hig/commit/6df732c))

# [@hig/checkbox-v2.0.6](https://github.com/Autodesk/hig/compare/@hig/checkbox@2.0.5...@hig/checkbox@2.0.6) (2019-06-07)


### Bug Fixes

* no border for indeterminate focus state ([6fa7506](https://github.com/Autodesk/hig/commit/6fa7506))
* use proper border color in focus state ([0e4b011](https://github.com/Autodesk/hig/commit/0e4b011))

# [@hig/checkbox-v2.0.5](https://github.com/Autodesk/hig/compare/@hig/checkbox@2.0.4...@hig/checkbox@2.0.5) (2019-04-01)


### Bug Fixes

* no tooltip in checked state ([635b81e](https://github.com/Autodesk/hig/commit/635b81e))

# [@hig/checkbox-v2.0.4](https://github.com/Autodesk/hig/compare/@hig/checkbox@2.0.3...@hig/checkbox@2.0.4) (2019-03-20)


### Bug Fixes

* hover/focus halo adjustment ([fd4884d](https://github.com/Autodesk/hig/commit/fd4884d))

# [@hig/checkbox-v2.0.3](https://github.com/Autodesk/hig/compare/@hig/checkbox@2.0.2...@hig/checkbox@2.0.3) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([dbd2d1e](https://github.com/Autodesk/hig/commit/dbd2d1e))

# [@hig/checkbox-v2.0.2](https://github.com/Autodesk/hig/compare/@hig/checkbox@2.0.1...@hig/checkbox@2.0.2) (2019-02-08)


### Bug Fixes

* bump up theme-context dependency ([b068dab](https://github.com/Autodesk/hig/commit/b068dab))

# [@hig/checkbox-v2.0.1](https://github.com/Autodesk/hig/compare/@hig/checkbox@2.0.0...@hig/checkbox@2.0.1) (2019-01-23)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/icons to version 2.0.0 ([b780281](https://github.com/Autodesk/hig/commit/b780281))
* **package:** update [@hig](https://github.com/hig)/theme-context to version 2.0.0 ([b4fc94b](https://github.com/Autodesk/hig/commit/b4fc94b))
* remove unnecessary disabled logic from checked state ([cd43223](https://github.com/Autodesk/hig/commit/cd43223))

# [@hig/checkbox-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/checkbox@1.0.1...@hig/checkbox@2.0.0) (2019-01-04)


### BREAKING

* **checkbox:** remove required prop ([1493474](https://github.com/Autodesk/hig/commit/1493474))


### Bug Fixes

* clean up layout of checkbox ([a334220](https://github.com/Autodesk/hig/commit/a334220))


### Features

* **checkbox:** make checkbox themeable ([4030320](https://github.com/Autodesk/hig/commit/4030320))
* **checkbox:** update disabled checkboxes to use opacity ([f35b916](https://github.com/Autodesk/hig/commit/f35b916))


### BREAKING CHANGES

* **checkbox:** label and required props are no longer used, previous css classnames have been removed as well

# [@hig/checkbox-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/checkbox@1.0.0...@hig/checkbox@1.0.1) (2018-12-06)


### Bug Fixes

* combined greenkeeper prs for version updates see pr 1392 ([d0a017a](https://github.com/Autodesk/hig/commit/d0a017a))

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
