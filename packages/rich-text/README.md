# Rich Text

The Rich Text component applies the HIG typography styles to whatever is passed to it, whether that be React children or regular HTML. This is particularly useful for styling markdown content.

Read more about when and how to use the Typography components [on the HIG website](https://hig.autodesk.com/web/basics/typography).

## Getting started

```
yarn add @hig/rich-text @hig/theme-context @hig/theme-data
```

## Import the component and font CSS

```
import RichText from '@hig/rich-text';
import "@hig/fonts/build/ArtifaktElement.css";
```

## Basic usage

```jsx
<RichText>
  <h1>Make Your Rich Text Richer</h1>
  <p>All you need to do is wrap it in a <code>{`<RichText />`}</code> component.</p>
</RichText>
```

## Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.

RichText also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import RichText from '@hig/rich-text';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    richText: {
      ...styles.richText,
      color: themeData["colorScheme.status.error"]
    }
  });

  return (
    <RichText stylesheet={customStylesheet} />
  );
}
```
