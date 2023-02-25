# Checkbox

Checkboxes provide a control to select from a list of non-exclusive options.

Read more about when and how to use the Checkbox component [on the website](https://hig.autodesk.com/web/components/inputs-and-controls#checkboxes).

## Getting started

### Install the package

```bash
yarn add @hig/checkbox @hig/theme-context @hig/theme-data
```

### Import the component

```js
import Checkbox from '@hig/checkbox';
```

## Basic usage

```jsx
<Checkbox />
```

## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component. 

Checkbox also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance:

```jsx
import Checkbox from '@hig/checkbox';

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
