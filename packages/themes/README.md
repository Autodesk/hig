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
      backgroundColor: themeData["COLOR_SCHEME.SURFACE_LEVEL_2_COLOR"],
      borderRadius: themeData["BASICS.BORDER_RADII.s"],
      color: themeData["COLOR_SCHEME.TEXT_COLOR"],
      padding: themeData["DENSITY.SPACINGS.M"],
    }}>
      The current theme is "{themeName}".
    </div>
  )}</ThemeContext.Consumer>
}
```
