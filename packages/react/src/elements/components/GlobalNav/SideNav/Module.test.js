/* eslint-disable no-console */
import React from "react";
import { mount } from "enzyme";

import GlobalNavAdapter from "../../../../adapters/GlobalNav/GlobalNavAdapter";
import SideNavAdapter from "../../../../adapters/GlobalNav/SideNav/SideNavAdapter";
import GroupAdapter from "../../../../adapters/GlobalNav/SideNav/GroupAdapter";
import Module from "./Module";

describe("Module", () => {
  function Context(props) {
    return (
      <GlobalNavAdapter>
        <SideNavAdapter>
          <GroupAdapter>
            <Module icon="assets" {...props} />
          </GroupAdapter>
        </SideNavAdapter>
      </GlobalNavAdapter>
    );
  }

  it("does not raise an error", () => {
    const errorSpy = jest.fn();
    console.error = errorSpy;

    mount(<Context id="1" onClick={() => {}} />);

    expect(errorSpy).not.toHaveBeenCalled();
  });
});
