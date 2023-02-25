# Badge

Badges are visual indicators that communicate status and draw attention to an object. They may contain small amounts of information, such as iconography or text, to provide users with more detail. 

## Getting started

```
yarn add @hig/badge @hig/theme-context @hig/theme-data
```

## Import the component

```
import Badge from '@hig/badge';
```

## Basic usage

```jsx
<Badge size="l" variant="dot" />
```
## Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.

Badge also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import Badge from '@hig/badge';

function YourComponent() {
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    badge: {
      ...styles.badge,
      color: themeData["colorScheme.status.error"]
    }
  });

  return (
    <Badge stylesheet={customStylesheet} />
  );
}
```
