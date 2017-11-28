import React from "react";
import { mount } from "enzyme";

import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import TabsAdapter from "./TabsAdapter";
import TabAdapter from "./TabAdapter";

describe("TabsAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <TabsAdapter higInstance={mockInstance}>
          <TabAdapter />
        </TabsAdapter>
      );
    }).toImplementHIGInterfaceOf(
      VanillaGlobalNav._partials.SubNav._partials.Tabs
    );
  });
});
