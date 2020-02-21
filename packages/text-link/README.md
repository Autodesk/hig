# Text Link

Text Links directs visitors to another location on the page, within the product, or to an external site.

Read more about when and how to use the Text Link components [on the HIG website](https://hig.autodesk.com/web/basics/text-links).

## Getting started

```
yarn add @hig/text-link @hig/theme-context @hig/theme-data
```

## Import the component and CSS

```
import TextLink from '@hig/text-link';
import "@hig/fonts/build/ArtifaktElement.css";
```

## Basic usage

```jsx
<TextLink link="https://github.com/Autodesk/hig">
  This is a primary text link
</TextLink>
```
## Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.
