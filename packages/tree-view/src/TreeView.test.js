/* eslint-disable */
import React from "react";
import renderer from "react-test-renderer";
import {
  AddFolder24,
  Folder24,
  Calendar24,
  ProductsAndServices24, 
  Report24,
  FileImage24,
  FileVideo24,
  Hierarchy24
} from "@hig/icons";

import TreeItem from "./TreeItem";

jest.mock("./TreeItem");

describe("tree-view/TreeView", () => {
  it("renders default TreeView", () => {
    const wrapper = ((
      <TreeItem
        id="tree-item-0"
        key="tree-item-0"
        label="Tree Item 0"
        icon={<Hierarchy24 />}
      >
        <TreeItem
          label="Tree Item 1"
          id="tree-item-1"
          key="tree-item-1"
          icon={<Calendar24 />}
          collapsed={false}
        >
          <TreeItem
            label="Tree Item 2"
            id="tree-item-2"
            key="tree-item-2"
            icon={<Folder24 />}
          >
            <TreeItem
              label="Tree Item 3"
              id="tree-item-3"
              key="tree-item-3"
              icon={<ProductsAndServices24 />}
            >
              <TreeItem
                label="Tree Item 4"
                id="tree-item-4"
                key="tree-item-4"
                icon={<AddFolder24 />}
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
                icon={<ProductsAndServices24 />}
              />
            </TreeItem>
            <TreeItem
              label="Tree Item 7"
              id="tree-item-7"
              key="tree-item-7"
              icon={<Calendar24 />}
            />
            <TreeItem
              label="Tree Item 8"
              id="tree-item-8"
              key="tree-item-8"
              icon={<Report24 />}
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
      </TreeItem>,
      <TreeItem
        id="tree-item-12"
        key="tree-item-2"
        label="Tree Item 12"
        icon={<FileImage24 />}
      />,
      <TreeItem
        id="tree-item-13"
        label="Tree Item 13"
        key="tree-item-13"
        icon={<FileVideo24 />}
      >
        <TreeItem
          label="Tree Item 14"
          id="tree-item-14"
          key="tree-item-14"
          icon={<FileImage24 />}
        />
        <TreeItem
          label="Tree Item 15"
          id="tree-item-15"
          key="tree-item-15"
          icon={<FileVideo24 />}
        />
      </TreeItem>,
      <TreeItem
        id="tree-item-16"
        key="tree-item-16"
        label="Tree Item 16"
        icon={<Hierarchy24 />}
      >
        <TreeItem
          label="Tree Item 17"
          id="tree-item-17"
          key="tree-item-17"
          icon={<ProductsAndServices24 />}
        />
      </TreeItem>,
      <TreeItem
        id="tree-item-18"
        key="tree-item-18"
        label="Tree Item 18"
        icon={<Report24 />}
      >
        <TreeItem
          label="Tree Item 19"
          id="tree-item-19"
          key="tree-item-19"
          icon={<ProductsAndServices24 />}
        />
      </TreeItem>
    ));

    const tree = renderer.create(wrapper).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
