# Radio Button

Radio Buttons provide a control to select one exclusively from a list of options.

Read more about when and how to use the Radio Button component [on the website](https://hig.autodesk.com/web/components/form-elements).


## Getting started

### Install the package

```bash
yarn add @hig/radio-button @hig/theme-context @hig/theme-data
```

### Import the component

```js
import RadioButton from '@hig/radio-button';
```

## Basic usage

```jsx
<RadioButton name="radio-button-group" value="Yes" />
```

## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component. 

RadioButton also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import RadioButton from '@hig/radio-button';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    radioButtonWrapper: {
      ...styles.radioButtonWrapper,
      color: themeData["colorScheme.errorColor"]
    }
  });

  return (
    <RadioButton stylesheet={customStylesheet} />
  );
}
```
