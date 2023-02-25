# Checkbox

Checkboxes provide a control to select from a list of non-exclusive options.

## Getting started

### Install the package

```bash
yarn add @weave-design/checkbox @weave-design/theme-context @weave-design/theme-data
```

### Import the component

```js
import Checkbox from '@weave-design/checkbox';
```

## Basic usage

```jsx
<Checkbox />
```

## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component. 

Checkbox also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance:

```jsx
import Checkbox from '@weave-design/checkbox';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    checkboxWrapper: {
      ...styles.checkboxWrapper,
      color: themeData["colorScheme.status.error"]
    },
    checkboxInput: {
      ...styles.checkboxInput,
      opacity: 1
    },
    checkboxCheck: {
      ...styles.checkboxCheck,
      padding: `4px`
    },
    checkboxCheckWrapper: {
      ...styles.checkboxCheckWrapper,
      position: `static`
    },
    checkboxIndeterminate: {
      ...styles.checkboxIndeterminate,
      margin: `10px`
    }
  });

  return (
    <Checkbox stylesheet={customStylesheet} />
  );
}
```
