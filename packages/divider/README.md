# Divider

Dividers are used to separate content inline or in a stack. 

## Getting started

```
yarn add @weave-design/divider @weave-design/theme-context @weave-design/theme-data
```

## Import the component

```
import Divider from '@weave-design/divider';
```

## Basic usage

```jsx
<Divider
  length="50px"
  orientation="horizontal"
  variant="heavyweight"
/>
```
## Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.

Divider also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import Divider from '@weave-design/divider';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    divider: {
      ...styles.divider,
      color: themeData["colorScheme.status.error"]
    }
  });

  return (
    <Divider length="50px" stylesheet={customStylesheet} />
  );
}
```
