/* eslint-disable */
import React from "react";
import renderer from "react-test-renderer";

import TreeObjectView from "./TreeObjectView";

import {AddFolder24,
    Folder24,
    Calendar24,
    ProductsAndServices24,
    Report24,
    FileImage24} from "@hig/icons";
  
describe("tree-view/TreeObjectView", () => {
  it("takes a treeNodeObject", () => {
    const sampleTreeNodeObject = {
      id: 1,
      parentId: null,
      meta: {
        label: "Tree Item 1",
        collapsed: false,
        active: false,
        icon: <Report24 />
      },
      payload : {
        getActiveTreeItemId : () => {},
        getKeyboardOpenId: () => {},
        setKeyboardOpenId: () => {},
        getCurrentItemClicked: () => {},
        isControlled: () => {}
      },
      children: [
        {
          id: 2,
          parentId: 1,
          meta: {
            label: "Tree Item 2",
            collapsed: false,
            active: false,
            icon: <Folder24 />
          },
          children: [
            {
              id: 3,
              parentId: 2,
              meta: {
                label: "Tree Item 3",
                collapsed: false,
                active: false,
                icon: <Calendar24 />
              }
            },
            {
              id: 4,
              parentId: 2,
              meta: {
                label: "Tree Item 4",
                collapsed: false,
                active: false,
                icon: <FileImage24 />
              }
            },
            {
              id: 5,
              parentId: 2,
              meta: {
                label: "Tree Item 5",
                collapsed: false,
                active: false,
                icon: <ProductsAndServices24 />
              },
              children: [
                {
                  id: 6,
                  parentId: 5,
                  meta: {
                    label: "Tree Item 6",
                    collapsed: false,
                    active: false,
                    icon: <AddFolder24 />
                  }
                },
              ]
            }
          ]
        },
      ]
    };

    const wrapper = <TreeObjectView tree={sampleTreeNodeObject} />;
    const tree = renderer.create(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
