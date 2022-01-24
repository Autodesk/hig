# Spacer

The Spacer component renders a square of empty space, meant to add space around and in other components.

## Getting started

```
yarn add @hig/spacer @hig/theme-context @hig/theme-data
```

## Import the component

```
import Spacer from '@hig/spacer';
```

## Basic usage

```jsx
<Spacer spacing="xl"/>
```

## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component. 

Spacer also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import Spacer from '@hig/spacer';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    spacer: {
      ...styles.spacer,
      color: themeData["colorScheme.status.error"]
    }
  });

  return (
    <Spacer stylesheet={customStylesheet} />
  );
}
```
