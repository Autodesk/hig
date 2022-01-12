# Avatar Bundle

The Avatar Bundle is a "stack" of up to three Avatars, meant to represent a collection of customers associated with a single item or idea. When more than three collaborators are associated, there is an option to display the last Avatar spot as a number representing the amount of remaining Avatars not displayed. A border color can be added to the avatars if there are issues with the Avatars' clip-path CSS values.

Read more about when and how to use the Avatar Bundle component [on the internal wiki](https://hig.autodesk.com/web/components/avatar-bundle) (currently out of date).


## Getting started

### Install the package

```bash
yarn add @hig/avatar-bundle @hig/avatar @hig/theme-context @hig/theme-data
```

### Import the component

```js
import AvatarBundle, { sizes, spacings } from '@hig/avatar-bundle';
```

## Basic usage

```jsx
<AvatarBundle
  size={sizes.LARGE_48} // default: sizes.MEDIUM_32
  spacing={spacings.CONDENSED} // default: spacings.DEFAULT
  showOverflowCount={true}  // default: false
  borderColor={"#FFA456"}  // default: undefined (Overwrites clip-path setting. Recommended to leave undefined unless clip-path is causing issues)
  avatars={[{firstName: "John", lastName: "Price"}, {firstName: "Alex", lastName: "Serkis"}]} // Array of Avatar data
/>
```

## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component.

Avatar Bundle also has a `stylesheet` prop that accepts a function wherein you can modify its styles. For instance

```jsx
import Avatar from '@hig/avatar';

function YourComponent() {
  // ...
  const customStylesheet = (styles, props, themeData) => ({
    ...styles,
      avatarBundleContainer: {
      ...styles.avatarBundleContainer,
      color: themeData["colorScheme.status.error"]
    },
      avatarWrapper: {
      ...styles.avatarWrapper,
      opacity: 1
    },
      avatarWrapperFirstItem: {
      ...styles.avatarWrapperFirstItem,
      padding: `4px`
    },
      avatarWrapperSecondItem: {
      ...styles.avatarWrapperSecondItem,
      position: `static`
    },
      avatarWrapperThirdItem: {
      ...styles.avatarWrapperThirdItem,
      position: `static`
    },
      avatarOverflowCount: {
      ...styles.avatarOverflowCount,
      position: `static`
    }
  });

  return (
    <AvatarBundle stylesheet={customStylesheet} />
  );
}
```
Stylesheets can also be passed in to individual avatars in the `avatars` array. See the Avatar README for a guide on Avatar stylesheets.
