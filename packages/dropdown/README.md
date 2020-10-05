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

### Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.

Dropdown also has a `stylesheet` prop that accepts a function wherein you can modify Dropdown's styles. The original styles, props, and current theme data will be passed to your custom stylesheet function, and it should return an object with the same structure as the original styles. For instance

```jsx
function customStylesheet(styles, props, themeData) {
  return {
    ...styles,
    dropdownWrapper: {
      ...styles.dropdownWrapper,
      position: "absolute"
    },
    inputWrapper: {
      ...styles.inputWrapper,
      borderColor: props.variant === "box"
        ? themeData["basics.colors.secondary.green.100"]
        : themeData["basics.colors.secondary.darkBlue.100"]
    },
    caret: {
      ...styles.caret,
      cursor: "default"
    },
    menu: {
      ...styles.menu,
      backgroundColor: themeData["colorScheme.reference.accent"]
    },
    option: {
      ...styles.menu,
      padding: "0 12px"
    }
  };
}

<Dropdown stylesheet={customStylesheet} options={["Foo", "Bar"]}>
  bar
</Dropdown>
```

## Using [render props][] for additional customization

[render props]: https://reactjs.org/docs/render-props.html

#### Render Option

When a function is provided to `props.renderOption`, it will be given a payload containing:

* `option {object || string}`
    - the string or object from `props.options`
* `props {object}`
    - object that can be used as `props` to retain some of the `Dropdown` functionality in the custom rendered menu option. It contains the following properties:
      - `aria-selected {boolean}` 
      - `disabled {boolean}`
      - `highlighted {boolean}`
      - `id {string}`
      - `key {string}` 
      - `onClick {function(MouseEvent)}`
      - `onMouseDown {function(MouseEvent)}`
      - `onMouseMove {function(MouseEvent)}`
      - `role {string}`
      - `selected {boolean}`

```jsx
<Dropdown
  placeholder="Select a theme",
  options={[
    {item: "HIG Light Theme", disabled: true}, 
    {item: "HIG Dark Blue Theme"}, 
    {item: "Matrix Theme"}
  ]}
  renderOption={(option, props) => {
    return(
      <div
        aria-selected={props["aria-selected"]}
        id={props.id}
        onClick={props.onClick}
        onMouseDown={props.onMouseDown}
        onMouseMove={props.onMouseMove}
        disabled={props.disabled}
        selected={props.selected}
        role={props.role}
        key={props.key}
      >
        <strong>{option.item}</strong>
      </div>
    );
  }}
/>
```
