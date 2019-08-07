# Dropdown

Dropdowns provide a menu to select one or many from a list of more than 4 items.

Read more about when and how to use the Dropdown component [on the website](https://hig.autodesk.com/web/components/form-elements).

## Getting started

### Install the package

```bash
yarn add @hig/dropdown @hig/theme-context @hig/theme-data
```

### Import the component

```js
import Dropdown from "@hig/dropdown";
```

## Basic usage

```jsx
<Dropdown
  placeholder="placeholder for regular Uncontrolled dropdown"
  options={["Foo", "Bar"]}
/>
```

## Custom CSS

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.
