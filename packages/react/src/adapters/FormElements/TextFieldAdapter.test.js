import React from "react";
import { mount } from "enzyme";
import { TextField as VanillaTextField } from "hig-vanilla";
import TextFieldAdapter from "./TextFieldAdapter";

describe("TextFieldAdapter", () => {
  it("implements the hig interface", () => {
    expect(spiedInstance => {
      mount(
        <TextFieldAdapter
          higInstance={spiedInstance}
          value="TextField"
          instructions="Type in your favorite word"
          placeholder="Fizz"
          label="Favorite word"
          name="favorite-word"
          icon="settings"
          disabled
          required="You really have to fill this out"
          showClearButton
          onBlur={() => {}}
          onChange={() => {}}
          onClearButtonClick={() => {}}
          onFocus={() => {}}
          onInput={() => {}}
        />
      );
      mount(
        <TextFieldAdapter
          higInstance={spiedInstance}
          disabled={false}
          showClearButton={false}
          required=""
        />
      );
    }).toImplementHIGInterfaceOf(VanillaTextField);
  });
});
