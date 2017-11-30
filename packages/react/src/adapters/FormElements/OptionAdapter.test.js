import { mount } from "enzyme";
import React from "react";
import { Option as VanillaOption } from "hig-vanilla";
import OptionAdapter from "./OptionAdapter";

describe("OptionAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <OptionAdapter
          higInstance={mockInstance}
          label="Option"
          selected
          checked
          onClick={() => {}}
          onHover={() => {}}
          value="123"
          focused
        />
      );
      mockInstance.deselect();
      mockInstance.uncheck();
      mockInstance.unfocus();
    }).toImplementHIGInterfaceOf(VanillaOption);
  });
});
