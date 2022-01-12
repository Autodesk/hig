# Slider

A slider allows selecting a single numeric value from a range using a small sliding selector.

Read more about when and how to use the Slider component [on the website](https://hig.autodesk.com/web/components/form-elements).


## Getting started

### Install the package

```bash
yarn add @hig/slider @hig/theme-context @hig/theme-data
```

### Import the component

```js
import Slider from '@hig/slider';
```

## Basic usage

```jsx
<Slider
  min={21}
  max={99}
  step={1}
/>
```
## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component. 

Slider also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import Slider from '@hig/slider';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    slider: {
      ...styles.slider,
      color: themeData["colorScheme.status.error"]
    },
    markContainer: {
      ...styles.markContainer,
      opacity: 1
    },
    markRules: {
      ...styles.markRules,
      padding: `4px`
    },
    discrete: {
      ...styles.discrete,
      position: `static`
    }
  });

  return (
    <Slider stylesheet={customStylesheet} />
  );
}
```
