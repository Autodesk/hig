# Progress Bar

The progress bar is one kind of visual representation of content loading.

## Getting started

### Install the package

```bash
yarn add @weave-design/progress-bar @weave-design/theme-context @weave-design/theme-data
```

### Import the component

```js
import ProgressBar from '@weave-design/progress-bar';
```

## Basic usage

```jsx
<ProgressBar />
```

## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component. 

ProgressBar also has a `stylesheet` prop that accepts a function wherein you can modify ProgressBar's styles. For instance

```jsx
import ProgressBar from '@weave-design/progress-bar';

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
