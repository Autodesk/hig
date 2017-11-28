import { mount } from "enzyme";
import React from "react";
import { GlobalNav as VanillaGlobalNav } from "hig-vanilla";
import OptionAdapter from "./OptionAdapter";

describe("Help OptionAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <OptionAdapter
          higInstance={mockInstance}
          onClick={() => {}}
          name="Autodesk"
          link="http://autodesk.com"
        />
      );
    }).toImplementHIGInterfaceOf(
      VanillaGlobalNav._partials.TopNav._partials.Help._partials.Option
    );
  });
});
