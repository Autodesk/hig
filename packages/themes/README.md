# ThemeContext component

Themable HIG components within a `ThemeContext.Provider` will have access to the provided theme.

## Getting started

```bash
yarn add @hig/themes
```

## Provide a theme to components
```jsx
import { ThemeContext, HIGLightGrayTheme } from '@hig/themes`;

function MyApp() {
  <ThemeContext.Provider value={HIGLightGrayTheme}>
    <TheRestOfMyApp />
  </ThemeContext.Provider>
}
```

## Consume theme values in a component
```jsx
import { ThemeContext } from '@hig/themes`;

function MyThemedComponent() {
  <ThemeContext.Consumer>{({ themeData, themeName }) => (
    <div style={{
      backgroundColor: themeData["colorScheme.surfaceLevel20Color"],
      borderRadius: themeData["basics.borderRadii.small"],
      color: themeData["colorScheme.textColor"],
      padding: themeData["density.spacings.medium"],
    }}>
      The current theme is "{themeName}".
    </div>
  )}</ThemeContext.Consumer>
}
```
