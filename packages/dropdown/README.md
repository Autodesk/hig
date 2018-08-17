# Dropdown

Dropdowns provide a menu to select one or many from a list of more than 4 items.

Read more about when and how to use the Dropdown component [on the website](https://hig.autodesk.com/web/components/form-elements).

## Getting started

### Install the package

```bash
yarn add @hig/dropdown
```

### Import the component and CSS

```js
import Dropdown from "@hig/dropdown";
import "@hig/dropdown/build/index.css";
```

## Basic usage

```jsx
<Dropdown
  label="Uncontrolled Dropdown"
  instructions="instructions for regular Uncontrolled dropdown"
  placeholder="placeholder for regular Uncontrolled dropdown"
  options={["Foo", "Bar"]}
/>
```
