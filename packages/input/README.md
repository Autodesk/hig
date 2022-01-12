# Input

Inputs allow the user to input a small amount of freeform text (100 characters or less).

Read more about when and how to use the Input component [on the website](https://hig.autodesk.com/web/components/form-elements).


## Getting started

### Install the package

```bash
yarn add @hig/input @hig/theme-context @hig/theme-data
```

### Import the component

```js
import Input from '@hig/input';
```

## Basic usage

```jsx
<Input
  value={this.state.value}
  onChange={this.handleChange}
/>
```
## Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.
