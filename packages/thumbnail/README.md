# Thumbnail

Thumbnails are used as visual anchors and identifiers for objects.

## Getting started

```
yarn add @hig/thumbnail @hig/theme-context @hig/theme-data
```

## Import the component

```
import Thumbnail from '@hig/thumbnail';
```

## Basic usage

```jsx
<Thumbnail alt="Weave Logo" src="https://d95xa459ljwvg.cloudfront.net/theme/weave-logo.svg" />
```

## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component. 

Spacer also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import Thumbnail from '@hig/thumbnail';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    thumbnail: {
      ...styles.thumbnail,
      wrapper: {
        ...styles.thumbnail.wrapper,
        color: themeData["colorScheme.status.error"],
      },
      border: {
        ...styles.thumbnail.border,
        color: themeData["colorScheme.status.error"],
      },
      image: {
        ...styles.thumbnail.image,
        color: themeData["colorScheme.status.error"],
      },
    },
  });

  return (
    <Thumbnail stylesheet={customStylesheet} />
  );
}
```
