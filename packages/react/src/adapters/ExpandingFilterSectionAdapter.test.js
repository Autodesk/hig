import React from "react";
import { mount } from "enzyme";

import { ExpandingFilterSection as VanillaExpandingFilterSection } from "hig-vanilla";
import ExpandingFilterSectionAdapter from "./ExpandingFilterSectionAdapter";

describe("ExpandingFilterSectionAdapter", () => {
  it("implements the hig interface", () => {
    expect(mockInstance => {
      mount(
        <ExpandingFilterSectionAdapter
          higInstance={mockInstance}
          label="Foo"
          size="s"
          onClick={() => {}}
          open
        />
      );
      mount(
        <ExpandingFilterSectionAdapter
          higInstance={mockInstance}
          open={false}
        />
      );
    }).toImplementHIGInterfaceOf(VanillaExpandingFilterSection);
  });
});
