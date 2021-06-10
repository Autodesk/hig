import React from "react";
import { TreeItem } from "../index";

const FileTreeCollection = {
  id: 1,
  parentId: null,
  meta: {
    label: "Tree Item 1",
    collapsed: false,
    active: false,
  },
  children: [
    {
      id: 2,
      parentId: 1,
      meta: {
        label: "Tree Item 2",
        collapsed: false,
        active: false,
      },
      children: [
        {
          id: 3,
          parentId: 2,
          meta: {
            label: "Tree Item 3",
            collapsed: false,
            active: false,
          },
        },
        {
          id: 4,
          parentId: 2,
          meta: {
            label: "Tree Item 4",
            collapsed: false,
            active: false,
          },
        },
        {
          id: 5,
          parentId: 2,
          meta: {
            label: "Tree Item 5",
            collapsed: false,
            active: false,
          },
          children: [
            {
              id: 6,
              parentId: 5,
              meta: {
                label: "Tree Item 6",
                collapsed: false,
                active: false,
              },
            },
            {
              id: 7,
              parentId: 5,
              meta: {
                label: "Tree Item 7",
                collapsed: false,
                active: false,
              },
              children: [
                {
                  id: 8,
                  parentId: 7,
                  meta: {
                    label: "Tree Item 8",
                    collapsed: false,
                    active: false,
                  },
                },
                {
                  id: 9,
                  parentId: 7,
                  meta: {
                    label: "Tree Item 9",
                    collapsed: false,
                    active: false,
                  },
                },
                {
                  id: 10,
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
    description: "WM",
    getProps: () => ({
      guidelines: false,
      indicator: "caret",
      test: "WM",
      children: [
        <TreeItem
          id="tree-item-0"
          key="tree-item-0"
          test="WM"
          label="Tree Item 0"
        >
          <TreeItem label="Tree Item 1" test="WM" id="tree-item-1">
            <TreeItem label="Tree Item 2" id="tree-item-2">
              <TreeItem test="WM" label="Tree Item 3" id="tree-item-3">
                <TreeItem test="WM" label="Tree Item 4" id="tree-item-4" />
                <TreeItem test="WM" label="Tree Item 5" id="tree-item-5" />
                <TreeItem test="WM" label="Tree Item 6" id="tree-item-6" />
              </TreeItem>
              <TreeItem test="WM" label="Tree Item 7" id="tree-item-7" />
              <TreeItem test="WM" label="Tree Item 8" id="tree-item-8" />
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
              <TreeItem test="WM" label="Tree Item 10" id="tree-item-10" />
              <TreeItem test="WM" label="Tree Item 11" id="tree-item-11" />
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
          <TreeItem test="WM" label="Tree Item 14" id="tree-item-14" />
          <TreeItem test="WM" label="Tree Item 15" id="tree-item-15" />
        </TreeItem>,
        <TreeItem
          id="tree-item-16"
          key="tree-item-16"
          test="WM"
          label="Tree Item 16"
        >
          <TreeItem test="WM" label="Tree Item 17" id="tree-item-17" />
        </TreeItem>,
        <TreeItem
          id="tree-item-18"
          key="tree-item-18"
          test="WM"
          label="Tree Item 18"
        >
          <TreeItem test="WM" label="Tree Item 19" id="tree-item-19" />
        </TreeItem>,
      ],
    }),
  },
  {
    description: "RR",
    getProps: () => ({
      guidelines: false,
      indicator: "caret",
      test: "RR",
      dataObject: FileTreeCollection,
    }),
  },
  {
    description: "test",
    getProps: () => ({
      test: "RR",
      children: [
        <TreeItem
          id="option-1"
          key="option-1"
          test="RR"
          label="Tree Item Nested Parent"
        >
          <TreeItem test="RR" label="Tree Item Level 2">
            <TreeItem test="RR">
              Tree Item Level 3<TreeItem label="Level 4" test="RR" />
            </TreeItem>
          </TreeItem>
        </TreeItem>,
        <TreeItem id="option-2" key="option-2" label="test label" test="RR">
          TreeItem 2
        </TreeItem>,
        <TreeItem id="option-3" key="option-3" test="RR">
          TreeItem 3
        </TreeItem>,
        <TreeItem id="option-4" key="option-4" test="RR">
          TreeItem 4
        </TreeItem>,
        <TreeItem id="option-5" key="option-5" test="RR">
          TreeItem 5
        </TreeItem>,
      ],
    }),
  },
];
