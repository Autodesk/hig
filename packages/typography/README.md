# Typography

The Typography components apply the Artifakt typeface to text.

Read more about when and how to use the Typography components [on the HIG website](https://hig.autodesk.com/web/basics/typography).


## Getting started

```
yarn add @hig/typography @hig/theme-context @hig/theme-data
yarn add @hig/fonts
```

## Import the component and CSS

```
import Typography from '@hig/typography';
import "@hig/fonts/build/ArtifaktElement.css";
```

## Basic usage

```jsx
<Typography>Artifakt Element is the preferred font.</Typography>
```
## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component. 

Typography also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import Typography from '@hig/typography';

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
