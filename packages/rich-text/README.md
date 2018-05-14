# Rich Text

The Rich Text component applies the HIG typography styles to whatever is passed to it, whether that be React children or regular HTML. This is particularly useful for styling markdown content.

Read more about when and how to use the Typography components [on the HIG website](https://hig.autodesk.com/web/basics/typography).

## Getting started

```
yarn add @hig/typography
```

## Import the component and CSS

```
import RichText from '@hig/rich-text';
import '@hig/rich-text/build/index.css';
```

## Basic usage

```jsx
<RichText>
  <h1>Make Your Rich Text Richer</h1>
  <p>All you need to do is wrap it in a <pre><RichText></pre> component.</p>
</RichText>
```
