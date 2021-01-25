# Label

Label represents a caption for an item in a user interface

## Getting started

### Install the package

```bash
yarn add @hig/label @hig/theme-context @hig/theme-data
```

### Import the component

```js
import Label from '@hig/label';
```

## Basic usage

```jsx
<Label for="email-field">Email</Label>
```

## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component. 

Label also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import Label from '@hig/label';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    label: {
      ...styles.label,
      color: themeData["colorScheme.status.error"]
    }
  });

  return (
    <Label stylesheet={customStylesheet} />
  );
}
```

