# Flyout

A flyout is a lightweight popup container, typically styled as a small box with a nub (pointer). Flyouts provide a container for navigation, actions, and menu options.

Read more about when and how to use the Flyout component [on the website](https://hig.autodesk.com/web/components/flyouts).

## Getting started

### Install the package

```bash
yarn add @hig/flyout
```

### Import the component and CSS

```js
import Flyout from '@hig/flyout';
import '@hig/flyout/build/index.css';
```

## Basic usage

```jsx
<Flyout
  anchorPoint="right-top"
  content={
    <div>
      <h3>Important flyout information</h3>
      <p>Any content can go in here.</p>
    </div>
  }
>
  <Button title="Open flyout" />
</Flyout>
```
