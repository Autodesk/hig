# [@hig/button-v2.0.1](https://github.com/Autodesk/hig/compare/@hig/button@2.0.0...@hig/button@2.0.1) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/button-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/button@1.4.5...@hig/button@2.0.0) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))
* remove key duplicated ([2683acc](https://github.com/Autodesk/hig/commit/2683acc))


### Code Refactoring

* Major Release - React 17 Upgrade ([e6542b7](https://github.com/Autodesk/hig/commit/e6542b7))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you're already on react 17 you can bump the version directly. If you're on an old version of react you'll need to upgrade your project's react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/button-v1.4.5](https://github.com/Autodesk/hig/compare/@hig/button@1.4.4...@hig/button@1.4.5) (2021-10-11)


### Bug Fixes

* allow tabindex to be passed down ([2d0baca](https://github.com/Autodesk/hig/commit/2d0baca))

# [@hig/button-v1.4.4](https://github.com/Autodesk/hig/compare/@hig/button@1.4.3...@hig/button@1.4.4) (2020-05-12)


### Bug Fixes

* stop using deprecated theme-data roles ([98a91ef](https://github.com/Autodesk/hig/commit/98a91ef))

# [@hig/button-v1.4.3](https://github.com/Autodesk/hig/compare/@hig/button@1.4.2...@hig/button@1.4.3) (2019-08-08)


### Bug Fixes

* classname should be passed down to icon elements ([5c9b6c5](https://github.com/Autodesk/hig/commit/5c9b6c5))

# [@hig/button-v1.4.2](https://github.com/Autodesk/hig/compare/@hig/button@1.4.1...@hig/button@1.4.2) (2019-07-26)


### Bug Fixes

* remove pointer events when link is disabled ([1d6f04a](https://github.com/Autodesk/hig/commit/1d6f04a))

# [@hig/button-v1.4.1](https://github.com/Autodesk/hig/compare/@hig/button@1.4.0...@hig/button@1.4.1) (2019-07-24)


### Bug Fixes

* halo transitions ([89ad431](https://github.com/Autodesk/hig/commit/89ad431))

# [@hig/button-v1.4.0](https://github.com/Autodesk/hig/compare/@hig/button@1.3.3...@hig/button@1.4.0) (2019-06-20)


### Bug Fixes

* allow passing down className to Button ([fa47fd5](https://github.com/Autodesk/hig/commit/fa47fd5))


### Features

* enable stylesheet function prop on Button ([4374d81](https://github.com/Autodesk/hig/commit/4374d81))

# [@hig/button-v1.3.3](https://github.com/Autodesk/hig/compare/@hig/button@1.3.2...@hig/button@1.3.3) (2019-05-24)


### Bug Fixes

* button height is incorrect when using an icon ([0dea7c6](https://github.com/Autodesk/hig/commit/0dea7c6))

# [@hig/button-v1.3.2](https://github.com/Autodesk/hig/compare/@hig/button@1.3.1...@hig/button@1.3.2) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([b6e1f4d](https://github.com/Autodesk/hig/commit/b6e1f4d))

# [@hig/button-v1.3.1](https://github.com/Autodesk/hig/compare/@hig/button@1.3.0...@hig/button@1.3.1) (2019-03-05)


### Bug Fixes

* button design tweak ([6848aed](https://github.com/Autodesk/hig/commit/6848aed))

# [@hig/button-v1.3.0](https://github.com/Autodesk/hig/compare/@hig/button@1.2.2...@hig/button@1.3.0) (2019-02-26)


### Features

* pass down arbitrary props ([ea5ac17](https://github.com/Autodesk/hig/commit/ea5ac17))

# [@hig/button-v1.2.2](https://github.com/Autodesk/hig/compare/@hig/button@1.2.1...@hig/button@1.2.2) (2019-02-08)


### Bug Fixes

* bump up theme-context dependency ([b068dab](https://github.com/Autodesk/hig/commit/b068dab))

# [@hig/button-v1.2.1](https://github.com/Autodesk/hig/compare/@hig/button@1.2.0...@hig/button@1.2.1) (2019-01-23)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/theme-context to version 2.0.0 ([b07db45](https://github.com/Autodesk/hig/commit/b07db45))

# [@hig/button-v1.2.0](https://github.com/Autodesk/hig/compare/@hig/button@1.1.0...@hig/button@1.2.0) (2019-01-04)


### Features

* gives buttons intended height ([9358562](https://github.com/Autodesk/hig/commit/9358562))
* passes disabled prop through to button el ([d03c4a3](https://github.com/Autodesk/hig/commit/d03c4a3))

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
