# Text Area

Text areas allow the user to input a larger amount of freeform text (over 100 characters).

Read more about when and how to use the Text Area component [on the website](https://hig.autodesk.com/web/components/form-elements).


## Getting started

### Install the package

```bash
yarn add @hig/text-area @hig/theme-context @hig/theme-data
```

### Import the component

```js
import TextArea from '@hig/text-area';
```

## Basic usage

```jsx
<TextArea
  placeholder="Foo"
/>
```
## Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.
