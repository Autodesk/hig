# Slider

A slider allows selecting a single numeric value from a range using a small sliding selector.

Read more about when and how to use the Slider component [on the website](https://hig.autodesk.com/web/components/form-elements).

## Getting started

### Install the package

```bash
yarn add @hig/slider @hig/theme-context @hig/theme-data
```

### Import the component

```js
import Slider from '@hig/slider';
```

## Basic usage

```jsx
<Slider
  min={21}
  max={99}
  step={1}
/>
```
