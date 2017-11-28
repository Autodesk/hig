import React from "react";
import { mount } from "enzyme";

import { TextLink as VanillaTextLink } from "hig-vanilla";
import TextLinkAdapter from "./TextLinkAdapter";

describe("TextLinkAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <TextLinkAdapter
          higInstance={mockInstance}
          text="Foo"
          href="http://autodesk.com"
          type="primary"
          onClick={() => {}}
        />
      );
    }).toImplementHIGInterfaceOf(VanillaTextLink);
  });
});
