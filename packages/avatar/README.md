# Avatar

Avatars are a visual representation of a customer's identity. These may be small thumbnails as part of a menu or more prominent, standalone elements on account and management views.

Initials are dynamically generated from the provided name and always rendered. This allows the initials to serve as a placeholder while the image is loading.

## Getting started

### Install the package

```bash
yarn add @weave-design/avatar @weave-design/theme-context @weave-design/theme-data
```

### Import the component

```js
import Avatar, { sizes } from '@weave-design/avatar';
```

## Basic usage

```jsx
<Avatar
  name="David Gonzales"
  size={sizes.LARGE_48}
/>
```

## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component. 

Avatar also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import Avatar from '@weave-design/avatar';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    avatarContainer: {
      ...styles.avatarContainer,
      color: themeData["colorScheme.status.error"]
    },
    avatarImageWrapper: {
      ...styles.avatarImageWrapper,
      opacity: 1
    },
    avatarImage: {
      ...styles.avatarImage,
      padding: `4px`
    },
    avatarInitials: {
      ...styles.avatarInitials,
      position: `static`
    }
  });

  return (
    <Avatar stylesheet={customStylesheet} />
  );
}
```
