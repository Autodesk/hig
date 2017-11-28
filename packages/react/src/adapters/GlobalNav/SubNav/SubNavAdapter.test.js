import React from "react";
import { mount } from "enzyme";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import SubNavAdapter from "./SubNavAdapter";
import TabsAdapter from "./TabsAdapter";

describe("SubNavAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <SubNavAdapter
          higInstance={mockInstance}
          onModuleIndicatorClick={() => {}}
          moduleIndicatorName="Settings"
          moduleIndicatorIcon="settings"
        >
          <TabsAdapter />
        </SubNavAdapter>
      );
    }).toImplementHIGInterfaceOf(VanillaGlobalNav._partials.SubNav);
  });
});
