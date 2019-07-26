# [@hig/notifications-toast-v2.0.5](https://github.com/Autodesk/hig/compare/@hig/notifications-toast@2.0.4...@hig/notifications-toast@2.0.5) (2019-07-16)


### Bug Fixes

* update NotificationToast to newest Icons ([fa2e4fe](https://github.com/Autodesk/hig/commit/fa2e4fe))

# [@hig/notifications-toast-v2.0.4](https://github.com/Autodesk/hig/compare/@hig/notifications-toast@2.0.3...@hig/notifications-toast@2.0.4) (2019-05-10)


### Bug Fixes

* disapperance of x-button due to long text overflow ([98e2396](https://github.com/Autodesk/hig/commit/98e2396))

# [@hig/notifications-toast-v2.0.3](https://github.com/Autodesk/hig/compare/@hig/notifications-toast@2.0.2...@hig/notifications-toast@2.0.3) (2019-04-24)


### Bug Fixes

* update icon-button dependency ([cf5518b](https://github.com/Autodesk/hig/commit/cf5518b))

# [@hig/notifications-toast-v2.0.2](https://github.com/Autodesk/hig/compare/@hig/notifications-toast@2.0.1...@hig/notifications-toast@2.0.2) (2019-03-27)


### Bug Fixes

* design tweaks ([0d18c68](https://github.com/Autodesk/hig/commit/0d18c68))

# [@hig/notifications-toast-v2.0.1](https://github.com/Autodesk/hig/compare/@hig/notifications-toast@2.0.0...@hig/notifications-toast@2.0.1) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([6e9e3d8](https://github.com/Autodesk/hig/commit/6e9e3d8))

# [@hig/notifications-toast-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/notifications-toast@1.0.4...@hig/notifications-toast@2.0.0) (2019-02-26)


### Features

* make notifications-toast themeable ([6c24f27](https://github.com/Autodesk/hig/commit/6c24f27))


### BREAKING CHANGES

* * Remove all CSS classnames

# [@hig/notifications-toast-v1.0.4](https://github.com/Autodesk/hig/compare/@hig/notifications-toast@1.0.3...@hig/notifications-toast@1.0.4) (2019-01-23)


### Bug Fixes

* **package:** update [@hig](https://github.com/hig)/icons to version 2.0.0 ([699e99d](https://github.com/Autodesk/hig/commit/699e99d))

# [@hig/notifications-toast-v1.0.3](https://github.com/Autodesk/hig/compare/@hig/notifications-toast@1.0.2...@hig/notifications-toast@1.0.3) (2019-01-04)


### Bug Fixes

* **avatar:** add theme knobs in avatar storybook, use only one letter for avatar when size is small, fix js warnings ([4057b51](https://github.com/Autodesk/hig/commit/4057b51))

# [@hig/notifications-toast-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/notifications-toast@1.0.1...@hig/notifications-toast@1.0.2) (2018-12-11)


### Bug Fixes

* remove leftover icon css dependencies ([2af5d0b](https://github.com/Autodesk/hig/commit/2af5d0b))

# [@hig/notifications-toast-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/notifications-toast@1.0.0...@hig/notifications-toast@1.0.1) (2018-12-06)


### Bug Fixes

* combined greenkeeper prs for version updates see pr 1392 ([d0a017a](https://github.com/Autodesk/hig/commit/d0a017a))

# [@hig/notifications-toast-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/notifications-toast@0.1.3...@hig/notifications-toast@1.0.0) (2018-12-04)


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

# [@hig/notifications-toast-v0.1.3](https://github.com/Autodesk/hig/compare/@hig/notifications-toast@0.1.2...@hig/notifications-toast@0.1.3) (2018-10-08)


### Bug Fixes

* update dependencies ([70fb27c](https://github.com/Autodesk/hig/commit/70fb27c))

# [@hig/notifications-toast-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/notifications-toast@0.1.1...@hig/notifications-toast@0.1.2) (2018-10-08)


### Bug Fixes

* **presentation:** correct typography font ([6cadf3a](https://github.com/Autodesk/hig/commit/6cadf3a))
* **presentation:** update hack due to `RichText` changes ([4e13ae4](https://github.com/Autodesk/hig/commit/4e13ae4))

# [@hig/notifications-toast-v0.1.1](https://github.com/Autodesk/hig/compare/@hig/notifications-toast@0.1.0...@hig/notifications-toast@0.1.1) (2018-09-11)


### Bug Fixes

* import missing dependency styles ([e806451](https://github.com/Autodesk/hig/commit/e806451))

# [@hig/notifications-toast-v0.1.0](https://github.com/Autodesk/hig/compare/@hig/notifications-toast@0.0.0...@hig/notifications-toast@0.1.0) (2018-09-11)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))
* **notifications-toast:** Fix alignment of dismiss button relative to Toast content ([5e30feb](https://github.com/Autodesk/hig/commit/5e30feb))
* update icon sets ([9281451](https://github.com/Autodesk/hig/commit/9281451))


### Features

* **notifications-toast:** Move and rename ToastList out of hig-react ([7e4f602](https://github.com/Autodesk/hig/commit/7e4f602))
