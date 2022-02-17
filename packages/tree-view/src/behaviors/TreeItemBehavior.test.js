/* eslint-disable */
import React from "react";
import { mount } from "enzyme";

import TreeItemBehavior from "./TreeItemBehavior";

describe("tree-view/TreeItemBehavior", () => {
  const setState = jest.fn();
  const useStateMock = initState => [initState, setState];

  jest.spyOn(React, "useState").mockImplementation(useStateMock);

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("double click to unwrap tree item", () => {
    const props = {
      defaultCollapsed: true,
      expandByDoubleClick: true,
      getTreeItemArray: jest.fn(),
      setActiveTreeItemId: jest.fn(),
      setActiveTreeItemIndex: jest.fn()
    };
    const wrapper = mount(
      <TreeItemBehavior {...props}>
        {({ handleClick, handleDoubleClick }) => (
          <div onClick={handleClick} onDoubleClick={handleDoubleClick}>
            {"test"}
          </div>
        )}
      </TreeItemBehavior>
    );
    const child = wrapper.find("div");
    expect(child).toHaveLength(1);

    child.simulate("doubleClick");

  });

  it("double click to wrap tree item", () => {
    const props = {
      defaultCollapsed: false,
      expandByDoubleClick: true,
      getTreeItemArray: jest.fn(),
      setActiveTreeItemId: jest.fn(),
      setActiveTreeItemIndex: jest.fn()
    };
    const wrapper = mount(
      <TreeItemBehavior {...props}>
        {({ handleClick, handleDoubleClick }) => (
          <div onClick={handleClick} onDoubleClick={handleDoubleClick}>
            {"test"}
          </div>
        )}
      </TreeItemBehavior>
    );
    const child = wrapper.find("div");
    expect(child).toHaveLength(1);
  
    child.simulate("doubleClick");

  });
});
