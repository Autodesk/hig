# Icon Button

Action buttons that include an icon only, with no background. Useful for compact displays or toolbars with a number of related controls.

Read more about where and how to use IconButton on [the website](https://hig.autodesk.com/web/components/buttons).


## Getting started

```
yarn add @hig/icon-button @hig/theme-context @hig/theme-data
```

## Import the component

```
import IconButton from '@hig/icon-button';
```

## Typical usage

Use the `name` prop to render a provided icon by name.

```jsx
import { Assets24 } from "@hig/icons"

function MyComponent() {
  return (
    <IconButton
      icon={<Assets24 />}
      onClick={() => console.log('Clicked it.')}
    />
  );
}
```

## Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.

Icon-Button also has a `stylesheet` prop that accepts a function wherein you can modify Icon Button's styles. The original styles, props, current theme data and theme meta will be passed to your custom stylesheet function, and it should return an object with the same structure as the original styles. For instance

```jsx
function customStylesheet(styles, props, themeData, themeMeta) {
  return {
    ...styles,
    iconButton: {
      ...styles.iconButton,
      backgroundColor: "yellow"
    },
    iconSpacer: {
      ...styles.iconSpacer,
      backgroundColor: props.hasFocus
        ? themeData["colorScheme.reference.base"]
        : themeData["colorScheme.reference.accent"]
    },
    iconButtonIcon: {
      ...styles.iconButtonIcon,
      padding: themeData["density.spacings.medium"]
    }
  };
}

<IconButton stylesheet={customStylesheet} />
```

## Providing a custom SVG

```jsx
import myIcon from 'my-icon.svg';

function MyComponent() {
  return (
    <IconButton
      icon={myIcon}
      onClick={() => console.log('Clicked it.')}
    />
  );
}
```
