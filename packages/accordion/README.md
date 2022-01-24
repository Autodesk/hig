# Accordion

Accordions can make content-heavy pages appear less so by vertically stacking items in lists that users can expand or contract.

Read more about when and how to use the Accordion component [on the internal wiki](https://wiki.autodesk.com/display/HIG/accordion).

## Getting started

### Install the package

```bash
yarn add @hig/accordion @hig/theme-context @hig/theme-data
```

### Import the component

```js
import Accordion from "@hig/accordion";
```

## Basic usage

```jsx
<Accordion label="foo">
  bar
</Accordion>
```

## Customization


### Indicator
The icon and position of the indicator can be customized by props, available values can be found via:
```js
import {
  indicators,
  indicatorPositions,
  AVAILABLE_INDICATORS,
  AVAILABLE_INDICATOR_POSITIONS
} from "@hig/accordion";
```

### Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.

Accordion also has a `stylesheet` prop that accepts a function wherein you can modify Accordion's styles. The original styles, props, current theme data and theme meta will be passed to your custom stylesheet function, and it should return an object with the same structure as the original styles. For instance

```jsx
function customStylesheet(styles, props, themeData, themeMeta) {
  return {
    ...styles,
    wrapper: {
      ...styles.wrapper,
      backgroundColor: "yellow"
    },
    header: {
      ...styles.header,
      backgroundColor: props.collapsed
        ? themeData["basics.colors.green100"]
        : themeData["basics.colors.darkBlue100"]
    }
  };
}

<Accordion stylesheet={customStylesheet} label="foo">
  bar
</Accordion>
```
