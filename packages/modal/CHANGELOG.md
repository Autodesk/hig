# [@hig/modal-v2.2.2](https://github.com/Autodesk/hig/compare/@hig/modal@2.2.1...@hig/modal@2.2.2) (2020-11-17)


### Bug Fixes

* pass closeButtonAriaLabel to title attribute ([b9348f9](https://github.com/Autodesk/hig/commit/b9348f9))

# [@hig/modal-v2.2.1](https://github.com/Autodesk/hig/compare/@hig/modal@2.2.0...@hig/modal@2.2.1) (2020-05-13)


### Bug Fixes

* stop using deprecated theme-data roles ([38960a5](https://github.com/Autodesk/hig/commit/38960a5))

# [@hig/modal-v2.2.0](https://github.com/Autodesk/hig/compare/@hig/modal@2.1.2...@hig/modal@2.2.0) (2020-05-07)


### Features

* allow PropTypes.node for title prop ([b0744d8](https://github.com/Autodesk/hig/commit/b0744d8))

# [@hig/modal-v2.1.2](https://github.com/Autodesk/hig/compare/@hig/modal@2.1.1...@hig/modal@2.1.2) (2020-02-27)


### Bug Fixes

* stylesheet function needs to be passed down to the header ([b7e8d0e](https://github.com/Autodesk/hig/commit/b7e8d0e))

# [@hig/modal-v2.1.1](https://github.com/Autodesk/hig/compare/@hig/modal@2.1.0...@hig/modal@2.1.1) (2019-08-02)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/utils to version 0.4.0 ([ba296ed](https://github.com/Autodesk/hig/commit/ba296ed))

# [@hig/modal-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/modal@2.0.4...@hig/modal@2.1.0) (2019-08-02)


### Features

* pass down css className to all emotion styled elements ([d1e5ee8](https://github.com/Autodesk/hig/commit/d1e5ee8))

# [@hig/modal-v2.0.4](https://github.com/Autodesk/hig/compare/@hig/modal@2.0.3...@hig/modal@2.0.4) (2019-04-25)


### Bug Fixes

* update icon-button dependency ([1526394](https://github.com/Autodesk/hig/commit/1526394))

# [@hig/modal-v2.0.3](https://github.com/Autodesk/hig/compare/@hig/modal@2.0.2...@hig/modal@2.0.3) (2019-03-27)


### Bug Fixes

* header font-weight, line height & body padding ([828d5d7](https://github.com/Autodesk/hig/commit/828d5d7))

# [@hig/modal-v2.0.2](https://github.com/Autodesk/hig/compare/@hig/modal@2.0.1...@hig/modal@2.0.2) (2019-03-20)


### Bug Fixes

* design updates ([5d9d1b9](https://github.com/Autodesk/hig/commit/5d9d1b9))

# [@hig/modal-v2.0.1](https://github.com/Autodesk/hig/compare/@hig/modal@2.0.0...@hig/modal@2.0.1) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([676136d](https://github.com/Autodesk/hig/commit/676136d))

# [@hig/modal-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/modal@1.0.2...@hig/modal@2.0.0) (2019-02-26)


### Features

* add stylesheet prop for Modal customization ([7034cea](https://github.com/Autodesk/hig/commit/7034cea))
* themable Modal ([0c71121](https://github.com/Autodesk/hig/commit/0c71121))
* use emotion and stylesheet function in Modal ([057d56f](https://github.com/Autodesk/hig/commit/057d56f))


### BREAKING CHANGES

* A new look for Modal with theming options and a new `stylesheet` prop
for customizing styles.
* DOM classNames like hig__modal-V1* replaced with
emotion-generated class names

# [@hig/modal-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/modal@1.0.1...@hig/modal@1.0.2) (2019-01-23)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/icons to version 2.0.0 ([b04b9e5](https://github.com/Autodesk/hig/commit/b04b9e5))

# [@hig/modal-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/modal@1.0.0...@hig/modal@1.0.1) (2018-12-06)


### Bug Fixes

* combined greenkeeper prs for version updates see pr 1392 ([d0a017a](https://github.com/Autodesk/hig/commit/d0a017a))

# [@hig/modal-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/modal@0.1.2...@hig/modal@1.0.0) (2018-12-04)


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

# [@hig/modal-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/modal@0.1.1...@hig/modal@0.1.2) (2018-10-08)


### Bug Fixes

* update dependencies ([70fb27c](https://github.com/Autodesk/hig/commit/70fb27c))

# [@hig/modal-v0.1.1](https://github.com/Autodesk/hig/compare/@hig/modal@0.1.0...@hig/modal@0.1.1) (2018-09-11)


### Bug Fixes

* add missing `[@hig](https://github.com/hig)/icon-button` dependency ([01ccb76](https://github.com/Autodesk/hig/commit/01ccb76))

# [@hig/modal-v0.1.0](https://github.com/Autodesk/hig/compare/@hig/modal@0.0.0...@hig/modal@0.1.0) (2018-09-11)


### Bug Fixes

* **a11y:** correct markup semantics ([2a328ea](https://github.com/Autodesk/hig/commit/2a328ea))
* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))


### Features

* **modal:** Add Modal placeholders ([87cd8d7](https://github.com/Autodesk/hig/commit/87cd8d7))
* props.style becomes props.type for consistency with other React components ([aa32562](https://github.com/Autodesk/hig/commit/aa32562))
* Pure React modal ([1e03939](https://github.com/Autodesk/hig/commit/1e03939))
