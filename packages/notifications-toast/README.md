# Notifications Toast

Toasts are floating message boxes that appear up to a maximum of three at a time (similar events may be grouped). These are primarily informational they report a system occurrence that typically does not require much user action.

Read more about when and how to use the Toast component [on the internal wiki](https://wiki.autodesk.com/display/HIG/Toasts).


## Getting started

### Install the package

```bash
yarn add @hig/notifications-toast @hig/theme-context @hig/theme-data
```

### Import the component

```js
import NotificationsToast from '@hig/notifications-toast';
```

### Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.

NotificationsToast also has a `stylesheet` prop that accepts a function wherein you can modify NotificationsToast's styles. The original styles, props, and current theme data will be passed to your custom stylesheet function, and it should return an object with the same structure as the original styles. For instance

```jsx
function customStylesheet(styles, props, themeData) {
  return {
    ...styles,
    toast: {
      ...styles.toast,
      position: "absolute"
    },
    toastImageContainer: {
      ...styles.toastImageContainer,
      borderColor: props.variant === "box"
        ? themeData["basics.colors.secondary.green.100"]
        : themeData["basics.colors.secondary.darkBlue.100"]
    },
    toastBody: {
      ...styles.toastBody,
      cursor: "default"
    },
    toastMessage: {
      ...styles.toastMessage,
      backgroundColor: themeData["colorScheme.reference.accent"]
    },
    toastDismiss: {
      ...styles.toastDismiss,
      padding: "0 12px"
    },
    toastListWrapper: {
      ...styles.toastListWrapper,
      display: "flex"
    },
    toastList: {
      ...styles.toastList,
      flexDirection: "row"
    }
  };
}
```
