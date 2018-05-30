import React from "react";

export function normalizeColumns(elements) {
  const columns = [];
  React.Children.forEach(elements, element => {
    if (!React.isValidElement(element)) {
      return;
    }
    const column = { ...element.props };
    if (element.key) {
      column.key = element.key;
      columns.push(column);
    }
  });
  return columns;
}

export function callOrReturn(funcOrValue, ...args) {
  return typeof funcOrValue === "function" ? funcOrValue(...args) : funcOrValue;
}

export function hasChildren(data) {
  return Array.isArray(data.children) && data.children.length > 0;
}

export function unflatten(
  array,
  parent = { id: null },
  dataKey = "id",
  parentKey = "parentId"
) {
  const tree = array
    .filter(x => x[parentKey] === parent[dataKey])
    .map(x => ({ ...x }));

  tree.forEach(child => {
    const childTree = unflatten(array, child, dataKey, parentKey);
    /**
     * The entire tree is cloned before being reassigned
     * @todo Refactor this so we don't need to reassign a property
     */
    if (childTree.length > 0) child.children = childTree;
  });

  return tree;
}
