# Text Area

Text areas allow the user to input a larger amount of freeform text (over 100 characters).

## Getting started

### Install the package

```bash
yarn add @weave-design/text-area @weave-design/theme-context @weave-design/theme-data
```

### Import the component

```js
import TextArea from '@weave-design/text-area';
```

## Basic usage

```jsx
<TextArea
  placeholder="Foo"
/>
```
## Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.
