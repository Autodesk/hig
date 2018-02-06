import { mount } from "enzyme";
import React from "react";
import { SectionLabel as VanillaSectionLabel } from "hig-vanilla";
import SectionLabelAdapter from "./SectionLabelAdapter";

describe("SectionLabelAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <SectionLabelAdapter higInstance={mockInstance} label="First">
          <h1>Slot content</h1>
        </SectionLabelAdapter>
      );
    }).toImplementHIGInterfaceOf(VanillaSectionLabel);
  });
});
