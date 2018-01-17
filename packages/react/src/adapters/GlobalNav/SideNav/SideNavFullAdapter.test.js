import React from "react";
import { mount } from "enzyme";

import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import SideNavFullAdapter from "./SideNavFullAdapter";
import LinkAdapter from "./LinkAdapter";
import SearchAdapter from "./SearchAdapter";
import GroupAdapter from "./GroupAdapter";

describe("SideNavFullAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <SideNavFullAdapter
          higInstance={mockInstance}
          headerLabel="Foo"
          superHeaderLabel="Foo"
          headerLink="http://autodesk.com"
          superHeaderLink="http://autodesk.com"
          copyright="Forever"
          showVariantToggleButton={false}
          onHeaderClick={() => {}}
          onSuperHeaderClick={() => {}}
          onVariantToggleClick={() => {}}
        >
          <LinkAdapter />
          <GroupAdapter />
          <SearchAdapter />
          <h1>Slot content</h1>
        </SideNavFullAdapter>
      );

      mount(
        <SideNavFullAdapter
          higInstance={mockInstance}
          showVariantToggleButton
        />
      );
    }).toImplementHIGInterfaceOf(
      VanillaGlobalNav._partials.SideNav._partials.SideNavFull
    );
  });
});
