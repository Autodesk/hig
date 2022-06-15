# [@hig/notifications-flyout-v3.2.0](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@3.1.1...@hig/notifications-flyout@3.2.0) (2022-06-15)


### Features

* update react-transition-group ([56b4f6c](https://github.com/Autodesk/hig/commit/56b4f6c))

# [@hig/notifications-flyout-v3.1.1](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@3.1.0...@hig/notifications-flyout@3.1.1) (2022-03-28)


### Bug Fixes

* remove react-lifecycles-compat polyfill ([645ceab](https://github.com/Autodesk/hig/commit/645ceab))

# [@hig/notifications-flyout-v3.1.0](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@3.0.0...@hig/notifications-flyout@3.1.0) (2022-01-24)


### Features

* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))

# [@hig/notifications-flyout-v3.0.0](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@2.1.6...@hig/notifications-flyout@3.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/notifications-flyout-v2.1.6](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@2.1.5...@hig/notifications-flyout@2.1.6) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/notifications-flyout-v2.1.5](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@2.1.4...@hig/notifications-flyout@2.1.5) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))
* unit testing ([29a1a1b](https://github.com/Autodesk/hig/commit/29a1a1b))

# [@hig/notifications-flyout-v2.1.4](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@2.1.3...@hig/notifications-flyout@2.1.4) (2021-11-19)


### Bug Fixes

* change notifications to wrap long words properly ([174b4ad](https://github.com/Autodesk/hig/commit/174b4ad))

# [@hig/notifications-flyout-v2.1.3](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@2.1.2...@hig/notifications-flyout@2.1.3) (2021-08-11)


### Bug Fixes

* set success color for light gray to correct value ([3552329](https://github.com/Autodesk/hig/commit/3552329))

# [@hig/notifications-flyout-v2.1.2](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@2.1.1...@hig/notifications-flyout@2.1.2) (2020-12-15)


### Bug Fixes

* passing stylesheet incorrectly to flyout panel ([e2e3f46](https://github.com/Autodesk/hig/commit/e2e3f46))

# [@hig/notifications-flyout-v2.1.1](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@2.1.0...@hig/notifications-flyout@2.1.1) (2020-12-08)


### Bug Fixes

* dismissButtonTitle prop was never exposed ([4221ccb](https://github.com/Autodesk/hig/commit/4221ccb))

# [@hig/notifications-flyout-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@2.0.6...@hig/notifications-flyout@2.1.0) (2020-11-11)


### Features

* add stylesheet prop ([b167948](https://github.com/Autodesk/hig/commit/b167948))
* allow passing down of className ([e218a47](https://github.com/Autodesk/hig/commit/e218a47))

# [@hig/notifications-flyout-v2.0.6](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@2.0.5...@hig/notifications-flyout@2.0.6) (2020-05-13)


### Bug Fixes

* stop using deprecated theme-data roles ([341f37a](https://github.com/Autodesk/hig/commit/341f37a))

# [@hig/notifications-flyout-v2.0.5](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@2.0.4...@hig/notifications-flyout@2.0.5) (2019-08-02)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/utils to version 0.4.0 ([b6cc34b](https://github.com/Autodesk/hig/commit/b6cc34b))

# [@hig/notifications-flyout-v2.0.4](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@2.0.3...@hig/notifications-flyout@2.0.4) (2019-05-10)


### Bug Fixes

* remove unused styles dependency ([0b1057d](https://github.com/Autodesk/hig/commit/0b1057d))

# [@hig/notifications-flyout-v2.0.3](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@2.0.2...@hig/notifications-flyout@2.0.3) (2019-04-24)


### Bug Fixes

* update icon-button dependency ([d48bc40](https://github.com/Autodesk/hig/commit/d48bc40))

# [@hig/notifications-flyout-v2.0.2](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@2.0.1...@hig/notifications-flyout@2.0.2) (2019-03-20)


### Bug Fixes

* notification badge border color ([edd04ba](https://github.com/Autodesk/hig/commit/edd04ba))
* use theme-data for padding ([2125101](https://github.com/Autodesk/hig/commit/2125101))

# [@hig/notifications-flyout-v2.0.1](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@2.0.0...@hig/notifications-flyout@2.0.1) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([3524211](https://github.com/Autodesk/hig/commit/3524211))

# [@hig/notifications-flyout-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@1.0.4...@hig/notifications-flyout@2.0.0) (2019-02-26)


### Features

* make notifications-flyout themeable ([857fcaf](https://github.com/Autodesk/hig/commit/857fcaf))


### BREAKING CHANGES

* * Removed all css classnames

# [@hig/notifications-flyout-v1.0.4](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@1.0.3...@hig/notifications-flyout@1.0.4) (2019-01-23)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/flyout to version 1.0.0 ([10c4c7a](https://github.com/Autodesk/hig/commit/10c4c7a))
* **package:** update [@hig](https://github.com/hig)/icons to version 2.0.0 ([eb12c2e](https://github.com/Autodesk/hig/commit/eb12c2e))

# [@hig/notifications-flyout-v1.0.3](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@1.0.2...@hig/notifications-flyout@1.0.3) (2019-01-08)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/flyout to version 0.8.0 ([37ab319](https://github.com/Autodesk/hig/commit/37ab319))

# [@hig/notifications-flyout-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@1.0.1...@hig/notifications-flyout@1.0.2) (2019-01-04)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/flyout to version 0.7.0 ([5b7d98a](https://github.com/Autodesk/hig/commit/5b7d98a))

# [@hig/notifications-flyout-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@1.0.0...@hig/notifications-flyout@1.0.1) (2018-12-06)


### Bug Fixes

* combined greenkeeper prs for version updates see pr 1392 ([d0a017a](https://github.com/Autodesk/hig/commit/d0a017a))

# [@hig/notifications-flyout-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@0.2.4...@hig/notifications-flyout@1.0.0) (2018-12-04)


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

# [@hig/notifications-flyout-v0.2.4](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@0.2.3...@hig/notifications-flyout@0.2.4) (2018-10-19)


### Bug Fixes

* **package:** update `[@hig](https://github.com/hig)/babel-preset` to produce valid syntax for IE11 ([2f4e8d8](https://github.com/Autodesk/hig/commit/2f4e8d8))

# [@hig/notifications-flyout-v0.2.3](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@0.2.2...@hig/notifications-flyout@0.2.3) (2018-10-08)


### Bug Fixes

* update dependencies ([70fb27c](https://github.com/Autodesk/hig/commit/70fb27c))

# [@hig/notifications-flyout-v0.2.2](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@0.2.1...@hig/notifications-flyout@0.2.2) (2018-10-08)


### Bug Fixes

* **presentation:** add missing stylesheet dependency ([56f4261](https://github.com/Autodesk/hig/commit/56f4261))

# [@hig/notifications-flyout-v0.2.1](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@0.2.0...@hig/notifications-flyout@0.2.1) (2018-10-02)


### Bug Fixes

* **behavior:** combine event handlers to call the notification `onDismiss` event handler ([4ab1798](https://github.com/Autodesk/hig/commit/4ab1798))

# [@hig/notifications-flyout-v0.2.0](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@0.1.2...@hig/notifications-flyout@0.2.0) (2018-09-26)


### Bug Fixes

* **utils:** Use combineEventHandlers for onClick passthrough ([116dacb](https://github.com/Autodesk/hig/commit/116dacb))
*  max-height calc on notifications-flyout ([4581856](https://github.com/Autodesk/hig/commit/4581856))


### Features

* **notifications-flyout:** Allow onClick prop passthrough ([56d0bb4](https://github.com/Autodesk/hig/commit/56d0bb4))

# [@hig/notifications-flyout-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@0.1.1...@hig/notifications-flyout@0.1.2) (2018-09-11)


### Bug Fixes

* upgrade flyout in dependants ([ea3bedd](https://github.com/Autodesk/hig/commit/ea3bedd))
* **bundle:** upgrade `[@hig](https://github.com/hig)/progress-ring` to remove vanilla dependency ([d756a13](https://github.com/Autodesk/hig/commit/d756a13))

# [@hig/notifications-flyout-v0.1.1](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@0.1.0...@hig/notifications-flyout@0.1.1) (2018-09-06)


### Bug Fixes

* flyout action alignment ([b7f242d](https://github.com/Autodesk/hig/commit/b7f242d))

# [@hig/notifications-flyout-v0.1.0](https://github.com/Autodesk/hig/compare/@hig/notifications-flyout@0.0.0...@hig/notifications-flyout@0.1.0) (2018-08-31)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))
* **icon-button:** Fix IconButton rendering when link is absent ([1f2e292](https://github.com/Autodesk/hig/commit/1f2e292))
* update icon sets ([9281451](https://github.com/Autodesk/hig/commit/9281451))


### Features

* **behavior:** rewrite NotificationsFlyout ([f9331f7](https://github.com/Autodesk/hig/commit/f9331f7))
* **presentation:** add empty state ([ffd49df](https://github.com/Autodesk/hig/commit/ffd49df))
* **presentation:** add empty state ([ab6b50d](https://github.com/Autodesk/hig/commit/ab6b50d))
* add props for positioning ([e50a0fd](https://github.com/Autodesk/hig/commit/e50a0fd))
* add support for notification images ([89f380a](https://github.com/Autodesk/hig/commit/89f380a))
* Mark package compatibility with React 16 ([6eaeb27](https://github.com/Autodesk/hig/commit/6eaeb27))
* refactors account and project filters, refines render behavior depending on what combination of accounts and projects is passed to component ([d25e5ad](https://github.com/Autodesk/hig/commit/d25e5ad))
