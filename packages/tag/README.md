# Tag

Tags are compact elements that can be used to represent small blocks of information.

## Getting started

```
yarn add @hig/tag @hig/theme-context @hig/theme-data
```

## Import the component

```
import Tag from '@hig/tag';
```

## Basic usage

```jsx
<Tag>Tag Label</Tag>
```

## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component. 

Spacer also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import Thumbnail from '@hig/Tag';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    tag: {
      ...styles.tag,
      wrapper: {
        ...styles.tag.wrapper,
        color: themeData["colorScheme.status.error"],
      },
      labelWrapper: {
        ...styles.tag.labelWrapper,
        color: themeData["colorScheme.status.error"],
      },
      closeWrapper: {
        ...styles.tag.border,
        color: themeData["colorScheme.status.error"],
      },
    },
  });

  return (
    <Tag stylesheet={customStylesheet}>Tag Label</>
  );
}
```
