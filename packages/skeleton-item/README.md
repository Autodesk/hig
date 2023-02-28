# Skeleton Item

The Skeleton Item component renders a rectangular loading indicator, meant to serve as a placeholder until your actual content is ready to be rendered.

## Getting started

```
yarn add @weave-design/skeleton-item @weave-design/theme-context @weave-design/theme-data
```

## Import the component

```
import SkeletonItem from '@weave-design/skeleton-item';
```

## Basic usage

```jsx
<SkeletonItem maxWidth="400px" marginBottom="24px" />
```
## Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.

SkeletonItem also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import SkeletonItem from '@weave-design/skeleton-item';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    skeletonItem: {
      ...styles.skeletonItem,
      color: themeData["colorScheme.status.error"]
    }
  });

  return (
    <SkeletonItem stylesheet={customStylesheet} />
  );
}
```
