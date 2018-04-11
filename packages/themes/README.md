# ThemeContext component

Themable HIG components within a `ThemeContext.Provider` will have access to the provided theme.

## Provide a theme to components
```
import { ThemeContext, HIGLightTheme } from '@hig/themes`;

function MyApp() {
  <ThemeContext.Provider value={HIGLightTheme}>
    <TheRestOfMyApp />
  </ThemeContext.Provider>
}
```