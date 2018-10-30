# ThemeContext component

Themable HIG components within a `ThemeContext.Provider` will have access to the provided theme.

## Getting started

```bash
yarn add @hig/themes
```

## Provide a theme to components
```jsx
import HIGDarkBlueTheme from '@hig/theme-data/build/darkBlueMediumDensity/theme.json';
import ThemeContext from '@hig/theme-context';

function MyApp() {
  <ThemeContext.Provider value={HIGDarkBlueTheme}>
    <TheRestOfMyApp />
  </ThemeContext.Provider>
}
```

## Consume theme values in a component
```jsx
import ThemeContext from '@hig/themes';

function MyThemedComponent() {
  <ThemeContext.Consumer>{({ resolvedRoles, name }) => (
    <div style={{
      backgroundColor: resolvedRoles["colorScheme.surfaceLevel200Color"],
      borderRadius: resolvedRoles["basics.borderRadii.small"],
      color: resolvedRoles["colorScheme.textColor"],
      padding: resolvedRoles["density.spacings.medium"],
    }}>
      The current theme is "{name}".
    </div>
  )}</ThemeContext.Consumer>
}
```
