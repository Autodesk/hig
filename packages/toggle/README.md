# Toggle

Toggle switches provide a control for a single action with a clear on/off or start/stop.

Read more about when and how to use the Toggle component [on the website](https://hig.autodesk.com/web/components/toggle-switches).


## Getting started

### Install the package

```bash
yarn add @hig/toggle @hig/theme-context @hig/theme-data
```

### Import the component

```js
import Toggle from '@hig/toggle';
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
