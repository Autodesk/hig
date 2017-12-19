import { mount } from "enzyme";
import React from "react";
import { PasswordField as VanillaPasswordField } from "hig-vanilla";
import PasswordFieldAdapter from "./PasswordFieldAdapter";

describe("PasswordFieldAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <PasswordFieldAdapter
          higInstance={mockInstance}
          onInput={() => {}}
          onBlur={() => {}}
          onChange={() => {}}
          onFocus={() => {}}
          onPasswordRevealButtonClick={() => {}}
          onPasswordHideButtonClick={() => {}}
          instructions={"test"}
          placeholder={"Placeholder"}
          label={"Password Field"}
          name={"Name"}
          disabled
          required={"true"}
          revealPassword
          showPasswordHideButton
          showPasswordRevealButton
        />
      );

      mockInstance.enable();
      mockInstance.noLongerRequired();
      mockInstance.hidePassword();
      mockInstance.hidePasswordHideButton();
      mockInstance.hidePasswordRevealButton();
    }).toImplementHIGInterfaceOf(VanillaPasswordField);
  });
});
