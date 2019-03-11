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
