# Button

Weave buttons trigger actions or changes within the interface. They come in a number of varieties.

## Getting started

```
yarn add @weave-design/button @weave-design/theme-context @weave-design/theme-data
```

## Import the component

```
import Button from '@weave-design/button';
```

## Basic usage

```jsx
<Button
  size="standard"
  title="Click Me"
  type="primary"
/>
```

## Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.

## Usage as a link

```jsx
<Button
  size="standard"
  title="Github"
  type="secondary"
  link="https://www.github.com"
  target="_blank"
/>
```
