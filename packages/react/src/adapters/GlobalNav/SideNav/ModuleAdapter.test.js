import React from "react";
import { mount } from "enzyme";

import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import GlobalNavAdapter from "../GlobalNavAdapter";
import SideNavAdapter from "./SideNavAdapter";
import GroupAdapter from "./GroupAdapter";
import ModuleAdapter from "./ModuleAdapter";
import SubmoduleAdapter from "./SubmoduleAdapter";
import CollapseAdapter from "./CollapseAdapter";

describe("ModuleAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <GlobalNavAdapter>
          <SideNavAdapter>
            <GroupAdapter>
              <ModuleAdapter
                higInstance={mockInstance}
                title="GlobalNav"
                icon="settings"
                link="http://autodesk.com"
                target="_blank"
                onClick={() => {}}
                onHover={() => {}}
                active
              >
                <CollapseAdapter />
                <SubmoduleAdapter />
              </ModuleAdapter>
            </GroupAdapter>
          </SideNavAdapter>
        </GlobalNavAdapter>
      );

      mockInstance.deactivate();

      // Doesn't implement show and hide.
      mockInstance.show();
      mockInstance.hide();
    }).toImplementHIGInterfaceOf(
      VanillaGlobalNav._partials.SideNav._partials.Group._partials.Module
    );
  });
});
