import { mount } from "enzyme";
import React from "react";
import * as HIG from "hig-vanilla";
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
      HIG.GlobalNav._partials.TopNav._partials.ProjectAccountSwitcher._partials
        .Account
    );
  });
});
