import React from "react";
import { mount } from "enzyme";
import { TextArea as VanillaTextArea } from "hig-vanilla";
import TextAreaAdapter from "./TextAreaAdapter";

describe("TextAreaAdapter", () => {
  it("implements the hig interface", () => {
    expect(spiedInstance => {
      mount(
        <TextAreaAdapter
          higInstance={spiedInstance}
          value="TextArea"
          instructions="Type in your favorite word"
          placeholder="Fizz"
          label="Favorite word"
          name="favorite-word"
          disabled
          required="You really have to fill this out"
          onBlur={() => {}}
          onChange={() => {}}
          onFocus={() => {}}
          onInput={() => {}}
        />
      );
      mount(
        <TextAreaAdapter
          higInstance={spiedInstance}
          disabled={false}
          required=""
        />
      );
    }).toImplementHIGInterfaceOf(VanillaTextArea);
  });
});
