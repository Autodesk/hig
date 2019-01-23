# [@hig/top-nav-v2.0.2](https://github.com/Autodesk/hig/compare/@hig/top-nav@2.0.1...@hig/top-nav@2.0.2) (2019-01-23)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/flyout to version 1.0.0 ([e433224](https://github.com/Autodesk/hig/commit/e433224))
* **package:** update [@hig](https://github.com/hig)/icons to version 2.0.0 ([34bea35](https://github.com/Autodesk/hig/commit/34bea35))

# [@hig/top-nav-v2.0.1](https://github.com/Autodesk/hig/compare/@hig/top-nav@2.0.0...@hig/top-nav@2.0.1) (2019-01-08)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/flyout to version 0.8.0 ([37ab319](https://github.com/Autodesk/hig/commit/37ab319))
* **package:** update [@hig](https://github.com/hig)/profile-flyout to version 1.0.0 ([6dbd9ab](https://github.com/Autodesk/hig/commit/6dbd9ab))

# [@hig/top-nav-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/top-nav@1.0.1...@hig/top-nav@2.0.0) (2019-01-04)


### Bug Fixes

* **avatar:** add theme knobs in avatar storybook, use only one letter for avatar when size is small, fix js warnings ([4057b51](https://github.com/Autodesk/hig/commit/4057b51))
* **package:** update [@hig](https://github.com/hig)/flyout to version 0.7.0 ([d1a9b13](https://github.com/Autodesk/hig/commit/d1a9b13))
* uses correct font weight and pressed halo color ([0a58054](https://github.com/Autodesk/hig/commit/0a58054))


### Features

* **avatar:** themable avatar ([0fbd821](https://github.com/Autodesk/hig/commit/0fbd821))
* gives buttons intended height ([9358562](https://github.com/Autodesk/hig/commit/9358562))


### BREAKING CHANGES

* **avatar:** The sizes.LARGE_36 size is no longer supported. You can
substitute with sizes.MEDIUM_32 or sizes.LARGE_48. The "large-48" size
is no longer supported. You can substitute it with "large" for 48 pixels
wide or "medium-32" for 32 pixels wide. The previous "large" size is now
48 pixels wide rather than 36 pixels wide.

# [@hig/top-nav-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/top-nav@1.0.0...@hig/top-nav@1.0.1) (2018-12-06)


### Bug Fixes

* combined greenkeeper prs for version updates see pr 1392 ([d0a017a](https://github.com/Autodesk/hig/commit/d0a017a))

# [@hig/top-nav-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/top-nav@0.5.1...@hig/top-nav@1.0.0) (2018-12-04)


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

# [@hig/top-nav-v0.5.1](https://github.com/Autodesk/hig/compare/@hig/top-nav@0.5.0...@hig/top-nav@0.5.1) (2018-10-08)


### Bug Fixes

* update dependencies ([70fb27c](https://github.com/Autodesk/hig/commit/70fb27c))

# [@hig/top-nav-v0.5.0](https://github.com/Autodesk/hig/compare/@hig/top-nav@0.4.0...@hig/top-nav@0.5.0) (2018-09-26)


### Features

* **package:** propagate dependency features ([4904930](https://github.com/Autodesk/hig/commit/4904930))

# [@hig/top-nav-v0.4.0](https://github.com/Autodesk/hig/compare/@hig/top-nav@0.3.2...@hig/top-nav@0.4.0) (2018-09-19)


### Features

* update `ProfileAction` to use `[@hig](https://github.com/hig)/profile-flyout` ([5385fec](https://github.com/Autodesk/hig/commit/5385fec))

# [@hig/top-nav-v0.3.2](https://github.com/Autodesk/hig/compare/@hig/top-nav@0.3.1...@hig/top-nav@0.3.2) (2018-09-11)


### Bug Fixes

* upgrade flyout in dependants ([ea3bedd](https://github.com/Autodesk/hig/commit/ea3bedd))

# [@hig/top-nav-v0.3.1](https://github.com/Autodesk/hig/compare/@hig/top-nav@0.3.0...@hig/top-nav@0.3.1) (2018-09-06)


### Bug Fixes

* update dependencies to fix action alignment ([d464388](https://github.com/Autodesk/hig/commit/d464388))

# [@hig/top-nav-v0.3.0](https://github.com/Autodesk/hig/compare/@hig/top-nav@0.2.1...@hig/top-nav@0.3.0) (2018-08-31)


### Bug Fixes

* correct profile action avatar alignment ([f92b9c4](https://github.com/Autodesk/hig/commit/f92b9c4))
* wrap `NotificationAction` in `ActionPresenter` ([ab09b42](https://github.com/Autodesk/hig/commit/ab09b42))


### Features

* correct alignment of flyouts ([21b3f0a](https://github.com/Autodesk/hig/commit/21b3f0a))

# [@hig/top-nav-v0.2.1](https://github.com/Autodesk/hig/compare/@hig/top-nav@0.2.0...@hig/top-nav@0.2.1) (2018-08-24)


### Bug Fixes

* add missing type prop to button ([a9484ec](https://github.com/Autodesk/hig/commit/a9484ec))
* correct flyout dependency ([b939f0d](https://github.com/Autodesk/hig/commit/b939f0d))
* **behavior:** bump [@hig](https://github.com/hig)/utils dependents to v0.2.1 ([48b74d0](https://github.com/Autodesk/hig/commit/48b74d0))

# [@hig/top-nav-v0.2.0](https://github.com/Autodesk/hig/compare/@hig/top-nav@0.1.4...@hig/top-nav@0.2.0) (2018-08-23)


### Bug Fixes

* **storybook:** top nav stories not appearing ([3d20875](https://github.com/Autodesk/hig/commit/3d20875))


### Features

* **top-nav-actions:** Add onClick handlers to the HelpAction and the ProfileAction ([1edd261](https://github.com/Autodesk/hig/commit/1edd261))

<a name="@hig/top-nav-v0.1.4"></a>
# [@hig/top-nav-v0.1.4](https://github.com/Autodesk/hig/compare/@hig/top-nav@0.1.3...@hig/top-nav@0.1.4) (2018-07-06)


### Bug Fixes

* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))

<a name="@hig/top-nav-v0.1.3"></a>
# [@hig/top-nav-v0.1.3](https://github.com/Autodesk/hig/compare/@hig/top-nav@0.1.2...@hig/top-nav@0.1.3) (2018-06-20)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))

<a name="@hig/top-nav-v0.1.2"></a>
# [@hig/top-nav-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/top-nav@0.1.0...@hig/top-nav@0.1.2) (2018-06-15)


### Bug Fixes

* **style:** Add `min-height` property ([#986](https://github.com/Autodesk/hig/issues/986)) ([18da962](https://github.com/Autodesk/hig/commit/18da962))

<a name="@hig/top-nav-v0.1.1"></a>
# [@hig/top-nav-v0.1.1](https://github.com/Autodesk/hig/compare/@hig/top-nav@0.1.0...@hig/top-nav@0.1.1) (2018-05-31)


* Initial release
