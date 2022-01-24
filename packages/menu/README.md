# Menu

A menu is a mechanism to display a list of choices through interaction with a button, icon or other controls.

Read more about when and how to use the Menu component [on the internal wiki](https://hig.autodesk.com/web/components/menus).

## Getting started

### Install the package

```bash
yarn add @hig/menu @hig/theme-context @hig/theme-data
```

### Import the component

```js
import Menu from "@hig/menu";
```

## Basic usage

```jsx
<Menu>
  <Option>Option 1</Option>
  <Option>Option 2</Option>
  <Option>Option 3</Option>
</Menu>
```

## Customization

### Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.

Menu also has a `stylesheet` prop that accepts a function wherein you can modify Menu's styles. The original styles, props, current theme data and theme meta will be passed to your custom stylesheet function, and it should return an object with the same structure as the original styles. For instance

```jsx
function customStylesheet(styles, props, themeData) {
  return {
    ...styles,
    menuGroup: {
      ...styles.menuGroup,
      backgroundColor: "yellow"
    },
    menu: {
      ...styles.menu,
      backgroundColor: props.collapsed
        ? themeData["basics.colors.green100"]
        : themeData["basics.colors.darkBlue100"]
    },
    menuOption: {
      ...styles.menuOption,
      backgroundColor: props.collapsed
        ? themeData["basics.colors.green100"]
        : themeData["basics.colors.darkBlue100"]
    },
    checkmarkWrapper: {
      ...styles.checkmarkWrapper,
      backgroundColor: props.collapsed
        ? themeData["basics.colors.green100"]
        : themeData["basics.colors.darkBlue100"]
    },
    assetWrapper: {
      ...styles.assetWrapper,
      backgroundColor: props.collapsed
        ? themeData["basics.colors.green100"]
        : themeData["basics.colors.darkBlue100"]
    },
    optionContentWrapper: {
      ...styles.optionContentWrapper,
      backgroundColor: props.collapsed
        ? themeData["basics.colors.green100"]
        : themeData["basics.colors.darkBlue100"]
    },
    shortcutWrapper: {
      ...styles.shortcutWrapper,
      backgroundColor: props.collapsed
        ? themeData["basics.colors.green100"]
        : themeData["basics.colors.darkBlue100"]
    }
  };
}

<Menu stylesheet={customStylesheet}>
  <Option>Option 1</Option>
  <Option>Option 2</Option>
  <Option>Option 3</Option>
</Menu>
```
