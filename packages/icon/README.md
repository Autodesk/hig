# Icon

Autodesk tool icons have a distinctive style. Although they don’t need to communicate complex interactions, the HIG icons should complement these icons, and look like they belong to the same family of products.

Read more about where and how to use icons on [the website](https://hig.autodesk.com/web/basics/icons).

## Typical usage

Use the `name` prop to render a provided icon by name.

```jsx
import Icon from '@hig/icon`;
import '@hig/icon/build/index.css';

function MyComponent() {
  return <Icon name="assets" />
}
```

## Specifying a smaller size

```jsx
import Icon from '@hig/icon`;
import '@hig/icon/build/index.css';

function MyComponent() {
  return <Icon name="assets" size="16" />
}
```

## Providing a custom SVG

```jsx
import Icon from '@hig/icon`;
import '@hig/icon/build/index.css';
import myIcon from 'my-icon.svg';

function MyComponent() {
  return <Icon svg={myIcon} />
}
```