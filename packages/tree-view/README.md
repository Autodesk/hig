# TreeView

The tree view component provides a way to view and manipulate a list of data, often with complex nested structures.

Read more about when and how to use the TreeView component [on the internal wiki](https://hig.autodesk.com/web/components/TreeView).

## Getting started

### Install the package

```bash
yarn add @hig/tree-view @hig/theme-context @hig/theme-data
```

### Import the component

```js
import TreeView, { TreeItem } from "@hig/tree-view";
```

## Basic usage

```jsx
<TreeView>
  <TreeItem label="Tree Item 1" id="tree-item-1">
    <TreeItem label="Tree Item 2" id="tree-item-2">
      <TreeItem label="Tree Item 3" id="tree-item-3">
        <TreeItem label="Tree Item 4" id="tree-item-4" />
        <TreeItem label="Tree Item 5" id="tree-item-5" />
        <TreeItem label="Tree Item 6" id="tree-item-6" />
      </TreeItem>
    </TreeItem>
  </TreeItem>
</TreeView>
```

## Customization

# Tree Node Object

```jsx
const FileTreeCollection = {
  id: 1,
  index: 0,
  parentId: null,
  meta: {
    label: "Tree Item 1",
    collapsed: false,
    active: false,
    disabled: false,
    icon: <Calendar24 />,
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
        disabled: false,
        icon: null,
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
        icon: <Folder24 />,
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
            icon: null,
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
  return return {
    ...styles,
    higTreeViewWrapper: {
      ...styles.higTreeViewWrapper,
      backgroundColor: "yellow"
    },
    higTreeView: {
      ...styles.higTreeView,
      backgroundColor: "black"
    },
    higTreeItem: {
      ...styles.higTreeItem,
      backgroundColor: themeData["basics.colors.green100"]
    },
    higTreeItemContentWrapper: {
      ...styles.higTreeItemContentWrapper,
      padding: 0
    },
    higTreeItemSubTreeViewWrapper: {
      ...styles.higTreeItemSubTreeViewWrapper,
      margin: 0
    },
    higTreeItemSubTreeView: {
      ...styles.higTreeItemSubTreeView,
      fontSize: "14px"
    },
    higTreeItemSubTreeViewLabelWrapper: {
      ...styles.shortcutWrapper,
      overflow: "hidden"
    },
    higTreeItemSubTreeViewLabelContentWrapper: {
      ...styles.higTreeItemSubTreeViewLabelContentWrapper,
      width: "100%"
    },
    higTreeItemSubTreeItem: {
      ...styles.higTreeItemSubTreeItem,
      textAlign: "center"
    },
    higTreeItemIndicatorWrapper: {
      ...styles.higTreeItemIndicatorWrapper,
      backgroundColor: "transparent"
    },
    higTreeItemIconWrapper: {
      ...styles.higTreeItemIconWrapper,
      height: "36px"
    },
    higTreeItemLabelWrapper: {
      ...styles.higTreeItemLabelWrapper,
      fontWeight: 900
    }
  };
}

<TreeView stylesheet={customStylesheet}>
  <TreeItem label="Tree Item 1" id="tree-item-1" stylesheet={customStylesheet}>
    <TreeItem label="Tree Item 2" id="tree-item-2">
      <TreeItem label="Tree Item 3" id="tree-item-3">
        <TreeItem label="Tree Item 4" id="tree-item-4" />
        <TreeItem label="Tree Item 5" id="tree-item-5" />
        <TreeItem label="Tree Item 6" id="tree-item-6" />
      </TreeItem>
    </TreeItem>
  </TreeItem>
</TreeView>;
```
