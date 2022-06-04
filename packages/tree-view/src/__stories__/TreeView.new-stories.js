import React from "react";
import { ArgsTable, Primary } from "@storybook/addon-docs";
import {
  AddFolder16,
  AddFolder24,
  Calendar16,
  Calendar24,
  FileImage16,
  FileImage24,
  FileVideo16,
  FileVideo24,
  Folder16,
  Folder24,
  Hierarchy16,
  Hierarchy24,
  ProductsAndServices16,
  ProductsAndServices24,
  Report16,
  Report24,
} from "@hig/icons";

import TreeView, { TreeItem } from "../index";
import { indicators } from "../constants";
import Readme from "../../README.md";

export default {
  title: "Components/TreeView",
  component: TreeView,
  subcomponents: { TreeItem },
  argTypes: {
    indicator: {
      options: [indicators.CARET, indicators.OPERATOR],
      control: { type: "select" },
    },
  },
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
  }

  return (
    <TreeView {...args}>
      <TreeItem
        id="tree-item-0"
        key="tree-item-0"
        label="Tree Item 0"
        icon={getIcon(Hierarchy16, Hierarchy24)}
        draggable="true"
      >
        <TreeItem
          label="Tree Item 1"
          id="tree-item-1"
          key="tree-item-1"
          icon={getIcon(Calendar16, Calendar24)}
        >
          <TreeItem
            label="Tree Item 2"
            id="tree-item-2"
            key="tree-item-2"
            icon={getIcon(Folder16, Folder24)}
          >
            <TreeItem
              label="Tree Item 3"
              id="tree-item-3"
              key="tree-item-3"
              icon={getIcon(ProductsAndServices16, ProductsAndServices24)}
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
                icon={<Report24 />}
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
      <TreeItem
        id="tree-item-12"
        key="tree-item-2"
        label="Tree Item 12"
        icon={getIcon(FileImage16, FileImage24)}
        draggable="true"
      />
      <TreeItem
        id="tree-item-13"
        label="Tree Item 13"
        key="tree-item-13"
        icon={getIcon(FileImage16, FileImage24)}
      >
        <TreeItem
          label="Tree Item 14"
          id="tree-item-14"
          key="tree-item-14"
          icon={getIcon(FileImage16, FileImage24)}
        />
        <TreeItem
          label="Tree Item 15"
          id="tree-item-15"
          key="tree-item-15"
          icon={getIcon(FileVideo16, FileVideo24)}
        />
      </TreeItem>
      <TreeItem
        id="tree-item-16"
        key="tree-item-16"
        label="Tree Item 16"
        icon={getIcon(Hierarchy16, Hierarchy24)}
      >
        <TreeItem
          label="Tree Item 17"
          id="tree-item-17"
          key="tree-item-17"
          icon={getIcon(ProductsAndServices16, ProductsAndServices24)}
        />
      </TreeItem>
      <TreeItem
        id="tree-item-18"
        key="tree-item-18"
        label="Tree Item 18"
        icon={getIcon(Report16, Report24)}
      >
        <TreeItem
          label="Tree Item 19"
          id="tree-item-19"
          key="tree-item-19"
          icon={getIcon(ProductsAndServices16, ProductsAndServices24)}
        />
      </TreeItem>
    </TreeView>
  );
}

export const Default = Template.bind({});
