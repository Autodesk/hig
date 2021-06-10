# TreeView

The tree view component provides a way to view and manipulate a list of data, often with complex nested structures.

Read more about when and how to use the TreeView component [on the internal wiki](https://hig.autodesk.com/web/components/TreeView).

## Getting started

### Install the package

```bash
yarn add @hig/TreeView @hig/theme-context @hig/theme-data
```

### Import the component

```js
import TreeView from "@hig/tree-view";
```

## Basic usage

```jsx
<TreeItem id="tree-item-0" key="tree-item-0" test="WM" label="Tree Item 0">
  <TreeItem label="Tree Item 1" test="WM" id="tree-item-1">
    <TreeItem label="Tree Item 2" id="tree-item-2">
      <TreeItem test="WM" label="Tree Item 3" id="tree-item-3">
        <TreeItem test="WM" label="Tree Item 4" id="tree-item-4" />
        <TreeItem test="WM" label="Tree Item 5" id="tree-item-5" />
        <TreeItem test="WM" label="Tree Item 6" id="tree-item-6" />
      </TreeItem>
    </TreeItem>
  </TreeItem>
</TreeItem>
```

## Customization

# Tree object

```jsx
const FileTreeCollection = {
  id: 1,
  index: 0,
  parentId: null,
  meta: {
    label: "Tree Item 1",
    collapsed: false,
    active: false,
  },
  children: [
    {
      id: 2,
      index: 1,
      parentId: 1,
      meta: {
        label: "Tree Item 2",
        collapsed: false,
        active: false,
      },
    },
    {
      id: 3,
      index: 2,
      parentId: 1,
      meta: {
        label: "Tree Item 3",
        collapsed: false,
        active: false,
      },
      children: [
        {
          id: 4,
          index: 3,
          parentId: 3,
          meta: {
            label: "Tree Item 4",
            collapsed: false,
            active: false,
          },
        },
      ],
    },
  ],
};
```

### Styling

Use the `className` prop to pass in a css class name to the outermost container of the component. The class name will also pass down to most of the other styled elements within the component.

TreeView also has a `stylesheet` prop that accepts a function wherein you can modify TreeView's styles. The original styles, props, current theme data and theme meta will be passed to your custom stylesheet function, and it should return an object with the same structure as the original styles. For instance

```jsx
function customStylesheet(styles, props, themeData) {
  return {};
}

<TreeItem stylesheet={customStylesheet}>
  <TreeItem label="Tree Item 1" test="WM" id="tree-item-1">
    <TreeItem label="Tree Item 2" id="tree-item-2">
      <TreeItem test="WM" label="Tree Item 3" id="tree-item-3">
        <TreeItem test="WM" label="Tree Item 4" id="tree-item-4" />
        <TreeItem test="WM" label="Tree Item 5" id="tree-item-5" />
        <TreeItem test="WM" label="Tree Item 6" id="tree-item-6" />
      </TreeItem>
    </TreeItem>
  </TreeItem>
</TreeItem>;
```
