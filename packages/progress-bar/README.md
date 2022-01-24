# Progress Bar

The progress bar is one kind of visual representation of content loading.

Read more about when and how to use the Progress Bar component [on the website](https://hig.autodesk.com/web/components/progress-indicators).

## Getting started

### Install the package

```bash
yarn add @hig/progress-bar @hig/theme-context @hig/theme-data
```

### Import the component

```js
import ProgressBar from '@hig/progress-bar';
```

## Basic usage

```jsx
<ProgressBar />
```

## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component. 

ProgressBar also has a `stylesheet` prop that accepts a function wherein you can modify ProgressBar's styles. For instance

```jsx
import ProgressBar from '@hig/progress-bar';

function YourComponent() {
  // ...
  const customStylesheet = (styles, themeData) => ({
    ...styles,
    wrapper: {
      ...styles.wrapper,
      backgroundColor: themeData["colorScheme.surface.level100"]
    }
  });

  return (
    <ProgressBar stylesheet={customStylesheet} />
  );
}
```
