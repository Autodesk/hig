import React from "react";
import { mount } from "enzyme";

import { Typography as VanillaTypography } from "hig-vanilla";
import TypographyAdapter from "./TypographyAdapter";

describe("TypographyAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <TypographyAdapter
          higInstance={mockInstance}
          text="Foo"
          type="primary"
        />
      );

      // Not implementing applyTypographyToElement
      mockInstance.applyTypographyToElement(document.createElement("div"));
    }).toImplementHIGInterfaceOf(VanillaTypography);
  });
});
