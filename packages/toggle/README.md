# Toggle

Toggle switches provide a control for a single action with a clear on/off or start/stop.

## Getting started

### Install the package

```bash
yarn add @weave-design/toggle @weave-design/theme-context @weave-design/theme-data
```

### Import the component

```js
import Toggle from '@weave-design/toggle';
```

## Basic usage

```jsx
<Toggle />
```

## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.

Toggle also has a `stylesheet` prop that accepts a function wherein you can modify Toggle's styles. Default styles, props, and theme-data are passed as arguments. For instance

```js

function customStylesheet(styles) {
  return {
    ...styles,
    toggleWrapper: {
      ...styles.toggleWrapper,
      borderColor: "blue"
    }
  };
}
<Toggle stylsheet={customStylesheet} />
```
