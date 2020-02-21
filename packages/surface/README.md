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
