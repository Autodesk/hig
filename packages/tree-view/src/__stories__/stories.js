import React from "react";
import { TreeItem } from "../index";

export default [
  {
    description: "WM",
    getProps: () => ({
      guidelines: false,
      indicator: "operator",
      test: "WM",
      children: [
        <TreeItem  id="tree-item-1" key="tree-item-1" test="WM" label="Node 1 Level 1 Label">
          <TreeItem label="Node 1 Level 2 Label 1" test="WM">
            <TreeItem><div>hi</div><span>test1</span></TreeItem>
            <TreeItem test="WM">
              Node 1 Level 3 Child 1
            </TreeItem>
            <TreeItem test="WM">
              Node 1 Level 3 Child 2
            </TreeItem>
            <TreeItem test="WM" label="Node 1 Level 3 Label 1">
              <TreeItem test="WM">Node 1 Level 4 Child 1</TreeItem>
            </TreeItem>
          </TreeItem>
        </TreeItem>,
        <TreeItem id="tree-item-2" key="tree-item-2" test="WM">
          Node 2 Level 1 Child
        </TreeItem>,
        <TreeItem id="tree-item-3" key="tree-item-3" test="WM">
          Node 3 Level 1 Child
        </TreeItem>,
        <TreeItem id="tree-item-4" key="tree-item-4" test="WM" label="Node 4 Level 1 Label 1">
          <TreeItem test="WM">
            <strong>Node 4 Level 2</strong> <em>Child 1</em>
          </TreeItem>
        </TreeItem>,
        <TreeItem id="tree-item-5" key="tree-item-5" test="WM">
          Node 5 Level 1 Child 1
        </TreeItem>
      ]
    })
  },
  {
    description: "RR",
    getProps: () => ({
      test: "RR",
      children: [
        <TreeItem id="option-1" key="option-1" test="RR" label="Tree Item Nested Parent">
          <TreeItem test="RR" label="Tree Item Level 2">
            <TreeItem test="RR">
              Tree Item Level 3
              <TreeItem label="Level 4" test="RR" />
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
        </TreeItem>
      ]
    })
  },
  {
    description: "test",
    getProps: () => ({
      test: "RR",
      children: [
        <TreeItem id="option-1" key="option-1" test="RR" label="Tree Item Nested Parent">
          <TreeItem test="RR" label="Tree Item Level 2">
            <TreeItem test="RR">
              Tree Item Level 3
              <TreeItem label="Level 4" test="RR" />
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
        </TreeItem>
      ]
    })
  }
];
