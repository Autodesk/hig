# [@hig/slider-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/slider@1.3.2...@hig/slider@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/slider-v1.3.2](https://github.com/Autodesk/hig/compare/@hig/slider@1.3.1...@hig/slider@1.3.2) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/slider-v1.3.1](https://github.com/Autodesk/hig/compare/@hig/slider@1.3.0...@hig/slider@1.3.1) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))

# [@hig/slider-v1.3.0](https://github.com/Autodesk/hig/compare/@hig/slider@1.2.0...@hig/slider@1.3.0) (2021-01-25)


### Features

* add stylesheet, sliderRef prop, allow passing down of className ([7a6e52b](https://github.com/Autodesk/hig/commit/7a6e52b))

# [@hig/slider-v1.2.0](https://github.com/Autodesk/hig/compare/@hig/slider@1.1.2...@hig/slider@1.2.0) (2021-01-06)


### Features

* adds discrete slider ([eb74c99](https://github.com/Autodesk/hig/commit/eb74c99))

# [@hig/slider-v1.1.2](https://github.com/Autodesk/hig/compare/@hig/slider@1.1.1...@hig/slider@1.1.2) (2020-05-12)


### Bug Fixes

* stop using deprecated theme-data roles ([4dfe027](https://github.com/Autodesk/hig/commit/4dfe027))

# [@hig/slider-v1.1.1](https://github.com/Autodesk/hig/compare/@hig/slider@1.1.0...@hig/slider@1.1.1) (2020-02-13)


### Bug Fixes

* slider knob missing border radius ([34cf17e](https://github.com/Autodesk/hig/commit/34cf17e))

# [@hig/slider-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/slider@1.0.2...@hig/slider@1.1.0) (2020-02-12)


### Features

* match slider knob to latest design toolkit ([885c7ba](https://github.com/Autodesk/hig/commit/885c7ba))

# [@hig/slider-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/slider@1.0.1...@hig/slider@1.0.2) (2019-08-02)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/utils to version 0.4.0 ([aa4421f](https://github.com/Autodesk/hig/commit/aa4421f))

# [@hig/slider-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/slider@1.0.0...@hig/slider@1.0.1) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([928520d](https://github.com/Autodesk/hig/commit/928520d))

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
