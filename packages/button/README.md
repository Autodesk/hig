# Button

HIG buttons trigger actions or changes within the interface. They come in a number of varieties.

Read more about when and how to use the Button components [on the HIG website](https://hig.autodesk.com/web/components/buttons).


## Getting started

```
yarn add @hig/button @hig/theme-context @hig/theme-data
```

## Import the component

```
import Button from '@hig/button';
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
