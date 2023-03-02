# Tabs

Tabs keep related content in a single container that is shown and hidden through navigation.

## Getting started

### Install the package

```bash
yarn add @weave-design/tabs @weave-design/theme-context @weave-design/theme-data
```

### Import the component

```js
import Tabs, { Tab } from "@weave-design/tabs";
```

## Basic usage

```jsx
<Tabs>
  <Tab key="details" label="Details">Details content</Tab>
  <Tab key="activities" label="Activities">Activities content</Tab>
  <Tab key="inspector" label="Inspector">Inspector content</Tab>
</Tabs>
```

## Customization

The visual styles of `Tabs` can be customized by its props, available values can be found via:
```js
import {
  AVAILABLE_ALIGNMENTS,
  AVAILABLE_VARIANTS,
  AVAILABLE_ORIENTATIONS,
  alignments,
  variants,
  orientations
} from "@weave-design/tabs";
```

### Complex Tabs

Complex tabs are composed of an interactive container, text label, divider and optional close icon. Complex tabs only works when `variant` is set to `box` or `canvas`.

### Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.
