import { mount } from "enzyme";
import React from "react";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import GroupAdapter from "./GroupAdapter";
import OptionAdapter from "./OptionAdapter";

describe("Help GroupAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <GroupAdapter higInstance={mockInstance}>
          <OptionAdapter />
        </GroupAdapter>
      );
    }).toImplementHIGInterfaceOf(
      VanillaGlobalNav._partials.TopNav._partials.Help._partials.Group
    );
  });
});
