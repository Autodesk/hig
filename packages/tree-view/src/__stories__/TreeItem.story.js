import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import {
  AddFolder24,
  Folder24,
  Calendar24,
  ProductsAndServices24,
  Report24,
  Hierarchy24,
  AddFolder16,
  Folder16,
  Calendar16,
  ProductsAndServices16,
  Report16,
  Hierarchy16,
} from "@hig/icons";

import TreeView, { TreeItem } from "../index";
import Readme from "../../README.md";

export default {
  title: "Components/Tree view/Tree item",
  component: TreeItem,
  subcomponents: { TreeView },
  parameters: {
    docs: {
      page: () => (
        <>
          <Primary />
          <Readme />
          <ArgsTable />
        </>
      ),
    },
  },
};

const Template = (args, context) => {
  const getIcon = (HighIcon, MediumIcon) => {
    if (context.globals.density === "Medium") {
      return <MediumIcon />;
    }
    return <HighIcon />;
  };

  return (
    <TreeView>
      <TreeItem
        {...args}
        id="tree-item-0"
        key="tree-item-0"
        label="Tree Item 0"
        icon={getIcon(Hierarchy16, Hierarchy24)}
        expandByDoubleClick
        draggable="true"
      >
        <TreeItem
          label="Tree Item 1"
          id="tree-item-1"
          key="tree-item-1"
          icon={getIcon(Calendar16, Calendar24)}
          expandByDoubleClick
        >
          <TreeItem
            label="Tree Item 2"
            id="tree-item-2"
            key="tree-item-2"
            icon={getIcon(Folder16, Folder24)}
            expandByDoubleClick
          >
            <TreeItem
              label="Tree Item 3"
              id="tree-item-3"
              key="tree-item-3"
              icon={getIcon(ProductsAndServices16, ProductsAndServices24)}
              expandByDoubleClick
            >
              <TreeItem
                label="Tree Item 4"
                id="tree-item-4"
                key="tree-item-4"
                icon={getIcon(AddFolder16, AddFolder24)}
              />
              <TreeItem
                label="Tree Item 5"
                id="tree-item-5"
                key="tree-item-5"
                icon={getIcon(Report16, Report24)}
              />
              <TreeItem
                label="Tree Item 6"
                id="tree-item-6"
                key="tree-item-6"
                icon={getIcon(ProductsAndServices16, ProductsAndServices24)}
              />
            </TreeItem>
            <TreeItem
              label="Tree Item 7"
              id="tree-item-7"
              key="tree-item-7"
              icon={getIcon(Calendar16, Calendar24)}
            />
            <TreeItem
              label="Tree Item 8"
              id="tree-item-8"
              key="tree-item-8"
              icon={getIcon(Report16, Report24)}
            />
            <TreeItem
              label={
                <div>
                  <strong>Tree</strong>
                  <em>Item 9</em>
                </div>
              }
              id="tree-item-9"
              key="tree-item-9"
            />
            <TreeItem
              label="Tree Item 10"
              id="tree-item-10"
              key="tree-item-10"
            />
            <TreeItem
              label="Tree Item 11"
              id="tree-item-11"
              key="tree-item-11"
            />
          </TreeItem>
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
};

export const Default = Template.bind({});
Default.storyName = "Expand by double-clicking";
