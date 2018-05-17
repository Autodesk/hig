# Text Field

Text Fields allow the user to input a small amount of freeform text (100 characters or less).

Read more about when and how to use the Text Field component [on the website](https://hig.autodesk.com/web/components/form-elements).

## Getting started

### Install the package

```bash
yarn add @hig/text-field
```

### Import the component and CSS

```js
import TextField from '@hig/text-field';
import '@hig/text-field/build/index.css';
```

## Basic usage

```jsx
<TextField
  label="Tab title"
  placeholder="Foo"
  required="This field is required."
/>
```
