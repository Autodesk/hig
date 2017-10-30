import React from "react";
import { mount } from "enzyme";

import * as HIG from "hig-vanilla";
import TabAdapter from "./TabAdapter";

describe("TabAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      const wrapper = mount(
        <TabAdapter
          higInstance={mockInstance}
          active
          label="Foo"
          onClick={() => {}}
        />
      );
      wrapper.props().higInstance.deactivate();
    }).toImplementHIGInterfaceOf(
      HIG.GlobalNav._partials.SubNav._partials.Tabs._partials.Tab
    );
  });
});
