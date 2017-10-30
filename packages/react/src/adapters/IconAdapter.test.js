import React from "react";
import { mount } from "enzyme";
import * as HIG from "hig-vanilla";
import IconAdapter from "./IconAdapter";

describe("IconAdapter", () => {
  it("implements the hig interface", () => {
    expect(spiedInstance => {
      mount(<IconAdapter higInstance={spiedInstance} nameOrSVG="settings" />);
    }).toImplementHIGInterfaceOf(HIG.Icon);
  });
});
