# Input

Inputs allow the user to input a small amount of freeform text (100 characters or less).

## Getting started

### Install the package

```bash
yarn add @weave-design/input @weave-design/theme-context @weave-design/theme-data
```

### Import the component

```js
import Input from '@weave-design/input';
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
