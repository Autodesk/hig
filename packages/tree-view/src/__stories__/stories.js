import React from "react";
import { TreeItem } from "../index";
import FileView from "../FileView";

const FileTreeCollection = [
  {
    id: 1,
    parentId: null,
    meta: {
      label: "Project",
      toggled: false,
      active: false,
    },
  },
  {
    id: 2,
    parentId: 1,
    meta: {
      label: "Project",
      toggled: false,
      active: false,
    },
  },
  {
    id: 3,
    parentId: 2,
    meta: {
      label: "Project",
      toggled: false,
      active: false,
    },
  },
  {
    id: 4,
    parentId: 2,
    meta: {
      label: "Models",
      toggled: false,
      active: false,
    },
  },
  {
    id: 5,
    parentId: 2,
    meta: {
      label: "Character",
      toggled: false,
      active: false,
    },
  },
  {
    id: 6,
    parentId: 5,
    meta: {
      label: "Props",
      toggled: false,
      active: false,
    },
  },
  {
    id: 7,
    parentId: 5,
    meta: {
      label: "Audio",
      toggled: false,
      active: false,
    },
  },
  {
    id: 8,
    parentId: 7,
    meta: {
      label: "Track 1",
      toggled: false,
      active: false,
    },
  },
  {
    id: 9,
    parentId: 7,
    meta: {
      label: "Track 2",
      toggled: false,
      active: false,
    },
  },
  {
    id: 10,
    parentId: 7,
    meta: {
      label: "Track 3",
      toggled: false,
      active: false,
    },
  },
  {
    id: 11,
    parentId: 2,
    meta: {
      label: "Random 1",
      toggled: false,
      active: false,
    },
  },
  {
    id: 12,
    parentId: 3,
    meta: {
      label: "Random 2",
      toggled: false,
      active: false,
    },
  },
  {
    id: 13,
    parentId: 4,
    meta: {
      label: "Random 3",
      toggled: false,
      active: false,
    },
  },
];

export default [
  {
    description: "WM",
    getProps: () => ({
      guidelines: false,
      indicator: "operator",
      test: "WM",
      children: [
        <TreeItem
          id="tree-item-1"
          key="tree-item-1"
          test="WM"
          label="Node 1 Level 1 Label"
        >
          <TreeItem label="Node 1 Level 2 Label 1" test="WM">
            <TreeItem>
              <div>hi</div>
              <span>test1</span>
            </TreeItem>
            <TreeItem test="WM" label="Node 1 Level 2 Label 2">
              <TreeItem test="WM">Node 1 Level 3 Child 1</TreeItem>
              <TreeItem test="WM">Node 1 Level 3 Child 2</TreeItem>
              <TreeItem test="WM">Node 1 Level 3 Child 3</TreeItem>
            </TreeItem>
            <TreeItem test="WM">Node 1 Level 3 Child 2</TreeItem>
            <TreeItem test="WM" label="Node 1 Level 3 Label 1">
              <TreeItem test="WM">Node 1 Level 4 Child 1</TreeItem>
              <TreeItem test="WM">Node 1 Level 4 Child 2</TreeItem>
              <TreeItem test="WM">Node 1 Level 4 Child 3</TreeItem>
            </TreeItem>
          </TreeItem>
        </TreeItem>,
        <TreeItem id="tree-item-2" key="tree-item-2" test="WM">
          Node 2 Level 1 Child
        </TreeItem>,
        <TreeItem id="tree-item-3" key="tree-item-3" test="WM" label="Node 3 Level 1 Label">
          <TreeItem test="WM">Node 3 Level 2 Child 1</TreeItem>
          <TreeItem test="WM">Node 3 Level 2 Child 2</TreeItem>
        </TreeItem>,
        <TreeItem
          id="tree-item-4"
          key="tree-item-4"
          test="WM"
          label="Node 4 Level 1 Label 1"
        >
          <TreeItem test="WM">
            <strong>Node 4 Level 2</strong> <em>Child 1</em>
          </TreeItem>
        </TreeItem>,
        <TreeItem id="tree-item-5" key="tree-item-5" test="WM" label="Node 5 Level 1 Label 1">
          <TreeItem test="WM">
            Node 5 Level 2 Child 1
          </TreeItem>
        </TreeItem>
      ]
    })
  },
  {
    description: "RR",
    getProps: () => ({
      test: "RR",
      dataObject: true,
      children: [<FileView fileTreeCollection={FileTreeCollection} />],
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
