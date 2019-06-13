# HIG Themes for Material UI
HIG theme-data is embedded in 8 separate json theme files within @hig/theme-material-ui/build/material-ui/ as 'medadata' and 'resolvedRoles' keys. The Material UI configs within these themes currently contain settings for typography, color palette, and buttons. Please [contrubute](CONTRIBUTING.md) if you need themes for other Material UI components.

```js
// Setup a theme provider and supply a @hig material theme
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import lightGrayHighTheme from "@hig/theme-material-ui/build/material-ui/lightGrayHighDensityTheme";

// ...

// Render the component
<ThemeProvider theme={createMuiTheme(lightGrayHighTheme)}>
  <Button>Material UI Button</Button>
  <Button variant="outlined">Material UI Button</Button>
  <Button variant="contained">Material UI Button</Button>
  <Button disabled>Material UI Button</Button>
<ThemeProvider/>
```

Read more about how to use [Material UI themes](https://material-ui.com/customization/themes/).