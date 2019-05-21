# Input

Inputs allow the user to input integer values only. Has an up and down arrow to allow incrementing and decrementing the current value

Read more about when and how to use the Numeric Input component [on the website](https://hig.autodesk.com/web/components/inputs-and-controls).

## Getting started

### Install the package

```bash
yarn add @hig/numeric-input @hig/theme-context @hig/theme-data
```

### Import the component

```js
import Input from '@hig/numeric-input';
```

## Basic usage

```jsx
<NumericInput
  value={this.state.value}
  onChange={this.handleChange}
/>
```
