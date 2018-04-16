# Icon

Autodesk tool icons have a distinctive style. Although they don’t need to communicate complex interactions, the HIG icons should complement these icons, and look like they belong to the same family of products.

Read more about where and how to use icons on [the website](https://hig.autodesk.com/web/basics/icons).

## Getting started

```
yarn add @hig/icon
```

## Import the component and CSS

```
import Icon from '@hig/icon';
import '@hig/icon/build/index.css';
```

## Typical usage

Use the `name` prop to render a provided icon by name.

```jsx
<Icon name="assets" />
```

## Specifying a smaller size

```jsx
<Icon name="assets" size="16" />
```

## Providing a custom SVG

```jsx
import myIcon from 'my-icon.svg';

function MyComponent() {
  return <Icon svg={myIcon} />
}
```
