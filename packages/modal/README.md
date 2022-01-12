# Modal

A modal is an overlay that focuses the customer's attention on a single task or set of controls. It creates a mode that disables the main window but keeps it visible with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application.

Read more about when and how to use the Modal component [on the internal wiki](https://hig.autodesk.com/web/components/modal-shells).


## Getting started

### Install the package

```bash
yarn add @hig/modal @hig/theme-context @hig/theme-data
```

### Import the component

```js
import Modal from '@hig/modal';
```

## Basic usage

```jsx
<Modal
  title="Remove your item?"
  open
>
  <Typography>This action is irreversible.</Typography>
  
  <Button title="Cancel" type="outline" />
  <Button title="Remove" type="outline" />
</Modal>
```

## Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.

Modal also has a `stylesheet` prop that accepts a function wherein you can modify Modal's styles. For instance

```js
import Modal from "@hig/modal";
import Typography from "@hig/typography";
import Button from "@hig/button";

function YourComponent() {
  const modalStyles = styles => ({
    ...styles,
    modal: {
      ...styles.modal,
      bodyContent: {
        ...styles.modal.bodyContent,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }
    }
  });
                                      
  return (
    <Modal open title="Your title" stylesheet={modalStyles}>
      <Typography>Modal content</Typography>
      <div style={{ alignSelf: "flex-end" }}>
        <Button title="Ok" type="outline" />
      </div>
    </Modal>
  )
}
```
