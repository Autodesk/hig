/* eslint-disable */
import React from "react";
import { mount } from "enzyme";

import TreeItem from "./TreeItem";
import TreeView from "./TreeView";

class HocTreeItem extends React.Component {
  render() {
    return <TreeItem {...this.props}>{this.props.children}</TreeItem>;
  }
}

const FuncTreeItem = props => {
  return (
    <TreeItem {...props}>{props.children}</TreeItem>
  );
};

describe("tree-view/TreeItem", () => {
  it("support high order component", () => {
    const wrapper = mount(<TreeView>
        <HocTreeItem id="tree-item-1" key="tree-item-1" label="Hoc Tree Item" />
      </TreeView>);

    const item = wrapper.find("TreeItem");
    expect(item).toHaveLength(1);
    expect(item.at(0).props().id).toEqual("tree-item-1");
    expect(item.at(0).props().label).toEqual("Hoc Tree Item");
  });

  it("support function component", () => {
    const wrapper = mount(<TreeView>
        <FuncTreeItem id="tree-item-1" key="tree-item-1" label="Func Tree Item" />
      </TreeView>);

    const item = wrapper.find("TreeItem");
    expect(item).toHaveLength(1);
    expect(item.at(0).props().id).toEqual("tree-item-1");
    expect(item.at(0).props().label).toEqual("Func Tree Item");
  });

  it("multi and nested items", () => {
    const wrapper = mount(<TreeView>
        <FuncTreeItem id="tree-item-0" key="tree-item-0" label="Func Tree Item" defaultCollapsed={false}>
          <FuncTreeItem id="tree-item-1" key="tree-item-1" label="Func Tree Item" />
          <FuncTreeItem id="tree-item-2" key="tree-item-2" label="Func Tree Item" defaultCollapsed={false}>
            <FuncTreeItem id="tree-item-21" key="tree-item-21" label="Func Tree Item" />
          </FuncTreeItem>
          <FuncTreeItem id="tree-item-3" key="tree-item-3" label="Func Tree Item" />
        </FuncTreeItem>
        <FuncTreeItem id="tree-item-4" key="tree-item-4" label="Func Tree Item" />
      </TreeView>);

    const items = wrapper.find("TreeItem");
    expect(items.length).toEqual(6);
  });
});
