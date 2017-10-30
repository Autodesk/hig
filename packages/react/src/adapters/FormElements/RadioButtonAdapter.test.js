import React from "react";
import { mount } from "enzyme";
import * as HIG from "hig-vanilla";
import RadioButtonAdapter from "./RadioButtonAdapter";

describe("RadioButtonAdapter", () => {
  it("implements the hig interface", () => {
    expect(spiedInstance => {
      mount(
        <RadioButtonAdapter
          higInstance={spiedInstance}
          value="Foo"
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
    }).toImplementHIGInterfaceOf(HIG.RadioButton);
  });
});
