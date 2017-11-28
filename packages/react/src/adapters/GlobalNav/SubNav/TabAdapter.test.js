import React from "react";
import { mount } from "enzyme";

import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
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
      VanillaGlobalNav._partials.SubNav._partials.Tabs._partials.Tab
    );
  });
});
