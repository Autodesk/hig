# Tabs

Tabs keep related content in a single container that is shown and hidden through navigation.

Read more about when and how to use the Tabs component [on the website](https://hig.autodesk.com/web/components/form-elements).


## Getting started

### Install the package

```bash
yarn add @hig/tabs @hig/theme-context @hig/theme-data
```

### Import the component

```js
import Tabs, { Tab } from "@hig/tabs";
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
} from "@hig/tabs";
```

### Complex Tabs

Complex tabs are composed of an interactive container, text label, divider and optional close icon. Complex tabs only works when `varient` is set to `box` or `canvas`.

### Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.
