# [@hig/text-area-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/text-area@1.0.0...@hig/text-area@1.1.0) (2019-03-08)


### Features

* resizeable text-area ([a1f406f](https://github.com/Autodesk/hig/commit/a1f406f))

# [@hig/text-area-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/text-area@0.2.0...@hig/text-area@1.0.0) (2019-02-08)


### Features

* make text-area themeable ([65ea3bb](https://github.com/Autodesk/hig/commit/65ea3bb))


### BREAKING CHANGES

* * Removed the following props: instructions, label, defaultValue
* Allow all native text-area html attributes to pass down
* The web light default look now looks like the updated designs but with the legacy colors
* The text-area component is now composed from an input component

# [@hig/text-area-v0.2.0](https://github.com/Autodesk/hig/compare/@hig/text-area@0.1.2...@hig/text-area@0.2.0) (2018-10-31)


### Features

* add `maxLength`, `minLenght`, and `readOnly` props to text inputs ([084ca94](https://github.com/Autodesk/hig/commit/084ca94))

# [@hig/text-area-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/text-area@0.1.1...@hig/text-area@0.1.2) (2018-10-08)


### Bug Fixes

* **presentation:** add missing colors mixin ([895a3b5](https://github.com/Autodesk/hig/commit/895a3b5))

# [@hig/text-area-v0.1.1](https://github.com/Autodesk/hig/compare/@hig/text-area@0.1.0...@hig/text-area@0.1.1) (2018-08-24)


### Bug Fixes

* **behavior:** bump [@hig](https://github.com/hig)/utils dependents to v0.2.1 ([48b74d0](https://github.com/Autodesk/hig/commit/48b74d0))

<a name="@hig/text-area-v0.1.0"></a>
# [@hig/text-area-v0.1.0](https://github.com/Autodesk/hig/compare/@hig/text-area@0.0.0...@hig/text-area@0.1.0) (2018-07-26)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))
* generate one ID per component instance instead of upon render ([0fbc554](https://github.com/Autodesk/hig/commit/0fbc554))
* margins around textarea addressed for Chrome ([4c89e09](https://github.com/Autodesk/hig/commit/4c89e09))


### Features

* adds markup and styles to TextAreaPresenter ([8174d84](https://github.com/Autodesk/hig/commit/8174d84))
* introduces state for accurate behavior around instructions, label, required, and value ([c42bd91](https://github.com/Autodesk/hig/commit/c42bd91))
* scaffolds TextArea and TextAreaPresenter component ([c513a5c](https://github.com/Autodesk/hig/commit/c513a5c))
