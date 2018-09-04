# Tooltip

Tooltips generally describe what a tool or feature does, or when or how to use it.

Read more about when and how to use the Tooltip component [on the internal wiki](https://hig.autodesk.com/web/components/tooltips).

## Getting started

### Install the package

```bash
yarn add @hig/tooltip
```

### Import the component and CSS

```js
import Tooltip from '@hig/tooltip';
import '@hig/tooltip/build/index.css';
```

## Basic usage

```jsx
<Tooltip anchorPoint="top-center" title="Testing tooltip">
  <Button title="Open Tooltip" />
</Tooltip>
```
