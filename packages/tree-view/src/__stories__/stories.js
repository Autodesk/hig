import React from "react";
import { TreeItem } from "../index";

export default [
  {
    description: "wilbert",
    getProps: () => ({
      multiple: false,
      checkmark: false,
      children: [
        <TreeItem id="option-1" key="option-1">
          TreeItem 1
        </TreeItem>,
        <TreeItem id="option-2" key="option-2">
          TreeItem 2
        </TreeItem>,
        <TreeItem id="option-3" key="option-3" disabled>
          TreeItem 3
        </TreeItem>,
        <TreeItem id="option-4" key="option-4">
          TreeItem 4
        </TreeItem>,
        <TreeItem id="option-5" key="option-5">
          TreeItem 5
        </TreeItem>
      ]
    })
  },
  {
    description: "robbie",
    getProps: () => ({
      multiple: false,
      checkmark: false,
      children: [
        <TreeItem id="option-1" key="option-1">
          TreeItem 1
        </TreeItem>,
        <TreeItem id="option-2" key="option-2">
          TreeItem 2
        </TreeItem>,
        <TreeItem id="option-3" key="option-3" disabled>
          TreeItem 3
        </TreeItem>,
        <TreeItem id="option-4" key="option-4">
          TreeItem 4
        </TreeItem>,
        <TreeItem id="option-5" key="option-5">
          TreeItem 5
        </TreeItem>
      ]
    })
  }
];
