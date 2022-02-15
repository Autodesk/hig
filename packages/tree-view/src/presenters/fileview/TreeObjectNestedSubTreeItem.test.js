import React from "react";
import renderer from "react-test-renderer";
import { Report24 } from "@hig/icons";

import TreeObjectView from "./TreeObjectView";

describe("tree-view/TreeObjectNestedSubTreeItem", () => {
  it("renders tree with tree node", () => {
    const sampleTreeNodeObject = {
      id: 1,
      parentId: null,
      meta: {
        label: "Tree Item 1",
        collapsed: false,
        active: false,
        expandByDoubleClick: true,
        icon: <Report24 />
      },
      payload: {
        getActiveTreeItemId: () => {},
        getKeyboardOpenId: () => {},
        setKeyboardOpenId: () => {},
        getCurrentItemClicked: () => {}
      }
    };

    const wrapper = <TreeObjectView tree={sampleTreeNodeObject} />;
    const tree = renderer.create(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
