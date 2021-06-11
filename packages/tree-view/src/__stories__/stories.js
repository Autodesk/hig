import React from "react";
import { TreeItem } from "../index";
import {
  AddFolder24,
  Folder24,
  Calendar24,
  ProductsAndServices24,
  Report24,
  FileImage24,
  FileVideo24,
  AddFolder16,
  Folder16,
} from "@hig/icons";

import { FileTreeCollection } from "../constants";

export default [
  {
    description: "default",
    getProps: () => ({
      guidelines: false,
      indicator: "caret",
      children: [
        <TreeItem id="tree-item-0" key="tree-item-0" label="Tree Item 0">
          <TreeItem label="Tree Item 1" id="tree-item-1">
            <TreeItem label="Tree Item 2" id="tree-item-2" icon={<Folder24 />}>
              <TreeItem label="Tree Item 3" id="tree-item-3">
                <TreeItem
                  label="Tree Item 4"
                  id="tree-item-4"
                  icon={<AddFolder24 />}
                />
                <TreeItem label="Tree Item 5" id="tree-item-5" />
                <TreeItem label="Tree Item 6" id="tree-item-6" />
              </TreeItem>
              <TreeItem label="Tree Item 7" id="tree-item-7" />
              <TreeItem label="Tree Item 8" id="tree-item-8" />
              <TreeItem
                test="WM"
                label={
                  <div>
                    <strong>Tree</strong>
                    <em>Item 9</em>
                  </div>
                }
                id="tree-item-9"
              />
              <TreeItem label="Tree Item 10" id="tree-item-10" />
              <TreeItem label="Tree Item 11" id="tree-item-11" />
            </TreeItem>
          </TreeItem>
        </TreeItem>,
        <TreeItem
          id="tree-item-12"
          key="tree-item-2"
          test="WM"
          label="Tree Item 12"
        />,
        <TreeItem
          id="tree-item-13"
          key="tree-item-13"
          test="WM"
          label="Tree Item 13"
        >
          <TreeItem label="Tree Item 14" id="tree-item-14" />
          <TreeItem label="Tree Item 15" id="tree-item-15" />
        </TreeItem>,
        <TreeItem
          id="tree-item-16"
          key="tree-item-16"
          test="WM"
          label="Tree Item 16"
        >
          <TreeItem label="Tree Item 17" id="tree-item-17" />
        </TreeItem>,
        <TreeItem
          id="tree-item-18"
          key="tree-item-18"
          test="WM"
          label="Tree Item 18"
        >
          <TreeItem label="Tree Item 19" id="tree-item-19" />
        </TreeItem>,
      ],
    }),
  },
  {
    description: "tree object",
    getProps: () => ({
      guidelines: false,
      indicator: "caret",
      treeNode: FileTreeCollection,
    }),
  },
];
