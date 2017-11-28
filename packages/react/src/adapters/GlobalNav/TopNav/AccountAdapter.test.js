import { mount } from "enzyme";
import React from "react";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import AccountAdapter from "./AccountAdapter";

describe("AccountAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      const wrapper = mount(
        <AccountAdapter
          higInstance={mockInstance}
          onClick={() => {}}
          image="/my-image.png"
          label="Buzz"
          active
        />
      );
      wrapper.props().higInstance.deactivate();
    }).toImplementHIGInterfaceOf(
      VanillaGlobalNav._partials.TopNav._partials.ProjectAccountSwitcher
        ._partials.Account
    );
  });
});
