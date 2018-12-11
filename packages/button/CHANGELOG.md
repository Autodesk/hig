# [@hig/button-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/button@1.0.0...@hig/button@1.1.0) (2018-12-11)


### Features

* add dark blue theme data ([a164f8e](https://github.com/Autodesk/hig/commit/a164f8e))
* add themeable functionality to button (wip) ([5b866e2](https://github.com/Autodesk/hig/commit/5b866e2))
* **button:** add button theme data styles ([07bd20d](https://github.com/Autodesk/hig/commit/07bd20d))
* **button:** add legacy web light theme data ([91dc381](https://github.com/Autodesk/hig/commit/91dc381))
* **button:** use additional button theme data roles ([23c3743](https://github.com/Autodesk/hig/commit/23c3743))
* **button:** use density theme-dat ([9f932da](https://github.com/Autodesk/hig/commit/9f932da))

# [@hig/button-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/button@0.3.1...@hig/button@1.0.0) (2018-12-04)


### BREAKING

* **icon/icon-button:** Removes [@hig](https://github.com/hig)/icon and refactor [@hig](https://github.com/hig)/icon-button to use [@hig](https://github.com/hig)/icons ([49d78f4](https://github.com/Autodesk/hig/commit/49d78f4))


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

# [@hig/button-v0.3.1](https://github.com/Autodesk/hig/compare/@hig/button@0.3.0...@hig/button@0.3.1) (2018-11-06)


### Bug Fixes

* point button back to themes ([b53bf68](https://github.com/Autodesk/hig/commit/b53bf68))

# [@hig/button-v0.3.0](https://github.com/Autodesk/hig/compare/@hig/button@0.2.0...@hig/button@0.3.0) (2018-10-31)


### Bug Fixes

* add styling support for new variants ([f6b2444](https://github.com/Autodesk/hig/commit/f6b2444))


### Features

* add new button variants ([3af33bb](https://github.com/Autodesk/hig/commit/3af33bb))

# [@hig/button-v0.2.0](https://github.com/Autodesk/hig/compare/@hig/button@0.1.4...@hig/button@0.2.0) (2018-09-11)


### Features

* Add onMouseEnter and onMouseLeave events to Button for more control of custom hover events ([a2b2cc1](https://github.com/Autodesk/hig/commit/a2b2cc1))

# [@hig/button-v0.1.4](https://github.com/Autodesk/hig/compare/@hig/button@0.1.3...@hig/button@0.1.4) (2018-08-07)


### Bug Fixes

* update icon sets ([9281451](https://github.com/Autodesk/hig/commit/9281451))

<a name="@hig/button-v0.1.3"></a>
# [@hig/button-v0.1.3](https://github.com/Autodesk/hig/compare/@hig/button@0.1.2...@hig/button@0.1.3) (2018-07-06)


### Bug Fixes

* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))

<a name="@hig/button-v0.1.2"></a>
# [@hig/button-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/button@0.1.1...@hig/button@0.1.2) (2018-06-20)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
