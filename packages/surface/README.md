# Surface

The Surface component renders a themable container with the appropriate background color for the current theme. It is intended to wrap other HIG components, however may also be used independently. 

## Getting started

```
yarn add @hig/surface @hig/theme-context @hig/theme-data
```

## Import the component

```
import Surface from '@hig/surface';
```

## Basic usage

```jsx
<Surface
  level=200
  horizontalPadding="m"
  verticalPadding="m"
  shadow="high"
  borderRadius="m"
>Hello, world</Surface>
```
## Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.

Surface also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import Surface from '@hig/surface';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    surface: {
      ...styles.surface,
      color: themeData["colorScheme.status.error"]
    }
  });

  return (
    <Surface stylesheet={customStylesheet} />
  );
}
```
