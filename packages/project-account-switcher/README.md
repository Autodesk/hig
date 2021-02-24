# Project Account Switcher

The Project and Account Switcher is part of the Global Nav and allows customers to switch the context to different projects or accounts.

## Getting started

### Install the package

```bash
yarn add @hig/project-account-switcher
```

### Import the component

```js
import ProjectAccountSwitcher from '@hig/project-account-switcher';
```

## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component. 

ProjectAccountSwitcher also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import ProjectAccountSwitcher from '@hig/project-account-switcher';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
    itemLabel: {
      ...styles.itemLabel,
    },
    imageWrapper: {
      ...styles.imageWrapper,
    },
    image: {
      ...styles.image,
    },
    panel: {
      ...styles.panel,
    },
    switcherList: {
      ...styles.switcherList,
    },
    switcherItem: {
      ...styles.switcherItem,
    },
    switcherAccountImageWrapper: {
      ...styles.switcherAccountImageWrapper,
    },
    target: {
      ...styles.target,
    },
    targetItem: {
      ...styles.targetItem,
    },
    targetCaret: {
      ...styles.targetCaret,
    }
  });

  return (
    <ProjectAccountSwitcher stylesheet={customStylesheet} />
  );
}
```

