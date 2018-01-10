import React from "react";
import { mount } from "enzyme";

import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import SideNavAdapter from "./SideNavAdapter";
import SideNavFullAdapter from "./SideNavFullAdapter";

describe("SideNavAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <SideNavAdapter higInstance={mockInstance}>
          <SideNavFullAdapter />
        </SideNavAdapter>
      );
    }).toImplementHIGInterfaceOf(VanillaGlobalNav._partials.SideNav);
  });
});
