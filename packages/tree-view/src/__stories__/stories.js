import React from "react";
import { TreeItem } from "../index";

export default [
  {
    description: "WM",
    getProps: () => ({
      test: "WM",
      children: [
        <TreeItem id="option-1" key="option-1" test="WM" label="Tree Item Nested Parent">
          <TreeItem label="Tree Item Level 2" test="WM">
            <TreeItem test="WM">
              Tree Item Level 3
              <TreeItem label="Level 4" test="WM" />
            </TreeItem>
          </TreeItem>
        </TreeItem>,
        <TreeItem id="option-2" key="option-2" test="WM" label="test label">
          TreeItem 2
        </TreeItem>,
        <TreeItem id="option-3" key="option-3" test="WM">
          TreeItem 3
        </TreeItem>,
        <TreeItem id="option-4" key="option-4" test="WM">
          TreeItem 4
        </TreeItem>,
        <TreeItem id="option-5" key="option-5" test="WM">
          TreeItem 5
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
  }
];