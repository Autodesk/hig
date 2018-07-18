# Input

Inputs allow the user to input a small amount of freeform text (100 characters or less).

Read more about when and how to use the Input component [on the website](https://hig.autodesk.com/web/components/form-elements).

## Getting started

### Install the package

```bash
yarn add @hig/input
```

### Import the component and CSS

```js
import Input from '@hig/input';
import '@hig/input/build/index.css';
```

## Basic usage

```jsx
<Input
  value={this.state.value}
  onChange={this.handleChange}
/>
```
