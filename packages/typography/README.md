# Typography

The Typography components apply the Artifakt typeface to text.

## Getting started

```
yarn add @weave-design/typography @weave-design/theme-context @weave-design/theme-data
yarn add @weave-design/fonts
```

## Import the component and CSS

```
import Typography from '@weave-design/typography';
import "@weave-design/fonts/build/ArtifaktElement.css";
```

## Basic usage

```jsx
<Typography>Artifakt Element is the preferred font.</Typography>
```
## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component. 

Typography also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import Typography from '@weave-design/typography';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    typography: {
      ...styles.typography,
      color: themeData["colorScheme.errorColor"]
    }
  });

  return (
    <Typography stylesheet={customStylesheet} />
  );
}
```
