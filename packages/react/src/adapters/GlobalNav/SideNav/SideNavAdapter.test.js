import React from "react";
import { mount } from "enzyme";

import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import SideNavAdapter from "./SideNavAdapter";
import LinkAdapter from "./LinkAdapter";
import SearchAdapter from "./SearchAdapter";
import GroupAdapter from "./GroupAdapter";

describe("SideNavAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <SideNavAdapter
          higInstance={mockInstance}
          headerLabel="Foo"
          superHeaderLabel="Foo"
          headerLink="http://autodesk.com"
          superHeaderLink="http://autodesk.com"
          copyright="Forever"
          onHeaderClick={() => {}}
          onSuperHeaderClick={() => {}}
        >
          <LinkAdapter />
          <GroupAdapter />
          <SearchAdapter />
          <h1>Slot content</h1>
        </SideNavAdapter>
      );
    }).toImplementHIGInterfaceOf(VanillaGlobalNav._partials.SideNav);
  });
});
