# Tooltip

Tooltips generally describe what a tool or feature does, or when or how to use it.

Read more about when and how to use the Tooltip component [on the internal wiki](https://hig.autodesk.com/web/components/tooltips).

## Getting started

### Install the package

```bash
yarn add @hig/tooltip @hig/theme-context @hig/theme-data
```

### Import the component

```js
import Tooltip from '@hig/tooltip';
```

## Basic usage

```jsx
<Tooltip anchorPoint="top-center" content="Testing tooltip">
  <Button title="Open Tooltip" />
</Tooltip>
```
## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component. 

Toolt also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import Tooltip from '@hig/tooltip';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    content: {
      ...styles.content,
      color: themeData["colorScheme.status.error"]
    },
    panel: {
      ...styles.panel,
      opacity: 1
    },
    panelInner: {
      ...styles.panelInner,
      padding: `4px`
    },
    textContent: {
      ...styles.textContent,
      position: `static`
    }
  });

  return (
    <Tooltip stylesheet={customStylesheet} />
  );
}
```
