# Styles

This package contains design tokens and platform specific styles for Autodesk HIG.

## Getting started

### Install the package

```bash
yarn add @hig/styles
```

## Basic usage

### Import stylesheets

```js
import "@hig/styles/build/index.css";
```

```scss
@import "~@hig/styles/build/index.css";
```

### Reference colors using SASS mixins

```scss
@import "~@hig/styles/mixins/colors.scss";

main (
  background: color(hig-blue-50);
}
```

<!-- TODO: Document API. Sass mixins, tokens, styles, etc. -->
