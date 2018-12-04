# Icon Button

Action buttons that include an icon only, with no background. Useful for compact displays or toolbars with a number of related controls.

Read more about where and how to use IconButton on [the website](https://hig.autodesk.com/web/components/buttons).

## Getting started

```
yarn add @hig/icon-button
```

## Import the component and CSS

```
import IconButton from '@hig/icon-button';
import '@hig/icon-button/build/index.css';
```

## Typical usage

Use the `name` prop to render a provided icon by name.

```jsx
import { Assets24 } from "@hig/icons"

function MyComponent() {
  return (
    <IconButton
      icon={<Assets24 />}
      onClick={() => console.log('Clicked it.')}
    />
  );
}
```

## Providing a custom SVG

```jsx
import myIcon from 'my-icon.svg';

function MyComponent() {
  return (
    <IconButton
      icon={myIcon}
      onClick={() => console.log('Clicked it.')}
    />
  );
}
```
