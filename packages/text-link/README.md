# Text Link

Text Links directs visitors to another location on the page, within the product, or to an external site.

## Getting started

```
yarn add @weave-design/text-link @weave-design/theme-context @weave-design/theme-data
```

## Import the component and CSS

```
import TextLink from '@weave-design/text-link';
import "@weave-design/fonts/build/ArtifaktElement.css";
```

## Basic usage

```jsx
<TextLink link="https://github.com/Autodesk/hig">
  This is a primary text link
</TextLink>
```
## Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.
