# [@hig/slider-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/slider@0.1.3...@hig/slider@1.0.0) (2019-02-05)


### Bug Fixes

* tweak Slider styling ([a00d038](https://github.com/Autodesk/hig/commit/a00d038))


### Features

* a new look and API for Slider ([f2d2ceb](https://github.com/Autodesk/hig/commit/f2d2ceb))
* implement ControlBehavior in Slider ([e7a8b5e](https://github.com/Autodesk/hig/commit/e7a8b5e))
* make Slider themable ([115f5bf](https://github.com/Autodesk/hig/commit/115f5bf))
* use ControlBehavior props for Slider styles ([0591cff](https://github.com/Autodesk/hig/commit/0591cff))


### BREAKING CHANGES

* To enable different styling for the value portion of the range track,
visually distinguishing it from the unfilled portion of the track,
we always set an initial value for a Slider if a value is not explicitly
provided. This initial value default is the midpoint between the min and
max props. THe midpoint will be 50 unless you set min or max. This
behavior mimics the browser behavior for range inputs.
* * rm label, instuctions, & required props and value text
* use stylesheet functions instead of scss
* rm dependency on classnames
* add dependency on emotion
* pass arbitrary props thru to presenters/Input

This removes the label, instructions, and required props that
previously allowed you to specify text that would decorate a range
input. If you were previously using...

```
<Slider
  label="What is your age?"
  instructions="You must be 21 or older."
  required="Age is required."
  min={21}
  max={99}
  step={1}
/>
```

...you can achieve the same look by using a combination of `Slider` and
`Label` or `Typography` components.

# [@hig/slider-v0.1.3](https://github.com/Autodesk/hig/compare/@hig/slider@0.1.2...@hig/slider@0.1.3) (2018-09-19)


### Bug Fixes

* **behavior:** call `onChange` handlers when controlled ([af9c176](https://github.com/Autodesk/hig/commit/af9c176))

# [@hig/slider-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/slider@0.1.1...@hig/slider@0.1.2) (2018-08-24)


### Bug Fixes

* **behavior:** bump [@hig](https://github.com/hig)/utils dependents to v0.2.1 ([48b74d0](https://github.com/Autodesk/hig/commit/48b74d0))

<a name="@hig/slider-v0.1.1"></a>
# [@hig/slider-v0.1.1](https://github.com/Autodesk/hig/compare/@hig/slider@0.1.0...@hig/slider@0.1.1) (2018-07-30)


### Bug Fixes

* **package:** Upgrade dependency for missing feature ([ec11db3](https://github.com/Autodesk/hig/commit/ec11db3))

<a name="@hig/slider-v0.1.0"></a>
# [@hig/slider-v0.1.0](https://github.com/Autodesk/hig/compare/@hig/slider@0.0.0...@hig/slider@0.1.0) (2018-07-30)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))
* **styles:** Keep range mixins alongside Slider package ([1b7641c](https://github.com/Autodesk/hig/commit/1b7641c))
* correct controlled component logic ([fb6ca8b](https://github.com/Autodesk/hig/commit/fb6ca8b))
* provide a number value to `onChange` handlers ([7ee56ca](https://github.com/Autodesk/hig/commit/7ee56ca))


### Features

* Slider component ([#974](https://github.com/Autodesk/hig/issues/974)) ([81afec5](https://github.com/Autodesk/hig/commit/81afec5))
* **release:** move from pre-relase phase ([a6d9b96](https://github.com/Autodesk/hig/commit/a6d9b96))
* **slider:** Add Slider placeholders ([0419206](https://github.com/Autodesk/hig/commit/0419206))
