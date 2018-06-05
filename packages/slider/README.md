# Slider

A slider allows selecting a single numeric value from a range using a small sliding selector.

Read more about when and how to use the Slider component [on the website](https://hig.autodesk.com/web/components/form-elements).

## Getting started

### Install the package

```bash
yarn add @hig/slider
```

### Import the component and CSS

```js
import Slider from '@hig/slider';
import '@hig/slider/build/index.css';
```

## Basic usage

```jsx
<Slider
  label="What is your age?"
  instructions="You must be 21 or older."
  required="Age is required."
  min={21}
  max={99}
  step={1}
/>
```
