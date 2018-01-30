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
          type="body"
          size="small"
          color="hig-blue-50"
          bold
          disabled
        />
      );

      mount(
        <TypographyAdapter
          higInstance={mockInstance}
          text="Foo"
          type="h1"
          bold={false}
          disabled={false}
        />
      );

      // Not implementing applyTypographyToElement
      mockInstance.applyTypographyToElement(document.createElement("div"));
    }).toImplementHIGInterfaceOf(VanillaTypography);
  });
});
