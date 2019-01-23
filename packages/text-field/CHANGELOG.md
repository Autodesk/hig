# [@hig/text-field-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/text-field@1.0.1...@hig/text-field@1.0.2) (2019-01-23)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/icons to version 2.0.0 ([225589d](https://github.com/Autodesk/hig/commit/225589d))

# [@hig/text-field-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/text-field@1.0.0...@hig/text-field@1.0.1) (2018-12-06)


### Bug Fixes

* combined greenkeeper prs for version updates see pr 1392 ([d0a017a](https://github.com/Autodesk/hig/commit/d0a017a))

# [@hig/text-field-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/text-field@0.5.0...@hig/text-field@1.0.0) (2018-12-04)


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

# [@hig/text-field-v0.5.0](https://github.com/Autodesk/hig/compare/@hig/text-field@0.4.5...@hig/text-field@0.5.0) (2018-10-31)


### Features

* add `maxLength`, `minLenght`, and `readOnly` props to text inputs ([084ca94](https://github.com/Autodesk/hig/commit/084ca94))

# [@hig/text-field-v0.4.5](https://github.com/Autodesk/hig/compare/@hig/text-field@0.4.4...@hig/text-field@0.4.5) (2018-10-08)


### Bug Fixes

* update dependencies ([70fb27c](https://github.com/Autodesk/hig/commit/70fb27c))

# [@hig/text-field-v0.4.4](https://github.com/Autodesk/hig/compare/@hig/text-field@0.4.3...@hig/text-field@0.4.4) (2018-09-19)


### Bug Fixes

* **behavior:** call `onChange` handlers when controlled ([af9c176](https://github.com/Autodesk/hig/commit/af9c176))
* **behavior:** prevent value from being cleared when controlled ([fe0af95](https://github.com/Autodesk/hig/commit/fe0af95))

# [@hig/text-field-v0.4.3](https://github.com/Autodesk/hig/compare/@hig/text-field@0.4.2...@hig/text-field@0.4.3) (2018-08-24)


### Bug Fixes

* **behavior:** bump [@hig](https://github.com/hig)/utils dependents to v0.2.1 ([48b74d0](https://github.com/Autodesk/hig/commit/48b74d0))

# [@hig/text-field-v0.4.2](https://github.com/Autodesk/hig/compare/@hig/text-field@0.4.1...@hig/text-field@0.4.2) (2018-08-07)


### Bug Fixes

* add missing `IconButton` styles ([a45ef0c](https://github.com/Autodesk/hig/commit/a45ef0c))
* update icon sets ([9281451](https://github.com/Autodesk/hig/commit/9281451))

# [@hig/text-field-v0.4.1](https://github.com/Autodesk/hig/compare/@hig/text-field@0.4.0...@hig/text-field@0.4.1) (2018-08-06)


### Bug Fixes

* **behavior:** replace broken controlled behavior ([d7a168f](https://github.com/Autodesk/hig/commit/d7a168f))

<a name="@hig/text-field-v0.4.0"></a>
# [@hig/text-field-v0.4.0](https://github.com/Autodesk/hig/compare/@hig/text-field@0.3.2...@hig/text-field@0.4.0) (2018-07-18)


### Features

* **behavior:** add focused prop to `TextFieldPresenter` ([a66a1b9](https://github.com/Autodesk/hig/commit/a66a1b9))
* **presentation:** add support for the "button" type ([3de117c](https://github.com/Autodesk/hig/commit/3de117c))

<a name="@hig/text-field-v0.3.2"></a>
# [@hig/text-field-v0.3.2](https://github.com/Autodesk/hig/compare/@hig/text-field@0.3.1...@hig/text-field@0.3.2) (2018-07-06)


### Bug Fixes

* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))

<a name="@hig/text-field-v0.3.1"></a>
# [@hig/text-field-v0.3.1](https://github.com/Autodesk/hig/compare/@hig/text-field@0.3.0...@hig/text-field@0.3.1) (2018-06-20)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))

<a name="@hig/text-field-v0.3.0"></a>
# [@hig/text-field-v0.3.0](https://github.com/Autodesk/hig/compare/@hig/text-field@0.2.0...@hig/text-field@0.3.0) (2018-06-15)


### Bug Fixes

* **text-field:** Align icons to input text ([da8e65d](https://github.com/Autodesk/hig/commit/da8e65d))
* **text-field:** Fix missing error styles ([363bb18](https://github.com/Autodesk/hig/commit/363bb18))
* **text-field:** Refactor label positioning to keep input fixed in place ([18518e0](https://github.com/Autodesk/hig/commit/18518e0))


### Features

* **text-field:** Adjust spacing between focused label and input ([43ed9a1](https://github.com/Autodesk/hig/commit/43ed9a1))
* **text-field:** Allow imperatively focusing the TextField input ([477bbd5](https://github.com/Autodesk/hig/commit/477bbd5))
* **text-field:** Pass through all other props to input presenter ([0ec6f18](https://github.com/Autodesk/hig/commit/0ec6f18))
* **text-field:** Remove unnecessary margin ([b57a146](https://github.com/Autodesk/hig/commit/b57a146))
* **text-field:** Simplify styling input label ([17dbb50](https://github.com/Autodesk/hig/commit/17dbb50))

<a name="@hig/text-field-v0.2.0"></a>
# [@hig/text-field-v0.2.0](https://github.com/Autodesk/hig/compare/@hig/text-field@0.1.0...@hig/text-field@0.2.0) (2018-06-07)


### Features

* Slider component ([#974](https://github.com/Autodesk/hig/issues/974)) ([81afec5](https://github.com/Autodesk/hig/commit/81afec5))
* **text-field:** Create a stateless TextField presenter ([e45e89a](https://github.com/Autodesk/hig/commit/e45e89a))
* **text-field:** Extract TextFieldController but export composed component by default ([7d754ca](https://github.com/Autodesk/hig/commit/7d754ca))
* **text-field:** TextField can be configured as read-only ([390cb7f](https://github.com/Autodesk/hig/commit/390cb7f))
