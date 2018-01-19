import { mount } from "enzyme";
import React from "react";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import TopNavAdapter from "./TopNavAdapter";
import ShortcutAdapter from "./ShortcutAdapter";
import Search from "../../../elements/components/GlobalNav/TopNav/Search";
import Profile from "../../../elements/components/GlobalNav/TopNav/Profile";
import HelpAdapter from "./HelpAdapter";
import ProjectAccountSwitcherAdapter from "./ProjectAccountSwitcherAdapter";
import Notifications from "../../../elements/components/GlobalNav/TopNav/Notifications";

describe("TopNavAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <TopNavAdapter
          higInstance={mockInstance}
          logo="settings"
          logoLink="http://autodesk.com"
          onLogoClick={() => {}}
          onHamburgerClick={() => {}}
        >
          <ShortcutAdapter />
          <Search />
          <Profile />
          <HelpAdapter />
          <ProjectAccountSwitcherAdapter />
          <Notifications />
        </TopNavAdapter>
      );
    }).toImplementHIGInterfaceOf(VanillaGlobalNav._partials.TopNav);
  });
});
