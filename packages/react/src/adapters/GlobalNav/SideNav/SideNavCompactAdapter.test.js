import React from "react";
import { mount } from "enzyme";

import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import SideNavCompactAdapter from "./SideNavCompactAdapter";
import GroupAdapter from "./GroupAdapter";

describe("SideNavCompactAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <SideNavCompactAdapter
          higInstance={mockInstance}
          showVariantToggleButton={false}
          onVariantToggleClick={() => {}}
        >
          <GroupAdapter />
        </SideNavCompactAdapter>
      );
      mount(<SideNavCompactAdapter higInstance={mockInstance} />);
    }).toImplementHIGInterfaceOf(
      VanillaGlobalNav._partials.SideNav._partials.SideNavCompact
    );
  });
});
