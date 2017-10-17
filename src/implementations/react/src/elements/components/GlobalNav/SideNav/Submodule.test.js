import React from "react";
import { mount } from "enzyme";

import GlobalNavAdapter from "../../../../adapters/GlobalNav/GlobalNavAdapter";
import SideNavAdapter from "../../../../adapters/GlobalNav/SideNav/SideNavAdapter";
import GroupAdapter from "../../../../adapters/GlobalNav/SideNav/GroupAdapter";
import ModuleAdapter from "../../../../adapters/GlobalNav/SideNav/ModuleAdapter";
import Submodule from "./Submodule";

describe("Submodule", () => {
  function Context(props) {
    return (
      <GlobalNavAdapter>
        <SideNavAdapter>
          <GroupAdapter>
            <ModuleAdapter icon="assets">
              <Submodule {...props} />
            </ModuleAdapter>
          </GroupAdapter>
        </SideNavAdapter>
      </GlobalNavAdapter>
    );
  }

  it("calls back on click", () => {
    const errorSpy = jest.fn();
    console.error = errorSpy;

    mount(<Context onClick={() => {}} id="1" />);

    expect(errorSpy).not.toHaveBeenCalled();
  });
});
