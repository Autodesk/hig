# Skeleton Item

The Skeleton Item component renders a rectangular loading indicator, meant to serve as a placeholder until your actual content is ready to be rendered.

## Getting started

```
yarn add @hig/skeleton-item @hig/theme-context @hig/theme-data
```

## Import the component

```
import SkeletonItem from '@hig/skeleton-item';
```

## Basic usage

```jsx
<SkeletonItem maxWidth="400px" marginBottom="24px" />
```
## Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.
