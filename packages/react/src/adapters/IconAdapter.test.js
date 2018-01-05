import React from "react";
import { mount } from "enzyme";
import { Icon as VanillaIcon } from "hig-vanilla";
import IconAdapter from "./IconAdapter";

describe("IconAdapter", () => {
  it("implements the hig interface", () => {
    expect(spiedInstance => {
      mount(
        <IconAdapter
          higInstance={spiedInstance}
          nameOrSVG="settings"
          size="16"
        />
      );
    }).toImplementHIGInterfaceOf(VanillaIcon);
  });
});
