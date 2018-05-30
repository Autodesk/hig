# Text Area

Text areas allow the user to input a larger amount of freeform text (over 100 characters).

Read more about when and how to use the Text Area component [on the website](https://hig.autodesk.com/web/components/form-elements).

## Getting started

### Install the package

```bash
yarn add @hig/text-area
```

### Import the component and CSS

```js
import TextArea from '@hig/text-area';
import '@hig/text-area/build/index.css';
```

## Basic usage

```jsx
<TextArea
  label="Tab title"
  placeholder="Foo"
  required="This field is required."
/>
```
