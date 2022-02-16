/* eslint-disable */
import React, { forwardRef, createRef } from "react";
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

const RefTreeItem = forwardRef((props, ref) => {
  return (
    <TreeView>
      <TreeItem itemRef={ref} id="tree-item-1" key="tree-item-1" label="Func Tree Item" />
    </TreeView>
  );
});

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

  it("Ref TreeItem component", () => {
    const itemRef = createRef();
    const wrapper = mount(<RefTreeItem ref={itemRef}>
      </RefTreeItem>);

    const item = wrapper.find("TreeItem");
    expect(item).toHaveLength(1);
    expect(item.at(0).props().id).toEqual("tree-item-1");
    expect(item.at(0).props().label).toEqual("Func Tree Item");
    expect(itemRef).not.toBeNull();
    expect(itemRef.current).not.toBeNull();
    expect(itemRef.current.id).toEqual("tree-item-1");
  });
});
