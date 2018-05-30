# Avatar

Avatars are a visual representation of a customer's identity. These may be small thumbnails as part of a menu or more prominent, standalone elements on account and management views.

Initials are dynamically generated from the provided name and always rendered. This allows the initials to serve as a placeholder while the image is loading.

Read more about when and how to use the Avatar component [on the internal wiki](https://wiki.autodesk.com/display/HIG/Avatars).

## Getting started

### Install the package

```bash
yarn add @hig/avatar
```

### Import the component and CSS

```js
import Avatar, { sizes } from '@hig/avatar';
import '@hig/avatar/build/index.css';
```

## Basic usage

```jsx
<Avatar
  name="David Gonzales"
  size={sizes.LARGE_36}
/>
```
