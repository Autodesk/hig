import { mount } from "enzyme";
import React from "react";
import { Dropdown as VanillaDropdown } from "hig-vanilla";
import OptionAdapter from "./OptionAdapter";

describe("OptionAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <OptionAdapter
          higInstance={mockInstance}
          label="Option"
          selected
          onClick={() => {}}
          onHover={() => {}}
          value="123"
        />
      );
      mockInstance.deselect();
    }).toImplementHIGInterfaceOf(VanillaDropdown._partials.Option);
  });
});
