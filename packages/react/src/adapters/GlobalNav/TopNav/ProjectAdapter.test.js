import { mount } from "enzyme";
import React from "react";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import ProjectAdapter from "./ProjectAdapter";

describe("ProjectAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      const wrapper = mount(
        <ProjectAdapter
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
        ._partials.Project
    );
  });
});
