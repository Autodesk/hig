# [@hig/project-account-switcher-v2.0.3](https://github.com/Autodesk/hig/compare/@hig/project-account-switcher@2.0.2...@hig/project-account-switcher@2.0.3) (2019-06-12)


### Bug Fixes

* dropdown list to be sized based on text width ([670cc3b](https://github.com/Autodesk/hig/commit/670cc3b))

# [@hig/project-account-switcher-v2.0.2](https://github.com/Autodesk/hig/compare/@hig/project-account-switcher@2.0.1...@hig/project-account-switcher@2.0.2) (2019-06-05)


### Bug Fixes

* project switcher not show image in dropdown ([f59668b](https://github.com/Autodesk/hig/commit/f59668b))

# [@hig/project-account-switcher-v2.0.1](https://github.com/Autodesk/hig/compare/@hig/project-account-switcher@2.0.0...@hig/project-account-switcher@2.0.1) (2019-04-01)


### Bug Fixes

* caret positioning for non-web-light themes ([4ab34fa](https://github.com/Autodesk/hig/commit/4ab34fa))

# [@hig/project-account-switcher-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/project-account-switcher@1.0.5...@hig/project-account-switcher@2.0.0) (2019-02-07)


### Features

* make pas themeable ([6acb55e](https://github.com/Autodesk/hig/commit/6acb55e))


### BREAKING CHANGES

* * All css classnames have been removed
* Image placeholder backgrounds made transparent for themeability
* TextLink and Typography components have been incorporated

# [@hig/project-account-switcher-v1.0.5](https://github.com/Autodesk/hig/compare/@hig/project-account-switcher@1.0.4...@hig/project-account-switcher@1.0.5) (2019-01-23)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/flyout to version 1.0.0 ([363ccd5](https://github.com/Autodesk/hig/commit/363ccd5))
* **package:** update [@hig](https://github.com/hig)/icons to version 2.0.0 ([9c4ecb4](https://github.com/Autodesk/hig/commit/9c4ecb4))

# [@hig/project-account-switcher-v1.0.4](https://github.com/Autodesk/hig/compare/@hig/project-account-switcher@1.0.3...@hig/project-account-switcher@1.0.4) (2019-01-08)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/flyout to version 0.8.0 ([37ab319](https://github.com/Autodesk/hig/commit/37ab319))
* use proper state name for pas ([759c3d0](https://github.com/Autodesk/hig/commit/759c3d0))

# [@hig/project-account-switcher-v1.0.3](https://github.com/Autodesk/hig/compare/@hig/project-account-switcher@1.0.2...@hig/project-account-switcher@1.0.3) (2019-01-04)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/flyout to version 0.7.0 ([7de9a13](https://github.com/Autodesk/hig/commit/7de9a13))

# [@hig/project-account-switcher-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/project-account-switcher@1.0.1...@hig/project-account-switcher@1.0.2) (2018-12-06)


### Bug Fixes

* **project-account-switcher:** add back controlled behavior ([ceeaadf](https://github.com/Autodesk/hig/commit/ceeaadf))

# [@hig/project-account-switcher-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/project-account-switcher@1.0.0...@hig/project-account-switcher@1.0.1) (2018-12-06)


### Bug Fixes

* combined greenkeeper prs for version updates see pr 1392 ([d0a017a](https://github.com/Autodesk/hig/commit/d0a017a))

# [@hig/project-account-switcher-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/project-account-switcher@0.3.2...@hig/project-account-switcher@1.0.0) (2018-12-04)


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

# [@hig/project-account-switcher-v0.3.2](https://github.com/Autodesk/hig/compare/@hig/project-account-switcher@0.3.1...@hig/project-account-switcher@0.3.2) (2018-11-27)


### Bug Fixes

* **project-account-switcher:** close on project or account selection ([bbe9503](https://github.com/Autodesk/hig/commit/bbe9503))

# [@hig/project-account-switcher-v0.3.1](https://github.com/Autodesk/hig/compare/@hig/project-account-switcher@0.3.0...@hig/project-account-switcher@0.3.1) (2018-10-08)


### Bug Fixes

* update dependencies ([70fb27c](https://github.com/Autodesk/hig/commit/70fb27c))

# [@hig/project-account-switcher-v0.3.0](https://github.com/Autodesk/hig/compare/@hig/project-account-switcher@0.2.0...@hig/project-account-switcher@0.3.0) (2018-10-08)


### Bug Fixes

* **behavior:** add missing keyboard interactions ([8428432](https://github.com/Autodesk/hig/commit/8428432))
* **presenation:** add missing font styles ([4c30846](https://github.com/Autodesk/hig/commit/4c30846))


### Features

* **behavior:** fix event handlers and expose flyout functionality ([6cbd151](https://github.com/Autodesk/hig/commit/6cbd151))

# [@hig/project-account-switcher-v0.2.0](https://github.com/Autodesk/hig/compare/@hig/project-account-switcher@0.1.1...@hig/project-account-switcher@0.2.0) (2018-09-26)


### Features

* Add prop openOnHover to Flyout.  When enabled, flyout will open when target is hovered over for .5s ([65893f3](https://github.com/Autodesk/hig/commit/65893f3))

# [@hig/project-account-switcher-v0.1.1](https://github.com/Autodesk/hig/compare/@hig/project-account-switcher@0.1.0...@hig/project-account-switcher@0.1.1) (2018-09-11)


### Bug Fixes

* upgrade flyout in dependants ([ea3bedd](https://github.com/Autodesk/hig/commit/ea3bedd))

# [@hig/project-account-switcher-v0.1.0](https://github.com/Autodesk/hig/compare/@hig/project-account-switcher@0.0.0...@hig/project-account-switcher@0.1.0) (2018-08-31)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))
* cleanup project-account-switcher ([8338be0](https://github.com/Autodesk/hig/commit/8338be0))
* correct default anchor points ([5d44e45](https://github.com/Autodesk/hig/commit/5d44e45))


### Features

* import flyout css also match styles with legacy ([f935484](https://github.com/Autodesk/hig/commit/f935484))
* **project-account-switcher:** Add ProjectAccountSwitcher placeholders ([661ed13](https://github.com/Autodesk/hig/commit/661ed13))
* adds controlled check ([195ba00](https://github.com/Autodesk/hig/commit/195ba00))
* adds in style rules for flyout ([013a871](https://github.com/Autodesk/hig/commit/013a871))
* adds open prop and state in order to render presenter correctly in Gemini ([f9c07e6](https://github.com/Autodesk/hig/commit/f9c07e6))
* change class names and hover style for lis and update snapshots ([9f8eb1a](https://github.com/Autodesk/hig/commit/9f8eb1a))
* changes markup to use ul ([4e80da0](https://github.com/Autodesk/hig/commit/4e80da0))
* creates functionality for loading the image src when provided ([871103e](https://github.com/Autodesk/hig/commit/871103e))
* lint fixes ([a0eca49](https://github.com/Autodesk/hig/commit/a0eca49))
* passes selected account or project id through as a param, not a data attr ([bc82b32](https://github.com/Autodesk/hig/commit/bc82b32))
* refactors account and project filters, refines render behavior depending on what combination of accounts and projects is passed to component ([d25e5ad](https://github.com/Autodesk/hig/commit/d25e5ad))
* resolve linter issues ([3e9d505](https://github.com/Autodesk/hig/commit/3e9d505))
* revises CSS classes to be stand-alone for the component ([6465505](https://github.com/Autodesk/hig/commit/6465505))
* scaffolds ProjectAccountSwitcher ([c73558e](https://github.com/Autodesk/hig/commit/c73558e))
