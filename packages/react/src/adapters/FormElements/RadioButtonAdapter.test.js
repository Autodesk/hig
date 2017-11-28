import React from "react";
import { mount } from "enzyme";
import { RadioButton as VanillaRadioButton } from "hig-vanilla";
import RadioButtonAdapter from "./RadioButtonAdapter";

describe("RadioButtonAdapter", () => {
  it("implements the hig interface", () => {
    expect(spiedInstance => {
      mount(
        <RadioButtonAdapter
          higInstance={spiedInstance}
          value="RadioButton"
          label="Favorite word"
          name="favorite-word"
          checked
          disabled
          required="You really have to fill this out"
          onChange={() => {}}
          onClearButtonClick={() => {}}
          onFocus={() => {}}
          onHover={() => {}}
        />
      );
      mount(
        <RadioButtonAdapter
          higInstance={spiedInstance}
          disabled={false}
          required=""
          checked={false}
        />
      );
    }).toImplementHIGInterfaceOf(VanillaRadioButton);
  });
});
