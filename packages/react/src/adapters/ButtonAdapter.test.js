import React from "react";
import { mount } from "enzyme";

import * as HIG from "hig-vanilla";
import ButtonAdapter from "./ButtonAdapter";

describe("ButtonAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <ButtonAdapter
          higInstance={mockInstance}
          disabled
          title="Foo"
          style="secondary"
          size="large"
          icon="settings"
          link="http://autodesk.com"
          target="_blank"
          type="secondary"
          width="shrink"
          onBlur={() => {}}
          onClick={() => {}}
          onFocus={() => {}}
          onHover={() => {}}
        />
      );
      mount(
        <ButtonAdapter
          title="Foo"
          higInstance={mockInstance}
          disabled={false}
        />
      );
    }).toImplementHIGInterfaceOf(HIG.Button);
  });
});
