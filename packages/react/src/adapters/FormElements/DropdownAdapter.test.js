import { mount } from "enzyme";
import React from "react";
import { Dropdown as VanillaDropdown } from "hig-vanilla";
import DropdownAdapter from "./DropdownAdapter";
import OptionAdapter from "./OptionAdapter";

describe("DropdownAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <DropdownAdapter
          higInstance={mockInstance}
          label="Favorite word"
          instructions="Instructions"
          placeholder="Placeholder"
          open
          disabled={false}
          required="You have to pick something"
          selectedOptionLabel="Foo"
          onBlur={() => {}}
          onClickOutside={() => {}}
          onFocus={() => {}}
          onKeypress={() => {}}
          onTargetClick={() => {}}
        >
          <OptionAdapter value="123" />
        </DropdownAdapter>
      );
      mount(
        <DropdownAdapter
          higInstance={mockInstance}
          open={false}
          disabled
          required=""
        >
          <OptionAdapter value="123" />
        </DropdownAdapter>
      );
    }).toImplementHIGInterfaceOf(VanillaDropdown);
  });
});
