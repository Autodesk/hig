import React from "react";
import { TreeItem } from "../index";
import {
  AddFolder24,
  Folder24,
  AddFolder16,
  Folder16
} from "@hig/icons";

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
      children: [
        {
          id: 3,
          index: 2,
          parentId: 2,
          meta: {
            label: "Tree Item 3",
            collapsed: false,
            active: false,
          },
        },
        {
          id: 4,
          index: 3,
          parentId: 2,
          meta: {
            label: "Tree Item 4",
            collapsed: false,
            active: false,
          },
        },
        {
          id: 5,
          index: 4,
          parentId: 2,
          meta: {
            label: "Tree Item 5",
            collapsed: false,
            active: false,
          },
          children: [
            {
              id: 6,
              index: 5,
              parentId: 5,
              meta: {
                label: "Tree Item 6",
                collapsed: false,
                active: false,
              },
            },
            {
              id: 7,
              index: 6,
              parentId: 5,
              meta: {
                label: "Tree Item 7",
                collapsed: false,
                active: false,
              },
              children: [
                {
                  id: 8,
                  index: 7,
                  parentId: 7,
                  meta: {
                    label: "Tree Item 8",
                    collapsed: false,
                    active: false,
                  },
                },
                {
                  id: 9,
                  index: 8,
                  parentId: 7,
                  meta: {
                    label: "Tree Item 9",
                    collapsed: false,
                    active: false,
                  },
                },
                {
                  id: 10,
                  index: 9,
                  parentId: 7,
                  meta: {
                    label: "Tree Item 10",
                    collapsed: false,
                    active: false,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default [
  {
    description: "default",
    getProps: () => ({
      guidelines: false,
      indicator: "caret",
      children: [
        <TreeItem
          id="tree-item-0"
          key="tree-item-0"
          label="Tree Item 0"
        >
          <TreeItem label="Tree Item 1" id="tree-item-1">
            <TreeItem label="Tree Item 2" id="tree-item-2" icon={<Folder24 />}>
              <TreeItem label="Tree Item 3" id="tree-item-3">
                <TreeItem label="Tree Item 4" id="tree-item-4" icon={<AddFolder24 />} />
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
      dataObject: FileTreeCollection,
    }),
  },
];
