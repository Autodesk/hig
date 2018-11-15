# Button

HIG buttons trigger actions or changes within the interface. They come in a number of varieties.

Read more about when and how to use the Button components [on the HIG website](https://hig.autodesk.com/web/components/buttons).

## Getting started

```
yarn add @hig/button
```

## Import the component and CSS

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
