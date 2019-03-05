# Fonts

This package contains the fonts for Autodesk HIG.

## Getting started

### Install the package

```bash
yarn add @hig/fonts
```

## Basic usage

The design system specifies three font weights, 400, 600, and 700. For ease of use we provide `ArtifactElement.css` which imports those three weights.

```js
/* ArtifaktElement font w/ weights used in the design system (400, 600, and 700)  */
import "@hig/fonts/build/ArtifaktElement.css";
```


### Import additional weights

If you need more granular control, you can import each font your app uses, including weights beyond those reccommended in the desing system.

```js
/* ArtifaktElement font weights individually  */
import "@hig/fonts/build/ArtifaktElement100.css";
import "@hig/fonts/build/ArtifaktElement200.css";
import "@hig/fonts/build/ArtifaktElement300.css";
import "@hig/fonts/build/ArtifaktElement400.css";
import "@hig/fonts/build/ArtifaktElement500.css";
import "@hig/fonts/build/ArtifaktElement600.css";
import "@hig/fonts/build/ArtifaktElement700.css";
import "@hig/fonts/build/ArtifaktElement800.css";
import "@hig/fonts/build/ArtifaktElement900.css";
```

### Import all weights

You can import all weights at once, but do so with caution. Importing unused font weights may unneccesarily increase package size.

```js
/* ArtifaktElement font w/ weights used in the design system (400, 600, and 700)  */
import "@hig/fonts/build/ArtifaktElementAll.css";
```
