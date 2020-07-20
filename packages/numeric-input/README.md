# Numeric Input

Numeric inputs allow the user to input a number of their choosing and use the up and down keys to increase/decrease the number.

Read more about when and how to use the Numeric Input component [on the website](https://hig.autodesk.com/web/components/form-elements).

## Getting started

### Install the package

```bash
yarn add @hig/numeric-input @hig/theme-context @hig/theme-data
```

### Import the component

```js
import NumericInput from '@hig/numeric-input';
```

## Basic usage

```jsx
<NumericInput />
```
## Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.
