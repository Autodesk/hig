import React from "react";
import { mount } from "enzyme";

import * as HIG from "hig-vanilla";
import IconButtonAdapter from "./IconButtonAdapter";

describe("IconButtonAdapter", () => {
  it("implementes hig interface", () => {
    expect(mockInstance => {
      mount(
        <IconButtonAdapter
          higInstance={mockInstance}
          disabled
          title="Test"
          link="#"
          icon="settings"
          onClick={() => {}}
          onHover={() => {}}
          onFocus={() => {}}
          onBlur={() => {}}
        />
      );

      mount(
        <IconButtonAdapter
          higInstance={mockInstance}
          disabled={false}
          title="Test"
          link="#"
          icon="settings"
          onClick={() => {}}
          onHover={() => {}}
          onFocus={() => {}}
          onBlur={() => {}}
        />
      );
    }).toImplementHIGInterfaceOf(HIG.IconButton);
  });
});
