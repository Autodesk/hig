# [@hig/rich-text-v1.1.1](https://github.com/Autodesk/hig/compare/@hig/rich-text@1.1.0...@hig/rich-text@1.1.1) (2020-05-12)


### Bug Fixes

* stop using deprecated theme-data roles ([4358da8](https://github.com/Autodesk/hig/commit/4358da8))

# [@hig/rich-text-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/rich-text@1.0.1...@hig/rich-text@1.1.0) (2020-02-21)


### Features

* allow className to be passed down ([2b6bb16](https://github.com/Autodesk/hig/commit/2b6bb16))

# [@hig/rich-text-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/rich-text@1.0.0...@hig/rich-text@1.0.1) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([0d268eb](https://github.com/Autodesk/hig/commit/0d268eb))

# [@hig/rich-text-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/rich-text@0.1.4...@hig/rich-text@1.0.0) (2019-02-08)


### Features

* a new API and theming for RichText ([f9c3d16](https://github.com/Autodesk/hig/commit/f9c3d16))


### BREAKING CHANGES

* * rm size prop for small and large sizes in favor of theme density
* use stylesheet function for RichText that generates new CSS classes,
eliminating the need for `hig__rich-text`
* consume `ThemeContext`, enabling theming with the new styles

Migration steps:

If you were previously using the `size` prop to change the sizes and
spacings rendered, you can achieve the same behavior with theme density.
For instance, if you previously used...

```
function MyApp() {
  <RichText size="large">
    <h1>Heading</h1>
    <p>This is a paragraph.</p>
  </RichText>
}
```

...

```
import MediumDensityTheme from '@hig/theme-data/build/esm/lightGrayMediumDensityTheme';
import ThemeContext from '@hig/theme-context';

function MyApp() {
  <ThemeContext.Provider value={MediumDensityTheme}>
    <RichText>
      <h1>Heading</h1>
      <p>This is a paragraph.</p>
    </RichText>
  </ThemeContext.Provider>
}
```

# [@hig/rich-text-v0.1.4](https://github.com/Autodesk/hig/compare/@hig/rich-text@0.1.3...@hig/rich-text@0.1.4) (2018-10-08)


### Bug Fixes

* **presentation:** correct styling ([a1c5f81](https://github.com/Autodesk/hig/commit/a1c5f81))
* **presentation:** correct typography font ([6cadf3a](https://github.com/Autodesk/hig/commit/6cadf3a))

<a name="@hig/rich-text-v0.1.3"></a>
# [@hig/rich-text-v0.1.3](https://github.com/Autodesk/hig/compare/@hig/rich-text@0.1.2...@hig/rich-text@0.1.3) (2018-07-06)


### Bug Fixes

* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))

<a name="@hig/rich-text-v0.1.2"></a>
# [@hig/rich-text-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/rich-text@0.1.1...@hig/rich-text@0.1.2) (2018-06-20)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
