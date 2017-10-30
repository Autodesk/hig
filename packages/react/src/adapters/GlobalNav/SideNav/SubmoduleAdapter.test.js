import React from "react";
import { mount } from "enzyme";

import * as HIG from "hig-vanilla";
import SubmoduleAdapter from "./SubmoduleAdapter";

describe("SubmoduleAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <SubmoduleAdapter
          higInstance={mockInstance}
          title="Foo"
          link="http://autodesk.com"
          onClick={() => {}}
          onHover={() => {}}
          active
          show
        />
      );

      mockInstance.deactivate();
      mockInstance.hide();
    }).toImplementHIGInterfaceOf(
      HIG.GlobalNav._partials.SideNav._partials.Group._partials.Module._partials
        .Submodule
    );
  });
});
