# [@hig/components-v1.0.7](https://github.com/Autodesk/hig/compare/@hig/components@1.0.6...@hig/components@1.0.7) (2019-01-28)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/profile-flyout to version 2.0.0 ([361bcef](https://github.com/Autodesk/hig/commit/361bcef))

# [@hig/components-v1.0.6](https://github.com/Autodesk/hig/compare/@hig/components@1.0.5...@hig/components@1.0.6) (2019-01-23)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/flyout to version 1.0.0 ([8245aee](https://github.com/Autodesk/hig/commit/8245aee))
* **package:** update [@hig](https://github.com/hig)/icons to version 2.0.0 ([40506a0](https://github.com/Autodesk/hig/commit/40506a0))
* **package:** update [@hig](https://github.com/hig)/progress-bar to version 1.0.0 ([d7401f1](https://github.com/Autodesk/hig/commit/d7401f1))
* **package:** update [@hig](https://github.com/hig)/radio-button to version 1.0.0 ([242f9ea](https://github.com/Autodesk/hig/commit/242f9ea))
* **package:** update [@hig](https://github.com/hig)/theme-context to version 2.0.0 ([5cf2213](https://github.com/Autodesk/hig/commit/5cf2213))

# [@hig/components-v1.0.5](https://github.com/Autodesk/hig/compare/@hig/components@1.0.4...@hig/components@1.0.5) (2019-01-17)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/typography to version 1.0.0 ([37e169d](https://github.com/Autodesk/hig/commit/37e169d))

# [@hig/components-v1.0.4](https://github.com/Autodesk/hig/compare/@hig/components@1.0.3...@hig/components@1.0.4) (2019-01-08)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/avatar to version 1.0.1 ([4f3382e](https://github.com/Autodesk/hig/commit/4f3382e))
* **package:** update [@hig](https://github.com/hig)/checkbox to version 2.0.0 ([de28e94](https://github.com/Autodesk/hig/commit/de28e94))
* **package:** update [@hig](https://github.com/hig)/flyout to version 0.8.0 ([37ab319](https://github.com/Autodesk/hig/commit/37ab319))
* **package:** update [@hig](https://github.com/hig)/profile-flyout to version 1.0.0 ([6dbd9ab](https://github.com/Autodesk/hig/commit/6dbd9ab))
* **package:** update [@hig](https://github.com/hig)/tooltip to version 0.4.0 ([ec82b71](https://github.com/Autodesk/hig/commit/ec82b71))
* **package:** update [@hig](https://github.com/hig)/top-nav to version 2.0.0 ([08a2d1a](https://github.com/Autodesk/hig/commit/08a2d1a))

# [@hig/components-v1.0.3](https://github.com/Autodesk/hig/compare/@hig/components@1.0.2...@hig/components@1.0.3) (2019-01-04)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/flyout to version 0.7.0 ([068ba99](https://github.com/Autodesk/hig/commit/068ba99))
* **package:** update [@hig](https://github.com/hig)/tooltip to version 0.3.0 ([1ea1cf3](https://github.com/Autodesk/hig/commit/1ea1cf3))

# [@hig/components-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/components@1.0.1...@hig/components@1.0.2) (2018-12-06)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/dropdown to version 1.0.0 ([48814c1](https://github.com/Autodesk/hig/commit/48814c1))

# [@hig/components-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/components@1.0.0...@hig/components@1.0.1) (2018-12-06)


### Bug Fixes

* combined greenkeeper prs for version updates see pr 1392 ([d0a017a](https://github.com/Autodesk/hig/commit/d0a017a))

# [@hig/components-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/components@0.11.1...@hig/components@1.0.0) (2018-12-04)


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

# [@hig/components-v0.11.1](https://github.com/Autodesk/hig/compare/@hig/components@0.11.0...@hig/components@0.11.1) (2018-11-27)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/button to version 0.3.0 ([4bf4f40](https://github.com/Autodesk/hig/commit/4bf4f40))
* **package:** update [@hig](https://github.com/hig)/text-area to version 0.2.0 ([6ac295e](https://github.com/Autodesk/hig/commit/6ac295e))
* **package:** update [@hig](https://github.com/hig)/text-field to version 0.5.0 ([66cd017](https://github.com/Autodesk/hig/commit/66cd017))

# [@hig/components-v0.11.0](https://github.com/Autodesk/hig/compare/@hig/components@0.10.0...@hig/components@0.11.0) (2018-10-08)


### Bug Fixes

* update dependencies ([70fb27c](https://github.com/Autodesk/hig/commit/70fb27c))


### Features

* add Project Account Switcher to `[@hig](https://github.com/hig)/components` ([4b5bcd7](https://github.com/Autodesk/hig/commit/4b5bcd7))

# [@hig/components-v0.10.0](https://github.com/Autodesk/hig/compare/@hig/components@0.9.0...@hig/components@0.10.0) (2018-09-26)


### Features

* **package:** upgrade dependencies ([d1197dd](https://github.com/Autodesk/hig/commit/d1197dd))

# [@hig/components-v0.9.0](https://github.com/Autodesk/hig/compare/@hig/components@0.8.1...@hig/components@0.9.0) (2018-09-19)


### Features

* add `[@hig](https://github.com/hig)/profile-flyout` and `[@hig](https://github.com/hig)/top-nav` ([bc9e205](https://github.com/Autodesk/hig/commit/bc9e205))
* upgrade avatar to `0.2.0` ([0b6987f](https://github.com/Autodesk/hig/commit/0b6987f))

# [@hig/components-v0.8.1](https://github.com/Autodesk/hig/compare/@hig/components@0.8.0...@hig/components@0.8.1) (2018-09-11)


### Bug Fixes

* update packages ([49caaa2](https://github.com/Autodesk/hig/commit/49caaa2))

# [@hig/components-v0.8.0](https://github.com/Autodesk/hig/compare/@hig/components@0.7.0...@hig/components@0.8.0) (2018-09-11)


### Features

* **package:** upgrade dependencies ([1ab1cb9](https://github.com/Autodesk/hig/commit/1ab1cb9))
* upgrade `[@hig](https://github.com/hig)/modal` ([8a49e4e](https://github.com/Autodesk/hig/commit/8a49e4e))
* upgrade dependencies ([fea933f](https://github.com/Autodesk/hig/commit/fea933f))

# [@hig/components-v0.7.0](https://github.com/Autodesk/hig/compare/@hig/components@0.6.0...@hig/components@0.7.0) (2018-08-31)


### Features

* upgrade dependencies for release ([036dcce](https://github.com/Autodesk/hig/commit/036dcce))

# [@hig/components-v0.6.0](https://github.com/Autodesk/hig/compare/@hig/components@0.5.0...@hig/components@0.6.0) (2018-08-24)


### Features

* upgrade dependencies ([4cb80cf](https://github.com/Autodesk/hig/commit/4cb80cf))

# [@hig/components-v0.5.0](https://github.com/Autodesk/hig/compare/@hig/components@0.4.0...@hig/components@0.5.0) (2018-08-07)


### Features

* upgrade dependencies ([5b90fd9](https://github.com/Autodesk/hig/commit/5b90fd9))

<a name="@hig/components-v0.4.0"></a>
# [@hig/components-v0.4.0](https://github.com/Autodesk/hig/compare/@hig/components@0.3.1...@hig/components@0.4.0) (2018-07-26)


### Features

* upgrade form elements ([190db28](https://github.com/Autodesk/hig/commit/190db28))

<a name="@hig/components-v0.3.1"></a>
# [@hig/components-v0.3.1](https://github.com/Autodesk/hig/compare/@hig/components@0.3.0...@hig/components@0.3.1) (2018-07-19)


### Bug Fixes

* **package:** upgrade [@hig](https://github.com/hig)/themes to fix failed imports ([3553acf](https://github.com/Autodesk/hig/commit/3553acf))

<a name="@hig/components-v0.3.0"></a>
# [@hig/components-v0.3.0](https://github.com/Autodesk/hig/compare/@hig/components@0.2.2...@hig/components@0.3.0) (2018-07-19)


### Features

* **package:** upgrade components ([00a63ec](https://github.com/Autodesk/hig/commit/00a63ec))

<a name="@hig/components-v0.2.2"></a>
# [@hig/components-v0.2.2](https://github.com/Autodesk/hig/compare/@hig/components@0.2.1...@hig/components@0.2.2) (2018-07-06)


### Bug Fixes

* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))
* **style:** update [@hig](https://github.com/hig)/dropdown ([928398a](https://github.com/Autodesk/hig/commit/928398a))

<a name="@hig/components-v0.2.1"></a>
# [@hig/components-v0.2.1](https://github.com/Autodesk/hig/compare/@hig/components@0.2.0...@hig/components@0.2.1) (2018-06-20)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))

<a name="@hig/components-v0.2.0"></a>
# [@hig/components-v0.2.0](https://github.com/Autodesk/hig/compare/@hig/components@0.1.1...@hig/components@0.2.0) (2018-06-07)


### Features

* **components:** The following components have been added: ([82c749c](https://github.com/Autodesk/hig/commit/82c749c))
  - `@hig/notifications-flyout`
  - `@hig/notifications-toast`
