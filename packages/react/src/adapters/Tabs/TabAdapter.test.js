import React from "react";
import { mount } from "enzyme";

import { Tabs } from "hig-vanilla";
import TabAdapter from "./TabAdapter";

describe("TabAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <TabAdapter
          higInstance={mockInstance}
          active
          label="Foo"
          onClick={() => {}}
        />
      );
      mount(<TabAdapter higInstance={mockInstance} active={false} />);
    }).toImplementHIGInterfaceOf(Tabs._partials.Tab);
  });
});
