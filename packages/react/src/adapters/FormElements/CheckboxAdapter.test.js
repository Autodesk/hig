import React from "react";
import { mount } from "enzyme";
import { Checkbox as VanillaCheckbox } from "hig-vanilla";
import CheckboxAdapter from "./CheckboxAdapter";

describe("CheckboxAdapter", () => {
  it("implements the hig interface", () => {
    expect(spiedInstance => {
      mount(
        <CheckboxAdapter
          higInstance={spiedInstance}
          checked
          value="foo"
          label="Favorite word"
          name="favorite-word"
          disabled
          required="You really have to fill this out"
          onChange={() => {}}
          onClearButtonClick={() => {}}
          onFocus={() => {}}
          onHover={() => {}}
        />
      );

      mount(
        <CheckboxAdapter
          higInstance={spiedInstance}
          disabled={false}
          required=""
          checked={false}
        />
      );
    }).toImplementHIGInterfaceOf(VanillaCheckbox);
  });
});
