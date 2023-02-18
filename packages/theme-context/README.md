# ThemeContext component

Themable Weave components within a `ThemeContext.Provider` will have access to the provided theme.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Getting started](#getting-started)
- [Provide a theme to components](#provide-a-theme-to-components)
- [Consume theme values in a component](#consume-theme-values-in-a-component)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Getting started

```bash
yarn add @weave-design/theme-context @weave-design/theme-data
```

## Provide a theme to components

```jsx
import WeaveDarkBlueTheme from '@weave-design/theme-data/build/esm/darkBlueMediumDensityTheme';
import ThemeContext from '@weave-design/theme-context';

function MyApp() {
  <ThemeContext.Provider value={WeaveDarkBlueTheme}>
    <TheRestOfMyApp />
  </ThemeContext.Provider>
}
```

For information on customizing a theme or importing theme data in different formats, see the [theme-data README](../packages/theme-data/README.md).

## Consume theme values in a component
```jsx
import ThemeContext from '@weave-design/theme-context';

function MyThemedComponent() {
  <ThemeContext.Consumer>{({ resolvedRoles, metadata }) => (
    <div style={{
      backgroundColor: resolvedRoles["colorScheme.surface.level200"],
      borderRadius: resolvedRoles["basics.borderRadii.small"],
      color: resolvedRoles["colorScheme.text.default"],
      padding: resolvedRoles["density.spacings.medium"],
    }}>
      The current theme is "${metadata.name}".
    </div>
  )}</ThemeContext.Consumer>
}
```
