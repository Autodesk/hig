# Rich Text

The Rich Text component applies the Weave typography styles to whatever is passed to it, whether that be React children or regular HTML. This is particularly useful for styling markdown content.

## Getting started

```
yarn add @weave-design/rich-text @weave-design/theme-context @weave-design/theme-data
```

## Import the component and font CSS

```
import RichText from '@weave-design/rich-text';
import "@weave-design/fonts/build/ArtifaktElement.css";
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
import RichText from '@weave-design/rich-text';

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
