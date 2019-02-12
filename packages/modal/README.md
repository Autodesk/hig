# Modal

A modal is an overlay that focuses the customer's attention on a single task or set of controls. It creates a mode that disables the main window but keeps it visible with the modal window as a child window in front of it. Users must interact with the modal window before they can return to the parent application.

Read more about when and how to use the Modal component [on the internal wiki](https://hig.autodesk.com/web/components/modal-shells).

## Getting started

### Install the package

```bash
yarn add @hig/modal
```

### Import the component and CSS

```js
import Modal from '@hig/modal';
import '@hig/modal/build/index.css';
```

## Basic usage

```jsx
<Modal
  title="Are you sure?"
  open
  body="This is the text body of my modal"
  type="alternate"
>
  <h1>
    <u>This is my HTML title</u>
  </h1>
  <p>
    <i>This is my HTML content.</i>
  </p>
</Modal>
```
