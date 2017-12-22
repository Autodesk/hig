import React from "react";
import { mount } from "enzyme";
import { Range as VanillaRange } from "hig-vanilla";
import RangeAdapter from "./RangeAdapter";

describe("RangeAdapter", () => {
  it("implements the hig interface", () => {
    expect(spiedInstance => {
      mount(
        <RangeAdapter
          higInstance={spiedInstance}
          min={0}
          max={100}
          step={2}
          label="Range"
          instructions="It's a range"
          disabled
          required="This is definitely required"
          onChange={jest.fn()}
          onFocus={jest.fn()}
          onBlur={jest.fn()}
          onInput={jest.fn()}
        />
      );

      mount(
        <RangeAdapter
          higInstance={spiedInstance}
          disabled={false}
          required=""
        />
      );
    }).toImplementHIGInterfaceOf(VanillaRange);
  });
});
