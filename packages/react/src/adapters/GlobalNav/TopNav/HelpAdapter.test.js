import { mount } from "enzyme";
import React from "react";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import HelpAdapter from "./HelpAdapter";
import GroupAdapter from "./GroupAdapter";

describe("HelpAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <HelpAdapter
          higInstance={mockInstance}
          onClick={() => {}}
          onClickOutside={() => {}}
          title="Foo"
          open
        >
          <GroupAdapter />
        </HelpAdapter>
      );
      mockInstance.close();
    }).toImplementHIGInterfaceOf(
      VanillaGlobalNav._partials.TopNav._partials.Help
    );
  });
});
