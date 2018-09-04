import React from "react";
import { shallow } from "enzyme";
import Tooltip from "./index";

describe("Tooltip", () => {
  // snapshot testing
  test("Snapshot tests tooltip with full content", () => {
    const wrapper = shallow(
      <Tooltip
        title="test"
        description="test"
        linkTitle="test"
        linkURL="www.test.com"
        content={<div>test</div>}
        anchorPoint="left"
        trigger="click"
      >
        <button>tooltip</button>
      </Tooltip>
    );
    wrapper.simulate("click");
    expect(wrapper).toMatchSnapshot();
  });

  test("Snapshot tests tooltip with click", () => {
    const wrapper = shallow(
      <Tooltip
        title="test"
        description="test"
        linkTitle="test"
        linkURL="www.autodesk.com"
        content={<div>test</div>}
        anchorPoint="left"
        trigger="click"
      >
        <button>tooltip</button>
      </Tooltip>
    );
    wrapper.simulate("click");
    expect(wrapper).toMatchSnapshot();
  });

  test("Snapshot tests tooltip with hover", () => {
    const wrapper = shallow(
      <Tooltip
        title="test"
        description="test"
        linkTitle="test"
        linkURL="www.autodesk.com"
        content={<div>test</div>}
        anchorPoint="left"
        trigger="click"
      >
        <button>tooltip</button>
      </Tooltip>
    );
    wrapper.simulate("hover");
    expect(wrapper).toMatchSnapshot();
  });

  test("Snapshot tests tooltip with focus", () => {
    const wrapper = shallow(
      <Tooltip title="test" anchorPoint="left" trigger="focus">
        <button>tooltip</button>
      </Tooltip>
    );
    wrapper.simulate("focus");
    expect(wrapper).toMatchSnapshot();
  });
});
