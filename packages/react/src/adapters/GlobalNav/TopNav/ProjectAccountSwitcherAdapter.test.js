import { mount } from "enzyme";
import React from "react";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import ProjectAccountSwitcherAdapter from "./ProjectAccountSwitcherAdapter";
import ProjectAdapter from "./ProjectAdapter";
import AccountAdapter from "./AccountAdapter";

describe("ProjectAccountSwitcherAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      const wrapper = mount(
        <ProjectAccountSwitcherAdapter
          higInstance={mockInstance}
          open
          showCaret
          onClick={() => {}}
          onClickOutside={() => {}}
          projectTitle="Foo"
          accountTitle="Bar"
          activeImage="/my-image.png"
          activeLabel="Buzz"
          activeType="project"
        >
          <ProjectAdapter />
          <AccountAdapter />
        </ProjectAccountSwitcherAdapter>
      );
      wrapper.props().higInstance.close();
      wrapper.props().higInstance.hideCaret();
    }).toImplementHIGInterfaceOf(
      VanillaGlobalNav._partials.TopNav._partials.ProjectAccountSwitcher
    );
  });
});
